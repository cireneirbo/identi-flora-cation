import React, { useState } from 'react';


function ConvertBase64() {

  const [baseImage, setBaseImage] = useState("");


  const uploadImage = async (e) => {

    const file = e.target.files[0];
    const base64 = await convertBase64(file);

    setBaseImage(base64);
    console.log(base64);
    
  }

  const convertBase64 = (file) => {

    return new Promise((resolve, reject) => {

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      }

      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

 
  return (
    <div>
        
      <input 
        type="file"
        onChange={(e) => {
          uploadImage(e);
        }} 
      />

      <img src={baseImage} height="200px" />
        

    </div>
  );
}


export default ConvertBase64;
