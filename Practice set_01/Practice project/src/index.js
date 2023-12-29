import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
//import component
import Heading from './Heading.jsx';

const fname = 'shrikant';
const lname = 'jamale';

const CurrDate = new Date().toLocaleDateString();
const CurrTime = new Date().toLocaleTimeString();

const image1 = 'https://picsum.photos/200/300'
const image2 = 'https://picsum.photos/220/300'
const image3 = 'https://picsum.photos/230/300'

const heading = {
    color: "red",
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'capitalize'
}
ReactDOM.render(
    <>
    <h1 className='size' style={heading}>my name is {fname}</h1>
    <p className='size'>calculation 2+3</p> 
    <p>calculation {2+3}</p> 
    <p className='size'>random No:- {Math.random()}</p>
    {/* used only Expression not statement,function, methode */}

    {/* Template Literals in JSX */}
    <p className='size'>My full name is {fname} {lname}</p>
    <p>My full name is {fname+" "+lname}</p>
    <p>{`my first name is ${fname} any my last name is ${lname}`}</p>  {/* Best way to use template literals */}

    {/* Display Current Date and Time */}
    <p className='size'>Current Date : {CurrDate}</p>
    <p>Current Time : {CurrTime}</p>
    <p>Current date: {new Date().toLocaleDateString()}</p>

    {/* Attributes in ReactJS */}
    <p className='size' contentEditable ="true">Currently I am pursing B.Tech in wagholi</p>

    {/* img in react */}
    <h2 className='style size' style={{color: 'black', textTransform: "uppercase"}}> Random Images</h2>
    <img src={image1} alt=''/>
    <img src={image2} alt=''/>
    <img src={image3} alt=''/>
    
    <Heading/>
    </>,
    document.getElementById("root")
) 