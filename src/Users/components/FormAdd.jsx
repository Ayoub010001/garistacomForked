import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
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
// import Tiptap from "@/components/Tiptap";
export const FormAdd = ({ initialData, categories }) => {
  const formSchema = z.object({
    firstName: z.string().min(1,'Please enter a valid first name'),
    lastName: z.string().min(1,'Please enter a valid last name'),
    phone : z.string().min(9,'Please enter a valid phone number'),
    userName: z.string().min(1,'Username is required'),
    email: z.string().email(),
    password: z.string().min(8, "Password is required"),
    roleId: z.string().min(1,'Please select a role.'),
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
  const title = initialData ? 'Edit product' : 'Create product';
  const description = initialData ? 'Edit a product.' : 'Add a new product';
  const toastMessage = initialData ? 'Product updated.' : 'Product created.';
  const action = initialData ? 'Save changes' : 'Create';
  const defaultValues = initialData ? {
    ...initialData,
    // price: parseFloat(String(initialData?.price)),
    // priceBig: parseFloat(String(initialData?.priceBig))
  } : {
    firstName: '',
    lastName: '',
    userName: '',
    email:  '',
    password:  '',
    roleId: '',
    phone : ''
  };
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues
  });
  const onSubmit = async (data) => {
    console.log(`Data : ${data}`)
    // try {
    //   setLoading(true);
    //   if (initialData) {
    //     await axios.patch(`/api/product/${params.productId}`, data);
    //   } else {
    //     await axios.post(`/api/product`, data);
    //   }
    //   router.refresh();
    //   router.push(`/dashboard/products`);
    //   toast.success(toastMessage);
    // } catch (error) {
    //   toast.error('Something went wrong.');
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <>
    <div className="flex items-center justify-between">
        {/* <Heading title={title} description={description} /> */}
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>


      <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-[750px] mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center">Create User</h2>
          <div className="flex flex-col gap-3 items-center justify-center pt-4">
              <div className="flex gap-3">
                <FormField
                    control={form.control}
                    name="firstName"
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
                    name="lastName"
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
                    name="userName"
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
                    name="roleId"
                    render={({ field }) => (
                      <FormItem>
                              <Select disabled={loading} onValueChange={field.onChange}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue defaultValue={field.value} placeholder="Role" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="owner">Manager</SelectItem>
                                      <SelectItem value="waiter">Waiter</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                      </FormItem>
                    )}
                    /> 
              </div>
        
          <Button disabled={loading} type="submit" variant="outline" className="justify-center !flex items-center max-w-max mx-auto w-full bg-black">
          Add User
              </Button>
        </form>
      </Form>
    
    </>
  );
};