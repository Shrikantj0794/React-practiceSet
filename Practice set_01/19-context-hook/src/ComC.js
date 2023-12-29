import React, { useContext } from 'react'
import { FirstName, LastName } from './App'

const ComC = () => {
  const FName = useContext(FirstName);
  const LName = useContext(LastName);
  return (
    <>
    {/* thired step
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
        }
      }
      </FirstName.Consumer> */}
      

      {/* thired step */}
     
     <h1>My name is {FName} {LName}</h1>
     
    </>
  )
}

export default ComC
