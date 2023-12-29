import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Cards'
import Mdata from './Mdata';
import './index.css'

// map() method
//array.map(function(currentValue, index, arr),thisvalue)
//index, arr - optional

//declaring function
function Ncards (value){
    return(
        <Card 
        key={value.id}
        Imgsrc={value.Imgsrc}
        title={value.title}
        Mlink={value.Mlink}
        />
        )
}

ReactDOM.render(
    <>
    <h1 className='heading_style'> list of top 5 netflix movies</h1>
    {Mdata.map(Ncards)}
    </>,
    document.getElementById('root')
)