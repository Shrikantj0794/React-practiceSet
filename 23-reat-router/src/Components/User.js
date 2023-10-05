import React from 'react'
import { useParams, useLocation } from 'react-router-dom';

const User = () => {
    const {fname, lname} = useParams();
    const location = useLocation();
  return (
    <>
      <h1>hi user: {fname} {lname}</h1>
      <p>my current location is: {location.pathname}</p>

        {location.pathname === `/user/shrikant/jamale` ? 
        <button>onclick</button> : null}

    </>
  )
}

export default User
