import React from 'react'

function Claims() {
  return (
   <div className="container mt-8">
   
<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Make A <span class="underline underline-offset-3 decoration-8 decoration-[#28509E] dark:decoration-blue-600">Claims</span></h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
<div className='pt-16'>
    <label for="message" class="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Your message</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
</div>


   </div>
  )
}

export default Claims