import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';


function Detail() {
  // grab the shrub's unique name from the url
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

            <h2>General Plant Info</h2>
            <table>
              {/* Plant Types */}
              <tr>
                <th>
                  Common Plant Types 
                </th>
                {data.shrub[0].plant_type.map(pt => (
                  <td>
                    {pt}
                  </td>
                ))}
              </tr>

              {/* Plant Shapes */}
              <tr>
                <th>
                  Common Plant Shapes
                </th>
                {data.shrub[0].plant_shape.map(ps => (
                  <td>
                    {ps}
                  </td>
                ))}
              </tr>
            
              {/* Bloom Time */}
              <tr>
                <th>
                  Common Bloom Times
                </th>
                {data.shrub[0].bloom_time.map(bt => (
                  <td>
                    {bt}
                  </td>
                ))}
              </tr>

            </table>

            {/* Leaves */}
            <h2>Leaf Info</h2>
            <table>
              {/* Leaf Colors */}
              <tr>
                <th>
                  Common Leaf Colors
                </th>
                {data.shrub[0].leaf_color.map(lc => (
                  <td>
                    {lc}
                  </td>
                ))}
              </tr>

              {/* Leaf Dimensions Long */}
              <tr>
                <th>
                  Average Leaf Lengths
                </th>
                {data.shrub[0].leaf_dimensions[0].long.map(ld => (
                  <td>
                    {ld}
                  </td>
                ))}
              </tr>

              {/* Leaf Dimensions Wide */}
              <tr>
                <th>
                  Average Leaf Widths
                </th>
                {data.shrub[0].leaf_dimensions[1].wide.map(lw => (
                  <td>
                    {lw}
                  </td>
                ))}
              </tr>
            </table>

            <li>
              <img src={baseURL + data.shrub[0].images[1]} /> 
              <h4>Is It dangerous?</h4>
              <p>{data.shrub[0].dangerous_description}</p>
            </li>


            {/* Flowers and Flowers */}
            <h2>Fruit and Flower Info</h2>
            <table>

              {/* Flower Colors */}
              <tr>
                <th>
                  Flower Colors
                </th>
                {data.shrub[0].flower_color.map(fc => (
                  <td>
                    {fc}
                  </td>
                ))}
              </tr>

              {/* Flower Dimensions Tall */}
              <tr>
                <th>
                  Average Flower Heights
                </th>
                {data.shrub[0].flower_dimensions[0].tall.map(ft => (
                  <td>
                    {ft}
                  </td>
                ))}
              </tr>

              {/* Flower Dimensions Wide */}
              <tr>
                <th>
                  Average Flower Widths
                </th>
                {data.shrub[0].flower_dimensions[1].wide.map(fw => (
                  <td>
                    {fw}
                  </td>
                ))}
              </tr>

              {/* Fruit Colors */}
              <tr>
                <th>
                  Fruit Colors
                </th>
                {data.shrub[0].fruit_color.map(fc => (
                  <td>
                    {fc}
                  </td>
                ))}
              </tr>

            </table>

            <li>
              <img src={baseURL + data.shrub[0].images[2]} /> 
              <th>Soil, Sun, Moisture Requirements</th>
            
              <table>
                {/* Soil */}
                <tr>
                  <th>
                    Soil
                  </th>
                  <td>
                    {data.shrub[0].soil}
                  </td>
                </tr>

                {/* Sun */}
                <tr>
                  <th>
                    Sun
                  </th>
                  <td>
                    {data.shrub[0].sun_exposure}
                  </td>
                </tr>

                {/* Water */}
                <tr>
                  <th>
                    Water
                  </th>
                  <td>
                    {data.shrub[0].water_requirements}
                  </td>
                </tr>

              </table> 
            </li>


            {/* Stem and Bark */}
            <h2>Stem and Bark Info</h2>
            <table>

              {/* Stem Colors */}
              <tr>
                <th>
                  Stem Colors
                </th>
                {data.shrub[0].stem_color.map(sc => (
                  <td>
                    {sc}
                  </td>
                ))}
              </tr>

              {/* Bark Colors */}
              <tr>
                <th>
                  Bark Colors
                </th>
                {data.shrub[0].bark_color.map(bc => (
                  <td>
                    {bc}
                  </td>
                ))}
              </tr>
            </table>
              
          </ul>
        </div>
      </div>
    );
  }
}

export default Detail;
