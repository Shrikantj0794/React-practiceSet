import React from 'react';
import ReactDOM from 'react-dom';

const fname = 'shrikant'
ReactDOM.render(
    <>
    <h1>my name is {fname}</h1>
    <p>calculation 2+3</p> 
    <p>calculation {2+3}</p> 
    <p>random No:- {Math.random()}</p>
    {/* used only Expression not statement,function, methode */}
    </>,
    document.getElementById("root")
)