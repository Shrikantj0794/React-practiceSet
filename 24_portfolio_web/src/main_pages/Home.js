import React from 'react'
import Common from '../common_data/Common'
import imglink from '../images/img2.png'

const Home = () => {
  return (
    <>
    <Common 
    heading='I like to craft solid and scalable frontend products with great user experiences.'
    visit='/Projects'
    btnText='Portfolio'
    src={imglink}
    />
    </>
  )
}

export default Home
