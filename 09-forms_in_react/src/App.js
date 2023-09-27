import React, { useState } from "react";

const App = ()=>{
  const [name , setname] =  useState("")
  const [fullName, setFullName]= useState()

  const inputEvent = (event)=>{
    console.log(event.target.value);
    setname(event.target.value);
  };
  const onSubmit = ()=>{
    setFullName(name)
  };
  
  return <>
    <div>
      <h1>Hello <span className="headingname">{fullName}</span></h1>
      <input type="text" 
      placeholder="Enter your Name" 
      onChange={inputEvent}
      value={name}
      />
      <button onChange={onSubmit}>Submit</button>
    </div>
  </>
}

export default App