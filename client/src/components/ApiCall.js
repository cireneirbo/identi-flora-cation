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

          <p>{data.shrub_list[0].bloom_time}</p>
          
          
          <img src={img} />
          <img src={data.shrub_list[0].images[0]} />

      </div>
    );
  }
}


export default ApiCall;
