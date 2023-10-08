import React, { createContext } from 'react'
import ComA from './ComA'


const FirstName = createContext(); //first step
const LastName = createContext();
const App = () => {
  return (
    <>
    <FirstName.Provider value={'Shrikant'}> {/*second step*/}
    <LastName.Provider value={'Jamale'}>
      <ComA/>
      </LastName.Provider>
    </FirstName.Provider>
    </>
  )
}

export default App
export { FirstName, LastName }