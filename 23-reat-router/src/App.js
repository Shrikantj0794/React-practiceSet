// App.js
import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';

//import react router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (<>
  <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home name='Home'/>}/> {/* add props name*/}
      <Route exact path="/about" element={<About name='About'/>}/>
      <Route exact path="/Navbar" element={<Navbar/>}/>
    </Routes>
    </Router>
    </>
  );
}
export default App;
