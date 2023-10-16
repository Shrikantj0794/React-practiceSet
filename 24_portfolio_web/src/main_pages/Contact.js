import React from 'react'

const Contact = () => {

  
  const formsubmit = ()=>{

  }

  return (
    <>
      <div className="my-3">
        <h1 className='text-center'> Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formsubmit}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Full Name</label>
              <input 
              type="text" 
              class="form-control" 
              id="exampleFormControlInput1"
              name='name'
              value={}
              onChange={InputEvent} 
              placeholder="Enter your name" 
              required/>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Phone No</label>
              <input 
              type="number" 
              class="form-control" 
              id="exampleFormControlInput1"
              name='phoneNo'
              value={}
              onChange={InputEvent} 
              placeholder="Mobile No" 
              required/>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input 
              type="email" 
              class="form-control" 
              id="exampleFormControlInput1"
              name='email'
              value={}
              onChange={InputEvent} 
              placeholder="example@gmail.com" 
              required/>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea 
              class="form-control" 
              id="exampleFormControlTextarea1"
              name='msg'
              value={}
              onChange={InputEvent} 
              rows="3">
              </textarea>
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit">Submit form</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
