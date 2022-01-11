import React, { useEffect, useState } from 'react';


function Search() {

  const handleForm = (e) => {
    e.preventDefault();
    console.log("Form Successful Handled!");

    let leafColor = document.getElementById("leaf-color");
    let barkColor = document.getElementById("bark-color");

    console.log(`
    Leaf Color: ${leafColor.value}
    Bark Color: ${barkColor.value}
    `);
    
    
  }


  return (
    <div>
        <h2>Search</h2>

        <form  >
          <label>Leaf Color:
          {/* <!-- includes empty value "Select One" option --> */}
            <select id="leaf-color" name="leaf-color">
              <option value="">* Select One *</option>
              <option value="1">Simulation</option>
              <option value="2">Rocket Test</option>
              <option value="3">Crew Related</option>
            </select>
          </label>

          <label>Bark Color:
          {/* <!-- includes empty value "Select One" option --> */}
            <select id="bark-color" name="bark-color">
              <option value="">* Select One *</option>
              <option value="lightBrown">Light Brown</option>
              <option value="lightGrey">Light Grey</option>
              <option value="tan">Tan</option>
            </select>
          </label>

          <button onClick={handleForm}>Show Me What You Got!</button>
        </form>

    </div>
  );

}

export default Search;
