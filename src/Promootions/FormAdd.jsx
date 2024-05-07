
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
import { Separator } from "@/components/ui/separator";
// import { Heading } from "@/components/ui/heading";
// import { AlertModal } from "@/components/modals/alert-modal";
// import ImageUpload from "@/components/ui/image-upload";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import Tiptap from "@/components/Tiptap";

export const FormAdd = ({ initialData, categories }) => {
  const formSchema = z.object({
    name: z.string().min(1),
    images: z.object({ url: z.string() }).array(),
    description: z.string().min(1),
    price: z.coerce.number().min(1),
    priceBig: z.coerce.number().min(1),
    categoryId: z.string().min(1),
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
    price: parseFloat(String(initialData?.price)),
    priceBig: parseFloat(String(initialData?.priceBig))
  } : {
    name: '',
    images: [],
    description: '',
    price: 0,
    categoryId: '',
    priceBig: 0
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(`/api/product/${params.productId}`, data);
      } else {
        await axios.post(`/api/product`, data);
      }
      router.refresh();
      router.push(`/dashboard/products`);
      toast.success(toastMessage);
    } catch (error) {
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/dashboard/products/`);
      router.refresh();
      router.push(`/dashboard/products`);
      toast.success('Product deleted.');
    } catch (error) {
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  const addLink = (e) => {
    e.preventDefault();
    if (linkInput.trim() !== "") {
      setLinks((prev) => [...prev, linkInput]);
      setLinkInput("");
    }
  };


  return (
    <>
    {/* <AlertModal 
      isOpen={open} 
      onClose={() => setOpen(false)}
      onConfirm={onDelete}
      loading={loading}
    /> */}
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
      <Separator />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-[750px] mx-auto">
=
                    <div className="md:grid md:grid-cols-1 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Product name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price for 30ML</FormLabel>
                  <FormControl>
                    <Input type="text" disabled={loading} placeholder="9.99" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="priceBig"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price for 50ML</FormLabel>
                  <FormControl>
                    <Input type="text" disabled={loading} placeholder="9.99" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control} 
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  {/* <Select disabled={loading} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue defaultValue={field.value} placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control} 
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  {/* <RichTextEditor
                      value={field.value} // Pass your initial value here
                      onChange={field.onChange}
                    /> */}
                    {/* <Textarea {...field} placeholder="text"/> */}
                  <FormMessage />
                </FormItem>
              )}
            />

          </div>  
          <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};