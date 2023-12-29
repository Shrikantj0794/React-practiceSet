import React, { useState, useEffect } from "react";


const App = ()=>{
  const [add, setadd] = useState(1);
  useEffect(() => {
      document.title = `count (${add})`
  });

  const addone =()=>{
    setadd(add+1);
  }
  
  return<>
    <h1 className="center" id="one">{add}</h1>
    <button className="center" onClick={addone}>onclick</button>
  </>
}

export default App