import React from "react";
import lightbulb from "../images/other/lightbulb.png";
import {Link} from "react-router-dom"

function CreateStallStep13() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <h4 className="mt-5">
            <b>Price your Space</b>
          </h4>
          <p>Increase your chances of getting booked</p>
          <p>
            Set up smart Pricing to automatically keep your nightly pricing
            competitive as demand in your area changes
          </p>
          <p className="mt-4">
            <b>Set up the same base price for each night </b>
          </p>
          <h5 className="mt-3">Base price</h5>
          <p>
            <small>This will be your default price</small>
          </p>
          <form>
            <input type="text" placeholder="$" alt="" className="w-50 form-control"/>
          </form>
          <hr className="mt-5" />
          <div className="row mt-2 mb-4">
            <div className="col-4 me-auto text-danger" onClick={()=>{window.history.back()}}>
              <i className="bi bi-chevron-left"></i>Back
            </div>
            <div className="col-4 ms-auto">
              <button className="btn btn-success border-0 me-4"><Link to="/createstallstep14"><span className="text-white">Next</span></Link></button>
            </div>
          </div>
        </div>
        <div
          className="col-4 ms-auto mt-5 me-5 shadow p-3"
          style={{ height: "280px" }}>
          <div className="p-3">
            <img src={lightbulb} alt="" className="mt-3" />
            <p className="mt-3">
              Guests can book available dates upto 3 months advance
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              quibusdam assumenda, deserunt rem ab reprehenderit eveniet non?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateStallStep13;
