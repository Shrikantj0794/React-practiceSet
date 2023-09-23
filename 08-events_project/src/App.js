import React, { useState } from "react";

const App = ()=>{
  let bgcolor1 = 'red'
  let bgcolor2 = 'blue';
  const [color , setcolor] = useState(bgcolor1)
  
  const bgChange = ()=>{
    setcolor(bgcolor2)
  }
  return (
    <>
    <div style={{backgroundColor: color}}>
      <button onClick={bgChange}>Change Bg Color</button>
    </div>
    </>
  )
}

export default App