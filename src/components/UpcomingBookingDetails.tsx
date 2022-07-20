import React from "react";
import vacationfive from "../images/other/vacationfive.png";
import cancelicon from "../images/other/cancelicon.png";
import star from "../images/other/star.png";
import identity from "../images/other/identity.png";
import superhost from "../images/other/superhost.png";
import call from "../images/other/call.png";
import "./horsebnb.css";
import { ClassNames } from "@emotion/react";

function UpcomingBookingDetails() {
  return (
    <div className="container mt-3">
      <h3>
        <b>You're going to New York!</b>
      </h3>
      <p>Reservation Code:Rcd5525</p>
      <div className="row">
        <div className="col-6">
          <div className="shadow p-3">
            <div className="row">
              <div className="col-3 mt-2">
                <b>Hotel</b>
              </div>
              <div className="col-8">
                <img src={vacationfive} height="40px" width="60px" alt="" />{" "}
                <b>Apple Horse stalls & Guests stay</b>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-3 ">
                <b>Booking Date</b>
              </div>
              <div className="col-8">
                <b>5 Jun 2022</b>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-3">
                <b>Stay type</b>
              </div>
              <div className="col-8">
                <b>Short term</b>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-3">
                <b>Booking Status</b>
              </div>
              <div className="col-8">
                <p className="text-success">Confirmed</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-3">
                <b>Stalls & Guests</b>
              </div>
              <div className="col-8">1 stall & 1 Guest</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-3">
                <b>Check-In</b>
              </div>
              <div className="col-3">Fri 5 jun Anytime after 2 PM</div>
              <div className="col-3">
                <b>Check-Out</b>
              </div>
              <div className="col-3">Sat,07 Jun 12 PM (noon)</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-3">
                <b>Stalls Rules</b>
              </div>
              <div className="col-8">
                <p>Check-in:After 2:00 PM</p>
                <p>Check-out:After 12:00 PM</p>
                <p>Pets are Allowed</p>
                <p>Smoking are Allowed</p>
              </div>
            </div>
          </div>
          <div className="row mt-3 shadow">
            {/* <div className=""> */}
            <div className="col-6 p-4">
              <span>
                <img src={cancelicon} className="me-2" alt="" />
                Cancel reservation
              </span>
            </div>
            <div className="col-6 p-4">
              <button className="btn btn-outline-danger">
                Cancel reservation
              </button>
            </div>
          </div>
        </div>
        <div
          className="col-6 shadow ms-3"
          style={{ height: "500px", width: "470px" }}>
          <div className="row m-2">
            {/* <img src={} alt=""/> */}
            <div className="col-4 m-auto">
              {" "}
              <img
                src="https://5.imimg.com/data5/GK/SX/MY-38540305/white-horse-500x500.jpg"
                alt=""
                height="70px"
                width="70px"
                className="rounded-pill"
              />
              <p className="mt-2">
                <b>John Doe</b>
              </p>
              <p className="text-center">Joined Jan 2016</p>
            </div>
          </div>
          <div className="row">
            <div className="col-4 m-auto">
              <img src={star} alt="" /> 26 reviews
            </div>
            <div className="col-5 m-auto">
              <img src={identity} alt="" /> Identity Verified
            </div>
            <div className="col-3 m-auto">
              <img src={superhost} alt="" /> Superhost
            </div>
          </div>
          <hr />
          <div className="col-12">
            <p className="text-center">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              fuga blanditiis. Eos vel, quia facilis praesentium molestias
              labore velit cumque!
            </p>
          </div>
          <div className="text-center mt-2">
            <button className="btn btn-danger border-0">Message Host</button>
          </div>
          <div className="text-center mt-4">
            <img src={call} alt="" className="me-2" /> 9856347525
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default UpcomingBookingDetails;
