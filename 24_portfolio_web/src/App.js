import React from 'react';
import Navbar from './Navbar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import About from './Pages/About';
import { Navigate } from 'react-router-dom';


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
      <Route exact path="/" element={<Home/>}/> {/* add props name*/}
      <Route exact path="/Project" element={<Projects/>}/>
      <Route exact path="/Contact" element={<Contact/>}/>
      <Route exact path="/About" element={<About/>}/>
      <Route path='*' element={<Navigate to = '/'/>}/>
    </Routes>
    </Router>
    </>
  );
}
export default App;