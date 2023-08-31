import React from 'react';
import ReactDOM from 'react-dom';

const fname = 'shrikant';
const lname = 'jamale';

ReactDOM.render(
    <>
    <h1>my name is {fname}</h1>
    <p>calculation 2+3</p> 
    <p>calculation {2+3}</p> 
    <p>random No:- {Math.random()}</p>
    {/* used only Expression not statement,function, methode */}

    {/* Template Literals in JSX */}
    <p>My full name is {fname} {lname}</p>
    <p>My full name is {fname+" "+lname}</p>
    <p>{`my first name is ${fname} any my last name is ${lname}`}</p>  {/* Best way to use template literals */}
    </>,
    document.getElementById("root")
) 