import React from 'react'

const Sresult = (props) => {
    const link = `https://source.unsplash.com/800x400/?${props.name}`
  return (
    <>
        <div className='imgs'> 
            <img src={link} alt='img NA'/>
        </div> 
    </>
  )
}

export default Sresult
