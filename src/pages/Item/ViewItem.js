import React, {useEffect, useState} from 'react';
import { db, auth } from '../../firebase';
import { collection, doc, getDocs, getDoc } from 'firebase/firestore';
import withRouter from '../../Components/withRouter'
import Header from '../../Components/MainLayout/Header'
import Footer from '../../Components/MainLayout/Footer'
import NoiseBackground from '../../Components/NoiseBackground'
import Background from '../../Components/Background'
import FavouriteSidePanel from '../../Components/FavouriteSidePanel'
import ItemCard from './ItemCard'



const ViewItem = (props) => {
    const requestedItemId = props.router.params.id
    
    const [items, setItems] = useState([]);
    const [item, setItem] = useState({});
  
    const fetchItems = async () => {
        // console.log(db)
        // const response = db.collection('items');
        // const data = await response.get();
        // data.docs.forEach(item => {
        //   setItems([...items, item.data()])
        // })
        setItems([])
        await getDocs(collection(db, "items"))
        .then(data => {
        data.docs.forEach((item) => {
            setItems(previous => [...previous, {id: item.id, ...item.data()}])
        })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const fetchItem = async () => {
        // console.log(db)
        // const response = db.collection('items');
        // const data = await response.get();
        // data.docs.forEach(item => {
        //   setItems([...items, item.data()])
        // })
        setItems([])
        console.log(requestedItemId)
        await getDoc(doc(db, "items", requestedItemId), )
        .then(data => {
            setItem(data.data())
        })
        .catch(err=>{
            console.log(err)
        })
    }

    useEffect(() => {
        fetchItems()
        fetchItem()
        
    }, [props.router.params]);

    // useEffect(() => {
    //   console.log(items)    
    //   console.log(item)    
    // }, [items, item]);

    return ( 
        <div>
            <NoiseBackground>
            <Background className={"dark:bg-transparent min-h-screen"}>
            <Header/>
            
                <div className="py-8">
                    {/* <FavouriteSidePanel/> */}
                    <main className="my-8">
                        <div className="container mx-auto px-6">
                            <div className="xl:flex xl:items-center">
                                <div className="">
                                    <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src={item.imagesUploadedUrl?item.imagesUploadedUrl[0]:""} alt="product photo"/>
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
                                    <div className="flex items-center my-6 float-right">
                                        <span className="text-gray-600 dark:text-zinc-200  font-black text-2xl px-4">£ {item.price}</span>

                                        <button className="px-8 py-[11px] bg-zinc-600 hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-400 text-white text-sm font-medium rounded focus:outline-none">Message Now</button>
                                        <button className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-500 focus:outline-none">
                                        <svg className="fill-current h-6 w-6 text-zinc-800 dark:text-zinc-100 dark:hover:text-white float-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                                        </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-16">
                                <h3 className="text-gray-600 dark:text-zinc-200 text-2xl font-medium">More Products from this Seller</h3>
                                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                                    {
                                        items.map(product => {
                                            const maxList = 4
                                            return (
                                                <ItemCard key={product.id} product={product}/>
                                            )
                                        })
                                    }
                                    
                                    
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

export default withRouter(ViewItem)