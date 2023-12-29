import React, {useState, useEffect}from "react";
import axios from 'axios'

const App = ()=>{
  const [num, setNum] = useState();
  const [name, setname] = useState();
  const [moves, setmoves] = useState();

  useEffect (()=>{
    async function getData(){
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      // const data = res.json();
      console.log(res); 
      setname(res.data.name);
      setmoves(res.data.moves.length) // moves is in the form of array then lenght methode calculate the no of array element and render it 
    }
    getData();
  });
  const selection = (event)=>{
      setNum(event.target.value);
  }
  return<>
    <h1>you Choose <span style={{color: 'red'}}>{num} value</span></h1>
    <h1>my Name is  <span style={{color: 'red'}}>{name}</span></h1>
    <h1>I have <span style={{color: 'red'}}>{moves} moves</span></h1>

    <select value={num} onChange={selection}>
      <option value="1">1</option>
      <option value="25">25</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </>
  
}

export default App