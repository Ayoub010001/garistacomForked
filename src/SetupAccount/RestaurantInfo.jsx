'use client'
import React from 'react'
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"


function RestaurantInfo({restInfo,handleChange,handleCurrencyChange}) {
  return (
    <div>
    <h1 className=" font-bold text-3xl">Restaurant Info</h1>
    <p className=" text-sm opacity-65">Please provide the name, description, Address  and Currency of your Restaurant</p>
    <form className="flex flex-col gap-y-2 mt-1">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" type="text" placeholder="Restaurant Name"
           value={restInfo.name}
           onChange={(e)=> handleChange(e.target.value, e.target.id)}
          />
      </div>

      <div>
        <Label htmlFor="adress">Adresse</Label>
        <Input id="adress" type="text" placeholder="Restaurant Adress" 
              value={restInfo.adress}
              onChange={(e)=> handleChange(e.target.value, e.target.id)}/>
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" placeholder="Type your message here." 
            value={restInfo.description}
            onChange={(e)=> handleChange(e.target.value, e.target.id)}
            />
      </div>

      <div>
      <Label>Currency</Label>
        <Select value={restInfo.currency} 
                onValueChange={handleCurrencyChange}
          >
          <SelectTrigger>
            <SelectValue placeholder="Select a Currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>     
              <SelectItem value="MAD">MAD (DH)</SelectItem>
              <SelectItem value="USD">USD ($)</SelectItem>
              <SelectItem value="EUR">EUR (£)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </form>
  </div>
  )
}

export default RestaurantInfo