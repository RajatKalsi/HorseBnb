import React from 'react'
import experience from "../images/other/experience.png";
import nearme from "../images/other/nearme.png";
import {Link} from "react-router-dom"

function HostExperienceLocation() {
  return (
    <div>
         <div className="container">
        <div className="row">
          <div className="col-4 me-auto">
            <h4 className="mt-5">
              <b>Where;s your place Located</b>
            </h4>
            <p>
              Guests will extract your location only once they have booked a
              reservation
            </p>
            <button className="btn btn-outline-success mt-1">
              <img src={nearme} alt="" />
              Use Current location
            </button>
            <form className="mt-3">
              <label>Country/Region</label>
              <br></br>
              <select
                className="form-select mt-1 mb-1"
                aria-label="Default select example">
                <option selected> 1 stall</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              <label>Street Address</label>
              <br></br>
              <input
                type="text"
                className="mt-1 w-100 mb-1"
                placeholder="House Number/Street Road"
              />
              <label>Flat,Suite (optional)</label>
              <br></br>
              <input
                type="text"
                className="mt-1 w-100 mb-1"
                placeholder="House Number/Street Road"
              />
              <div className="row">
                <div className="col-6">
                  <label>City</label>
                  <br></br>
                  <input
                    type="text"
                    className="mt-1 w-100 mb-1"
                    placeholder="City"
                  />
                </div>
                <div className="col-6">
                  <label>Country</label>
                  <br></br>
                  <input
                    type="text"
                    className="mt-1 w-100 mb-1"
                    placeholder="Country"
                  />
                </div>
                <div className="col-6">
                  <label>Postcode</label>
                  <br></br>
                  <input
                    type="text"
                    className="mt-1 w-100 mb-1"
                    placeholder="Postcode"
                  />
                </div>
              </div>
              <hr />
              <div className="row mt-4">
                <div className="col-3 me-auto text-danger" onClick={()=>{window.history.back()}}>
                  <i className="bi bi-chevron-left"></i>Back
                </div>
                <div className="col-3 ms-auto">
                  <button className="btn btn-success border-0"><Link to="/createstallamenities"><span className="text-white">Next</span></Link></button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-5 pt-4 mt-5 ms-auto">
            <img src={experience} className="ms-5 mt-4" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostExperienceLocation