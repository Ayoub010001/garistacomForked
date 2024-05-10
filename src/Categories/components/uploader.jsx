import { useState } from 'react'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import {Label} from "@/components/ui/label"
import './uploader.css'
import { APIURL } from '../../../lib/ApiKey'
import { axiosInstance } from '../../../axiosInstance'

function Uploader({ onChange, getValue = null, }) {

  console.log("get Valued => ", getValue);

  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

const handleDelete = () => {
  setFile(null);
  setFileName("");
};
  const handleFileChange = (event) => {
    let file;
    if(getValue == null)
    {
      file =  event.target.files[0]
    }
    else{
      file =  getValue;
    }
    setFileName(file.name);
    setFile(file)

    setImage(URL.createObjectURL(file));
    onChange(file);  // Pass the File object to the parent component
  };

  const imageData = image == null ? `${APIURL}/storage/${getValue}` : image;
  return (
    <main className="w-[590px]">
      <form className="form-drag" onClick={() => document.querySelector('.input-field').click()}>
        <input type="file" accept="image/*" className="input-field" hidden onChange={handleFileChange} />
         
        {getValue != null
        ? (
          <>
          {
             file
             ?
             <img src={imageData} width={150} height={150} alt={fileName} />
             :
             <img src={imageData} width={150} height={150} alt={fileName} />
          }
          </>
        ) : (
          <>
          {
            image
            ?
            <img src={imageData} width={150} height={150} alt={fileName} />
            :
            <>
              <MdCloudUpload color="black" size={60} />
              <p>Browse Files to upload</p>
            </>
          }
          </>
        )}
      </form>
    </main>
  )
}

export default Uploader