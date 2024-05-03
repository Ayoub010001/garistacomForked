import React,{useState} from "react"
import Uploader from "./uploader";

import {
  flexRender,
//   SortingState,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,

    getFilteredRowModel,
} from "@tanstack/react-table"
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    DoubleArrowLeftIcon,
    DoubleArrowRightIcon,
  } from "@radix-ui/react-icons"
  import { Input } from "@/components/ui/input"
//   import { Table } from "@tanstack/react-table"
import { BiSolidEdit } from "react-icons/bi";
import { Switch } from '@/components/ui/switch'


import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import { Button } from "@/components/ui/button"
import { FaCirclePlus } from "react-icons/fa6";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
  } from "@/components/ui/dialog";
  import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useEffect } from "react";
import { da, fi } from "date-fns/locale";
import { axiosInstance } from "../../axiosInstance";
import { Controller, useForm } from "react-hook-form";
import { addBanner, deleteBanner } from "../../actions/Banner/Banner";
import { APIURL } from "../../lib/ApiKey";
import { AddPromo } from "./AddPromo";
import DeletForm from "./DeletForm";
import UpdateForm from "./updateForm";
import Spinner from "react-spinner-material";
export function DataTable() {


    // const [sorting, setSorting] = useState([]);
    const [columnFilters, setColumnFilters] = useState([]);
    const { control, handleSubmit, register, formState: { errors }, setError,reset  } = useForm();
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [isChecking, setIsChecking] = useState('')
    // const [isActive, setIsActive] = useState("");

    const columns = [
      {
          accessorKey: "image",
          header: () => <div className="ml-1">IMAGE</div>,
          cell: ({ row }) => (
            <div className="capitalize ml-1 w-16">
                {/* {console.log("The Images of Update => ",JSON.parse(row.original) )} */}
                  <img className="h-16  rounded-full" alt={row.getValue("title")} src={`http://localhost:8000/storage/${row.original.image}`}/>
              </div>
          ),
      },
      {
          accessorKey: "title",
          header: "Title",
        },
  
  
      {
          accessorKey: "visibility",
          header: "VISIBLE",
          cell: ({ row }) => {
            const [isActive, setIsActive] = useState(row.getValue("visibility"));

              const handleToggleChange = () => {
                  setIsActive(!isActive);
                  // setIsChecking(isActive)
                  handleVisible(isActive)
              };
              return (
                  <div className="capitalize">
                      <Switch onClick={handleToggleChange} checked={isActive} />
                  </div>
              );
  
  
      }
  },
  
    {
      id: "actions",
      cell: ({ row }) => {
        const payment = row.original
       
        const [updateFormState, setUpdateFormState] = useState(false);
  
        return (
          <>
          <div className="flex gap-2">
          <Button onClick={() => setUpdateFormState(true)} >
              <BiSolidEdit size={20}/>
          </Button>
  
          <DeletForm id={row.original.id} handleDelete={handleDeleteItem}/>
          </div>
  
           <UpdateForm updateFormState={updateFormState} setUpdateFormState={setUpdateFormState} id={row.original.id} handleUpdate={handleUpdate} />
          </>
        )
      },
    },
  ]
    const handleDelete = () => {
        setFile(null);
        setFileName("");
      };

      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(false);

      const fetchValue = async () => {
        setLoading(true)
        try{
          
          const respone = await axiosInstance.get("/api/banners")
          console.log("The Response => ",respone.data);
          if(respone)
          {
            setData(respone.data)
            setLoading(false)
          }
        }
        catch(err)
        {
          console.log("The Error => ", err.message);
          if(err.message === "Request failed with status code 404")
          {
            setLoading(false)
          }
        }
      }
      
      useEffect(() => {
        // Fetch data from the API when the component mounts

        fetchValue()
      }, []);
    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];
        console.log("The SelectedFile => ",selectedFile);
        // setFile(selectedFile);
        if (selectedFile) {
            setFile(selectedFile);
            setFileName(selectedFile.name);
            // setError('file', { type: 'manual', message: '' }); // Clear any previous error message
        }
    };

    const handleDeleteItem = async (idDelete) => {
      // console.log("the Id Of delete", idDelete);
      try{
        const res = await deleteBanner(idDelete)
        if(res){
          console.log("Succedd => ",res);
          fetchValue()
        }
      }
      catch(err)
      {
        console.log('The Error => ',err);
      }
    }

    const handleUpdate = async ({
      id,
      title,
      file
    }) => {

      const formData = new FormData();
      formData.append('_method', 'PUT');
      formData.append("image", file);
      formData.append("title", title);
      formData.append("visibility", isAct);
      formData.append("resto_id", 1); // Assuming this is a default value for resto_id

      try {

          const response = await axiosInstance.post(`/api/banners/${id}`, formData,
            {
              headers: {
                "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data for file upload
              },
          }
          );
  
          if (response) {
              console.log("Banner Updated successfully", response.data);
              // setFile(null)
              // setFileName("")
              // reset();
              fetchValue();
              
          } else {
              console.error("Failed to add category");
          }

      } catch (error) {
          console.error("Error:", error);
      }
   }
    const handleVisible = async ({
      isActive
    }) => {

      console.log("The visibility => ", isActive);
   }
    
    const handleAddUser = async (data) => {
      // console.log("The Images => ", images);


      const formData = new FormData();
      formData.append("image", file);
      // }
      formData.append("title", data.name);
      formData.append("resto_id", 1);
      try {
          const response = await fetch(`${APIURL}/api/banners/`, {
              method: "POST",
              body: formData,
          });
  
          if (response.ok) {
              console.log("Banner added successfully");
              setFile(null)
              setFileName("")
              reset();
              fetchValue();
              
          } else {
              console.error("Failed to add category");
          }
      } catch (error) {
          console.error("Error:", error);
      }
  };

    const table = useReactTable({
        data,
        columns,
        initialState: {
            pagination: {
                pageIndex: 0,
                pageSize: 4,
            },
        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),

        state: {
            columnFilters,
        },
    });
  

    const onSubmit = (data) => {
      // Handle form submission here
      console.log("The Data =>",data);
      handleAddUser(data);
  };


    console.log("The file => ", isChecking);

    if(loading)
    {
      return(
        <div className='justify-center items-center flex  h-[50vh]'>
          <Spinner size={100} spinnerColor={"#28509E"} spinnerWidth={1} visible={true} style={{borderColor: "#28509E", borderWidth: 2}}/>
        </div>
      )
    }
  return (
    <>
      <div className="flex items-center py-4 justify-between pr-4 border-b-[1px]">
                <div className="flex items-center gap-10 w-5/12">
                    <Input
                        placeholder="Filter Names..."
                        value={
                            (table.getColumn("title")?.getFilterValue() ) ??
                            ""
                        }
                        onChange={(event) =>
                            table.getColumn("title")?.setFilterValue(
                                event.target.value
                            )
                        }
                        className="max-w-sm  border-solid outline-none "
                    />
                </div>
                <div className="flex justify-between gap-3">

                    <AddPromo 
                    errors={errors}
                    file={file}
                    fileName={fileName}
                    handleImageChange={handleImageChange}
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                    register={register}
                    control={control}
                    handleDelete={handleDelete}
                    />
                </div>
            </div>

          <div className="rounded-md border">

            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      )
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

       <div className="flex items-center justify-between px-2">
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Rows per page</p>
                      <Select
                        value={`${table.getState().pagination.pageSize}`}
                        onValueChange={(value) => {
                          table.setPageSize(Number(value))
                        }}
                      >
                        <SelectTrigger className="h-8 w-[70px]">
                          <SelectValue placeholder={table.getState().pagination.pageSize} />
                        </SelectTrigger>
                        <SelectContent side="top">
                          {[2, 5, 10, 15, 20].map((pageSize) => (
                            <SelectItem key={pageSize} value={`${pageSize}`}>
                              {pageSize}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
          </div>
          <div className="flex items-center space-x-6 lg:space-x-8">

            <div className="flex w-[100px] items-center justify-center text-sm font-medium">
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </div>

            <div className="flex items-center justify-end space-x-2 py-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="bg-zinc-500"
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="bg-black"
            >
              Next
            </Button>
          </div>
          </div>
    </div>


    </>
  )
}
