import React, {useState} from 'react'
import { questions } from './api'

const MyAccordion = ({Question, answer}) => {
  const [show, setshow] = useState(false);

  const ansShow = ()=>{
    setshow(!show)
  }
  return (
    <>
      <div className="main-heading">
        {/* for + emoji press windows pluse . */}
        <p onClick={ansShow}>{show?  '➖' : '➕'}</p>  
        <h3>{Question}</h3>
      </div>
     { show && <p className='answers'>{answer}</p>}
    </>
  )
}

export default MyAccordion
