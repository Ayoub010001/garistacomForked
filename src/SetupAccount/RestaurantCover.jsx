"use client"
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'


function RestaurantCover({restInfo,handleFile}) {


  return (
    <div className='grid '>
     <h1 className=" font-bold text-3xl">Restaurant Info</h1>
     <p className=" text-sm opacity-65">Please provide the name, description, Address  and Currency of your Restaurant</p>
    <div className='grid gap-y-2'>
     <div className="mt-2">
        <Label htmlFor="restLogo">Restaurant Logo</Label>
        <Input id="restLogo" type="file" placeholder="Logo"
               onChange={(e)=>handleFile(e.target.files?.[0], e.target.id)}/>
        <p className=' text-sm text-slate-500 font-normal italic'>Logo size : 90x90</p>
      </div>

      <div>
        <Label htmlFor="cover">Restaurant Cover</Label>
        <Input id="restCover" type="file" placeholder="Cover"
               onChange={(e)=>handleFile(e.target.files?.[0], e.target.id)}/>
        <p className=' text-sm text-slate-500 font-normal italic'>Cover size : 672x288</p>
      </div>
    </div>
        
    </div>
  )
}

export default RestaurantCover