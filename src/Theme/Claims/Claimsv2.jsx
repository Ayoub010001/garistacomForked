/**
 * v0 by Vercel.
 * @see https://v0.dev/t/nWlsU2cNRzR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import React from 'react'
import { Button } from '../../components/ui/button'
import { axiosInstance } from '../../../axiosInstance';
import { useState } from 'react';

export default function Claims({
    items
  }) 
{
    const [desc, setDesc] = useState('')

  const handleClaim = async () => {
    try{
      const res = await axiosInstance.post('/api/claims',{
        description: desc,
        resto_id: items.id
      })

      if(res)
      {
        console.log("Return Sucessfully");
      }
    }
    catch(err)
    {
      console.log("The Error => ", err);
    }
  }
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
  <div className="w-full max-w-md p-6 bg-white rounded-lg dark:bg-gray-800 h-full">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Make A <span class="underline underline-offset-3 decoration-8 decoration-[#28509E] dark:decoration-blue-600">Claims</span></h1>
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                <SmileIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Tell us about your recent experience at our restaurant.</p>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name (optional)</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email (optional)</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input id="phone" placeholder="Enter your phone number" type="tel" />
              </div>
              <div className="space-y-2 col-span-2">
                <Checkbox id="anonymous">
                  <span>Submit feedback anonymously</span>
                </Checkbox>
              </div>
            </div>
            <textarea
            value={desc} onChange={(e) => setDesc(e.target.value)}
              className="w-full px-4 py-3 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
              placeholder="Write your thoughts here..."
              rows={5}
            />
            <div className="flex items-center justify-between">
              <Button
                className="px-4 py-2 font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-offset-gray-800"
                type="submit"
                onClick={handleClaim}
              >
                Submit Feedback
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

function SmileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}