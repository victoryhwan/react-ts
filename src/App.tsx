import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from './pages/About';
import Header from './components/Header';
import Goods from './pages/Goods';
function App() {
  window.example = function (hosCd:string){
    if(hosCd === 'dd'){
        console.log("test");
    }else{
        console.log("test2");
    }
}
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
          <Route path="goods" element={<Goods/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
