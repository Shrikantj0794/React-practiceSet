import React from 'react';
import Card from '../Common/Card';
import Project_data from '../Data/Proect_data';


const Projects = () => {

  function showCard (value){
    return(
      <Card
        key={value.id}
        imgsrc={value.imgsrc}
        title={value.title}
        description={value.description}
        visit={value.visit}
      />
    )
  }
  return (
    <>
        <div className="container-xxl py-6 pt-5" id="project">
        <div className="container">
            <div className="row g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-6">
                    <h1 className="display-5 mb-0">My Projects</h1>
                </div>
                <div className="col-lg-6 text-lg-end">
                    <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
                        <li className="mx-3 active" data-filter="*">HTML/CSS</li>
                        <li className="mx-3" data-filter=".first">JavaScript</li>
                        <li className="mx-3" data-filter=".second">Reactjs</li>
                    </ul>
                </div>
            </div>
            <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-4 col-md-6 portfolio-item first">
                      { Project_data.map(showCard)}
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Projects
