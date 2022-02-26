import React, {useEffect, useState} from 'react';
import Footer from '../Components/MainLayout/Footer';
import Header from '../Components/MainLayout/Header';
import Background from '../Components/Background';
import { useNavigate } from "react-router-dom";
import { db, auth } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import NoiseBackground from '../Components/NoiseBackground';
import FavouriteSidePanel from '../Components/FavouriteSidePanel';

const Home = () => {
  const navigate = useNavigate()
  const [items, setItems] = useState([]);
  
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

  useEffect(() => {
    fetchItems()
    
  }, []);

  // useEffect(() => {
  //   console.log(items)    
  // }, [items]);
  
  return (
  <NoiseBackground>
  <Background className={"dark:bg-transparent min-h-screen"}>
        <Header />
        <div>
          {/* <FavouriteSidePanel/> */}
          <section className="py-8">
            <div className="container mx-auto items-center flex-wrap pt-4 pb-12">
              <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                  <div className="uppercase tracking-wide no-underline hover:no-underline font-bold text-zinc-800 dark:text-zinc-100 dark:hover:text-white text-xl " >
                    Featured
                  </div>
                  <div className="flex items-center" id="store-nav-content">
                    <a className="pl-3 inline-block no-underline" href="#">
                      <svg className="fill-current text-zinc-800 dark:text-zinc-100 dark:hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                      </svg>
                    </a>
                    <a className="pl-3 inline-block no-underline" href="#">
                      <svg className="fill-current text-zinc-800 dark:text-zinc-100 dark:hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                      </svg>
                    </a>
                    {/* <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                      <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                          <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <input className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline" type="text" placeholder="Search"/> */}
                  </div>
                </div>
              </nav>
              <div className="grid gap-y-10 sm:grid-cols-1 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {items.map((product) => (
                  <div key={product.id} onClick={() => navigate(`/item/${product.id}`)} className="m-5 dark:bg-black/[.3] relative shadow-lg hover:shadow-xl dark:shadow-md dark:hover:shadow-xl cursor-pointer">
                    <div className="pt-3 flex items-center justify-between mx-5">
                      <p className="text-zinc-800 dark:text-zinc-100 dark:hover:text-white w-5/6">{product.name}</p>
                      <svg className=" w-1/6 pr-2 pl-4 fill-current inline-block text-zinc-800 dark:text-zinc-100 dark:hover:text-white hover:text-black float-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                      </svg>
                    </div>
                    <div className='pt-2 pb-20 px-5 mx-auto my-auto'>
                      <img className=" max-h-80 mx-auto my-auto shadow-md" src={product.imagesUploadedUrl[0]} />
                    </div>
                    <p className="text-zinc-800 dark:text-zinc-100 dark:hover:text-white font-black text-xl absolute right-2 bottom-0 py-4">
                      £ {product.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      <Footer/>
  </Background>
  </NoiseBackground>
)}

export default Home;
