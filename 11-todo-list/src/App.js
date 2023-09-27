import React, { useState } from "react";

const App = ()=>{
  const [inputList, setinputList] = useState('');

  const itemEvent = (event)=>{
    setinputList(event.target.value);
  }

  return <>
  <div className="main_div">
    <div className="center_div">
      <br />
      <h1>ToDo List</h1>
      <br />

      <input type="text" placeholder="add item" onChange={itemEvent}/>
      <button> + </button>
      <ol>
        <li>{inputList}</li>
      </ol>
    </div>
  </div>
  </>
}

export default App