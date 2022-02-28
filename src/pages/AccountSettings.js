import React, {useState, useEffect} from 'react'
import Background from '../Components/Background';
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SvgBackground from "../Components/SvgBackground";
import {FixedToggle} from "../Components/ThemeToggle";
import { useNavigate, useLocation } from "react-router-dom";
import { Modal, Button } from 'antd';
import { SyncOutlined, CloseOutlined, CheckOutlined, ExclamationCircleOutlined  } from '@ant-design/icons';
import PriceInput from '../Components/Input/PriceInput';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
    doc, 
    getDoc, 
    setDoc, 
    deleteDoc 
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

import * as geofire from 'geofire-common';
import withRouter from '../Components/hooks/withRouter';
import Loading from './Auth/Loading';
import DangerConfirm from '../Components/DangerConfirm';

const storage = getStorage();

const AccountSettings = (props) => {
    const navigate = useNavigate()
    const [user, loadingUser, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const [postcode, setPostcode] = useState("");
    const [formattedAddress, setFormattedAddress] = useState("");
    const [coordinates, setCoordinates] = useState({});
    const [geoHash, setGeoHash] = useState("");
    // none, loading, error, success
    const [postcodeInputStatus, setPostcodeInputStatus] = useState("none");
    // none, uploading, uploaded
    const [uploadingImagesStatus, setUploadingImagesStatus] = useState("none");



    const validatePostCode = postcode => {
        setPostcodeInputStatus("loading")
        getGeocode({ address:postcode })
        .then((result)=>{
            if(result){
                setPostcode(postcode)
                
                const lat = result[0].geometry.location.lat()
                const lng = result[0].geometry.location.lng()
                setFormattedAddress(result[0].formatted_address)

                setCoordinates({lat: result[0].geometry.location.lat(), lng: result[0].geometry.location.lng()})

                // Compute the GeoHash for a lat/lng point
                const hash = geofire.geohashForLocation([lat, lng]);

                setGeoHash(hash)

                setPostcodeInputStatus("success")
            } else {
                setPostcodeInputStatus("error")
            }
        })
        .catch(e => {
            setPostcodeInputStatus("error")
        })
    }

    const submit = async () => {
        if (
            name.length>0 &&
            postcodeInputStatus==="success"
        ) {
            
            await setDoc(doc(db, "users", user.uid), {
                userUid: user.uid,
                name: name,
                postcode,
                coordinates,
                geoHash,
            })
            .then(navigate("/"))
            .catch(error => {
                alert(error)
            })
        } 
    }

    // Edit existing item 

    const fetchUser = async () => {
        await getDoc(doc(db, "users", user.uid))
        .then(data => {
            const actualData = data.data()
            if(actualData){
                setName(actualData.name)
                validatePostCode(actualData.postcode)
            } else {
                navigate("/Not-Found")
            }
        })
        .catch(err=>{
            console.log(err)
            navigate("/Not-Found")
        })
    }

    useEffect(() => {
        fetchUser()
    }, []);

    // useEffect(() => {
    //   console.log(itemsSameSeller)    
    //   console.log(item)    
    // }, [itemsSameSeller, item]);

    
    return (
        <Background>
        <SvgBackground>
            <FixedToggle/>
            
            <div className="flex my-auto items-center justify-center">
                <div className="grid bg-white dark:bg-zinc-900 rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-2/5">
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Full Name</label>
                        <input value={name} onChange={e => setName(e.target.value)} className="py-2 px-3 rounded-lg border-2 border-gray-300 dark:bg-zinc-900 dark:border-zinc-500 text-zinc-700 dark:text-white mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" type="text" placeholder="Please enter a descriptive title" />
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:gap-8 mt-5 mx-7">
                        <div className="grid grid-cols-1">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Postcode (UK Only)</label>
                            <input 
                            defaultValue={postcode}
                            onChange={e=>{
                                const value = e.target.value
                                let re_no_space = new RegExp(`^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})$`)
                                let re_with_space = new RegExp(`^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) [0-9][A-Za-z]{2})$`)
                                if (re_no_space.test(value) || re_with_space.test(value)) {
                                    validatePostCode(value)
                                } else {
                                    setPostcodeInputStatus("none")
                                }
                            }} className="py-2 px-3 rounded-lg border-2 border-gray-300 dark:bg-zinc-900 dark:border-zinc-500 text-zinc-700 dark:text-white mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" type="text" placeholder="Postcode" />
                            
                            <div>
                                {
                                    postcodeInputStatus==="none" && <div className='py-6'></div>
                                }
                                {
                                    postcodeInputStatus==="loading" &&
                                        <>
                                            <SyncOutlined spin  className="inline-block dark:text-zinc-200 pb-[6px] text-xs text-light font-semibold mb-1 py-2 pl-2"/>
                                            <div className='inline-block dark:text-zinc-200 hover:text-black dark:hover:text-white px-1 pt-2'>Validating Postcode...</div>
                                        </>
                                }
                                {
                                    postcodeInputStatus==="error" &&
                                        <>
                                            <CloseOutlined className="inline-block text-red-400 dark:text-red-600 pb-[6px] text-xs text-light font-semibold mb-1 py-2 pl-2"/>
                                            <div className='inline-block dark:text-zinc-200 hover:text-black dark:hover:text-white px-1 pt-2'>Error, not a valid address.</div>
                                        </>
                                }
                                {
                                    postcodeInputStatus==="success" &&
                                        <>
                                            <CheckOutlined className="inline-block text-green-400 dark:text-green-600 pb-[6px] text-xs text-light font-semibold mb-1 py-2 pl-2"/>
                                            <div className='inline-block dark:text-zinc-200 hover:text-black dark:hover:text-white px-1 pt-2'>{formattedAddress||"Valid"}</div>
                                        </>
                                }
                                
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                        <button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' onClick={() => navigate('/')} >Cancel</button>
                        <button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' onClick={() => submit()}>Update Information</button>
                    </div>
                </div>
            </div>
        </SvgBackground>
        </Background>
    )
}

export default AccountSettings