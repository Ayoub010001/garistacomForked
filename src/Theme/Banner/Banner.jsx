import React from 'react'
import { FaFacebook,FaInstagram,FaSnapchat,FaInfoCircle,FaHome,FaShoppingCart} from "react-icons/fa";

import {Link} from "react-router-dom"
function Banner({items}) {
  const blue="#28509E"

  console.log("The Items => ",items);
  return (
    <>
    <div className=' p-4 '>
    
    
<div className="relative mx-auto max-w-md overflow-hidden rounded-[.5rem] bg-white shadow">
  <div className=''>
    <img src="/public/photo/rest.jpg" className="w-full object-cover max-h-44 " alt="" />
  </div>
  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
  <div className="absolute inset-x-0  bottom-16 z-20 p-4   text-center">
    {/* <div className='bottom-0'> */}
         {/* <p className="mb-1 text-md text-white text-opacity-80">Enjoy the great </p> */}
    <h3 className="text-xl font-medium text-white">Name</h3>
    {/* </div> */}
    </div>
    <div className='flex justify-between absolute inset-x-0  bottom-0 z-20 p-4   text-center'>
    <div className='flex gap-2'>
        <FaFacebook color='white'/>
        <FaInstagram color='white'/>
        <FaSnapchat color='white'/>
    </div>
       
    </div>
  </div>
 
</div>





    </>
  )
}

export default Banner