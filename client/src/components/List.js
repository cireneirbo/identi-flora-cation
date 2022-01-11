import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';


function List() {
  const waitingMessage = "Awaiting API data...";

  const [isProcessed, setIsProcessed] = useState(false);

  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("http://localhost:9000/")
    .then(res => {
      setData(res.data);
    }).catch(err => {
      console.log(err);
    });
  }, []);


  console.log(data);
  

  // Displays a waiting message if API hasn't returned yet
  if (data === "" || isProcessed === false) {

    // process axios data
    if (data !== "") {

      setIsProcessed(true);
      
    }
    return (
      <div>
        {waitingMessage}
      </div>
    );
  }
  // Return the data
  else {
    return (
      
      <div id="main">
				
        <h2>{data.title}</h2>

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
