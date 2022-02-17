import React from 'react';
import { logout } from '../firebase';
import Footer from '../Components/ShopLayout/Footer';
import Header from '../Components/ShopLayout/Header';
import Background from '../Components/Background';


const dummyList = [
  {
    id: 1,
    name: 'Product Name',
    href: '#',
    price: '$9.99',
    imageSrc: 'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
  },
  {
    id: 2,
    name: 'Product Name',
    href: '#',
    price: '$10.99',
    imageSrc: 'https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
  },
  {
    id: 3,
    name: 'Product Name',
    href: '#',
    price: '$12.99',
    imageSrc: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
  },
  {
    id: 4,
    name: 'Product Name',
    href: '#',
    price: '$9.99',
    imageSrc: 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
  },
  {
    id: 5,
    name: 'Product Name',
    href: '#',
    price: '$6.99',
    imageSrc: 'https://images.unsplash.com/photo-1467949576168-6ce8e2df4e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
  },
  {
    id: 6,
    name: 'Product Name',
    href: '#',
    price: '$10.99',
    imageSrc: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
  },
  {
    id: 7,
    name: 'Product Name',
    href: '#',
    price: '$22.99',
    imageSrc: 'https://images.unsplash.com/photo-1550837368-6594235de85c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
  },
  {
    id: 8,
    name: 'Product Name',
    href: '#',
    price: '$19.99',
    imageSrc: 'https://images.unsplash.com/photo-1551431009-a802eeec77b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80',
  },
]

const Home = () => {
  // linear-gradient(
  //   black,
  //   transparent 50%,
  //   transparent 10%,
  //   black),
  const backgroundImage = `
      radial-gradient(rgb(120,120,120,0.9), 
        transparent 100%),
      url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCI+CjxmaWx0ZXIgaWQ9Im4iIHg9IjAiIHk9IjAiPgo8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC43IiBudW1PY3RhdmVzPSIxMCIgc3RpdGNoVGlsZXM9InN0aXRjaCI+PC9mZVR1cmJ1bGVuY2U+CjwvZmlsdGVyPgo8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzAwMCI+PC9yZWN0Pgo8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI24pIiBvcGFjaXR5PSIwLjQiPjwvcmVjdD4KPC9zdmc+"
  )`
  return (
  <div style={{backgroundImage}}>
  <Background className={"dark:bg-transparent"}>
      {/* <div className='text-slate-900 dark:text-slate-400'>Home page</div>
      <div className='text-slate-900 dark:text-slate-400 cursor-pointer' onClick={() => logout()}>Sign Out</div> */}
        <Header />
        <div>
          <section className="py-8">
            <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
              <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                  <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 dark:text-gray-100 dark:hover:text-white text-xl " href="#">
                    Store
                  </a>
                  <div className="flex items-center" id="store-nav-content">
                    <a className="pl-3 inline-block no-underline" href="#">
                      <svg className="fill-current text-gray-800 dark:text-gray-100 dark:hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                      </svg>
                    </a>
                    <a className="pl-3 inline-block no-underline" href="#">
                      <svg className="fill-current text-gray-800 dark:text-gray-100 dark:hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </nav>
              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {dummyList.map((product) => (
                  <a key={product.id} href={product.href}>
                    <img className="hover:grow hover:shadow-lg" src={product.imageSrc} />
                    <div className="pt-3 flex items-center justify-between">
                      <p className="text-gray-800 dark:text-gray-100 dark:hover:text-white">{product.name}</p>
                      <svg className="h-6 w-6 fill-current text-gray-800 dark:text-gray-100 dark:hover:text-white hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                      </svg>
                    </div>
                    <p className="pt-1 text-gray-800 dark:text-gray-100 dark:hover:text-white">{product.price}</p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      <Footer/>
  </Background>
  </div>
)}

export default Home;
