import React from "react";

const App = ()=>{

  const inputEvent = (event)=>{
    console.log(event.target.value)
  }
  return <>
    <div>
      <h1>Hello</h1>
      <input type="text" 
      placeholder="Enter your Name" 
      onChange={inputEvent}/>
      <button>Submit</button>
    </div>
  </>
}

export default App