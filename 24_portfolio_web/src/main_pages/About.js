import React from 'react'
import Common from '../common_data/Common'
import imglink from '../images/img3.png'


const About = () => {
  return (
    <div>
     <Common 
    heading='Meet the Creative Mind Behind the Portfolio: Exploring Shrikant Journey'
    visit='/contact'
    btnText='Contact Me'
    src={imglink}
    />
    </div>
  )
}

export default About
