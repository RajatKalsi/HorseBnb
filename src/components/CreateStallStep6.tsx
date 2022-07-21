import React from "react";
import publish from "../images/other/publish.png";
import lightbulb from "../images/other/lightbulb.png";
import "./horsebnb.css";

function CreateStallStep6() {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-6 ">
            <h4 className="mt-5">
              <b>Liven up your listing and photos</b>
            </h4>
            <p className="mt-3">
              Take Photos using a phone or camera. Upload atleast one photo to
              publish yopur listing --you can add always more or edit later
            </p>
            <div className="text-center image-border p-3 mt-3" style={{}}>
              <img className="" src={publish} alt="" />
              <br></br>
              <button className="btn btn-success disable">
                Uploads Photos
              </button>
              <div className="row">
                <div className="col-6">
                  <img src="" alt=""></img>
                </div>
                <div className="col-6">
                  <img src="" alt=""></img>
                </div>
              </div>
            </div>
            <hr className="mt-5" />
            <div className="row mt-4">
              <div className="col-3 me-auto">
                <i className="bi bi-chevron-left text-danger"></i>
                <span className="text-danger">Back</span>
              </div>
              <div className="col-3 ms-auto">
                <button className="btn btn-success border-0">
                  Skip for now
                </button>
              </div>
            </div>
          </div>
          <div className="col-6 mt-5">
            <div className="row">
              <div className="col-5 ms-auto mt-5 me-5 shadow">
                <img src={lightbulb} alt="" />
                <p className="mt-3">
                  <b>Quick Tips for quality photos</b>
                  <ol>
                    <li>Lorem, ipsum dolor</li>
                    <li>Lorem, ipsum dolor</li>
                    <li>Lorem, ipsum dolor</li>
                    <li>Lorem, ipsum dolor</li>
                    <li>Lorem, ipsum dolor</li>
                    <li>Lorem, ipsum dolor</li>
                    <li>Lorem, ipsum dolor</li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateStallStep6;
