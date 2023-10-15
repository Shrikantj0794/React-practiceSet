import React from 'react';
import Card from '../common_data/Card';
import Project_data from '../api/Project_data';
import { useState } from 'react';



const AllProjects = () => {

const [item, setitem] = useState(Project_data);

const filterCard = (cateCard)=>{
  const updatedCard = Project_data.filter((curElement)=>{
    return curElement.type === cateCard;
  });
  setitem(updatedCard)
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
                        <li className="mx-3" onClick={()=>filterCard('html')}>Html/Css</li>
                        <li className="mx-3" onClick={()=>filterCard('javascript')}>JavaScript</li>
                        <li className="mx-3" onClick={()=>filterCard('reactjs')}>Reactjs</li>
                    </ul>
                </div>
            </div>
            <div className='container-fluid mb-5'>
              <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row">
                    { item.map((showCard)=>{
                        const{id, imgsrc, title, description, visit, type} = showCard;

                        return(
                              <Card
                                key={id}
                                imgsrc={imgsrc}
                                title={title}
                                description={description}
                                visit={visit}
                                type={type}
                              />
                        )
                        
                    })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
    </>
  )
}

export default AllProjects
