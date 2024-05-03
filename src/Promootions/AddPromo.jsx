import React,{useState} from "react"

  import { Input } from "@/components/ui/input"
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
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
import { Controller } from "react-hook-form"
import { DialogClose } from "../components/ui/dialog"
import { useEffect } from "react"
export const AddPromo = ({
    onSubmit,
    handleSubmit,
    register,
    handleImageChange,
    errors,
    file,
    fileName,
    control,
    handleDelete
}) => {


  return (
    
    <Dialog  className=" p-8 shadow-lg h-[45rem] w-[65rem] rounded-xl">
    <DialogTrigger className="flex justify-center">
            <Button variant="ghost" className="relative  rounded-md bg-black text-white hover:bg-black hover:text-white">
          Add Promo
            </Button>
    </DialogTrigger>
    <DialogContent style={{ padding: '2rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', height: '45rem', width: '35rem', maxWidth: '80rem', borderRadius: '1rem' }}>
        <DialogHeader className="flex justify-center">
                <h2 className="text-2xl font-bold mb-4 text-center">Create Promotions</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='flex items-start gap-10 p-10 justify-center'>
                      <div className='w-full '>
                      <div className={`flex flex-col justify-center items-center border-[2px] border-dashed h-[250px] cursor-pointer rounded-[5px] w-full ${errors.file  ? 'border-red-500 ' : 'border-black'}`} onClick={() => document.querySelector(".input-field").click()}>
                        <input
                              type="file"
                              accept='image/*'
                              // className={`input-field`}
                              className='input-field h-full w-full'
                              {...register('image', { required: 'Please select a file.' })}
                              onChange={handleImageChange}
                              hidden
                          />

                          {file ? (
                              <img src={URL.createObjectURL(file)} width={150} height={150} alt={fileName} />
                          ) : (
                              <>
                                  <MdCloudUpload color={errors.file ? "red" : "black"} size={60} />
                                  <p className={`${errors.file ? "text-red-500" : "text-black"}`}>Browse Files to upload</p>
                              </>
                          )}

                      </div>

                      {
                          file ?
                          <section className='uploaded-row'>
                              <AiFillFileImage color='black' />
                              <span className='upload-content'>
                              {fileName} -
                              <MdDelete onClick={handleDelete} />
                              </span>
                          </section>
                          :
                          <></>
                      }

                          <div className=''>
                              {/* <Input type="text" placeholder="Title" className='mt-5 mb-5' /> */}
                              <Controller
                                name="name"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Title is required' }}
                                render={({ field }) => (
                                    <>
                                        <Input type="text" placeholder="Title" className={`mt-5 mb-1 focus-visible:ring-white  border ${errors.name ? 'border-red-500 ' : 'border-gray-300'}`} {...field} />
                                        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                                    </>
                                )}
                            />
                          </div>
                      </div>

                  </div>
                  <DialogClose>
                    <div className='float-right flex gap-2 justify-end'>
                        <Button type="submit">Save</Button>
                    </div>
                  </DialogClose>
                </form>
            </DialogHeader>
            <DialogFooter className="flex justify-center items-center">
        </DialogFooter>
    </DialogContent>
</Dialog>
  )
}
