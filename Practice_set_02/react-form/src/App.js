import { useState } from 'react';
import './App.css';

function App() {
  const [form, setform] = useState({});
  const handleform =(e)=>{
    // console.log(e.target.value,e.target.name)
    setform({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handlesubmit =async(e)=>{
    e.preventDefault();

    const response = await fetch('http://localhost:1010/demo',{
      method: 'POST'
    });
    const data = await response.text
    console.log(data)
  }
  return (
    <form onSubmit={handlesubmit}>
      <span>UserName</span>
      <input type="text" name='username' onChange={handleform}></input>
      <span>Password</span>
      <input type="text" name='password' onChange={handleform}></input>
      <input type="submit"></input>
    </form>
  );
}

export default App;
