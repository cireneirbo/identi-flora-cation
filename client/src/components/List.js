import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';


function List() {
  const waitingMessage = "Awaiting API data...";
  const urlApi = "http://127.0.0.1:9000/";

  const [isProcessed, setIsProcessed] = useState(false);

  const [data, setData] = useState("");

  useEffect(() => {
    if(isProcessed == false) {
      axios.get(urlApi)
      .then(res => {
        setData(res.data);
      }).catch(err => {
        console.log(err);
      });
      return setIsProcessed(true);
    }
  }, []);


  console.log(data);
  

  // Displays a waiting message if API hasn't returned yet
  if (data === "" || isProcessed === false) {
    return (
      <div id="main">
        <h2>Shrub List</h2>
        <li>The complete list of all of our stored plants.</li>
        <hr />

        {waitingMessage}
      </div>
    );
  }
  // Return the data
  else {
    return (
      
      <div id="main">
				
        <h2>Shrub List</h2>
        <li>The complete list of all of our stored plants.</li>
        <hr />

        <div>
          <ul>
            {data.shrub_list.map(shrub => (
              
            // <li >{shrub.common_name[0]}</li>

            
    
              <li key={shrub._id}>
                <img src={shrub.images[0]} />
                <h3>{shrub.common_name[0]}</h3>
                <p><b>{shrub.latin_name}</b></p>
                <p>{shrub.brief_description}</p>
              </li>
    
  

            
            ))}
          </ul>
        </div>
          


          {/* <p>{data.shrub_list[0].bloom_time}</p>
          <p>{data.shrub_list[0]._id}</p> */}
          {/* <img src={data.shrub_list[0].images[0]} /> */}

        {/* <Outlet /> */}

        
      </div>
              
    );
  }
}

    



export default List;
