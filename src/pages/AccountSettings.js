import React from 'react'
import Background from '../Components/Background';
import SvgBackground from "../Components/SvgBackground";
import {FixedToggle} from "../Components/ThemeToggle";
import { useNavigate, useLocation } from "react-router-dom";


const AccountSettings = () => {
    const navigate = useNavigate()

    return (
        <Background>
        <SvgBackground>
        <FixedToggle/>
        <div className="flex h-screen items-center justify-center  ">
            <div className="grid bg-white dark:bg-zinc-900 rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
                <div className="flex justify-center py-4">
                <div className="flex bg-gray-200 dark:bg-gray-700 rounded-full md:p-4 p-2 border-2 border-gray-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                </div>
                </div>

                <div className="flex justify-center">
                <div className="flex">
                    <h1 className="text-gray-600 font-bold md:text-2xl text-xl">Tailwind Form</h1>
                </div>
                </div>

                <div className="grid grid-cols-1 mt-5 mx-7">
                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Input 1</label>
                <input className="py-2 px-3 rounded-lg border-2 border-gray-300 dark:bg-zinc-900 dark:border-zinc-500 text-zinc-700 dark:text-white mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" type="text" placeholder="Input 1" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                <div className="grid grid-cols-1">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Input 2</label>
                    <input className="py-2 px-3 rounded-lg border-2 border-gray-300 dark:bg-zinc-900 dark:border-zinc-500 text-zinc-700 dark:text-white mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" type="text" placeholder="Input 2" />
                </div>
                <div className="grid grid-cols-1">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Input 3</label>
                    <input className="py-2 px-3 rounded-lg border-2 border-gray-300 dark:bg-zinc-900 dark:border-zinc-500 text-zinc-700 dark:text-white mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" type="text" placeholder="Input 3" />
                </div>
                </div>

                <div className="grid grid-cols-1 mt-5 mx-7">
                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Selection</label>
                <select className="py-2 px-3 rounded-lg border-2 border-gray-300 dark:bg-zinc-900 dark:border-zinc-500 text-zinc-700 dark:text-white mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
                </div>

                <div className="grid grid-cols-1 mt-5 mx-7">
                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Another Input</label>
                <input className="py-2 px-3 rounded-lg border-2 border-gray-300 dark:bg-zinc-900 dark:border-zinc-500 text-zinc-700 dark:text-white mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" type="text" placeholder="Another Input" />
                </div>

                <div className="grid grid-cols-1 mt-5 mx-7">
                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Upload Photo</label>
                    <div className='flex items-center justify-center w-full'>
                        <label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-gray-300 dark:bg-zinc-700 dark:hover:bg-zinc-900 group'>
                            <div className='flex flex-col items-center justify-center pt-7'>
                            <svg className="w-10 h-10 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            <p className='lowercase text-sm text-gray-400 group-hover:text-gray-600 pt-1 tracking-wider'>Select a photo</p>
                            </div>
                        <input type='file' className="hidden" />
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

export default AccountSettings;