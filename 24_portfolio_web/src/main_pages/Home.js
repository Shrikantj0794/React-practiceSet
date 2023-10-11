import React from 'react'
import Common from '../common_data/Common'
import imglink from '../images/img2.png'
import Projects from './Projects'

const Home = () => {
  return (
    <>
    <Common 
    heading='I like to craft solid and scalable frontend products with great user experiences.'
    visit={Projects}
    btnText='Check Portfolio'
    src={imglink}
    />
    </>
  )
}

export default Home
