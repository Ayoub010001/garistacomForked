import React from 'react';

import {Link} from "react-router-dom"
import { FiInstagram } from 'react-icons/fi'
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare, FaTiktok ,FaSnapchatSquare,FaYoutube} from 'react-icons/fa'
import {
  ChevronLeft,
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Upload,
  Users2,
} from "lucide-react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip"
import { Separator } from '@radix-ui/react-dropdown-menu';

export const description =
  "A product edit page. The product edit page has a form to edit the product details, stock, product category, product status, and product images. The product edit page has a sidebar navigation and a main content area. The main content area has a form to edit the product details, stock, product category, product status, and product images. The sidebar navigation has links to product details, stock, product category, product status, and product images."

export const iframeHeight = "1200px"

export const containerClassName = "w-full h-full"

export default function DashboardProfile() {
  return (

    <TooltipProvider>
        <div className="flex items-center justify-between space-y-2 p-4 bg-muted/40">
            <h2 className="text-3xl font-bold tracking-tight">Profile</h2>
            <div
              className="flex items-center space-x-2 "
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: ".5rem",
              }}
            >
              <Button>Save</Button>
</div>
            </div>

    <div className="flex gap-4 min-h-screen w-full flex-col bg-muted/40">

      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">

        <main className="grid flex-1 items-start gap-10 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-[140rem] flex-1 auto-rows-max gap-4">

            <div className="grid gap-10 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-9">

              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                {/* <Card>
                  <CardHeader>
                    <CardTitle>Product Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="status">Status</Label>
                        <Select>
                          <SelectTrigger id="status" aria-label="Select status">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="draft">Draft</SelectItem>
                            <SelectItem value="published">Active</SelectItem>
                            <SelectItem value="archived">Archived</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card> */}
                <Card className="overflow-hidden h-[60rem]">
                  <CardHeader>
                    {/* <CardTitle className='border-b-2 pb-2'>Profile</CardTitle> */}
                  </CardHeader>
                  <CardContent className="flex justify-center items-center">

            <div className="card p-4">
                <div className="image flex flex-col justify-center items-center">
                    <button className="btn btn-secondary  overflow-hidden bg-neutral-300 flex justify-center items-center">
                        <img src="/public/avatar.png" height="100" width="150" alt="Profile" />
                    </button>
                    <span className="name mt-3">Eleanor Pena</span>
                    <span className="idd">Admin</span>

                    <div className="flex flex-row mt-3">
                        <span className="number">Email <span className="follow">Admin@gmail.com</span></span>
                    </div>
                    <div className="flex flex-row mt-3">
                        <span className="number">Tele <span className="follow">0675162919</span></span>
                    </div>

                    <div className="text mt-3">
                        <span>Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork.Artist/ Creative Director by Day #NFT minting@ with FND night.Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork.</span>
                    </div>
                    <div className="gap-3 mt-3 icons flex justify-center items-center">
                        <FaTiktok size={18} />
                        <FaFacebook />
                        <RiInstagramFill />
                    </div>


                </div>
            </div>
                  </CardContent>
                </Card>
                {/* <Card>
                  <CardHeader>
                    <CardTitle>Archive Product</CardTitle>
                    <CardDescription>
                      Lipsum dolor sit amet, consectetur adipiscing elit.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div></div>
                    <Button size="sm" variant="secondary">
                      Archive Product
                    </Button>
                  </CardContent>
                </Card> */}
              </div>
              <div className="grid auto-rows-max items-start gap-10 lg:col-span-2 lg:gap-8">
                <Card >
                  <CardHeader>
                    <CardTitle className="border-b-2 pb-2">Profile</CardTitle>

                  </CardHeader>
                  <CardContent>

                  <div className='w-full'>
                    <label >User name:</label>
                    <Input  className='my-3' placeholder='username' disabled/>
                </div>
            <div className='w-full flex items-center gap-5 pt-4'>

                <div className='w-full'>
                    <label >First name:</label>
                    <Input  className='my-3' placeholder='first name...'/>
                </div>
                <div className='w-full'>
                    <label>Last name :</label>
                    <Input className='my-3' placeholder="last name..."/>
                </div>


            </div>
            <div className='w-full flex items-center gap-5 '>
                <div className='w-full'>
                    <label >Email:</label>
                    <Input  className='my-3' placeholder='example@gmail.com'/>
                </div>
                <div className='w-full'>
                    <label>Mobile:</label>
                    <Input className='my-3' placeholder="0675162919"/>
                </div>
            </div>
            <div className='w-full flex items-center gap-5 '>
            <div className='w-full'>
                    <label >Role:</label>
                    <Input  className='my-3' placeholder='owner' disabled/>
                </div>
                <div className='w-full md:w-full'>
            <label className='block mb-3'>Photo :</label>
            <Input id="example1" type="file" class="block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-neutral-500 file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60" />

          </div>
            </div>





                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className='border-b-2 pb-2'>Change password</CardTitle>
                  </CardHeader>
                  <CardContent>
                  <div className=" mt-4 mb-4 flex justify-center bg-white">
            {/* <div className=" p-4"> */}

            <div className='w-full  '>
                 <label >Current Password:</label>
                <Input className='my-3' placeholder='write password' />
                <label >New Password:</label>
                <Input className='my-3' placeholder='write password' />
                <label >Re-type New Password:</label>
                <Input className='my-3' placeholder='write password' />
                <div className='flex justify-end'>
                    <Button >Change password</Button>
                </div>

            </div>
        </div>
                  </CardContent>

                </Card>

              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
              <Button variant="outline" size="sm">
                Discard
              </Button>
              <Button size="sm">Save Product</Button>
            </div>

          </div>

        </main>

      </div>

    </div>

    </TooltipProvider>
  )
}
