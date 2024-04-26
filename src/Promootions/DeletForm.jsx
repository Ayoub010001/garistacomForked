
import {useState} from "react"
import { Button } from "@/components/ui/button"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
  } from "@/components/ui/dialog";
import { BiSolidTrash } from "react-icons/bi";
import { MdErrorOutline } from "react-icons/md";
const DeletForm = () => {
  return (
    <Dialog className="items-center justify-center">
    <DialogTrigger asChild>
      <Button variant="outline" className="bg-black text-white hover:text-white hover:bg-black"><BiSolidTrash size={20}/></Button>
    </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] items-center justify-center ">
        <DialogHeader className="items-center justify-center ">
        <MdErrorOutline size={80}/>
          <DialogTitle className="flex items-center text-[1.7rem]"> Are you sure ?</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 items-center gap-4">
            <Button>Yes</Button>
            <Button>No</Button>
          </div>
        </div>
      </DialogContent>
  </Dialog>
  )
}

export default DeletForm