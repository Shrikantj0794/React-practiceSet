import React, { useState } from "react";

const App =()=>{

  const [Ctime, stateCtime] = useState(new Date().toLocaleTimeString())
  const Time =()=>{
    // toLocalTimeString only show time in hours min and sec
    stateCtime(new Date().toLocaleTimeString())
  }
  setInterval(() => {
    Time()
  }, 1000);
  return <>
    <h1>{Ctime}</h1>
  </>
}

export default App