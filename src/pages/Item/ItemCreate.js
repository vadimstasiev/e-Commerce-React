import React, {useState, useEffect} from 'react'
import Background from '../../Components/Background';
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SvgBackground from "../../Components/SvgBackground";
import {FixedToggle} from "../../Components/ThemeToggle";
import { useNavigate, useLocation } from "react-router-dom";
import { Modal, Button } from 'antd';
import { SyncOutlined, CloseOutlined, CheckOutlined, ExclamationCircleOutlined  } from '@ant-design/icons';
import PriceInput from '../../Components/Input/PriceInput';
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
import withRouter from '../../Components/hooks/withRouter';
import Loading from '../Auth/Loading';
import DangerConfirm from '../../Components/DangerConfirm';

const storage = getStorage();

const ItemCreate = (props) => {
    const requestedItemId = props.router.params.id
    const navigate = useNavigate()
    const [user, loadingUser, error] = useAuthState(auth);
    const [isEditingItem, setEditingItem] = useState(false);
    const [currentEditDocId, setCurrentEditDocId] = useState("");
    const [itemName, setItemName] = useState("");
    const [postcode, setPostcode] = useState("");
    const [formattedAddress, setFormattedAddress] = useState("");
    const [coordinates, setCoordinates] = useState({});
    const [geoHash, setGeoHash] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [price, setPrice] = useState("");
    const [images, setImages] = useState([]);
    const [imagesLocalUrl, setImagesLocalUrl] = useState([]);
    const [imagesUploadedUrl, setImagesUploadedUrl] = useState([]);
    // none, loading, error, success
    const [postcodeInputStatus, setPostcodeInputStatus] = useState("none");
    // none, uploading, uploaded
    const [uploadingImagesStatus, setUploadingImagesStatus] = useState("none");

    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);


    const validatePostCode = postcode => {
        setPostcodeInputStatus("loading")
        const isValid = false
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

    const getImageUrl = (file) => {
        return URL.createObjectURL(file)
    };

    const handleFilesPicked = async e => {
        const fileList = e.target.files
        if (fileList) {
            if (fileList.length>0) {
                const URLs = [];
                for (let i = 0; i < fileList.length; i++) {
                    URLs.push(getImageUrl(fileList[i]));
                }
                setImagesLocalUrl(URLs)
                setImages(fileList)

                // upload starts here
                const promises = []
                setUploadingImagesStatus("uploading")
                for (const image of fileList) {
                    const storageRef = ref(storage, `${uuidv4()}-${image.name}`);
                    promises.push(uploadBytes(storageRef, image).then(async ()=> await getDownloadURL(storageRef)));
                    
                }
        
                setImagesUploadedUrl(await Promise.all(promises))
                setUploadingImagesStatus("uploaded")
            }
        }
    };

    const submit = async () => {
        if (
            itemName.length>0 &&
            postcodeInputStatus==="success" &&
            itemDescription.length>0 &&
            (images.length>0 || isEditingItem) &&
            (uploadingImagesStatus==="uploaded" || uploadingImagesStatus==="alreadyUploaded")
        ) {
            if(isEditingItem){
                await setDoc(doc(collection(db, "items"), currentEditDocId), {
                    userUid: user.uid,
                    name: itemName,
                    postcode,
                    coordinates,
                    geoHash,
                    itemDescription,
                    price,
                    imagesUploadedUrl
                })
                .then(navigate("/"))
                .catch(error => {
                    alert(error)
                })
            } else {
                await addDoc(collection(db, "items"), {
                    userUid: user.uid,
                    name: itemName,
                    postcode,
                    coordinates,
                    geoHash,
                    itemDescription,
                    price,
                    imagesUploadedUrl
                })
                .then(navigate("/"))
                .catch(error => {
                    alert(error)
                })
            }
        } else {
            alert("fill all the boxes and wait for upload")
        }
    }

    const submitDelete = async () => {
        await deleteDoc(doc(collection(db, "items"), currentEditDocId))
        navigate("/")
    }

    // Edit existing item 

    const fetchItem = async () => {
        // console.log(requestedItemId)
        await getDoc(doc(db, "items", requestedItemId))
        .then(data => {
            const actualData = data.data()
            if(actualData){
                setEditingItem(true)
                setItemName(actualData.name)
                validatePostCode(actualData.postcode)
                // setCoordinates
                // setGeoHash
                setItemDescription(actualData.itemDescription)
                setPrice(actualData.price)
                // setImages()
                setImagesLocalUrl(actualData.imagesUploadedUrl)
                setImagesUploadedUrl(actualData.imagesUploadedUrl)
                setUploadingImagesStatus("alreadyUploaded")
                setCurrentEditDocId(data.id)
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
        fetchItem()
    }, [props.router.params]);

    // useEffect(() => {
    //   console.log(itemsSameSeller)    
    //   console.log(item)    
    // }, [itemsSameSeller, item]);

    
    if(!isEditingItem && props.router.params.id) {
        return <Loading/>
    }

    return (
        <Background>
        <SvgBackground>
            <FixedToggle/>
            
            <div className="flex my-4 items-center justify-center">
                <div className="grid bg-white dark:bg-zinc-900 rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Item Title</label>
                        <input value={itemName} onChange={e => setItemName(e.target.value)} className="py-2 px-3 rounded-lg border-2 border-gray-300 dark:bg-zinc-900 dark:border-zinc-500 text-zinc-700 dark:text-white mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" type="text" placeholder="Please enter a descriptive title" />
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:gap-8 mt-5 mx-7">
                        <div className="grid grid-cols-1">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Postcode Location (UK Only)</label>
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
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Description</label>
                        <textarea
                        className="
                        py-2 px-3 rounded-lg border-2 border-gray-300 dark:bg-zinc-900 dark:border-zinc-500 text-zinc-700 dark:text-white mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent
                        "
                        id="exampleFormControlTextarea1"
                        rows="10"
                        placeholder="Please write an elaborate description."
                        value={itemDescription}
                        onChange={e => setItemDescription(e.target.value)}
                        ></textarea>
                    </div>
                    {/* <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Offer:</label>
                        <select className="py-2 px-3 rounded-lg border-2 border-gray-300 dark:bg-zinc-900 dark:border-zinc-500 text-zinc-700 dark:text-white mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent">
                            <option>Arranged Delivery</option>
                            <option>Pick Up</option>
                            <option>Meet Up</option>
                        </select>
                    </div> */}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                        <div className="grid grid-cols-1">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Price</label>
                            <PriceInput
                                value={price}
                                className="py-2 px-3 rounded-lg border-2 border-gray-300 dark:bg-zinc-900 dark:border-zinc-500 text-zinc-700 dark:text-white mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                                prefix={"£ "}
                                onChange={value => setPrice(value)}    
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">
                            Upload Photo
                        </label>
                        <label className="md:text-sm text-xs text-light font-semibold mb-1 py-2">
                            <div className="text-yellow-500">
                                {uploadingImagesStatus==="uploading"&&" ( Uploading ... )"}
                            </div>
                            <div className="text-green-500">
                                {uploadingImagesStatus==="uploaded"&&" ( Uploaded Successfully! )"}
                            </div>
                            <div className="text-green-500">
                                {uploadingImagesStatus==="alreadyUploaded"&&""}
                            </div>
                        </label>
                        <div className='flex items-center justify-center w-full'>
                            <label className='cursor-pointer flex flex-col border-4 border-dashed w-full h-auto hover:bg-gray-100 hover:border-gray-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 group'>
                                <div className='flex flex-col items-center justify-center py-2 px-2'>
                                    {
                                        imagesLocalUrl.length>0?
                                        <>  
                                                <div className="grid grid-cols-3 gap-4 flex items-center">
                                                {   
                                                    imagesLocalUrl.map((url, i) => <img
                                                        key={i} 
                                                        src={url}
                                                        className="mb-4"/>
                                                    )
                                                }
                                                </div>
                                        </>
                                        :
                                        <div className='flex flex-col items-center justify-center py-4'>
                                            <svg className="w-10 h-10 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                            <p className='lowercase text-sm text-gray-400 group-hover:text-white pt-1 tracking-wider'>Select a photo</p>
                                        </div>
                                    }
                                    </div>
                            <input type='file' multiple accept="image/*" className="hidden" onChange={handleFilesPicked}/>
                            </label>
                        </div>
                    </div>

                    <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                    {/* h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800 */}
                        {
                            isEditingItem&& 
                            <>
                                <button className='w-auto bg-red-700 hover:bg-red-800 rounded-lg shadow-xl font-medium text-white px-4 py-2' onClick={() => {
                                    setDeleteModalVisible(true)
                                }} >Delete</button>
                                <DangerConfirm isVisible={isDeleteModalVisible}
                                    setVisible={setDeleteModalVisible}
                                    title={"Delete Product"}
                                    content={"Are you sure you want to remove this item?"}
                                    ok={"Remove"}
                                    cancel={"Cancel"}
                                    onOk={submitDelete}
                                />
                            </>
                        }
                        
                        <button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' onClick={() => navigate('/')} >Cancel</button>
                        <button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' onClick={() => submit()}>{isEditingItem?"Update":"Create"}</button>
                    </div>
                </div>
            </div>
        </SvgBackground>
        </Background>
    )
}

export default withRouter(ItemCreate);