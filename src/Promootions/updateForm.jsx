import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
    DialogFooter,
  } from "@/components/ui/dialog";
  import { Input } from "@/components/ui/input"
  import {Button} from "@/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useState } from "react";
import ImageUploading from 'react-images-uploading';
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import Uploader from "./uploader";

export default function UpdateForm({updateFormState, setUpdateFormState}) {

    const [images, setImages] = useState([]);
    const [image, setImage] = useState(null)
  const [fileName, setFileName] = useState("No selected file")
    const maxNumber = 3;

    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

  return (
    <Dialog open={updateFormState} onOpenChange={setUpdateFormState} className=" p-8 shadow-lg h-[45rem] w-[65rem] rounded-xl">
          <DialogContent style={{ padding: '2rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', height: '45rem', width: '35rem', maxWidth: '80rem', borderRadius: '1rem' }}>
            <DialogHeader className="flex justify-center">
                    <h2 className="text-2xl font-bold mb-4 text-center">Update Promotions</h2>
                    <div className='flex items-start gap-10 p-10 justify-center'>
                        <div className='w-full '>
                            {/* <div
                                className="h-40 bg-slate-200 flex justify-center items-center rounded cursor-move"
                                draggable="true"

                            >
                                <h1>drag-image...</h1>
                            </div> */}
                            <Uploader />
      {/* <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
                 <form
      onClick={() => document.querySelector(".input-field").click()}
      >
        <input type="file" accept='image/*' className='input-field' hidden
        onChange={({ target: {files}}) => {
          files[0] && setFileName(files[0].name)
          if(files){
            setImage(URL.createObjectURL(files[0]))
          }
        }}
         />

        {image ?
        <img src={image} width={150} height={150} alt={fileName} />
        :
        <>
        <MdCloudUpload color='#1475cf' size={60} />
        <p>Browse Files to upload</p>
        </>
      }

      </form>

            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading> */}

                            <div className=''>
                                <Input type="text" placeholder="Title" className='mt-5 mb-5' />

                            </div>
                        </div>

                    </div>
                    <div className='float-right flex gap-2 justify-end'>
                        <Button  >Save</Button>
                    </div>
                </DialogHeader>
                <DialogFooter className="flex justify-center items-center">
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
