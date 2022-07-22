import React from "react";
import check_circle from "../images/other/check_circle.png";
import finishlist from "../images/other/finishlist.png";

function CreateStallStep15() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h4 className="mt-5">
            <b>Finish Your listing to start earning</b>
          </h4>
          <p className="mt-2">
            You can always edit your listing after you publish it
          </p>
          <div className="row">
            <div className="col-1">
              <img src={check_circle} alt="" />
            </div>
            <div className="col-6 text-start">Property and Guests</div>
          </div>
          <div className="row mt-3">
            <div className="col-1">
              <img src={check_circle} alt="" />
            </div>
            <div className="col-6 text-start">Location</div>
          </div>
          <div className="row mt-3">
            <div className="col-1">
              <img src={check_circle} alt="" />
            </div>
            <div className="col-6 text-start">Amenities</div>
          </div>
          <div className="row mt-3">
            <div className="col-1">
              <img src={check_circle} alt="" />
            </div>
            <div className="col-6 text-start">Photos</div>
          </div>
          <div className="row mt-3">
            <div className="col-1">
              <img src={check_circle} alt="" />
            </div>
            <div className="col-6 text-start">Description and title</div>
          </div>
          <div className="row mt-3">
            <div className="col-1">
              <img src={check_circle} alt="" />
            </div>
            <div className="col-6 text-start">Profile-photo</div>
          </div>
          <div className="row mt-3">
            <div className="col-1">
              <img src={check_circle} alt="" />
            </div>
            <div className="col-6 text-start">Phone Number</div>
          </div>
          <div className="row mt-3">
            <div className="col-1">
              <img src={check_circle} alt="" />
            </div>
            <div className="col-6 text-start">Booking setting</div>
          </div>
          <div className="row mt-3">
            <div className="col-1">
              <img src={check_circle} alt="" />
            </div>
            <div className="col-8 text-start">calander and availability</div>
          </div>
          <div className="row mt-3">
            <div className="col-1"></div>
            <div className="col-6 text-start">Pricing</div>
          </div>
          <div className="row mt-3">
            <div className="col-1"></div>
            <div className="col-6 text-start">
              <button className="btn btn-success shadow-none mb-5">
                Continue
              </button>
            </div>
          </div>
        </div>
        <div className="col-7 pt-4 mt-5 ms-auto">
          <img src={finishlist} className="ms-5 mt-4" alt="" />
        </div>
      </div>
    </div>
  );
}

export default CreateStallStep15;
