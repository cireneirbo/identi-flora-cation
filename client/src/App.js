import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import async from 'async';
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState("Awaiting API data...");

  useEffect(() => {
    axios.get("http://localhost:9000/")
    .then(res => {
      setData(res.data);
    }).catch(err => {
      console.log(err);
    });
  }, []);
  
  const [count, setCount] = useState(0);

  console.log(data);

  if (data === "Awaiting API data...") {
    return "Awaiting API data...";
  }
  else {
    return (
      <div className="App">
        <header className="App-header">
          <h2>{data.title}</h2>

          <ul>
            {data.temp_list.map(shrub => (
              <li key={shrub.toString()}>{shrub}</li>
            ))}
          </ul>

          <p>You clicked {count} times!</p>

          <button onClick={() => setCount(count + 1)}>
            Add 1
          </button>

          {}

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        
        
      </div>
    );
  }
}


export default App;
