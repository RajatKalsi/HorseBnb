import React from "react";
import removecircle from "../images/other/removecircle.png";
import addcircle from "../images/other/addcircle.png";
import CreateStallimage from "./CreateStallimage";
import horseimage from "../images/other/horseimage.png";

function CreateStallStep3() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-5 mt-5">
            <h4>
              <b>How many Guests Can your place accomodate?</b>
            </h4>
            <p>
              Check that you have enough stalls and beds to accomodate all your
              guests comfortably
            </p>
            <div className="row">
              <div className="col-4 me-auto">
                <b>Stalls</b>
              </div>
              <div className="col-4 ms-auto">
                <span>
                  <img src={removecircle} alt="" className="me-2" /> 5{" "}
                  <img src={addcircle} alt="" className="ms-2" />
                </span>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-4 me-auto">
                <b>Guests</b>
              </div>
              <div className="col-4 ms-auto">
                <span>
                  <img src={removecircle} alt="" className="me-2" /> 5{" "}
                  <img src={addcircle} alt="" className="ms-2" />
                </span>
              </div>
            </div>
            <p>How many stalls guests can use</p>
            <select
              className="form-select mt-3"
              aria-label="Default select example">
              <option selected> 1 stall</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <hr className="mt-5" />
            <div className="row mt-2">
              <div className="col-3 me-auto">
                <i className="bi bi-chevron-left"></i>Back
              </div>
              <div className="col-3 ms-auto">
                <button className="btn btn-success border-0">Next</button>
              </div>
            </div>
          </div>

          <div className="col-6 mt-5 ms-5" style={{ height: "500px" }}>
            <div></div>
            <img src={horseimage} className="ms-5 mt-4" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateStallStep3;
