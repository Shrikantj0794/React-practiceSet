import React from 'react'

const Card = () => {
  return (
    <>
      <div class="card" style = {{'width': '17rem'}}>
                  <img src={pimg_1} class="card-img-top" alt="project_1"/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
                </div> 
    </>
  )
}

export default Card
