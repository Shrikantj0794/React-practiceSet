import React from 'react';


const Card = (props) => {
  return (
    <>
      <div class="card" style = {{'width': '17rem'}}>
                  <img src={props.imgsrc} class="card-img-top" alt="project_1"/>
                <div class="card-body">
                  <h5 class="card-title">{props.title}</h5>
                  <p class="card-text">{props.description}</p>
                  <a href={props.visit} class="btn btn-primary">Go somewhere</a>
                </div>
                </div> 
    </>
  )
}

export default Card
