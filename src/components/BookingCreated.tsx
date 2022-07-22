import React from "react";
import vacationfive from "../images/other/vacationfive.png";
import check from "../images/other/check.png";
import experience from "../images/other/experience.png";
import "./horsebnb.css";
function BookingCreated() {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#myModal">
        open{" "}
      </button>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal">
                {}
              </button>
            </div>
            <div className="modal-body">
              <img src={experience} alt="" />
              <div className="col-12">
                <h3>
                  <b className="text-center ms-3">
                    Just a moment we're getting your booking ready
                  </b>
                </h3>
              </div>
              <p className="text-start">
                <img src={check} alt="" />
                Booking Created
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* login modal  */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#myModal1">
        open{" "}
      </button>
      <div
        className="modal shadow text-start"
        id="myModal1"
        style={{ height: "430px", width: "250px" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <button
                className="btn btn-white border-0"
                data-bs-dismiss="modal"
                data-bs-target="modal">
                <b>Bookings</b>
              </button>
              <p>
                <button
                  className="btn btn-white border-0"
                  data-bs-dismiss="modal"
                  data-bs-target="modal">
                  {" "}
                  <b>favourite</b>
                </button>
              </p>
              <hr />
              <p>
                <button
                  className="btn btn-white border-0 shadow-none"
                  data-bs-dismiss="modal"
                  data-bs-target="modal">
                  {" "}
                  <b>Manage Listings</b>
                </button>
              </p>
              <p>
                <button
                  className="btn btn-white border-0"
                  data-bs-dismiss="modal"
                  data-bs-target="modal">
                  {" "}
                  <b>Profile</b>
                </button>
              </p>
              <p>
                <button
                  className="btn btn-white border-0"
                  data-bs-dismiss="modal"
                  data-bs-target="modal">
                  {" "}
                  <b>Account</b>
                </button>
              </p>
              <hr />
              <p>
                <button
                  className="btn btn-white border-0"
                  data-bs-dismiss="modal"
                  data-bs-target="modal">
                  {" "}
                  <b>Log out</b>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCreated;
