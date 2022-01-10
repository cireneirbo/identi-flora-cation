import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ApiCall() {

  const [data, setData] = useState("Awaiting API data...");

  useEffect(() => {
    axios.get("http://localhost:9000/")
    .then(res => {
      setData(res.data);
    }).catch(err => {
      console.log(err);
    });
  }, []);
  
  const [img, setImg] = useState("Awaiting API images...");

  useEffect(() => {
    /*axios.get("http://localhost:9000/images/arboricola/arboricola-0.png")
    .then(res => {
      setImg(res.data);
    }).catch(err => {
      console.log(err);
    });*/
    setImg("")
  }, []);


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

  console.log(data);
  //console.log(img);

  // Displays a waiting message if API hasn't returned yet
  if (data === "Awaiting API data...") {
    return (
      <div>
        {data}
      </div>
    );
  }
  // Return the data
  else {
    return (
      <div>
          <h2>{data.title}</h2>

          <ul>
            {data.temp_list.map(shrub => (
              <li key={shrub.toString()}>{shrub}</li>
            ))}
          </ul>

          <input 
            type="file"
            onChange={(e) => {
              uploadImage(e);
            }} 
          />
          <img src={baseImage} height="200px" />
          <img src={img} />

      </div>
    );
  }
}


export default ApiCall;
