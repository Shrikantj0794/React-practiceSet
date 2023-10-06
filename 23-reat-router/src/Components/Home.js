import React from 'react'

const Home = (props) => {
  return (
    <>
    <h1 style={{color: 'red'}}>HI wellcome to {props.name} page</h1>
      <div className="container mt-5">
    <div className="card">
        
        <div className="card-body">
            <h5 className="card-title">Welcome to My Simple Home Page</h5>
            <p className="card-text">This is a simple home page with a card and a background color.</p>
            <a href="/" className="btn btn-primary">Learn More</a>
        </div>
    </div>
    </div>

    </>
  )
}

export default Home
