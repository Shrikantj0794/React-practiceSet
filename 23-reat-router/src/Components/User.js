import React from 'react'
import { useParams, useLocation, useNavigate} from 'react-router-dom';

const User = () => {
    const {fname, lname} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    console.log( 'hi'+ navigate);
  return (
    <>
      <h1>hi user: {fname}</h1>
      <h1>hi user: {fname} {lname}</h1>
      <p>my current location is: {location.pathname}</p>

        {location.pathname === `/user/shrikant/jamale` ? 
        <button onClick={()=> navigate(-1)}>onclick</button> : null}

    </>
  )
}

export default User