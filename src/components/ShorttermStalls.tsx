import React from "react";
import map from "../images/other/map.png";
import on from "../images/other/on.png";
import off from "../images/other/off.png";
import Map from "./Mapfull";

function ShorttermStalls() {
  return (
    <div className="section">
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-6">
            <div className="row">
              <div className="col-1 offset-6">
                <img src={map} alt="" />
              </div>
              <div className="col-3 font">Show Map</div>
              <div className="col-1 me-5">
                <img src={off} alt="" height="35px" className="" width="50px" />
              </div>
            </div>
            <div className="container mt-3">
              <div className="row">
                <div className="col-4">
                  <button
                    type="button"
                    className="btn btn-outline-white border border-dark rounded-pill shadow-none">
                    Short term Stalls{" "}
                  </button>
                </div>
                <div className="col-4">
                  <button
                    type="button"
                    className="btn btn-outline-white border border-dark rounded-pill shadow-none">
                    Check-In/Check-Out
                  </button>
                </div>
                <div className="col-4">
                  <button
                    type="button"
                    className="btn btn-outline-white border border-dark rounded-pill shadow-none">
                    Stalls
                  </button>
                </div>
                <div className="col-2 mt-3">
                  <button
                    type="button"
                    className="btn btn-outline-white border border-dark rounded-pill shadow-none">
                    prices
                  </button>
                </div>
                <div className="col-5 mt-3">
                  <button
                    type="button"
                    className="w-75 btn btn-outline-white border border-dark rounded-pill shadow-none">
                    enter a location
                  </button>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-3 ms-auto">
                <p className="font">Clear Filter</p>
              </div>
            </div>
            <hr />
            {/* images section  */}

            <div className="container">
              <div className="row">
                <div className="col-4">
                  <img
                    src="https://a-z-animals.com/media/horse-3.jpg"
                    height="230px"
                    width="200px"
                    alt=""
                  />
                </div>
                <div className="col-7 ms-3 mt-3">
                  <div className="row">hello</div>
                  <div className="row mt-2 mb-5">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                  <div className="row mt-5 ">
                    <div className="col-4">$1/Night</div>
                    <div className="col-8 ms-auto">
                      <button className="btn btn-success">View Details </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6">{/* <Map /> */}</div>
        </div>
      </div>
    </div>
  );
}

export default ShorttermStalls;