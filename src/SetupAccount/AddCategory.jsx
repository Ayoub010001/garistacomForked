'use client'
import React, { useRef } from 'react'
import { Input } from "../components/ui/input"
import { Button } from '../components/ui/button'
import { Label } from '../components/ui/label'
import { Trash2 } from 'lucide-react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"


function AddCategory({restInfo,handleChange,handleDelete}) {
 const categoryInput = useRef(null);
 return (
    <div className='grid '>
        <h1 className=" font-bold text-3xl">Category Creation</h1>
        <p className=" text-sm opacity-65">Please provide Name of the category</p>
        
        <div className="mt-2">
            <div>
                <Label htmlFor="category">Category Creation</Label>
                <Input id="categories" type="text" placeholder="Add Category" 
                    ref={categoryInput}/>
                <div className="flex justify-end py-2">
                    <Button onClick={
                        ()=>{
                            if (categoryInput.current) {
                                handleChange(categoryInput.current.value, categoryInput.current.id)
                            }
                        }
                    }>Add</Button>
                </div>
            </div>
            <div className='h-[200px] overflow-y-scroll'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Categories List</TableHead>
                        </TableRow>
                    </TableHeader>
                        <TableBody className='h-[80px] overflow-y-scroll'>
                            {restInfo.categories.map((Category,index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">
                                    <div className='flex justify-between items-center'>
                                        <p>{Category}</p>
                                        <Button onClick={()=> handleDelete(Category)} variant="destructive" className=' h-8 cursor-pointer'><Trash2 width={16} /></Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                </Table> 
            </div>
            
        </div>
    </div>
  )
}

export default AddCategory