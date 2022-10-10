import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ControlledCarousel from './components/HomePage/Carousal';
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
 

  return (
    <div className="App">
     <ControlledCarousel/>
     <Navbar/>
    </div>
  );
}

export default App;
