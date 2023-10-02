import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Note = (props) => {
  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button className='btn'>
            <DeleteForeverIcon className='deleteIcon'/>
        </button>
      </div>
    </>
  )
}

export default Note
