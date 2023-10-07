// App.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import User from './Components/User';
import Search from './Components/Search';
// import Error from './Components/Error';

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
      {/* add path= '*' */}
      {/* <Route exact path='*' element={<Error/>}/> */}

      <Route path="*" element={<Navigate to ="/" />}/>
      {/* remove error page when page not found then redirect render on home page */}
    </Routes>
    </Router>
    </>
  );
}
export default App;
