import React from "react";
import horseimage from "../images/other/horseimage.png";

function CreateStallAmenities() {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h4 className="mt-5">
              <b>What amenities do you offer?</b>
            </h4>
            <p>
              There are just the amenities guests usually expect,but you can add
              even more after you bublish
            </p>
            <form>
              <input type="checkbox" className="me-3" placeholder="gh" />
              <span>
                Essentials{" "}
                <p className="ms-4 mb-0">Lorem ipsum dolor sit amet.</p>
              </span>
              <input type="checkbox" className="me-3 mt-3" placeholder="gh" />
              <span>WiFi</span>
              <br></br>
              <input type="checkbox" className="me-3 mt-3" placeholder="gh" />
              <span>Tv</span>
              <br></br>
              <input type="checkbox" className="me-3 mt-3" placeholder="gh" />
              <span>Air-conditionding</span>

              <p className="mt-5">
                <b>Saftely Amenities</b>
              </p>
              <input type="checkbox" className="me-3" placeholder="gh" />
              <span>
                Smoke detector{" "}
                <p className="ms-4 mb-0">Lorem ipsum dolor sit amet.</p>
              </span>
              <br></br>
              <input type="checkbox" className="me-3" placeholder="gh" />
              <span>
                Carbon monooxide detector{" "}
                <p className="ms-4 mb-0">Lorem ipsum dolor sit amet.</p>
              </span>
              <br></br>
              <input type="checkbox" className="me-3" placeholder="gh" />
              <span>
                First aid kit
                <p className="ms-4 mb-0">Lorem ipsum dolor sit amet.</p>
              </span>
              <hr className="mt-5" />
              <div className="row mt-2">
                <div className="col-4 me-auto">
                  <i className="bi bi-chevron-left"></i>Back
                </div>
                <div className="col-4 ms-auto">
                  <button className="btn btn-success border-0">Next</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-5 pt-4 mt-5 ms-auto">
            <img src={horseimage} className="ms-5 mt-4" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateStallAmenities;
