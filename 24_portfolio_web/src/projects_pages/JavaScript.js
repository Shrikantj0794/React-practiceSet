import React from 'react'
import JavaScript_card from '../common_data/JavaScript_card'
import JavaScript_data from '../api/JavaScript_data'

const javaScript = () => {

    JavaScript_card = (value)=>{
        <JavaScript_card
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
                    { JavaScript_data.map(JavaScript_card)}
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default javaScript
