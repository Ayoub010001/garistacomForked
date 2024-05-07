import React from 'react'
import {Link} from "react-router-dom"
import { IoIosReturnLeft } from "react-icons/io";
import { FaFacebook ,FaInstagram,FaTiktok,FaSnapchat,FaYoutube,FaWifi} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ScrollArea } from "@/components/ui/scroll-area"
import { CgEye } from "react-icons/cg";
import { HiWifi } from "react-icons/hi";


function Info() {
  return (
   <>
    
{/* 
        <div className='container'>  

        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/">
                <div className='flex'><IoIosReturnLeft size={24}/>Back</div>
            </Link>
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="\public\Garista icon Blue white.svg" className="h-8" alt="Flowbite Logo"/>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">garista</span>
        </a>
        </div>
        </nav>

        jhjjjjjjjjjjj
        <div className='flex justify-center items-center text-black'>
        jj
        </div>
        </div>
        

        <div className="flex gap-2 justify-center items-center pt-16 max-w-sm p-6  ">
        <FaFacebook size={25}/>
        <FaInstagram size={25}/>
        <FaTiktok size={25}/>
        <FaSnapchat size={25}/>
        <FaYoutube size={25}/>
        </div>


        <div className="w-full max-w-sm px-2 ">
        
            <div className="flex items-center rounded-[1rem] ">
                <span className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg dark:bg-gray-600 dark:text-white dark:border-gray-600"><FaWifi size={21}/></span>
                <div className="relative w-full">
                    <input id="website-url" type="text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-e-0  border-gray-300 text-gray-500 dark:text-gray-400 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="Garista2022" readonly disabled />
                </div>
                <button data-tooltip-target="tooltip-website-url" data-copy-to-clipboard-target="website-url" className="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-white bg-[#28509E] rounded-e-lg hover:bg-[#28509E] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-blue-700 dark:border-blue-600 hover:border-blue-800 dark:hover:border-blue-700" type="button">
                    <span id="default-icon">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                        </svg>
                    </span>
                    <span id="success-icon" className="hidden inline-flex items-center">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                    </span>
                </button>
                <div id="tooltip-website-url" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    <span id="default-tooltip-message">Copy link</span>
                    <span id="success-tooltip-message" className="hidden">Copied!</span>
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
        </div>

        <div className="flex gap-2 justify-center items-center pt-10 max-w-sm p-6  ">
        <BsFillTelephoneFill/><span className='font-bold'>:</span> +212 774488883
        </div>

        <p class="mb-3 text-gray-500 px-2 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-[#28509E] dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
        <p class="text-gray-500 dark:text-gray-400 px-2">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p> */}
       <ScrollArea className="h-[900px] w-auto rounded-md border p-4">
       <div className="container">
         <div className="mt-8">
            <div className='flex flex-col gap-2 items-center justify-center'>
                <div className='w-24 h-24 rounded-full bg-black outline-2 outline outline-blue border border-1 border-white'></div>
            
                <div>
                    <h1>Resto Name</h1>
                </div>
            </div>
         </div>
         <div className="mt-8">
            <div className='flex flex-col justify-center items-center'>
                <h1>Info</h1>

                <div className="flex items-center gap-5 mt-3">
                    {/* <button> */}
                    <div className='w-10 h-10 rounded-full border border-1 border-grey/50 grid place-content-center'>
                      <FaFacebook size={25} className='text-grey/50' color='grey/50'/>
                    </div>
                    <div className='w-10 h-10 rounded-full border border-1 border-grey/50 grid place-content-center'>
                      <FaInstagram size={25} className='text-grey/50' color='grey/50'/>
                    </div>
                    <div className='w-10 h-10 rounded-full border border-1 border-grey/50 grid place-content-center'>
                      <FaTiktok size={25} className='text-grey/50' color='grey/50'/>
                    </div>
                    <div className='w-10 h-10 rounded-full border border-1 border-grey/50 grid place-content-center'>
                      <FaSnapchat size={25} className='text-grey/50' color='grey/50'/>
                    </div>
                    <div className='w-10 h-10 rounded-full border border-1 border-grey/50 grid place-content-center'>
                      <FaYoutube size={25} className='text-grey/50' color='grey/50'/>
                    </div>
                    {/* <FaInstagram size={25}/>
                    <FaTiktok size={25}/>
                    <FaSnapchat size={25}/>
                    <FaYoutube size={25}/> */}
                    {/* </button> */}
                </div>
            </div>
         </div>
         <div className="w-full max-w-sm px-2 ">
        
            <div className="flex items-center rounded-[1rem] ">
                <span className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg dark:bg-gray-600 dark:text-white dark:border-gray-600"><FaWifi size={21}/></span>
                <div className="relative w-full">
                    <input id="website-url" type="text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-e-0  border-gray-300 text-gray-500 dark:text-gray-400 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="Garista2022" readonly disabled />
                </div>
                <button data-tooltip-target="tooltip-website-url" data-copy-to-clipboard-target="website-url" className="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-white bg-[#28509E] rounded-e-lg hover:bg-[#28509E] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-blue-700 dark:border-blue-600 hover:border-blue-800 dark:hover:border-blue-700" type="button">
                    <span id="default-icon">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                        </svg>
                    </span>
                    <span id="success-icon" className="hidden inline-flex items-center">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                    </span>
                </button>
                <div id="tooltip-website-url" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    <span id="default-tooltip-message">Copy link</span>
                    <span id="success-tooltip-message" className="hidden">Copied!</span>
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
        </div>
         <div className="flex gap-2 justify-center items-center pt-10 max-w-sm   ">
        <BsFillTelephoneFill/><span className='font-bold'>:</span> +212 774488883
        </div>
         {/* <div className="mt-8">
            <div className='flex items-center justify-between gap-4'>
              <div className='flex items-center gap-2'>
              <div>
                    <HiWifi
                        style={{
                        color: "#000",
                        }}
                    />
                    </div>
                 <h2>
                    Password
                 </h2>
              </div>

              <div className='flex items-center gap-2'>
                <h2>**********</h2>
              <button>
              <CgEye
                    style={{
                    color: "#000",
                    }}
                />
              </button>
              </div>
            </div>
         </div> */}
         <div className="mt-8">
            <p class="mb-3 text-gray-500 px-2 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-[#28509E] dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
        <p class="text-gray-500 dark:text-gray-400 px-2">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p> 
       
         </div>
         
       </div>
       </ScrollArea>
   </>
  )
}

export default Info