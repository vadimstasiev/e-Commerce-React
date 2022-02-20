import React, {useState} from 'react'
import Background from '../Components/Background';
import SvgBackground from "../Components/SvgBackground";
import {FixedToggle} from "../Components/ThemeToggle";
import { useNavigate, useLocation } from "react-router-dom";
import { SyncOutlined } from '@ant-design/icons';
import PriceInput from '../Components/Input/PriceInput';



const NewItemPost = () => {
    const navigate = useNavigate()
    const [itemName, setItemName] = useState("");
    const [postcode, setPostcode] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [price, setPrice] = useState("");
    const [images, setImages] = useState([]);
    const [imagesLocalUrl, setImagesLocalUrl] = useState([]);
    const [isValidatingPostcode, setIsValidatingPostcode] = useState(false);

    const validatePostCode = async postcode => {
        setIsValidatingPostcode(true)
        const isValid = false
        // await async api call
        if(isValid) {
            setPostcode(postcode)
        }
        setIsValidatingPostcode(false)
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
                console.log(URLs)
            }
        }
    };

    return (
        <Background>
        <SvgBackground>
            <FixedToggle/>
            <div className="flex my-4 items-center justify-center  ">
                <div className="grid bg-white dark:bg-zinc-900 rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Item Name</label>
                        <input onChange={e => setItemName(e.target.value)} className="py-2 px-3 rounded-lg border-2 border-gray-300 dark:bg-zinc-900 dark:border-zinc-500 text-zinc-700 dark:text-white mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" type="text" placeholder="Name" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                        <div className="grid grid-cols-1">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Postcode Location (UK Only)</label>
                            <input  onChange={e=>{
                                const value = e.target.value
                                let re_no_space = new RegExp(`^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})$`)
                                let re_with_space = new RegExp(`^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) [0-9][A-Za-z]{2})$`)
                                if (re_no_space.test(value) || re_with_space.test(value)) {
                                    validatePostCode(value)
                                    console.log(value)

                                } 
                            }} className="py-2 px-3 rounded-lg border-2 border-gray-300 dark:bg-zinc-900 dark:border-zinc-500 text-zinc-700 dark:text-white mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" type="text" placeholder="Postcode" />
                            
                            <div>
                                {
                                    isValidatingPostcode?
                                        <>
                                            <SyncOutlined spin  className="inline-block dark:text-zinc-200 pb-[6px] text-sm text-lg mb-2"/>
                                            <div className='inline-block dark:text-zinc-200 hover:text-black dark:hover:text-white px-1 pt-2'>Validating Postcode...</div>
                                        </>
                                    :
                                        <div className='py-6'></div>
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
                                className="py-2 px-3 rounded-lg border-2 border-gray-300 dark:bg-zinc-900 dark:border-zinc-500 text-zinc-700 dark:text-white mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                                onChange={value => setPrice(value)}    
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Upload Photo</label>
                        <div className='flex items-center justify-center w-full'>
                            <label className='cursor-pointer flex flex-col border-4 border-dashed w-full h-auto hover:bg-gray-100 hover:border-gray-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 group'>
                                <div className='flex flex-col items-center justify-center py-2 px-2'>
                                    {
                                        imagesLocalUrl.length>0?
                                        <div className="grid grid-cols-3 gap-4 flex items-center">
                                        {imagesLocalUrl.map((url, i) => <img
                                                key={i} 
                                                src={url}
                                                className="mb-4"
                                            />
                                            )
                                        }
                                        </div>
                                        :
                                        <div className='flex flex-col items-center justify-center py-4'>
                                            <svg className="w-10 h-10 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                            <p className='lowercase text-sm text-gray-400 group-hover:text-white pt-1 tracking-wider'>Select a photo</p>
                                        </div>
                                    }
                                    </div>
                            <input type='file' multiple className="hidden" onChange={handleFilesPicked}/>
                            </label>
                        </div>
                    </div>

                    <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                        <button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' onClick={() => navigate('/')} >Cancel</button>
                        <button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Create</button>
                    </div>
                </div>
            </div>
        </SvgBackground>
        </Background>
    )
}

export default NewItemPost;