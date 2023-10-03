import React, { createContext } from 'react'
import ComA from './ComA'


const LastName = createContext(); //first step
const App = () => {
  return (
    <>
    <LastName.Provider value={'jamale'}> {/*second step*/}
      <ComA/>
    </LastName.Provider>
    </>
  )
}

export default App
export { LastName }