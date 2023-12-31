import React from 'react';

const Card = (props) => {
  return (
    <>
              <div className="col-md-4 col-10 mx-auto pb-5">
                <div className="card h-100 pb-3" style = {{'width': '17rem'}}>
                  <img src={props.imgsrc} className="card-img-top" alt="project_1"/>
                    <div className="card-body">
                      <h5 className="card-title">{props.title}</h5>
                      <p className="card-text">{props.description}</p>
                    </div>
                    <div className="btn">
                      <a href={props.visit} className="btn btn-primary">Go somewhere</a>
                    </div>
                </div> 
              </div>
    </>
  )
}

export default Card
