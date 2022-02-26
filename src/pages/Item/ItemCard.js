import React from 'react'

const ItemCard = ({product}) => {
  return (
    <div className="z-0 w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden dark:bg-black/[.3] relative">
        <div className="flex items-end justify-end h-56 w-full bg-cover bg-center " style={{backgroundImage: `url("${product.imagesUploadedUrl[0]}")`}}>
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-white mx-5 -mb-4 focus:outline-none ">
            <svg className="fill-current h-8 w-8 text-zinc-800 dark:text-zinc-100 dark:hover:text-white float-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
            </svg>
            </button>
        </div>
        <div className="text-gray-700 dark:text-zinc-100 pb-10 px-5 py-3 ">
            {product.name}
        </div>
        <p className="text-zinc-800 dark:text-zinc-100 dark:hover:text-white font-black text-xl absolute right-2 bottom-2">
            £ {product.price}
        </p>
    </div>
  )
}

export default ItemCard