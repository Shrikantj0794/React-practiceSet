import React, { useState } from "react";

const App = ()=>{
  const [inputList, setinputList] = useState('');
  //empty arry created for store value 
  const [items, setitems] = useState([])

  const itemEvent = (event)=>{
    setinputList(event.target.value);
  }

  // for showing input value by clicking button
  const listOfItem = ()=>{

  }


  return <>
  <div className="main_div">
    <div className="center_div">
      <br />
      <h1>ToDo List</h1>
      <br />

      <input type="text" placeholder="add item" onChange={itemEvent}/>
      <button onClick={listOfItem}> + </button>
      <ol>
        {/* <li>{inputList}</li> */}
        {/* data showing using map method */}

        {items.map ( (itemValue)=> {
          return(
          <li>{itemValue}</li>)
        })}
       
      </ol>
    </div>
  </div>
  </>
}

export default App