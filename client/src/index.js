import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
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
          <Route path="list" element={<List />} >
            <Route path=":detailId" element={<Detail />} />
          </Route>
          <Route path="search" element={<Search />} />
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
      {/* <App /> */}
    </React.StrictMode>
  </BrowserRouter>,
  rootElement
);


