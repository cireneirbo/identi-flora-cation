import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
// import async from 'async';
import logo from './logo.svg';
import './App.css';

function App() {
//class App extends Component {
/*
  constructor(props) {
    super(props);
    this.state = { };
    
  }

  callAPI() {
    axios.get("http://localhost:9000/")
    .then(res => {
      const data = res.data;
      this.setState(data);
      console.log(this.state);
      
    });
  }

  componentDidMount() {
      this.callAPI();
  }
*/
  
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9000/")
      .then((res) => res.json())
      .then((data) => setProductsList([data]))
      .then(setIsLoading(false));
  }, []);


  //render() {
    // const arr = this.state.moreInfo;
    return (
      <div className="App">
        <header className="App-header">
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
        {/* <p>{this.state.title}</p> */}
        
        {/* <ol>
          {arr.map(info => (
            <li key={info}>{info}</li>
          ))}
        </ol> */}
        {/* {isLoading ? (
          <div className='spinner-border text-primary' role='status'>
            {' '}
            <span className='sr-only'>Loading...</span>{' '}
          </div>
        ) :  */}
        {(
          productsList.map(product => {
                <p key={product.id}>{product.name}</p>
          })
        )}
      </div>
    );
  //}
}

export default App;
