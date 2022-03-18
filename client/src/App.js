import React, { useState, useEffect } from 'react';
import {Router} from '@reach/router';
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
      <Router>
        <HomePage path="/home" default />
        <AboutUs path="/about" />
        <Stories path="/stories" />
        <Services path="/services" />
        <Donate path="/help" />
        <Admin path="/admin" />
      </Router>
    </div>
    ) 
}
export default App;

