import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const CreateNote = () => {
  return (
    <>
         <div className="main_note">
            <form>
                <input type="text" placeholder='Title' autoComplete='off' />
                <textarea name="note" cols="" rows=""></textarea>
                <button>
                    <AddIcon className= 'plus-sign' />
                </button>
            </form>
         </div>
    </>
  )
}

export default CreateNote
    