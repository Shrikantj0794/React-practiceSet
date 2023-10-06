import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate();
    const goback = ()=>{
        navigate(-1)
    }

  return (
    <>
      <div className="setstyle2">
        <h1>404 Error page</h1>
        <p>Sorry, This page dosen't exist</p>

        <button onClick={goback}>Go Back</button>
      </div>
    </>
  )
}

export default Error
