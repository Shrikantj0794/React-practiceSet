import React from 'react'
import {questions} from './api';
import './accordion.css'
import { useState } from 'react';
import MyAccordion from './MyAccordion';


const Accordion = () => {
  const [data, setdata] = useState(questions);
  return (
    <>
    <section className='main-div'>
      <h1>React Interview Q</h1>
    {
      data.map((CurElement)=>{
        const {id, Question, answer} = CurElement
        return <MyAccordion key={id} {...CurElement}/>  // in map methode must pass the unique key 
      })
    }
    </section>
    </>
  )
}

export default Accordion
