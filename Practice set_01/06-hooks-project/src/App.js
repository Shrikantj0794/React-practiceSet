import React, { useState }  from "react";

const App = ()=>{
  const [count, setcount] = useState(0);

   const addone = ()=>{
    setcount(count+1)
  }

  return <>
    <h1> {count} </h1>
    <button onClick={addone}> Add +1</button>
  </>
}

export default App;