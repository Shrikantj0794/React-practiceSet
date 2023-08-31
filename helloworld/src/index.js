import React from 'react'; //providing a jsx in the file.
import ReactDOM from 'react-dom'//enable to use DOM-specific methods.

ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'));



//The JSX gets internally into many React.createElement() function calls atumatically call coz importing react


//without jsx (javascript xml)
/*import { jsx as _jsx } from "react/jsx-runtime";
 ReactDOM.render(_jsx("h1", {
  children: "Hello World"
 }), document.getElementById('root')); */



