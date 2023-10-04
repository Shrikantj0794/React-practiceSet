import React from 'react'

const Home = (props) => {
  return (
    <>
    <h1 style={{color: 'red'}}>HI wellcome to {props.name} page</h1>
      <div class="container mt-5">
    <div class="card">
        
        <div class="card-body">
            <h5 class="card-title">Welcome to My Simple Home Page</h5>
            <p class="card-text">This is a simple home page with a card and a background color.</p>
            <a href="#" class="btn btn-primary">Learn More</a>
        </div>
    </div>
    </div>

    </>
  )
}

export default Home
