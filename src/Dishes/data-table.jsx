import React,{useEffect, useState} from "react"
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


import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaCirclePlus } from "react-icons/fa6";
import { Switch } from '@/components/ui/switch'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
  } from "@/components/ui/dialog";
  // import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { axiosInstance } from "../../axiosInstance";
import { useForm } from "react-hook-form";
import AddDiche from "./AddDiche";
import DeletForm from "./DeleteForm";
import { BiSolidEdit } from "react-icons/bi";
import UpdateForm from "./updateForm";
export function DataTable({
  categries
}) {
    const columns = [
      {
          accessorKey: "image",
          header: () => <div className="ml-1">IMAGE</div>,
          cell: ({ row }) => (
              <div className="capitalize ml-1 w-16">
                  <img className="h-16  rounded-full" src={row.getValue("image")}/>
              </div>
          ),
      },
      {
          accessorKey: "name",
          header: "NAME",
      },
      {
        accessorKey: "categories",
        header: "CATEGORIES",
        cell: ({ row }) => {

            return (
                <div className="capitalize">
                    {row.original.categorie.name}
                </div>
            );


    }
      },
      {
        accessorKey: "price",
        header: "PRICE",
      },
      {
          accessorKey: "visible",
          header: "VISIBLE",
          cell: ({ row }) => {
  
              const [isActive, setIsActive] = useState(row.getValue("visible"));
  
              const handleToggleChange = () => {
                  setIsActive(!isActive);
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
    
    
              <DeletForm id={row.original.id} />
            </div>
    
    
    
            <UpdateForm updateFormState={updateFormState} setUpdateFormState={setUpdateFormState} />
            </>
          )
        },
      },
  ]
    // const [sorting, setSorting] = useState([]);
    const [columnFilters, setColumnFilters] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchValue = async () => {
      setLoading(true)
      try{
        
        const respone = await axiosInstance.get("/api/dishes")
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

      fetchValue()
    }, []);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [categroieData, setCategorieData] = useState('');

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

    const HandleOpen =()=>{
        SetisOpen(true)

    }

    const onSubmit = async () => {
       console.log("Test");
    };
  
  console.log("The Data create => ",HandleOpen);
  return (
    <>
      <div className="flex items-center py-4 justify-between pr-4 border-b-[1px]">
                <div className="flex items-center gap-10 w-5/12">
                    <Input
                        placeholder="Filter Names..."
                        value={
                            (table.getColumn("name")?.getFilterValue() ) ??
                            ""
                        }
                        onChange={(event) =>
                            table.getColumn("name")?.setFilterValue(
                                event.target.value
                            )
                        }
                        className="max-w-sm  border-solid outline-none "
                    />
                </div>
                <div className="flex justify-between gap-3">

             <Dialog  className=" p-8 shadow-lg h-[45rem] w-[65rem] rounded-xl">
                  <DialogTrigger className="flex justify-center">
                          <Button variant="ghost" className="relative  rounded-md bg-black text-white">
                             Add Dishes
                          </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[55rem]">
                         <AddDiche categries={categries}/>
                          {/* <DialogFooter className="flex justify-center items-center">
                      </DialogFooter> */}
                  </DialogContent>
              </Dialog>
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
            className="bg-zinc-600"
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
