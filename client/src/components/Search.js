import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Search() {
/// from list
  const waitingMessage = "Sorry! Still waiting for the API data... \nTry the search button again in a moment or two.";
  const urlApi = "http://localhost:9000/";

  const [isProcessed, setIsProcessed] = useState(false);

  const [data, setData] = useState("");

  useEffect(() => {
    axios.get(urlApi)
    .then(res => {
      setData(res.data);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  const [searchMessage, setSearchMessage] = useState("")


  console.log(data);

  
  
/*
  
  // Return the data
  else {
    return (
      */
      // <div id="main">
				
      //   <h2>{data.title}</h2>

        // <div>
        //   <ul>
        //     {data.shrub_list.map(shrub => (
              
        //     // <li >{shrub.common_name[0]}</li>

            
    
        //       <li key={shrub._id}>
        //         <img src={shrub.images[0]} />
        //         <h3>{shrub.common_name[0]}</h3>
        //         <p><b>{shrub.latin_name}</b></p>
        //         <p>{shrub.brief_description}</p>
        //       </li>
    
  

            
        //     ))}
        //   </ul>
        // </div>
          


          {/* <p>{data.shrub_list[0].bloom_time}</p>
          <p>{data.shrub_list[0]._id}</p> */}
          {/* <img src={data.shrub_list[0].images[0]} /> */}

        {/* <Outlet /> */}

{/*         
      </div>
              
    );
  } */}

  ///
  const handleForm = (event) => {
    event.preventDefault();
    console.log("Form Successful Handled!");

    // display message for user while performing search
    // let searchingMessage = document.getElementById("searching-message");
    // searchingMessage.textContent = "Searching our database for matches...";
    setSearchMessage("Searching our database for matches...");
    //callApi(urlApi);
    // get inputs from form
    let leafColor = document.getElementById("leaf-color");
    let barkColor = document.getElementById("bark-color");

    console.log(`
    Leaf Color: ${leafColor.value}
    Bark Color: ${barkColor.value}
    `);
    
    // Displays a waiting message if API hasn't returned yet
    if (data === "" || isProcessed === false) {

      // process axios data
      if (data !== "") {
        console.log()
        setIsProcessed(true);
        
      }
      else {
        alert(`${waitingMessage}`)
      }
      
    }



    // Change search message once search is complete
    setSearchMessage("Displaying Results");
    
    //return ();
    // console.log(data + "empty?");
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
                <option value="">* None Selected *</option>
                <option value="evergreen">Evergreen</option>
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
                <option value="">* None Selected *</option>
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
                <option value="">* None Selected *</option>
                <option value="1">Simulation</option>
                <option value="2">Rocket Test</option>
                <option value="3">Crew Related</option>
              </select>
            </label>
          </div>

          <div>
            <label className="form-label">
              <span className="form-span-text">Which type of leaves does it have?</span>
              <span className="form-span"></span>

              <select id="leaf-type" className="form-select" name="leaf-type">
                <option value="">* None Selected *</option>
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
                <option value="">* None Selected *</option>
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
                <option value="">* None Selected *</option>
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
                <option value="">* None Selected *</option>
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
                <option value="">* None Selected *</option>
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
                <option value="">* None Selected *</option>
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
                <option value="">* None Selected *</option>
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
              searchMessage === "Displaying Results" &&
              data.shrub_list.map(shrub => (
                
                <li key={shrub._id}>
                  <img src={shrub.images[0]} />
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
        flower_dimensions:

//unmade

       

        
        flower_bool: 
        
        

        fruit_bool: 
        

        
        
        

         
         

        

        

        


*/

export default Search;
