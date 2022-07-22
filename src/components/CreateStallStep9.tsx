import React from 'react'
import lightbulb from "../images/other/lightbulb.png";

function CreateStallStep9() {
  return (
    <div className='container'>
<div className='row'>
    <div className='col-5'>
    <h4 className="mt-5">
            <b>Add your photo</b>
          </h4>
          <div className='row'>
            <div className='col-6 mt-3'>
                <img src="https://www.nobroker.in/blog/wp-content/uploads/2022/02/7-running-horses-vastu.jpg" alt="" className='ms-1 rounded-pill' width="100px" height="100px"/>
            </div>
            <div className='col-6 mt-4'>
                <p>Upload photo</p>
                <button className='btn btn-success'>Upload photo</button>
            </div>
            <hr className='mt-4'/>
            <div className="row mt-2 mb-4 align-items-end" style={{height:"200px"}}>
          
            <div className="col-4 me-auto ">
              <i className="bi bi-chevron-left text-danger"></i><span className='text-danger'>Back</span>
            </div>
            <div className="col-4 ms-auto mt-3">
              <button className="btn btn-success border-0">Next</button>
            </div>
          </div>
          </div>
         
    </div>
    <div className="col-4 ms-auto mt-5 me-5 shadow" style={{height:"200px"}}>
          <div className="p-3">
            <img src={lightbulb} alt="" className="mt-3" />
            <p className="mt-3">
              <b>Make sure the photo clearly shows your face</b>
            </p>
          </div>
        </div>
</div>
    </div>
  )
}

export default CreateStallStep9
