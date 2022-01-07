import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import ApiCall from './components/ApiCall';
import Home from './components/Home';
import List from './components/List';
import Search from './components/Search';
import Nav from './components/Nav';
import './App.css';

function App() {


  return (

    <div className="App">
      
      <Nav />

      <header className="App-header">
      
      
        <Outlet />
      
      </header>
      
    </div>

  );
  
}


export default App;
