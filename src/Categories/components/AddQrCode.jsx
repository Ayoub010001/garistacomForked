import React, { createContext, useState } from 'react';
import { MdAddBox } from 'react-icons/md';
import { Input } from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { addCategorie, deleteCategorie } from '../../../actions/Categorie/CreateCategorie';
import { axiosInstance } from '../../../axiosInstance';
import { useEffect } from 'react';
import { fetchCategorie } from '../../../actions/Categorie/getCategories';
import CategorieCard from './CategorieCard';
import { APIURL } from '../../../lib/ApiKey';
import { Controller, useForm } from 'react-hook-form';
import './uploader.css';
import Spinner from 'react-spinner-material';



function AddQrCode({props}) {
   
    const [Categories, setCategories] = useState([])
    const [imageUrls, setImageUrls] = useState([]);
    const { control, handleSubmit, register, formState: { errors }, setError } = useForm();
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchCat = async () =>{
            // const result = await fetchCategorie();
            setLoading(true)
            try {
                const categorieDates = await fetchCategorie(); // Call the fetchCategorie function to get the data
                if(categorieDates)
                {
                    console.log("The Categories => ",categorieDates);
                    setCategories(categorieDates)
                    setLoading(false)
                }
                // const { Categories } = categorieData;
                // console.log("the cte => ", categorieData[0].image , "the name => ", categorieData[0].name);
                // const images = JSON.parse(categorieData[0].image); // Parse the JSON-encoded string to extract the array of image paths
                // setImageUrls(images);
              } catch (error) {
                console.error('Error fetching image URLs:', error);
              }
            // console.log("resulat => ", result);
        }
        setName("")
        setFile("")
        fetchCat();
    }, [])
    const [name,setName] = useState("");
    const [images,setImages] = useState([]); // État pour stocker le rôle sélectionné
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [usersList, setUsersList] = useState([]);

    const handleDelete = () => {
        setFile(null);
        setFileName("");
        // setError('file', { type: 'required', message: 'Please select a file.' });

        // setImage(null);
      };

    

      const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];
        // setFile(selectedFile);
        if (selectedFile) {
            setFile(selectedFile);
            setFileName(selectedFile.name);
            // setError('file', { type: 'manual', message: '' }); // Clear any previous error message
        }
    };
    const handleAddUser = async (data) => {
        console.log("The Images => ", images);
        const formData = new FormData();
          // Append each selected image to the formData
        //   for (let i = 0; i < fileName.length; i++) {
        formData.append("image", file);
        // }
        formData.append("name", data);
        formData.append("resto_id", 1);
        try {
            const response = await fetch("http://127.0.0.1:8000/api/categories", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                console.log("Category added successfully");
                const newCategoryData = await axiosInstance.get("/api/categories");
                console.log("The New Category: ", newCategoryData.data);
                setName("")
                setFile("")
                setLoading(true)
                if(newCategoryData.data)
                {
                    setCategories(newCategoryData.data); // Add the new category to the existing categories list    
                    setLoading(false)
                }
                else{
                    setLoading(true)
                }
            } else {
                console.error("Failed to add category");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleDeleteCategrorie = async (itemId) =>{
        try{
            setLoading(true)
          
            const response = await deleteCategorie(itemId);
            if(response)
            {
                console.log("The Response => ",response);
            }
            const newCategoryData = await axiosInstance.get("/api/categories");
            console.log("The New Category: ", newCategoryData.data);
            if(newCategoryData)
            {
                console.log("working");
                setCategories(newCategoryData.data); // Add the new category to the existing categories list    
                setLoading(false)
            }
            else{
                console.log("not working");
                setLoading(true)
            }
        }catch(err)
        {
            console.log("error => ", err);
        }
    } 
    console.log("The Olded Category: ", Categories);
    
    const onSubmit = (data) => {
        // Handle form submission here
        console.log("The Data =>",data);
        if(fileName == "")
        {
            setError('file', { type: 'required', message: 'Please select a file.' });
        } 
        handleAddUser(data.name)
    };
    console.log("cate ", fileName , " Images => ", file);
    return (
        <div className='grid grid-cols-5 lg:gap-8 max-w-[1400px]'>

            {
             loading && Categories
             ?
             <div className='justify-center items-center flex  h-[50vh]'>
               <Spinner size={100} spinnerColor={"#28509E"} spinnerWidth={1} visible={true} style={{borderColor: "#28509E", borderWidth: 2}}/>
             </div>
             :
             <>
               {
                Categories.map((item, i) => (
                    <CategorieCard key={i} item={item} handled={() => handleDeleteCategrorie(item.id)}/>
                ))
               }
             </>
            }

            <Dialog >
                <DialogTrigger>
                    <Card className="w-[250px] h-[280px] border-dashed grid place-content-center">
                        <CardHeader className="text-center">
                            <CardTitle className="text-lg">Add Categories to sort your dishes and drinks type</CardTitle>


                        </CardHeader>
                        <CardContent>
                                <button
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#ffffff',
                                        width: '100%',
                                        height: '100%',
                                        border: 'none',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => {
                                        console.log('Icon clicked');
                                    }}
                                >
                                    <MdAddBox size={50} style={{ color: '#000' }} />
                                </button>
                        </CardContent>
                    </Card>
                </DialogTrigger>
                <DialogContent className="max-w-[50rem]">
                    <DialogHeader>
                        <DialogTitle>Add a new Categorie</DialogTitle>
                        <DialogDescription >Create a new Categories Lorem ipsum dolor sit amet consectetur </DialogDescription>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col gap-3 items-center justify-center pt-4">
                                <div className="flex flex-col gap-1">
                                <Controller
                                    name="name"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'Name is required' }}
                                    render={({ field }) => (
                                        <>
                                            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                                            <Input type="text" placeholder="name" className={`w-[37rem] focus-visible:ring-white p-2 border ${errors.name ? 'border-red-500 ' : 'border-gray-300'} rounded-md`} {...field} />
                                        </>
                                    )}
                                />
                                </div>
                                <div className="mt-2 w-[590px]">
                                    {/* Uploader component here */}
                                    {/* <Uploader setImages={setImages} /> */}
                                    {errors.file && <span className="text-red-500 text-sm">{errors.file.message}</span>}

                                    <div className={`flex flex-col justify-center items-center border-[2px] border-dashed h-[250px] cursor-pointer rounded-[5px] w-full ${errors.file  ? 'border-red-500 ' : 'border-black'}`} onClick={() => document.querySelector(".input-field").click()}>
                                    <input
                                            type="file"
                                            accept='image/*'
                                            // className={`input-field`}
                                            className='input-field h-full w-full'
                                            {...register('file', { required: 'Please select a file.' })}
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
                                </div>
                                <div className="flex gap-3 mt-5">
                                    <Label style={{ fontSize: "20px" }}>Visibility</Label>
                                    <Controller
                                        name="visibility"
                                        control={control}
                                        defaultValue={false}
                                        render={({ field }) => (
                                            <Switch {...field} />
                                        )}
                                    />
                                </div>
                                <DialogClose>
                                   <Button variant="outline" className="justify-end items-end bg-black text-white mt-5 hover:bg-black hover:text-white" type="submit">Add Categories</Button>
                                </DialogClose>
                            </div>
                        </form>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>

    );
}

export default AddQrCode;
