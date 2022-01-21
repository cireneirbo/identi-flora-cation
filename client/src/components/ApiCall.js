import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ApiCall(props) {

  const waitingMessage = "Awaiting API data...";

  const [isProcessed, setIsProcessed] = useState(false);

  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("http://localhost:9000/catalog/shrubs")
    .then(res => {
      setData(res.data);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  const [dataArray, setDataArray] = useState([]);

  

  console.log(data);
  //console.log(img);
  

  // Displays a waiting message if API hasn't returned yet
  if (data === "" || isProcessed === false) {
    // process axios data
    if (data !== "") {
      let tempArr = [];
      for(let i = 0; i < data.shrub_list.length; i++) {
        tempArr.push(data.shrub_list[i]);
      }
      console.log(tempArr);
      setDataArray(tempArr);
      setIsProcessed(true);
      //tempArr = [];
    }
    return (
      <div>
        {waitingMessage}
      </div>
    );
  }
  // Return the data
  else {

    console.log(typeof tempArr);
    return (
      // <div>
      //   <Article shrub={data.shrub_list[0]}/>
      // </div>
      
      <div>
          <h2>{data.title}</h2>

          {/* <ul>
            {data.shrub_list.map(shrubs => (
              for(let i = 0; )
                <li key={shrub._id}>{shrub}</li>
              ))
              // <li key={shrub._id}>{shrub}</li>
            ))}
          </ul> */}

          <p>{data.shrub_list[0].bloom_time}</p>
          <p>{data.shrub_list[0]._id}</p>
          
          
          {/* <img src={img} /> */}
          <img src={data.shrub_list[0].images[0]} />

      </div>
    );
  }
}


export default ApiCall;
