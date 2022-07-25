import React from 'react'
import checkcircle1 from "../images/other/checkcircle1.png";
import cancel from "../images/other/cancel.png";
import horseimage from "../images/other/horseimage.png";

function CreateStallsStep10() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-5'>
            <h4 className="mt-5">
            <b>Things to know</b>
          </h4>
          <p>
            <small>
              Guests must agree to your house rules before they book
            </small>
          </p>
          <div className="row mt-3">
              <div className="col-4 me-auto">
                Lorem Ipsum
              </div>
              <div className="col-4 ms-auto">
                <span>
                  <img src={checkcircle1} alt="" className="me-2" /> 
                  <img src={cancel} alt="" className="ms-2" />
                </span>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-4 me-auto">
                Smoking Allowed
              </div>
              <div className="col-4 ms-auto">
                <span>
                  <img src={checkcircle1} alt="" className="me-2" /> 
                  <img src={cancel} alt="" className="ms-2" />
                </span>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6 me-auto">
                Events or parties Allowed
              </div>
              <div className="col-4 ms-auto">
                <span>
                  <img src={checkcircle1} alt="" className="me-2" /> 
                  <img src={cancel} alt="" className="ms-2" />
                </span>
              </div>
            </div>
            <hr className='mt-4'/>
            <div className="row mt-2 mb-4 align-items-end" style={{height:"180px"}}>
           <div className="col-4 me-auto mb-2 ">
              <i className="bi bi-chevron-left text-danger" onClick={()=>{window.history.back()}}></i><span className='text-danger'>Back</span>
            </div>
            <div className="col-4 ms-auto mt-4">
              <button className="btn btn-success border-0">Next</button>
            </div>
          </div>
            </div>
            <div className="col-5 pt-4 mt-5 ms-auto">
            <img src={horseimage} className="ms-5 mt-4" alt="" />
          </div>
            {/* <div className='col-4'>

            </div> */}
        </div>
    </div>
  )
}

export default CreateStallsStep10