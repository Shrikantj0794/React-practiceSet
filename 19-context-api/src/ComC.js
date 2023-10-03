import React from 'react'
import { LastName } from './App'
const comC = () => {
  return (
    <>
    {/* thired step */}
      <LastName.Consumer>{
        (lname)=>{
          return <h1>hey, my name is Shrikant {lname}</h1>
        }}
      
      </LastName.Consumer>
      
    </>
  )
}

export default comC
