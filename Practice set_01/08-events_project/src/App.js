import React, { useState } from "react";

const App = ()=>{
  let bgcolor1 = 'red'
  let bgcolor2 = 'blue';
  let bgcolor3 = 'purple'
  const [color , setcolor] = useState(bgcolor1)
  
  const bgChange = ()=>{
    setcolor(bgcolor2)
  }
  const bgChange2 = ()=>{
    setcolor(bgcolor3)
  }
  return (
    <>
    <div style={{backgroundColor: color}}>
      <button onMouseEnter={bgChange} onMouseLeave={bgChange2}>Change Bg Color</button>
    </div>
    </>
  )
}

export default App