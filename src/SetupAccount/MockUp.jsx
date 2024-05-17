"use client"
import React from 'react'
import CategoryCard from './CategoryCard'
import "../App.css"


const defaultCover="/restaurantImgs/defaultCover.jpg";
const defaultLogo="/restaurantImgs/defaultLogo.png";


function MockUp({restInfo}) {
  return (
    <div>
        <div className='w-full h-24 bg-slate-700 relative'>
            <div className='h-full w-full  overflow-hidden flex justify-center items-center'>
              <img src={restInfo.restCover?restInfo.restCover.toString():defaultCover} alt="Cover restaurant" className=' h-full bg-slate-400'/>
            </div>
            <div className='overflow-hidden shadow-sm bg-slate-400 border-4 rounded-xl border-slate-100 w-16 h-16 flex justify-center items-center absolute top-16 left-20'>
                <img src={restInfo.restLogo?restInfo.restLogo.toString():defaultLogo} alt="Cover restaurant" className='h-full w-full'/>
            </div>
        </div>
        <section className=' w-[90%] m-auto'>
            <div className="mt-10 mb-4">
              <div className="space-y-1 break-words">
                <p className="text-md font-medium text-center break-words">
                  {restInfo.name != "" ? restInfo.name : "Restaurant Name"}
                </p>
                <p className="text-[12px] text-center">
                  {restInfo.adress != "" ? restInfo.adress : "Restaurant Address"}
                </p>
                <div className='w-full break-normal'>
                  <p className=" text-[10px] text-center break-words">
                    {restInfo.description != "" ? restInfo.description : "Restaurant description"}
                  </p>
                </div>
              </div>
            </div>
        </section>
        <section className='w-[90%] mt-4 mb-12 mx-auto h-full'>
            <p className="text-[12px] my-2 font-medium leading-none">
            Categories</p>
            <div className='w-full flex flex-col gap-2'>
                {
                    restInfo.categories.map((category, index)=>{
                        return <CategoryCard key={index} category={category} id={index}/>
                    })
                }
            </div>
        </section>
    </div>
  )
}

export default MockUp