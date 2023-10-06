import React, {useState} from 'react'
import Sresult from './Sresult';

const Search = () => {
    const [img, setimg] = useState('');

    const inputEvent = (event)=>{
        const data = event.target.value
        console.log(data)
        setimg(data)
    };  
return (
    <>
     <div className="searchbar">
        <input type="text" 
        placeholder='write anything'
        value={img}
        onChange={inputEvent}
        />
        <Sresult name={img}/>
    </div> 


    </>
  )
}

export default Search
