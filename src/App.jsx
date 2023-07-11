import React, { useState } from 'react';
import SearchBar from "./components/SearchBar/SearchBar";
import NavBar from "./components/NavBar/NavBar"
import Nosotros from "./components/Nosotros/Nosotros";
import Home from "./components/Home/Home";
import Productos from "./components/Productos/Productos";
import Servicios from "./components/Servicios/Servicios"
import { Routes, Route } from "react-router-dom";

import './App.css'

function App() {
  
  return (
    <>
      <div>
        <SearchBar/>
        <NavBar/>
      
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />}/>
            <Route path="/productos" element={<Productos />}/>
         </Routes>
      </div>
    
      
    </>
  )
}

export default App
