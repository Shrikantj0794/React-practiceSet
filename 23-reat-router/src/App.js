// App.js
import React from 'react';
import './App.css';
import Header from './Home';
import Content from './Contact';

//import react router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (<>
  <Router>
    <Routes>
      <Route exact path="/" element={<Header/>}/>
      <Route exact path="/content" element={<Content/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
