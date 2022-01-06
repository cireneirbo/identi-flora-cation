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
  

  console.log(data);

  if (data === "Awaiting API data...") {
    return (
      <div>
        {data}
      </div>
    );
  }
  else {
    return (
      <div>
          <h2>{data.title}</h2>

          <ul>
            {data.temp_list.map(shrub => (
              <li key={shrub.toString()}>{shrub}</li>
            ))}
          </ul>

      </div>
    );
  }
}


export default ApiCall;