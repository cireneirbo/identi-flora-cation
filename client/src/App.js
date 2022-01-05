import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
// import async from 'async';
import logo from './logo.svg';
import './App.css';

class DataContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      error: null,
      items: [],
      isLoaded: false
    };
    
    //this.callAPI = this.callAPI.bind(this);
  }

  // callAPI() {
  //   axios.get("http://localhost:9000/")
  //   .then(res => {
  //     const data = res.data;
  //     this.setState({data: data, loading: false});
  //     //console.log(this.state);
      
  //   });
  // }

  componentDidMount() {
    // this.callAPI();
    axios.get("http://localhost:9000/")
    .then(res => {
      this.setState({
        items: res.data, 
        isLoaded: true
      });
      //console.log(this.state);
      
    },
    (error) => {
      this.setState({
        isLoaded: true,
        error
      })
    });
  }

  render() {
    console.log(this.state);
    // return (
      
    //   <DataFeedView {...this.state} />
    // );
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.title}>
              {item.title} {item.shrub_list}
            </li>
          ))}
        </ul>
      );
    }
  }
}

function DataFeedView(props) {
  //console.log(props)
  return (
    <div>
      {props.data.map(datum => <DataView {...datum} />)}
    </div>
  );
}

function DataView(props) {
  return (
    <div>
      <h4>{props.title}</h4>
      <p>{props.moreInfo}</p>
    </div>
  )
}


class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { };
    
  // }

  // callAPI() {
  //   axios.get("http://localhost:9000/")
  //   .then(res => {
  //     const data = res.data;
  //     this.setState({data: data});
  //     console.log(this.state);
      
  //   });
  // }

  // componentDidMount() {
  //     this.callAPI();
  // }

  // componentWillUnmount() {

  // }

  /*
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9000/")
      .then((res) => res.json())
      .then((data) => setProductsList([data]))
      .then(setIsLoading(false));
  }, []);*/


  render() {
    // const arr = this.state.moreInfo;
    return (
      <div className="App">
        {/* <header className="App-header">
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
        </header> */}
        {/* <p>{this.state.title}</p>
        <p>{this.state.moreInfo}</p> */}
        <DataContainer />
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
        {/* {(
          productsList.map(product => {
                <p key={product.id}>{product.name}</p>
          })
        )} */}
      </div>
    );
  }
}

export default App;
