import React from "react";
import horseimage from "../images/other/horseimage.png";
import {Link} from 'react-router-dom'

function CreateStallStep14() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 me-2">
          <h4 className="mt-5">
            <b>Do you want to setup your payout method now </b>
          </h4>
          <p className="mt-2">
            Increase your chances of getting booked Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Debitis laudantium autem illo Lorem
            ipsum dolor sit amet.
          </p>
          <div>
          <button className="btn btn-primary border-0 shadow-none rounded mt-3">
            $ Connect with stripe
          </button>
          <button className="btn btn-primary border-0 shadow-none ms-4 rounded mt-3">
            <Link to="/createstallstep15"><span className="text-white">Skip for now</span></Link>
          </button>
          </div>
          
          <hr className="mt-5" />
          <div className="row mt-2 mb-4">
            <div className="col-4 me-auto text-danger" onClick={()=>{window.history.back()}}>
              <i className="bi bi-chevron-left"></i>Back
            </div>
            <div className="col-4 ms-auto">
              <button className="btn btn-success border-0 me-4">Next</button>
            </div>
          </div>
        </div>
        <div className="col-5 pt-4 mt-5 ms-auto">
          <img src={horseimage} className="ms-5 mt-4" alt="" />
        </div>
      </div>
    </div>
  );
}

export default CreateStallStep14;
