import React from "react";
import SlotMachine from "./SlotMachine";

const App = ()=>{
  return <>
    <h1 className="heading_style">
     🎰 Wellcome to <span style={{fontWeight: 'bold'}}>Slot machine game</span> 🎰</h1> 

     <div className="slotmachine">
     <SlotMachine x='😄' y='😄' z='😄'/>
     <SlotMachine x='🎅' y='😄' z=' 👍 '/>
     <SlotMachine x='🐱' y='👎' z=' 💯 '/>
     <SlotMachine x='🥪' y='🥪' z=' 🥪 '/>

     </div>
     
  </>
}

export default App