import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import List from './components/List';
import Search from './components/Search';
import Detail from './components/Detail';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} >
          <Route exact path="/" element={<Home />} />
          <Route exact path="list" element={<List />} />
          <Route path="list/:detailName" element={<Detail />} />
          <Route path="search" element={<Search />} />
          <Route path="about" element={<About />} />
          <Route
            path="*"
            element={
              <div>
                <h2>There's nothing here! Click a navigation link to escape this barren wasteland!</h2>
              </div>
            }
          />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  rootElement
);
