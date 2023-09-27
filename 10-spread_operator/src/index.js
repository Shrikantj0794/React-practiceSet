import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const arry1 = [1,2,3,4,5];
const arry2 = [...arry1, 6,7,8,9,10]
const name= ['Shrikant', 'Jamale']
console.log(...arry1, ...arry2, ...name)





root.render(
  
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

reportWebVitals();
