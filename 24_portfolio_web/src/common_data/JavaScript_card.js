import React from 'react';


const Javascript_card = (props) => {
  return (
    <>
              <div className="col-md-4 col-10 mx-auto pb-2">
                <div className="card" style = {{'width': '17rem'}}>
                  <img src={props.imgsrc} className="card-img-top" alt="project_1"/>
                    <div className="card-body">
                      <h5 className="card-title">{props.title}</h5>
                      <p className="card-text">{props.description}</p>
                      <a href={props.visit} className="btn btn-primary">Go somewhere</a>
                    </div>
                </div> 
              </div>
    </>
  )
}

export default Javascript_card
