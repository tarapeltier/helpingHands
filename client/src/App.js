import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import HomePage from './components/HomePage'
import AboutUs from './components/AboutUs'
import Stories from './components/Stories'
import Services from './components/Services'
import Donate from './components/Donate'
import Admin from './components/Admin';

const App = () => {
  
  return(
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/services" element={<Services />} />
          <Route path="/help" element={<Donate />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
    ) 
}
export default App;

