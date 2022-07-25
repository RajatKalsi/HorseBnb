import React from "react";
import horseimage from "../images/other/horseimage.png";
import removecircle from "../images/other/removecircle.png";
import addcircle from "../images/other/addcircle.png";

const CreateStallStep4 = () => {
  return (
    <div className="row">
      <div className="col-4 me-auto ms-5">
        <div className="container">
          <div className="col-12">
            <h4 className="mt-5">
              <b>How many bathrooms?</b>
            </h4>
            <p className="mt-3">
              Count bathrooms that do'nt have shower or bath as a half bathroom
            </p>

            <div className="row">
              <div className="col-4 me-auto">
                <b>Bathrooms</b>
              </div>
              <div className="col-4 ms-auto">
                <span>
                  <img src={removecircle} alt="" className="me-2" /> 5{" "}
                  <img src={addcircle} alt="" className="ms-2" />
                </span>
              </div>
            </div>

            <div className="row">
              <div
                className="d-flex align-items-end"
                style={{ height: "300px" }}>
                <hr />
                <div className="col-3 me-auto mb-2 text-danger" onClick={()=>{window.history.back()}}>
                  <i className="bi bi-chevron-left"></i>Back
                </div>
                <div className="col-3 ms-auto mt-2">
                  <button className="btn btn-success border-0">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3 me-auto ms-5">
        <img src={horseimage} className="ms-5 mt-5" alt="" />
      </div>
    </div>
  );
};
export default CreateStallStep4;
