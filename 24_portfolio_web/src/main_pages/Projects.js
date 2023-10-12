import React from 'react'
import AllProjects from '../projects_pages/AllProjects'
import { Link, Navigate } from 'react-router-dom';
import HtmlCss from '../projects_pages/HtmlCss';
import JavaScript from '../projects_pages/JavaScript';
import Reactjs from '../projects_pages/Reactjs';



const Projects = () => {
  return (
    <>
     
      <AllProjects/>
      <HtmlCss/>
      <JavaScript/>
      <Reactjs/>
    </>
  )
}

export default Projects
