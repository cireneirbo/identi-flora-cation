import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';


function Detail() {
  let params = useParams();

  const waitingMessage = "Awaiting API data...";

  const baseURL = "http://localhost:9000";

  const [isProcessed, setIsProcessed] = useState(false);

  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("http://localhost:9000/catalog/shrub/" + params.detailName)
    .then(res => {
      setData(res.data);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  console.log(data);
  console.log(params);
   

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
        <h2>{data.shrub[0].common_name}</h2> 
        <li>{data.shrub[0].brief_description}</li> 
        <hr></hr>

        <div>
          <ul className="detail">      
            <li>
              <img src={baseURL + data.shrub[0].images[0]} /> 
              <h4>{data.shrub[0].common_name}</h4>
              <p>{data.shrub[0].latin_name}</p>
              <p>{data.shrub[0].brief_description}</p>
            </li>
              {/* h4 Plant Type
              each item in shrub[0].plant_type
                | #{item} 
              else
                li
              h4 Plant Shape
              each item in shrub[0].plant_shape
                | #{item} 
              else
                li
              h4 Bloom Time
              each item in shrub[0].bloom_time
                | #{item} 
              else
                li  
              </li>
              <li>
              img(src=shrub[0].images[1])
              h4 Leaf Colors
              each item in shrub[0].leaf_color
                | #{item} 
              else
                li 
              h4 Leaf Size
              each item in shrub[0].leaf_dimensions
                | #{item} 
              else
                li 
              h4 Flower Colors
              each item in shrub[0].flower_color
                | #{item} 
              else
                li 
              h4 Flower Size
              each item in shrub[0].flower_dimensions
                | #{item} 
              else
                li
              </li> 
              <li>
              img(src=shrub[0].images[2])
              h4 Stem Colors
              each item in shrub[0].stem_color
                | #{item} 
              else
                li 
              h4 Bark Colors
              each item in shrub[0].bark_color
                | #{item} 
              else
                li 
              h4 Sun Requirements
                p #{shrub[0].sun_exposure}
              h4 Soil Requirements
                p #{shrub[0].soil}
              h4 Water Requirements
                p #{shrub[0].water_requirements}     
              </li> 
              <li>
              h3 Is it dangerous?
                p #{shrub[0].dangerous_description}
              </li>  */}
          </ul>
        </div>
      </div>
    );
  }
}

export default Detail;









