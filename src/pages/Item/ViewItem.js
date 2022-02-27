import { useNavigate } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import { db, auth } from '../../firebase';
import { collection, doc, getDocs, getDoc, query, where } from 'firebase/firestore';
import withRouter from '../../Components/hooks/withRouter'
import Header from '../../Components/MainLayout/Header'
import Footer from '../../Components/MainLayout/Footer'
import NoiseBackground from '../../Components/NoiseBackground'
import Background from '../../Components/Background'
import FavouriteSidePanel from '../../Components/FavouriteSidePanel'
import ItemCard from './ItemCard'
import Loading from "../Auth/Loading";
import OnScreenRender from "../../Components/OnScreenRender";
import { useAuthState } from "react-firebase-hooks/auth";
import { EditOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';



const ViewItem = (props) => {
    const navigate = useNavigate()
    const requestedItemId = props.router.params.id
    const [user, loadingUser, error] = useAuthState(auth);
    const [isItemOwnedByUser, setItemOwnedByUser] = useState(false);

    
    const [isLoaded, setIsLoaded] = useState(false);
    const [itemsSameSeller, setItemsSameSeller] = useState([]);
    const [itemsSimilar, setItemsSimilar] = useState([]);
    const [item, setItem] = useState();

    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = async (e) => {
        e.stopPropagation()
        const current = currentImage
        if(item.imagesUploadedUrl[current+1]){
            await preloadImage(item.imagesUploadedUrl[current+1])
            setCurrentImage(current+1)
        }
    }

    const previousImage = async (e) => {
        e.stopPropagation()
        const current = currentImage
        if(item.imagesUploadedUrl[current-1]){
            await preloadImage(item.imagesUploadedUrl[current-1])
            setCurrentImage(current-1)
        }
    }

    const preloadImage = (src) => {
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
  
    const fetchItemsSameSeller = async (userUid, itemId) => {
        setItemsSameSeller([])
        const q = query(collection(db, "items"), where("userUid", "==", userUid));
        await getDocs(q)
        .then(data => {
            data.docs.forEach((itm) => {
                if(itemId!=itm.id){
                    setItemsSameSeller(previous => [...previous, {id: itm.id, ...itm.data()}])
                }
            })
        })
        .catch(err=>{
            console.log(err)
        })
        setIsLoaded(true)
    }

    const fetchItemsSimilar = async () => {
        setItemsSimilar([])
        let currentItemWords = item.name.split(" ");
        for(const word of currentItemWords){
            const q = query(collection(db, "items"), where('name', '>=', word), where('name', '<=', word+ '\uf8ff'));
            await getDocs(q)
            .then(data => {
                data.docs.forEach((itm) => {
                    if(item.id!=itm.id){
                        setItemsSimilar(previous => [...previous, {id: itm.id, ...itm.data()}])
                    }
                    console.log(itm.data().name)
                })
            })
            .catch(err=>{
                console.log(err)
            })
        }
        
        
        setIsLoaded(true)
    }

    const fetchItem = async () => {
        const userUid = user.uid
        setItemsSameSeller([])
        // console.log(requestedItemId)
        await getDoc(doc(db, "items", requestedItemId))
        .then(data => {
            const actualData = data.data()
            if(actualData){
                setItem({id: data.id, ...actualData})
                if(userUid===actualData.userUid){
                    setItemOwnedByUser(true)
                }
                // needs to get current item user id before fetching other items
                fetchItemsSameSeller(actualData.userUid, data.id)
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
        setIsLoaded(false)
        setItemOwnedByUser(false)
        setCurrentImage(0)
        fetchItem()
        
    }, [props.router.params]);

    // useEffect(() => {
    //   console.log(itemsSameSeller)    
    //   console.log(item)    
    // }, [itemsSameSeller, item]);

    if(!item) {
        return <Loading/>
    }

    return ( 
        <div>
            <NoiseBackground>
            <Background className={"dark:bg-transparent min-h-screen"}>
            <Header/>
            
                <div className="py-8">
                    {/* <FavouriteSidePanel/> */}
                    <main className="my-8">
                        <div className="container mx-auto px-6">
                            <div className="xl:flex ">
                                <div className="relative">
                                    <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src={item.imagesUploadedUrl?item.imagesUploadedUrl[currentImage]:""} alt="product photo"/>
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
                                    <div className='absolute bottom-4 items-center justify-center p-0 my-0 text-center border-0 right-2'>
                                        <span className="text-zinc-600 dark:text-zinc-200 text-md mx-2 font-black bg-zinc-200/[.9] dark:bg-black/[.3] pt-0 pb-1 px-2 rounded-full">{`${currentImage} / ${item.imagesUploadedUrl.length-1}`} </span>
                                    </div>
                                </div>
                                <div className="w-full  mx-auto mt-5 xl:ml-8 md:mt-4  xl:w-1/2">
                                    <h3 className="text-gray-600 dark:text-zinc-100 uppercase text-lg">{item.name}</h3>
                                    <hr className="my-3"/>
                                    <div className="mt-2">
                                        <label className="text-gray-600 dark:text-zinc-300 text-lg">Description</label>
                                        <div className="flex items-center mt-1">
                                        <span className="text-gray-600 dark:text-zinc-100 text-md mx-2">{item.itemDescription} </span>
                                        </div>
                                    </div>
                                    {
                                        isItemOwnedByUser?
                                            <div className="flex items-center my-6 float-right">
                                                <span className="text-gray-600 dark:text-zinc-200  font-black text-2xl px-4">£ {item.price}</span>

                                                <button 
                                                    className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-500 focus:outline-none"
                                                    onClick={()=> {
                                                        navigate(`/ItemCreate/edit/${item.id}`)
                                                    }}
                                                >
                                                {/* <svg className="fill-current h-6 w-6 text-zinc-800 dark:text-zinc-100 dark:hover:text-white float-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                                                </svg> */}
                                                <EditOutlined className="fill-current h-6 w-6 pt-1 text-zinc-800 dark:text-zinc-100 dark:hover:text-white float-right"/>
                                                </button>
                                            </div>
                                        :
                                            <div className="flex items-center my-6 float-right">
                                                <span className="text-gray-600 dark:text-zinc-200  font-black text-2xl px-4">£ {item.price}</span>

                                                <button className="px-8 py-[11px] bg-zinc-600 hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-400 text-white text-sm font-medium rounded focus:outline-none">Message Now</button>
                                                <button className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-500 focus:outline-none">
                                                <svg className="fill-current h-6 w-6 text-zinc-800 dark:text-zinc-100 dark:hover:text-white float-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                                                </svg>
                                                </button>
                                            </div>
                                    }

                                </div>
                            </div>
                        
                            {
                                itemsSameSeller?.length>0?
                                    <div className="mt-16">
                                        {
                                            isItemOwnedByUser?
                                                <h3 className="text-gray-600 dark:text-zinc-200 text-2xl font-medium">Your other Selling items</h3>
                                            :
                                                <h3 className="text-gray-600 dark:text-zinc-200 text-2xl font-medium">More Products from this Seller</h3>
                                        }
                                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                                            {
                                                itemsSameSeller.map(product => {
                                                    const maxList = 4
                                                    return (
                                                        <ItemCard key={product.id} product={product}/>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                :
                                    <div className="py-16"></div>
                            }
                            {
                                isLoaded &&
                                <OnScreenRender 
                                    callback={fetchItemsSimilar}
                                >
                                {
                                    itemsSimilar?.length>0 &&
                                        <div className="mt-16">
                                            <h3 className="text-gray-600 dark:text-zinc-200 text-2xl font-medium">Similar Products</h3>
                                            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                                                {
                                                    itemsSimilar.map(product => {
                                                        const maxList = 4
                                                        return (
                                                            <ItemCard key={product.id} product={product}/>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                }
                                </OnScreenRender>
                            }
                            
                            
                        </div>
                    </main>
                    <Footer/>
                </div>
            </Background>
            </NoiseBackground>
        </div>
    )
}

export default withRouter(ViewItem)