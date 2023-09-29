import React, { useState } from "react";
import '@fontsource/roboto/300.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const App = ()=>{

  const [num, setnum] = useState(0);

  const incNum = ()=>{
    setnum(num+1)
  }
  const decNum = ()=>{
    if (num>0){
    setnum(num-1)
    }else{
      setnum(0)
      alert('Sorry, Zero limit Reached')
    }
  }

  return<>
    <div className="main_div">
      <div className="center_div">
        <h1>{num}</h1>
        <div className="btn_div">
        <button onClick={incNum}><AddIcon/></button>
        <button onClick={decNum}><RemoveIcon/></button>
        </div>
      </div>
    </div>
  
  </>
}

export default App