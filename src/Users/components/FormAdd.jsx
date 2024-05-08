import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Trash } from "lucide-react";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
// import { Heading } from "@/components/ui/heading";
// import { AlertModal } from "@/components/modals/alert-modal";
// import ImageUpload from "@/components/ui/image-upload";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { axiosInstance } from "../../../axiosInstance";
import Spinner from "react-spinner-material";
// import Tiptap from "@/components/Tiptap";
export const FormAdd = ({ initialData, roles, handleData, loading = false, handleUpdate }) => {

    console.log("The Inital Data => ", initialData);
  const formSchema = z.object({
    first_name: z.string().min(1,'Please enter a valid first name'),
    last_name: z.string().min(1,'Please enter a valid last name'),
    phone : z.string().min(9,'Please enter a valid phone number'),
    username: z.string().min(1,'Username is required'),
    email: z.string().email(),
    password: z.string().min(8, "Password is required"),
    role_id: z.string().min(1,'Please select a role.'),
  });
  const ProductFormValues = z.infer;
  const ProductFormProps = {
    initialData: null,
    roles: [],
  };
  const [open, setOpen] = useState(false);
  const [links, setLinks] = useState([]);
  const [linkInput, setLinkInput] = useState("");
  const title = initialData ? 'Edit User' : 'Create User';
  const description = initialData ? 'Edit a product.' : 'Add a new product';
  const toastMessage = initialData ? 'User updated.' : 'User created.';
  const action = initialData ? 'Save changes' : 'Create';
  const defaultValues = initialData ? {
    ...initialData,
    // price: parseFloat(String(initialData?.price)),
    // priceBig: parseFloat(String(initialData?.priceBig))
  } : {
    first_name: '',
    last_name: '',
    username: '',
    email:  '',
    password:  '',
    role_id: '',
    phone : ''
  };
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues
  });
  const onSubmit = async (data) => {
    console.log('Data : ', data , parseInt(data.role_id))
    
    if(initialData)
    {
        handleUpdate({
            data,
            toastMessage,
            id: initialData.id
        })
    }
    else{
        handleData({
            data,
            toastMessage
        })
    }
  };

  const filteredRoles = roles.filter(role => role.name === 'Manager' || role.name === 'Waiter');

  return (
    <>

      <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-[750px] mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center">{title}</h2>
          <div className="flex flex-col gap-3 items-center justify-center pt-4">
              <div className="flex gap-3">
                <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input className="w-72 p-2 border border-gray-300 rounded-md"  type="text" disabled={loading} placeholder="First name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="text" placeholder="Last name" className="w-72 p-2 border border-gray-300 rounded-md" disabled={loading} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
              </div>
              <div className="flex gap-3">
              <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="text" placeholder="Username" className="w-72 p-2 border border-gray-300 rounded-md" disabled={loading} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="text" placeholder="Phone" className="w-72 p-2 border border-gray-300 rounded-md" disabled={loading} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
              </div>
              <div className="flex gap-3">
              <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="text" placeholder="Email" className="w-72 p-2 border border-gray-300 rounded-md" disabled={loading} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="password" placeholder="password" className="w-72 p-2 border border-gray-300 rounded-md" disabled={loading} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> 
              </div>
          </div>
              <div className='max-w-[40%] mx-auto'>
              <FormField
                    control={form.control}
                    name="role_id"
                    render={({ field }) => (
                      <FormItem>
                              <Select disabled={loading}  onValueChange={field.onChange}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue  defaultValue={field.value} placeholder="Role" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {filteredRoles.map((role) => (
                                        <SelectItem key={role.id} value={role.id.toString()}>{role.name}</SelectItem>
                                    ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                      </FormItem>
                    )}
                    /> 
              </div>
              
        
           <Button disabled={loading} type="submit" variant="outline" className="justify-center !flex items-center max-w-max mx-auto w-full bg-black hover:bg-black text-white hover:text-white">
                {action}
            </Button>
        </form>
      </Form>
    
    </>
  );
};