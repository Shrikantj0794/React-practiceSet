import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Cards'
import Mdata from './Mdata';
import './index.css'

// map() method
//array.map(function(currentValue, index, arr),thisvalue)
//index, arr - optional

ReactDOM.render(
    <>
    <h1 className='heading_style'> list of top 5 netflix movies</h1>

    {Mdata.map(function(value){
        return(
        <Card 
        Imgsrc={value.Imgsrc}
        title={value.title}
        Mlink={value.Mlink}
        />
        )
    })}

    </>,
    document.getElementById('root')
)