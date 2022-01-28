import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Search() {

  const urlApi = "http://127.0.0.1:9000/catalog/search";

  // for displaying images
  const baseURL = "http://localhost:9000";

  const [data, setData] = useState("");

  const [searchMessage, setSearchMessage] = useState("");

  // populate the search data after search button pressed
  const createSearchData = (params) => {
    
    axios.get(urlApi + 
      "/" + params[0].value +
      "/" + params[1].value +
      "/" + params[2].value +
      "/" + params[3].value +
      "/" + params[4].value +
      "/" + params[5].value +
      "/" + params[6].value +
      "/" + params[7].value +
      "/" + params[8].value
    ).then(res => {
      setData(res.data);
      setSearchMessage(res.data.message);
    }).catch(err => {
      console.log(err);
    });
      
  }

  // pass params to api call function
  const handleForm = (event) => {

    // prevent page reload when button is pressed
    event.preventDefault();

    // get inputs from form
    let leafColors = document.getElementById("leaf-color");
    let barkColors = document.getElementById("bark-color");
    let stemColors = document.getElementById("stem-color");
    let fruitColors = document.getElementById("fruit-color");
    let flowerColors = document.getElementById("flower-color");
    let plantTypes = document.getElementById("plant-type");
    let leafTypes = document.getElementById("leaf-type");
    let plantShapes = document.getElementById("plant-shape");
    let leafDimensions = document.getElementById("leaf-dimensions");
    let flowerDimensions = document.getElementById("flower-dimensions");

    // set param array to pass through next function
    let searchParams = [ 
      leafColors, 
      barkColors, 
      stemColors, 
      fruitColors, 
      flowerColors,
      plantTypes,
      plantShapes,
      leafDimensions,
      flowerDimensions,
    ];
    
    // notify user that api has called and is searching for matches
    setSearchMessage("Searching our database for matches...");
    createSearchData(searchParams);

  }

  return (
    <div>
        <h2>Search</h2>
        <ul>
          <li>Select your search parameters from the drop-down menus below.</li>
          <br></br>
          <li>You can use as many or as few as you'd like.</li>
        </ul>
        <hr />

        <form className="form">
          {/* Plant - overall */}
          <div>
            <label className="form-label">
              <span className="form-span-text">Which type of plant is it?</span>
              <span className="form-span"></span>

              <select id="plant-type" className="form-select" name="plant-type">
                <option value="null">* None Selected *</option>
                <option value="Evergreen">Evergreen</option>
                <option value="Shrub">Shrub</option>
                <option value="Vine">Vine</option>
                <option value="Annual">Annual</option>
                <option value="Houseplant">Houseplant</option>
                <option value="Poisonous">Poisonous</option>
                <option value="Round">Round</option>
                <option value="Tree">Tree</option>
              </select>
            </label>
          </div>

          <div>
            <label className="form-label">
              <span className="form-span-text">Which shape of plant is it?</span>
              <span className="form-span"></span>

              <select id="plant-shape" className="form-select" name="plant-shape">
                <option value="null">* None Selected *</option>
                <option value="Hedge">Hedge</option>
                <option value="Round">Round</option>
                <option value="Arching">Arching</option>
                <option value="Spreading">Spreading</option>
                <option value="Climbing">Climbing</option>
                <option value="Dense">Dense</option>
                <option value="Erect">Erect</option>
                <option value="Mounding">Mounding</option>
                <option value="Creeping">Creeping</option>
              </select>
            </label>
          </div>

          {/* Leaves */}
          <div>
            <label className="form-label">
              <span className="form-span-text">Which color are the leaves?</span>
              <span className="form-span"></span>

              <select id="leaf-color" className="form-select" name="leaf-color">
                <option value="null">* None Selected *</option>
                <option value="Yellow">Yellow</option>
                <option value="Medium Green">Medium Green</option>
                <option value="Blue Green">Blue Green</option>
                <option value="Gold">Gold</option>
                <option value="Light Green">Light Green</option>
                <option value="Blue Green">Blue Green</option>
                <option value="Orange">Orange</option>
                <option value="Green">Green</option>
                <option value="Pink">Pink</option>
                <option value="Red">Red</option>
                <option value="Burgundy">Burgundy</option>
                <option value="White">White</option>
                <option value="Variegated">Variegated</option>
                <option value="Purple">Purple</option>
                <option value="Lavender">Lavender</option>
              </select>
            </label>
          </div>

          <div>
            <label className="form-label">
              <span className="form-span-text">Approximately how big are the leaves?</span>
              <span className="form-span"></span>

              <select id="leaf-dimensions" className="form-select" name="leaf-dimensions">
                <option value="null">* None Selected *</option>
                <option value="1 in">1 inch</option>
                <option value="2 in">2 inches</option>
                <option value="3 in">3 inches</option>
              </select>
            </label>
          </div>

          {/* Bark */}
          <div>
            <label className="form-label">
              <span className="form-span-text">Which color is the bark?</span>
              <span className="form-span"></span>
              
              <select id="bark-color" className="form-select" name="bark-color">
                <option value="null">* None Selected *</option>
                <option value="lightBrown">Light Brown</option>
                <option value="lightGrey">Light Grey</option>
                <option value="tan">Tan</option>
              </select>
            </label>
          </div>

          {/* Stem */}
          <div>
            <label className="form-label">
              <span className="form-span-text">Which color is the stem?</span>
              <span className="form-span"></span>
              
              <select id="stem-color" className="form-select" name="stem-color">
                <option value="null">* None Selected *</option>
                <option value="lightBrown">Light Brown</option>
                <option value="lightGrey">Light Grey</option>
                <option value="tan">Tan</option>
              </select>
            </label>
          </div>

          {/* Fruit */}
          <div>
            <label className="form-label">
              <span className="form-span-text">Which color are its fruits?</span>
              <span className="form-span"></span>
              
              <select id="fruit-color" className="form-select" name="fruit-color">
                <option value="null">* None Selected *</option>
                <option value="lightBrown">Light Brown</option>
                <option value="lightGrey">Light Grey</option>
                <option value="tan">Tan</option>
              </select>
            </label>
          </div>

          {/* Flower */}
          <div>
            <label className="form-label">
              <span className="form-span-text">Which color are its flowers?</span>
              <span className="form-span"></span>
              
              <select id="flower-color" className="form-select" name="flower-color">
                <option value="null">* None Selected *</option>
                <option value="lightBrown">Light Brown</option>
                <option value="lightGrey">Light Grey</option>
                <option value="tan">Tan</option>
              </select>
            </label>
          </div>

          <div>
            <label className="form-label">
              <span className="form-span-text">Approximately how big are its flowers?</span>
              <span className="form-span"></span>
              
              <select id="flower-dimensions" className="form-select" name="flower-dimensions">
                <option value="null">* None Selected *</option>
                <option value="lightBrown">Light Brown</option>
                <option value="lightGrey">Light Grey</option>
                <option value="tan">Tan</option>
              </select>
            </label>
          </div>

          {/* Button */}
          <div>
            <span className="form-span"></span>
            <button className="form-button" onClick={handleForm}>Show Me What You Got!</button>
          </div>
        </form>

        <div>
          <h3 id="searching-message">{searchMessage}</h3>
        </div>

        <hr />

        {/* Display the Search Results */}
        <div>
          <ul>
            {data !== "" && 
              data.shrub_list.map(shrub => (
                
                <li key={shrub.common_name}>
                  <img src={baseURL + shrub.images[0]} />
                  <a href={shrub.urlFrontend}><h3>{shrub.common_name}</h3></a>
                  <p><b>{shrub.latin_name}</b></p>
                  <p>{shrub.brief_description}</p>
                </li>
    
            ))}
          </ul>
        </div>

    </div>
  );

}

export default Search;
