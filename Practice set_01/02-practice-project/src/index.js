import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
const currDate = new Date().getHours();
let msg = ""

//style for h1 tag
const bgstyle = {
  backgroundColor: '#bd6a6a',
  padding: '10px 20px',
  borderRadius: '10px',
  margin: '10px'
}

//style for img
const imgStyle = {
  height:'100vh',
  fontSize:'50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: ''
};

if (currDate>=5 && currDate<=12) {
  msg = 'Good Morning';
  imgStyle.backgroundImage=
  "url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9ybmluZyUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80')"
}
else if (currDate>=12 && currDate<=18) {
  msg = 'Good Afternoon';
  imgStyle.backgroundImage=
  "url('https://wallpaper-house.com/data/out/12/wallpaper2you_543006.jpg')"
}
else {
  msg = 'Good Night';
  imgStyle.backgroundImage=
  "url('https://wallpaperaccess.com/full/682419.jpg')"
}

ReactDOM.render(
  <>
    <div className='container' style={imgStyle}>
      <h1 style={bgstyle}>{msg}</h1>
      <p>Shrikant</p>
    </div>
  </>,
  document.getElementById('root')
)