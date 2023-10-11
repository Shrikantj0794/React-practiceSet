import React from 'react';


const HtmlCss_card = (props) => {
  return (
    <>
              <div className="col-md-4 col-10 mx-auto pb-2">
                <div class="card" style = {{'width': '17rem'}}>
                  <img src={props.imgsrc} class="card-img-top" alt="project_1"/>
                    <div class="card-body">
                      <h5 class="card-title">{props.title}</h5>
                      <p class="card-text">{props.description}</p>
                      <a href={props.visit} class="btn btn-primary">Go somewhere</a>
                    </div>
                </div> 
              </div>
    </>
  )
}

export default HtmlCss_card
