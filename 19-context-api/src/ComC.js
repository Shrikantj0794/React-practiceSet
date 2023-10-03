import React from 'react'
import { FirstName, LastName } from './App'
const comC = () => {
  return (
    <>
    {/* thired step */}
      <FirstName.Consumer>{
        (fname)=>{
          return (
            <LastName.Consumer>{
              (lName)=>{
                return(
                  <h1>My Name is {fname} {lName}</h1>
                )
              }
              }</LastName.Consumer>
          )
        }}
      
      </FirstName.Consumer>
      
    </>
  )
}

export default comC
