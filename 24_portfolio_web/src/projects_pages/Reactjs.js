import React from 'react'
import React_data from '../api/React_data';
import React_card  from '../common_data/React_card'

const Reactjs = () => {

    React_card = (value)=>{
        <React_card
          key={value.id}
          imgsrc={value.imgsrc}
          title={value.title}
          description={value.description}
          visit={value.visit}
        />
    }
  return (
    <>
       <div className='container-fluid mb-5'>
              <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row">
                    { React_data.map(React_card)}
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default Reactjs
