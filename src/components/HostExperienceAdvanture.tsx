import React from 'react'
import experience from "../images/other/experience.png";
import {Link} from 'react-router-dom'

function HostExperienceAdvanture() {
  return (
    <div className='container'>
         <div className="row">
        <div className="col-5">
          <h4 className="mt-5">
            <b>Describe your place to guests</b>
          </h4>
          <p>
            <small>
              Write a quick Summary of your place. You can highlight, what's
              special about your space,the neighbourhood ,and how you will
              imteract with guests
            </small>
          </p>
          <textarea
            id="myTextarea"
            rows={5}
            cols={50}
            placeholder="Types here.."></textarea>
          <hr />
          <h4 className="mt-3">
            <b>Want to add more Info?</b>
          </h4>
          <p className="">
            <small>Use the additional fields below to show more details</small>
          </p>
          <b className="">Your spaces</b>
          <p className="">
            <small>
              Add other details that can help set's guest expectation for stay
            </small>
          </p>
          <textarea
            id="myTextarea"
            rows={5}
            cols={50}
            placeholder="Types here.."></textarea>
          <hr />
          <div className="row mt-2 mb-4">
            <div className="col-4 me-auto text-danger" onClick={()=>{window.history.back()}}>
              <i className="bi bi-chevron-left"></i>Back
            </div>
            <div className="col-4 ms-auto">
              <button className="btn btn-success border-0"><Link to="/createstallstep11"><span className="text-white">Next</span></Link></button>
            </div>
          </div>
        </div>
        <div className="col-5 pt-4 mt-5 ms-auto">
          <img src={experience} className="ms-5 mt-4" alt="" />
        </div>
      </div>
    </div>
  )
}

export default HostExperienceAdvanture