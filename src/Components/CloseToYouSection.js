import React, {useEffect, useState} from 'react';
import Footer from '../Components/MainLayout/Footer';
import Header from '../Components/MainLayout/Header';
import Background from '../Components/Background';
import { useNavigate } from "react-router-dom";
import { db, auth } from '../firebase';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import NoiseBackground from '../Components/NoiseBackground';
import FavouriteSidePanel from '../Components/FavouriteSidePanel';
import { useAuthState } from "react-firebase-hooks/auth";
import ItemCard from '../Components/ItemCard';

const CloseToYouSection = (props) => {
    const navigate = useNavigate()
    const [items, setItems] = useState([]);
    const [user, loadingUser, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const [userGeohash, setUserGeohash] = useState("");

    //////

    // // Find cities within 50km of London
    // const center = [51.5074, 0.1278];
    // const radiusInM = 50 * 1000;

    // // Each item in 'bounds' represents a startAt/endAt pair. We have to issue
    // // a separate query for each pair. There can be up to 9 pairs of bounds
    // // depending on overlap, but in most cases there are 4.
    // const bounds = geofire.geohashQueryBounds(center, radiusInM);
    // const promises = [];
    // for (const b of bounds) {
    //   const q = db.collection('cities')
    //     .orderBy('geohash')
    //     .startAt(b[0])
    //     .endAt(b[1]);

    //   promises.push(q.get());
    // }

    // // Collect all the query results together into a single list
    // Promise.all(promises).then((snapshots) => {
    //   const matchingDocs = [];

    //   for (const snap of snapshots) {
    //     for (const doc of snap.docs) {
    //       const lat = doc.get('lat');
    //       const lng = doc.get('lng');

    //       // We have to filter out a few false positives due to GeoHash
    //       // accuracy, but most will match
    //       const distanceInKm = geofire.distanceBetween([lat, lng], center);
    //       const distanceInM = distanceInKm * 1000;
    //       if (distanceInM <= radiusInM) {
    //         matchingDocs.push(doc);
    //       }
    //     }
    //   }

    //   return matchingDocs;
    // }).then((matchingDocs) => {
    //   // Process the matching documents
    //   // ...
    // });

    /////

  
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

    // const fetchUser = async () => {
    //     await getDoc(doc(db, "users", user.uid))
    //     .then(data => {
    //         const actualData = data.data()
    //         if(actualData){
    //             setName(actualData.name)
    //         } 
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // }


    useEffect(() => {
        fetchItems()
        // fetchUser()
        
    }, []);

    // useEffect(() => {
    //   console.log(items)    
    // }, [items]);

    useEffect(() => {
        if(items.length===0){
            props.setEmpty&&props.setEmpty(true)
            return <></>
        }
        props.setEmpty&&props.setEmpty(false)
    }, [items]);

    if(items.length===0){
        return <></>
    }

    return (
        <section className={props.className}>
            <div className="container mx-auto items-center flex-wrap pt-4 pb-12">
                <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                    <div className="py-6 uppercase tracking-wide no-underline hover:no-underline font-bold text-zinc-800 dark:text-zinc-100 dark:hover:text-white text-xl " >
                    Close to You
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
                    <input className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-gray-500 focus:outline-none focus:shadow-outline" type="text" placeholder="Search"/> */}
                    </div>
                </div>
                </nav>
                <div className="grid gap-y-10 sm:grid-cols-1 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {
                    items.map((product) => (
                    <ItemCard key={product.id} product={product}/>
                    ))
                }
                </div>
            </div>
        </section>
    )
}

export default CloseToYouSection;
