import React from 'react'
import HtmlCss_card from '../common_data/HtmlCss_card'
import HtmlCss_data from '../api/HtmlCss_data'

const HtmlCss = () => {

    HtmlCss_card = (value)=>{
        <HtmlCss_card
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
                    { HtmlCss_data.map(HtmlCss_card)}
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default HtmlCss
