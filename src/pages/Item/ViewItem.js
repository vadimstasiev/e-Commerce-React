import Header from '../../Components/MainLayout/Header'
import Footer from '../../Components/MainLayout/Footer'
import React from 'react'
import NoiseBackground from '../../Components/NoiseBackground'
import Background from '../../Components/Background'
import FavouriteSidePanel from '../../Components/FavouriteSidePanel'

const ViewItem = () => {
  return ( 
    <div>
        <NoiseBackground>
        <Background className={"dark:bg-transparent min-h-screen"}>
        <Header/>
        
            <div className="py-8">
                {/* <FavouriteSidePanel/> */}
                <main className="my-8">
                    <div className="container mx-auto px-6">
                        <div className="md:flex md:items-center">
                            <div className="w-full h-64 md:w-1/2 lg:h-96">
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="https://images.unsplash.com/photo-1578262825743-a4e402caab76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="Nike Air"/>
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="text-gray-600 dark:text-zinc-100 uppercase text-lg">Nike Air</h3>
                                <span className="text-gray-600 dark:text-zinc-200 mt-3">$125</span>
                                <hr className="my-3"/>
                                <div className="mt-2">
                                    <label className="text-gray-600 dark:text-zinc-100 text-sm">Description</label>
                                    <div className="flex items-center mt-1">
                                        
                                    <span className="text-gray-600 dark:text-zinc-200 text-lg mx-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </span>
                                        
                                    </div>
                                </div>
                                <div className="flex items-center mt-6">
                                    <button className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Message Now</button>
                                    <button className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16">
                            <h3 className="text-gray-600 dark:text-zinc-200 text-2xl font-medium">More Products</h3>
                            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                                    <div className="flex items-end justify-end h-56 w-full bg-cover">
                                        <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="px-5 py-3">
                                        <h3 className="text-gray-700 uppercase">Chanel</h3>
                                        <span className="text-gray-500 mt-2">$12</span>
                                    </div>
                                </div>
                                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                                    <div className="flex items-end justify-end h-56 w-full bg-cover">
                                        <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="px-5 py-3">
                                        <h3 className="text-gray-700 uppercase">Man Mix</h3>
                                        <span className="text-gray-500 mt-2">$12</span>
                                    </div>
                                </div>
                                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                                    <div className="flex items-end justify-end h-56 w-full bg-cover">
                                        <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="px-5 py-3">
                                        <h3 className="text-gray-700 uppercase">classNameic watch</h3>
                                        <span className="text-gray-500 mt-2">$12</span>
                                    </div>
                                </div>
                                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                                    <div className="flex items-end justify-end h-56 w-full bg-cover" >
                                        <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="px-5 py-3">
                                        <h3 className="text-gray-700 uppercase">woman mix</h3>
                                        <span className="text-gray-500 mt-2">$12</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        </Background>
        </NoiseBackground>
    </div>
  )
}

export default ViewItem