import React,{useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
    DialogTitle,
    DialogDescription,
    DialogClose,
    DialogFooter,
  } from "@/components/ui/dialog";
  import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import ImageUploading from 'react-images-uploading';
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import { MdErrorOutline } from "react-icons/md";
import Uploader from "./uploader";
import { Button } from "@/components/ui/button"
import { deleteCategorie } from "../../../actions/Categorie/CreateCategorie";
function DeleteForm({deleteFormState, setDeleteFormState, handleDelete}) {

    // const handleDelete = async () =>{
    //     try{
          
    //         const response = await deleteCategorie(itemId);
    //         console.log("res => ", response);
    //     }catch(err)
    //     {
    //         console.log("error => ", err);
    //     }
    // } 
  return (
      <Dialog className="items-center justify-center"  open={deleteFormState} onOpenChange={setDeleteFormState}>
                {/* <DialogTrigger asChild>
                    <Button variant="outline">Delete</Button>
                </DialogTrigger> */}

                <DialogContent className="sm:max-w-[425px] items-center justify-center ">
                    <DialogHeader className="items-center justify-center ">
                        <MdErrorOutline size={80} />
                        <DialogTitle className="flex items-center text-[1.7rem]"> Are you sure ?</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <DialogClose>
                                <div className="grid grid-cols-2 items-center gap-4">
                                    <Button onClick={handleDelete}>Yes</Button>
                                    <Button>No</Button>
                                </div>
                        </DialogClose>
                    </div>
                </DialogContent>


            </Dialog>
  )
}

export default DeleteForm
