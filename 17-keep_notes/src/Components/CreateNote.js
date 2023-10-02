import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';

const CreateNote = () => {

  const [note, setNote]= useState({
    title: '',
    content: ''
  })


  const inputEvent = (event)=>{
    const {name, value} = event.target;
    setNote ((preData)=>{
      return{
        ...preData,
        [name]: value
      }
    })
  }
  return (
    <>
         <div className="main_note">
            <form>
                <input
                name='title' 
                value={note.title}
                onChange={inputEvent}
                type="text" 
                placeholder='Title' 
                autoComplete='off' 
                />

                <textarea 
                name="content" 
                value={note.content}
                onChange={inputEvent}
                cols="" 
                rows=""
                />

                <button className='btn'>
                    <AddIcon className= 'plus-sign' />
                </button>
            </form>
         </div>
    </>
  )
}

export default CreateNote
    