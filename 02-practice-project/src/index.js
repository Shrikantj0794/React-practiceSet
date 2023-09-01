import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const currDate = new Date(2022, 9, 6,7 ).getHours();
let msg = ""
const styles = {}

if (currDate>=5 && currDate<=12) {
  msg = 'Good Morning';
  styles.color = 'green';
}
else if (currDate>=12 && currDate<=18) {
  msg = 'Good Afternoon'
  styles.color = 'orange';
}
else {
  msg = 'Good Night'
  styles.color = 'black';
}

ReactDOM.render(
  <>
    <div className='container'>
      <h1 style={styles}>{msg}</h1>
      <p>Shrikant</p>
    </div>
  </>,
  document.getElementById('root')
)