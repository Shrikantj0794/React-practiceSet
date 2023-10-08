import React from 'react'
import Reactp from '../Dropdown/Reactp';
import JavaSript from '../Dropdown/JavaSript';
import HtmlCss from '../Dropdown/HtmlCss';

import {
  Routes,
  Route
} from "react-router-dom";

const Projects = () => {
  return (
    <>
    <Routes>
      <Route exact path='/react' element={Reactp}/>
      <Route exact path='/javascript' element={JavaSript}/>
      <Route exact path='/HtmlCss' element={HtmlCss}/>
    </Routes>    
    </>
  )
}

export default Projects
