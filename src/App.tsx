import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from './pages/About';
import Header from './components/Header';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<div>index</div>}></Route>
          <Route path="hwan" element={<div>hwan</div>}></Route>
          <Route path="about">
            <Route index element={<About/>}/>
            <Route path=':number' element={<About/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
