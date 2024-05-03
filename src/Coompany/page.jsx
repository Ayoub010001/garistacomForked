import React from 'react';

import {Link} from "react-router-dom"
import { FiInstagram } from 'react-icons/fi'
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
import { PiTiktokLogoLight } from "react-icons/pi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { BsSnapchat } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
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
import { useEffect } from 'react';
import { useState } from 'react';
import { getCurrency } from '../../actions/Currency/CurrencyApi';
import Spinner from 'react-spinner-material';
import { getInfo } from '../../actions/Info/Info';

export const description =
  "A product edit page. The product edit page has a form to edit the product details, stock, product category, product status, and product images. The product edit page has a sidebar navigation and a main content area. The main content area has a form to edit the product details, stock, product category, product status, and product images. The sidebar navigation has links to product details, stock, product category, product status, and product images."

export const iframeHeight = "1200px"

export const containerClassName = "w-full h-full"

export default function DashboardCompany() {

    const [loading, setLoading] = useState(false)
    const [currValue, setCurrValue] = useState('')
    const [currData, setCurrData] = useState([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [address, setAddress] = useState('')
    const [wifiPass, setWifiPass] = useState('')
    const [website_url, setWebsite_url] = useState('')
    const [facebook, setFacebook] = useState('')
    const [instgram, setInstgram] = useState('')
    const [tiktok, setTiktok] = useState('')
    const [youtube, setYoutube] = useState('')
    const [snapshat, setSnapshat] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [google_buss, setGoogle_buss] = useState('')
    const [trustpilot_link, setTrustpilot_link] = useState('')
    const [cover_image, setCover_image] = useState('')
    const [facebook_pixel, setFacebook_pixel] = useState('')
    const [tiktok_pixel, setTiktok_pixel] = useState('')
    const [ads_pixel, setAds_pixel] = useState('')
    const [anylytics, setAnylytics] = useState('')
    useEffect(() => {
       const fetchValue = async () => {
        setLoading(true)
        try {
           const response = await getCurrency();
           const resInfo = await getInfo();

           if(response && resInfo)
           {
            console.log("the Response => ", resInfo);
            setCurrData(response)
            setCurrValue(response[2].type)
            let Data = [];
            Data = resInfo;
            Data.map((item) => {
                setDescription(item.description)
                setName(item.resto.name)
                setAddress(item.address)
                setWifiPass(item.wifi_pass)
                setWebsite_url(item.website_url)
                setFacebook(item.facebook)
                setInstgram(item.instgram)
                setTiktok(item.tiktok)
                setYoutube(item.youtube)
                setSnapshat(item.snapshat)
                setWhatsapp(item.whatsapp)
                setGoogle_buss(item.google_buss)
                setTrustpilot_link(item.trustpilot_link)
                setCover_image(item.cover_image)
                setFacebook_pixel(item.facebook_pixel)
                setTiktok_pixel(item.tiktok_pixel)
                setAds_pixel(item.ads_pixel)
                setAnylytics(item.anylytics)
            })
            setLoading(false)
           }
        }
        catch(err){
            console.log("the error => ", err);
        }
       }

       fetchValue();
    }, [])

    if(loading)
    {
        return(
            <div className='justify-center items-center flex  h-[50vh]'>
                <Spinner size={100} spinnerColor={"#28509E"} spinnerWidth={1} visible={true} style={{borderColor: "#28509E", borderWidth: 2}}/>
            </div>
        )
    }
  return (

    // <TooltipProvider>
    <>
         <div className="flex items-center justify-between space-y-2 p-4 bg-muted/40">
            <h2 className="text-3xl font-bold tracking-tight">Restaurant Settings</h2>
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
                <div className="grid auto-rows-max items-start gap-10 lg:col-span-2 lg:gap-8">
                    <Card >
                    <CardHeader>
                        <CardTitle className="border-b-2 pb-2">About</CardTitle>

                    </CardHeader>
                    <CardContent>

        <div className=''>
            <div className='flex flex-col md:flex-row w-full py-5 gap-5 items-center'>
            <div className='w-full md:w-1/2'>
                <label className=''>Name :</label>
                <Input value={name} onChange={(e) => setName(e.target.value)} className='mt-3' placeholder='name' type="text"/>
            </div>
            <div className='w-full md:w-1/2'>
                <label className='block mb-3'>Logo :</label>
                <Input  id="example1" type="file" class="block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-neutral-500 file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60" />
            </div>
            </div>
            <div className='flex flex-col md:flex-row w-full  gap-5 items-center'>
            <div className='w-full md:w-full'>
                <label className='block mb-3'>Description :</label>
                <Input value={description} onChange={(e) => setDescription(e.target.value)}  className='mt-3' placeholder='description' type="text"/>
            </div>
            </div>
            <div className='w-full md:w-full my-5'>
                <label className='block mb-3'>Cover Photo :</label>
                <Input id="example1" type="file" class="block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-neutral-500 file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60" />

            </div>
            <div className='w-full md:w-full'>
                <label className='block mb-3'>Adress :</label>
                <Input value={address} onChange={(e) => setAddress(e.target.value)} className='mt-3' placeholder='Adress' type="text"/>
            </div>
            <div className='flex flex-col md:flex-row w-full py-5 gap-5 items-center'>
            <div className='w-full md:w-1/2'>
                <label className='block mb-3'>Currency :</label>
                <Select onValueChange={(e) => {setCurrValue(e); console.log("The Values Change => ",e);}}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={currValue} />
                </SelectTrigger>
                <SelectContent className='cursor-pointer'>
                    <SelectGroup>
                    
                    {
                        currData.map((item)=> (
                            <SelectItem className='cursor-pointer' value={item.type}>{item.type}</SelectItem>
                        ))
                    }
                    {/* <SelectItem value="paypal">PayPal</SelectItem>
                    <SelectItem value="cash">Espèces</SelectItem>
                    <SelectItem value="transfer">Virement bancaire</SelectItem>
                    <SelectItem value="crypto">Crypto-monnaie</SelectItem> */}
                    </SelectGroup>
                </SelectContent>
                </Select>
            </div>
            <div className='w-full md:w-1/2'>
                <label className='block mb-3'>Wifi password :</label>
                <Input value={wifiPass} onChange={(e) => setWifiPass(e.target.value)}  id="picture" type="text" className='mt-3' placeholder="wifi"/>
            </div>
            </div>
            <div>
                <label for="example7" className="mb-1 block text-sm font-medium text-gray-700">Restaurant URL :</label>
                <div className="relative z-0 flex">
                    <div className="inset-y-0 left-0 flex items-center rounded-md rounded-r-none border border-r-0 border-gray-300 bg-gray-100 px-2.5 text-gray-700">https://</div>
                    <Input value={website_url} onChange={(e) => setWebsite_url(e.target.value)} type="url" id="example7" className="block w-full rounded-md rounded-l-none border border-gray-300 shadow-sm focus:z-10 focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="example.com" />
                </div>
            </div>
        </div>

                    </CardContent>
                    </Card>
                    <Card>
                    <CardHeader>
                        <CardTitle className='border-b-2 pb-2'>Tracking</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className='grid '>
        <div className='flex flex-col md:flex-row w-full py-5 gap-5 items-center'>
            <div className='w-full md:w-1/2'>
                <label className=''>Google analytics :</label>
                <Input value={anylytics} onChange={(e) => setAnylytics(e.target.value)} className='mt-3' placeholder='Google analytics' type="text"/>
            </div>
            <div className='w-full md:w-1/2'>
                <label className='block mb-3'>Facebook Pixel :</label>
                <Input value={facebook_pixel} onChange={(e) => setFacebook_pixel(e.target.value)} className='mt-3' placeholder='Facebook Pixel' type="text"/>
                </div>
            </div>
            <div className='flex flex-col md:flex-row w-full  gap-5 items-center'>
            <div className='w-full md:w-full'>
                <label className='block mb-3'>Google ads Pixel :</label>
                <Input value={ads_pixel} onChange={(e) => setAds_pixel(e.target.value)} className='mt-3' placeholder='Google ads Pixel' type="text"/>
            </div>
            <div className='w-full md:w-full'>
                <label className='block mb-3'>Tiktok pixel :</label>
                <Input value={tiktok_pixel} onChange={(e) => setTiktok_pixel(e.target.value)} className='mt-3' placeholder='Tiktok pixel' type="text"/>
            </div>
            </div>
        </div>
                    </CardContent>

                    </Card>
                    {/* <Card>
                    <CardHeader>
                    <CardTitle className='border-b-2 pb-2'>Tracking</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className='flex flex-col md:flex-row w-full pt-5 gap-5 items-center'>
                        <div className='w-full md:w-full'>
                        <label className='block mb-3'>Trustpilot :</label>
                            <Input  className='mt-3' placeholder='Trustpilot' />
                        </div>
                        <div className='w-full md:w-full'>
                            <label className='block mb-3'>Google Business :</label>
                            <Input  className='mt-3' placeholder='Google Business' />
                            </div>
                        </div>
                    </CardContent>
                    </Card> */}
                </div>
                <div className="grid auto-rows-max items-start gap-4 lg:gap-8">

                    <Card className="overflow-hidden ">
                    <CardHeader>
                        <CardTitle className='border-b-2 pb-2'>Social Media</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-center items-center">
                    <div>
                    <div className='flex items-center m-5 justify-center'>
                        <AiOutlineInstagram className='w-10 h-10 text-gray-500' />
                        <Input value={instgram} onChange={(e) => setInstgram(e.target.value)} className='m-5 w-[16rem]' placeholder='Instagram Account...' />
                    </div>
                    <div className='flex items-center m-5'>
                        <FiFacebook  className='w-10 h-10 text-gray-500' />
                        <Input value={facebook} onChange={(e) => setFacebook(e.target.value)} className='m-5 w-[16rem]' placeholder='Instagram Account...' />
                    </div>
                    <div className='flex items-center m-5'>
                        <PiTiktokLogoLight className='w-10 h-10 text-gray-500' />
                        <Input value={tiktok} onChange={(e) => setTiktok(e.target.value)}  className='m-5 w-[16rem]' placeholder='Instagram Account...' />
                    </div>
                    <div className='flex items-center m-5'>
                        <BsSnapchat className='w-10 h-10 text-gray-500' />
                        <Input value={snapshat} onChange={(e) => setSnapshat(e.target.value)}  className='m-5 w-[16rem]' placeholder='Instagram Account...' />
                    </div>
                    <div className='flex items-center m-5'>
                        <AiOutlineYoutube className='w-10 h-10 text-gray-500' />
                        <Input value={youtube} onChange={(e) => setYoutube(e.target.value)} className='m-5 w-[16rem]' placeholder='Instagram Account...' />
                    </div>
                </div>
                    </CardContent>
                    </Card>
                    <Card>
                    <CardHeader>
                    <CardTitle className='border-b-2 pb-2'>Feedback</CardTitle>
                    </CardHeader>
                    <CardContent>

                        <div className='w-full md:w-full'>
                        <label className='block mb-3'>Trustpilot :</label>
                            <Input value={trustpilot_link} onChange={(e) => setTrustpilot_link(e.target.value)} className='mt-3' placeholder='Trustpilot' />
                        </div>
                        <div className='w-full md:w-full'>
                            <label className='block mb-3'>Google Business :</label>
                            <Input value={google_buss} onChange={(e) => setGoogle_buss(e.target.value)} className='mt-3' placeholder='Google Business' />
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
    </>

    // </TooltipProvider>
  )
}
