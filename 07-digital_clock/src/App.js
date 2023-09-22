import React, { useState } from "react";

const App =()=>{

  const [Ctime, stateCtime] = useState(new Date().toLocaleTimeString())

  const Time =()=>{
    // toLocalTimeString only show time in hours min and sec
    stateCtime(new Date().toLocaleTimeString())
  }
  return <>
    <h1>{Ctime}</h1>
    <button onClick={Time}>Get Time</button>
  </>
}

export default App