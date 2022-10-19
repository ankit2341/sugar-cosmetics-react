import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ControlledCarousel from './components/HomePage/Carousal';
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import Navbar from './components/Navbar';
import AllRoutes from './Pages/AllRoutes';


function App() {
 

  return (
    <div className="App">
     <AllRoutes/>
    </div>
  );
}

export default App;
