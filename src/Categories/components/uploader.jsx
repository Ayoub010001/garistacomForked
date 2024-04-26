import { useState } from 'react';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';
import { Label } from "@/components/ui/label";
import './uploader.css';

function Uploader({ setImage, setImages }) {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result); // Pass the base64 encoded image data
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleDelete = () => {
    setFile(null);
    setFileName("No selected File");
    setImage(null);
  };

  const handleImageChange = (event) => {
    const selectedImages = Array.from(event.target.files);
    console.log("The Selected Images => ", selectedImages[0].name);
    setImages(selectedImages);
    
};
  return (
    <main className='w-[590px] mt-2'>
      <form className='form-drag' onClick={() => document.querySelector(".input-field").click()}>
        <input
          type="file"
          accept='image/*'
          className='input-field'
          hidden
          onChange={handleImageChange} multiple
        />

        {file ? (
          <img src={URL.createObjectURL(file)} width={150} height={150} alt={fileName} />
        ) : (
          <>
            <MdCloudUpload color="black" size={60} />
            <p>Browse Files to upload</p>
          </>
        )}

      </form>
      
      {

      }
      <section className='uploaded-row'>
        <AiFillFileImage color='black' />
        <span className='upload-content'>
          {fileName} -
          <MdDelete onClick={handleDelete} />
        </span>
      </section>
    </main>
  );
}

export default Uploader;
