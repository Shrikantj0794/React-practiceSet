import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Note = () => {
  return (
    <>
      <div className="note">
        <h1>Title</h1>
        <br />
        <p>HI, I'm Shrikant</p>
        <button className='btn'>
            <DeleteForeverIcon className='deleteIcon'/>
        </button>
      </div>
    </>
  )
}

export default Note
