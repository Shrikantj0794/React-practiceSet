// App.js
import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import User from './Components/User';
import Search from './Components/Search';
import Error from './Components/Error';

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
      <Route exact path="/User/:fname/:lname" element={<User/>}/>
      <Route exact path="/Search" element={<Search/>}/>
      <Route exact path='*' element={<Error/>}/> {/* add path= '*' */}
    </Routes>
    </Router>
    </>
  );
}
export default App;