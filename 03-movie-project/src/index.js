import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Cards'
import Mdata from './Mdata';
import './index.css'

ReactDOM.render(
    <>
    <Card 
    Imgsrc={Mdata[0].Imgsrc}
    title={Mdata[0].title}
    Mlink={Mdata[0].Mlink}
    />

    <Card 
    Imgsrc={Mdata[1].Imgsrc}
    title={Mdata[1].title}
    Mlink={Mdata[1].Mlink}
    />

    <Card 
    Imgsrc={Mdata[2].Imgsrc}
    title={Mdata[2].title}
    Mlink={Mdata[2].Mlink}
    />
    </>,
    document.getElementById('root')
)