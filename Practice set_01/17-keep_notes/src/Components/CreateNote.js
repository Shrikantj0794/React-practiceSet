import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';


const CreateNote = (props) => {

  const [note, setNote]= useState({
    title: '',
    content: ''
  })


  const inputEvent = (event)=>{
    const {name, value} = event.target;
    setNote ((prevData)=>{
      return{
        ...prevData,
        [name]: value,
      };
    });
    console.log(note)
  }

  const addEvent = ()=>{
      props.passNote(note);
      setNote({
        title: '',
        content: ''
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

                <textarea placeholder='write your notes here'
                name="content" 
                value={note.content}
                onChange={inputEvent}
                cols="" 
                rows=""
                />

                <button className='btn' onClick={addEvent}>
                    <AddIcon className= 'plus-sign' />
                </button>
            </form>
         </div>
    </>
  )
}

export default CreateNote
    