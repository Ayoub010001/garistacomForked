import React,{useEffect, useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
    DialogTitle,
    DialogDescription,
    DialogClose,
    DialogFooter,
  } from "@/components/ui/dialog";
  import { Input } from "@/components/ui/input"
  import {Label} from "@/components/ui/label"
  import { Switch } from "@/components/ui/switch"
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import Uploader from "./uploader";
import { Button } from "@/components/ui/button"
import { fetchCategorieById } from "../../../actions/Categorie/getCategories";
import { useForm } from "react-hook-form";
import Spinner from 'react-spinner-material';
import { updateCategorie } from "../../../actions/Categorie/CreateCategorie";

export default function UpdateForm({updateFormState, setUpdateFormState, id}) {

    const [images, setImages] = useState([]);
    const [image, setImage] = useState(null);
    const [Categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    const { control, handleSubmit, register, formState: { errors }, setError } = useForm();
    const [file, setFile] = useState(null);
    const [isChecked, setIsChecked] = useState(true)
    console.log("The Id => ", id); 
    const [fileName, setFileName] = useState("No selected file")
    const maxNumber = 3;
    const [name, setName] = useState()

    const handleRoleChange = (selectedRole) => {
        setRole(selectedRole);
    };



    useEffect(() => {
        const fetchCat = async () =>{
            // const result = await fetchCategorie();
            setLoading(true)
            try {
                const categorieDates = await fetchCategorieById(id); // Call the fetchCategorie function to get the data
                if(categorieDates)
                {
                    console.log("The Categories of Update => ",categorieDates);
                    categorieDates.map((item) => {
                        setCategories(item)
                        setName(item.name)
                    })
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
    
        setFile(null)
        setFileName("")
        setCategories([])
        fetchCat();

    }, [])

    const handleUpdate = async () => {
       try{
           const res = await updateCategorie({
            id,
            name,
           })

           if(res){
            console.log("the Res => ",res);
           }
       }
       catch(err){
        console.log("The Error => ", err);
       }
    }
    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];
        // setFile(selectedFile);
        if (selectedFile) {
            setFile(selectedFile);
            setFileName(selectedFile.name);
            // setError('file', { type: 'manual', message: '' }); // Clear any previous error message
        }
    };

  return (
    <Dialog open={updateFormState} onOpenChange={setUpdateFormState} className=" p-8 shadow-lg h-[45rem] w-[65rem] rounded-xl">
       <DialogContent className="max-w-[50rem]">
         {
             loading && Categories
             ?
             <div className='justify-center items-center flex  h-[50vh]'>
               <Spinner size={100} spinnerColor={"#28509E"} spinnerWidth={1} visible={true} style={{borderColor: "#28509E", borderWidth: 2}}/>
             </div>
             :
                <DialogHeader>
                    <DialogTitle>Update Categorie</DialogTitle>
                    <DialogDescription >Create a new Categories Lorem ipsum dolor sit amet consectetur </DialogDescription>
                    <div className="flex flex-col gap-3 items-center justify-center pt-4">
                        <div className="flex gap-3">
                            <Input type="text" placeholder="name" className="w-[37rem] p-2 border border-gray-300 rounded-md" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="flex gap-3">
                        <div className="mt-2 mb-4 w-[590px]">
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

                                    {
                                    file 
                                    ? 
                                        <img src={URL.createObjectURL(file)} width={150} height={150} alt={fileName} />
                                        : 
                                        <>
                                            <img src={`http://localhost:8000/${Categories.image}`} className="row-span-3 h-[13rem] w-[15rem]  object-cover" />
                                        </>
                                    }

                                </div>

                                {
                                    file ?
                                    <section className='uploaded-row'>
                                        <AiFillFileImage color='black' />
                                        <span className='upload-content'>
                                        {fileName} -
                                        {/* <MdDelete onClick={handleDelete} /> */}
                                        </span>
                                    </section>
                                    :
                                    <></>
                                }
                            </div>
                        </div>
                        <div className="flex gap-3 ">
                        <Label  style={{fontSize:"20px"}}>Visibilty</Label>
                        <Switch checked={isChecked} onCheckedChange={() => setIsChecked(!isChecked)}/>
                        </div>
                        <DialogClose>
                            <Button onClick={handleUpdate} variant="outline" className="justify-end items-end bg-black text-white hover:bg-black hover:text-white">Update Categories</Button>
                        </DialogClose>
                    </div>
                </DialogHeader>
          }
       </DialogContent>
    </Dialog>
  )
}
