import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { EditOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { db, auth } from '../firebase';

const ItemCard = ({product}) => {
    const navigate = useNavigate()
    const [user, loadingUser, error] = useAuthState(auth);
    const userUid = user?.uid||""
    const [currentImage, setCurrentImage] = useState(0);

    const [isControlsVisible, setControlsVisible] = useState(false);

    const nextImage = async (e) => {
        e.stopPropagation()
        const current = currentImage
        if(product.imagesUploadedUrl[current+1]){
            await preloadImage(product.imagesUploadedUrl[current+1])
            setCurrentImage(current+1)
        }
    }

    const previousImage = async (e) => {
        e.stopPropagation()
        const current = currentImage
        if(product.imagesUploadedUrl[current-1]){
            await preloadImage(product.imagesUploadedUrl[current-1])
            setCurrentImage(current-1)
        }
    }

    const preloadImage = (src) => {
        // todo, keep a list of images already preloaded so it doesnt do it again
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.onload = function() {
            resolve(img)
          }
          img.onerror = img.onabort = function() {
            reject(src)
          }
          img.src = src
        })
    }

    return (
        <div onMouseOver={()=>{setControlsVisible(true)}} onMouseLeave={()=>{setControlsVisible(false)}} onClick={() => navigate(`/item/${product.id}`)} className="z-0 w-full max-w-sm mx-auto rounded-md overflow-hidden dark:bg-black/[.3] relative cursor-pointer shadow-lg hover:shadow-xl dark:shadow-md dark:hover:shadow-xl">
            <div id="carouselDarkVariant"
            className="carousel slide carousel-fade carousel-dark relative">
                <div 
                    className="flex items-end justify-end h-56 w-full bg-cover bg-center z-3"
                    style={{backgroundImage: `url("${product.imagesUploadedUrl[currentImage]}")`}}   
                >
                {
                    userUid===product.userUid?
                        <button 
                            className="z-50 p-2 rounded-full bg-gray-200 dark:border-2 dark:border-zinc-300 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-white mx-5 -mb-4 focus:outline-none "
                            onClick={(e)=> {
                                e.stopPropagation()
                                navigate(`/ItemCreate/edit/${product.id}`)
                            }}     
                        >
                            {/* <svg className="fill-current h-6 w-6 text-zinc-800 dark:text-zinc-100 dark:hover:text-white float-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                            </svg> */}
                            <EditOutlined className="fill-current h-6 w-6 pt-1 text-zinc-800 dark:text-zinc-100 dark:hover:text-white float-right"/>
                        </button>
                    :
                        <button
                            className="z-50 p-2 rounded-full bg-gray-200 dark:border-2 dark:border-zinc-300 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-white mx-5 -mb-4 focus:outline-none "
                            onClick={(e)=> {
                                e.stopPropagation()
                                // add favourite
                            }} 
                        >
                            <svg className="fill-current h-6 w-6 text-zinc-800 dark:text-zinc-100 dark:hover:text-white float-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                            </svg>
                        </button>
                }
                    
                </div>
                {
                    isControlsVisible&&
                    <>  
                        <div className='absolute top-0 bottom-0 flex items-center justify-center p-0 my-0 text-center border-0 left-2'>
                            <button
                                className="rounded-full px-2 pb-2 xl:pb-3 xl:pt-1 xl:px-3 bg-zinc-200/[.9] dark:bg-black/[.3]"
                                onClick={previousImage}
                            >
                                <LeftOutlined className='fill text-zinc-600 dark:text-zinc-200 text-2xl'/>
                            </button>
                        </div>
                        <div className='absolute top-0 bottom-0 flex items-center justify-center p-0 my-0 text-center border-0 right-2'>
                            <button
                                className="rounded-full px-2 pb-2 xl:pb-3 xl:pt-1 xl:px-3 bg-zinc-200/[.9] dark:bg-black/[.3]"
                                onClick={nextImage}
                            >
                                <RightOutlined className='fill text-zinc-600 dark:text-zinc-200 text-2xl'/>
                            </button>
                        </div>
                    </>
                }
            </div>
            
            <div className="text-gray-700 dark:text-zinc-100 pb-[50px] px-5 py-3 ">
                {product.name}
            </div>
            {
                product.distanceInKm&&
                <p className="text-zinc-800 dark:text-zinc-100 dark:hover:text-white font-black text-xl absolute left-4 bottom-2">
                    {product.distanceInKm} Km away
                </p>
            }
            <p className="text-zinc-800 dark:text-zinc-100 dark:hover:text-white font-black text-xl absolute right-2 bottom-2">
                £ {product.price}
            </p>
        </div>
    )
}

export default ItemCard