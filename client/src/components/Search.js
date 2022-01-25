import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Search() {

  const waitingMessage = "Sorry! Still waiting for the API data... \nTry the search button again in a moment or two.";

  const urlApi = "http://127.0.0.1:9000/catalog/search";

  // for displaying images
  const baseURL = "http://localhost:9000";

  const [isProcessed, setIsProcessed] = useState(false);

  const [isSearched, setIsSearched] = useState(false);

  const [data, setData] = useState("");
/*
  useEffect(() => {
    if(isProcessed == false) {
      axios.get(urlApi)
      .then(res => {
        setData(res.data);
      }).catch(err => {
        console.log(err);
      });
      return () => {
        setIsProcessed(true)
      };
    }
  }, []);
*/
  const [searchMessage, setSearchMessage] = useState("");

  console.log(data);

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
      
    
      console.log(data);

      
/*
      for(let i = 0; i < data.shrub_list.length; i++) {

        // leafColors, 
        if(data.shrub_list[i].leaf_color.includes(params[0].value)) {
          console.log(i + "yes");
          // if(!tempArr.includes(data.shrub_list[i].common_name[0])) {
             //tempArr.push("yes");
             console.log("data.shrub_list[i]" + data.shrub_list[i])
             console.log(data.shrub_list[i])
             tempArr.push(data.shrub_list[i]);
          // }
        }*/
/*
        // barkColors, 
        if(data.shrub_list[i].bark_color.includes(params[1].value)) {
          console.log("yes");
        }

        // stemColors, 
        if(data.shrub_list[i].stem_color.includes(params[2].value)) {
          console.log("yes");
        }

        // fruitColors, 
        if(data.shrub_list[i].fruit_color.includes(params[3].value)) {
          console.log("yes");
        }

        // flowerColors,
        if(data.shrub_list[i].flower_color.includes(params[4].value)) {
          console.log("yes");
        }

        // plantTypes,
        if(data.shrub_list[i].plant_type.includes(params[5].value)) {
          console.log("yes");
        }

        // leafTypes,
        if(data.shrub_list[i].leaf_type.includes(params[6].value)) {
          console.log("yes");
        }

        // plantShapes,
        if(data.shrub_list[i].plant_shape.includes(params[7].value)) {
          console.log("yes");
        }

        // leafDimensions,
        if(data.shrub_list[i].leaf_dimensions.includes(params[8].value)) {
          console.log("yes");
        }*/

        // flowerDimensions
        // if(data.shrub_list[i].flower_dimensions.includes(params[9].value)) {
        //   console.log("yes");
        // }

      //}

      //console.log(params[0].value);
      //console.log("tempArr = " + tempArr[0]._id + " end");
      //setSearchData(tempArr);
      //tempArr = [];
      
      //setIsSearched(true);
      /*if (tempArr !== []) {
        setSearchData(tempArr); // doesn't do this for some reason
        console.log(searchData);
      }*/
      
      
      // Change search message once search is complete
      // if(searchData !== "") {
        //if(tempArr !== []) {
        //setSearchMessage("Displaying Results");
        //console.log(tempArr)
      //}
      // return( tempArr );
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
                <option value="shrub">Shrub</option>
                <option value="vine">Vine</option>
              </select>
            </label>
          </div>

          <div>
            <label className="form-label">
              <span className="form-span-text">Which shape of plant is it?</span>
              <span className="form-span"></span>

              <select id="plant-shape" className="form-select" name="plant-shape">
                <option value="null">* None Selected *</option>
                <option value="1">Spreading</option>
                <option value="2">Climbing</option>
                <option value="3">Arching</option>
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
              </select>
            </label>
          </div>

          <div>
            <label className="form-label">
              <span className="form-span-text">Which type of leaves does it have?</span>
              <span className="form-span"></span>

              <select id="leaf-type" className="form-select" name="leaf-type">
                <option value="null">* None Selected *</option>
                <option value="1">Simulation</option>
                <option value="2">Rocket Test</option>
                <option value="3">Crew Related</option>
              </select>
            </label>
          </div>

          <div>
            <label className="form-label">
              <span className="form-span-text">Approximately how big are the leaves?</span>
              <span className="form-span"></span>

              <select id="leaf-dimensions" className="form-select" name="leaf-dimensions">
                <option value="null">* None Selected *</option>
                <option value="1">Simulation</option>
                <option value="2">Rocket Test</option>
                <option value="3">Crew Related</option>
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
            {/* Check that data has returned api data and that the user has clicked the search button before populating */}
            {/* {searchData !== "" && 
              searchMessage === "Displaying Results" &&
              searchData.shrub_list.map(shrub => ( */}
            {data !== "" && 
              //searchMessage === "We have found what you're looking for!" &&
              data.shrub_list.map(shrub => (
                
                <li key={shrub.common_name[0]}>
                  <img src={baseURL + shrub.images[0]} />
                  <h3>{shrub.common_name[0]}</h3>
                  <p><b>{shrub.latin_name}</b></p>
                  <p>{shrub.brief_description}</p>
                </li>
    
            ))}
          </ul>
        </div>

    </div>
  );

}


/*
 
// made
        plant_type: 
        plant_shape: 
        leaf_color: 
        leaf_type: 
        leaf_dimensions: 
        bark_color:
        stem_color:
        fruit_color: 
        flower_color: 
        flower_dimensions: only string type

        plant_type: {type: Array, required: true, maxLength: 10},
        plant_shape: {type: Array, required: true, maxLength: 10},
        flower_color: {type: Array, required: true, maxLength: 10},
        flower_dimensions: {type: String, required: true, maxLength: 100},
        fruit_color: {type: Array, required: true, maxLength: 10},
        leaf_color: {type: Array, required: true, maxLength: 10},
        leaf_dimensions: {type: Array, required: true, maxLength: 10},
        leaf_type: {type: Array, required: true, maxLength: 10},
        bark_color: {type: Array, required: true, maxLength: 10},
        stem_color: {type: Array, required: true, maxLength: 10},
        
     

*/

export default Search;
