import React, {useState} from 'react'
import Uploader from "./uploader";
import { useForm,Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import {
    DialogDescription,
    DialogTitle,
    DialogClose,
} from "@/components/ui/dialog"
import {Label} from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { axiosInstance } from '../../../axiosInstance';

const FormAdd = ({ initialData, categories, handleAddUser, handleUpdate }) => {

    const formSchema = z.object({
        name: z.string().min(1, 'Name is required'),
        images: z
        .instanceof(File, 'Image is required')
        .refine((val) => val !== null, { message: 'Image is required' }),
        visibility: z.boolean().default(true).optional(),
    });
    const ProductFormValues = z.infer;
    const ProductFormProps = {
        initialData: null,
        categories: [],
    };
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [links, setLinks] = useState([]);
    const [linkInput, setLinkInput] = useState("");
    const title = initialData ? 'Edit Categorie' : 'Add a new Categorie';
      const description = initialData ? 'Edit a product.' : 'Add a new product';
      const toastMessage = initialData ? 'Product updated.' : 'Product created.';
      const action = initialData ? 'Save changes' : 'Create';
      const defaultValues = initialData ? {
          ...initialData,
        // images: null,
        visibility : true,
      } : {
          name: '',
        images: null,
        visibility: true,
        
    };
    

    const form = useForm({
    // mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues
    });
    const handleImageUpdate = async (data) => {
        try {
            const formData = new FormData();
            formData.append('image', data.images);
            const response = await axiosInstance.post(`/api/categories/${form.getValues('id')}/update-image`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if(response)
            {
            console.log("The Response Data => ",response.data);
            }
        } catch (error) {
            console.error('Error updating image:', error);
        }
    };
    console.log("The Inital Data => ", form.getValues('id'));

    const onSubmit = async (data) => {
      const { images, name, visibility } = data;
      console.log('Title:', name);
      console.log('Image:', images);
      console.log('Visibility:', visibility);
    if(initialData)
    {
        handleUpdate({id: form.getValues('id'),data: data,toastMessage: toastMessage})
        handleImageUpdate(data)
    }
    else{
        handleAddUser(data, toastMessage)
    }
    };
  return (
    <>
         <DialogTitle>{title}</DialogTitle>
            <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <div className="flex flex-col gap-3 items-center justify-center pt-4">
                                        <div className="flex gap-3"><FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <Input type="text" placeholder="Name" disabled={loading}  className="w-[37rem] p-2 border border-gray-300 rounded-md"  {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                   </div>
                            <div className="flex gap-3">
                            <FormField
                                  control={form.control}
                                  name="images"
                                  render={({ field, formState }) => (
                                  <FormItem>

                                  <FormLabel>Categorie Image</FormLabel>
                                  <FormControl>
                                  <Uploader onChange={(image) => form.setValue("images", image)}  getValue={form.getValues('image')}/>
                                  </FormControl>
                                  {formState.errors.images && (
                                    <FormMessage error={formState.errors.images.message} />
                                  )}
                                  </FormItem>
                                  )}
                                  />
                            </div>
                            
                            <FormField
                                    control={form.control}
                                    name="visibility"
                                    render={({ field }) => (
                                        <FormItem>
                                        <div className="flex gap-3 mt-5">
                                            <FormLabel style={{fontSize:"20px"}}>
                                            Visibilty
                                            </FormLabel>
                                        <FormControl>
                                            <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            />
                                            
                                        </FormControl>
                                        </div>
                                        </FormItem>
                                    )}
                                    />
                           
                                <Button type="submit" variant="outline" className="justify-end items-end bg-black hover:bg-black text-white hover:text-white" 
                                // onClick={handleAddUser}
                                >{action}</Button>
                            
                        </div>
                </form>
            </Form>
    </>
  )
}

export default FormAdd;