import React from "react";
import logo from "../images/other/logo.svg";
import "./horsebnb.css";
import star from "../images/other/star.png";

function Paymentconfirm() {
  return (
    <div>
      {" "}
      <nav className="navbar navbar-expand-sm shadow">
        <div className="container-fluid">
          <img src={logo} className="navbar-brand" alt="" />
        </div>
      </nav>
      <div className="container mt-4">
        <p className="text-start">
          <b>
            <i className="bi bi-chevron-left"></i>
          </b>
        </p>
        <div className="row">
          <div className="col-6">
            <p className="text-start">
              <b>Confirm and Pay</b>
            </p>
            <div className="row">
              <div className="col-4 text-start">
                <img
                  src="https://a-z-animals.com/media/2021/12/Best-Horses-Lipizzan.jpg"
                  alt=""
                  height="100px"
                  width="200px"
                  className=""
                />
              </div>
              <div className=" ms-4 col-6 text-start">
                <p className="mb-0">
                  <b>Apple Horse Stalls & Guest Stay</b>
                </p>
                <p className="mb-0"> Entire Barn.4 stalls.4 beds</p>
                <div>
                  <img src={star} alt="" /> 4.5
                </div>
                <hr />
              </div>
            </div>
            <p className="text-start mt-2">
              <b>Your Bookings</b>
            </p>
            <div className="row">
              <div className="col-5 text-start me-auto">
                <p className="mb-0">
                  <b>Dates</b>
                </p>
                <p>5 Jun 2022- 6 Jun 2022</p>
              </div>
              <div className="col-3 ms-auto mt-1">
                <b>edit</b>
              </div>
            </div>
            <div className="row">
              <div className="col-5 text-start me-auto">
                <p className="mb-0">
                  <b>Stalls & Guests</b>
                </p>
                <p>1 Stall. 1 Guest</p>
              </div>
              <div className="col-3 ms-auto mt-1">
                <b>edit</b>
              </div>
            </div>
            <hr />
            <p className="text-start mb-0">
              <b>Cancellation Policy</b>
            </p>
            <p className="text-start mb-0">
              Cancel before 5 Jun and get payment Refund
            </p>
            <p className="text-start">
              <b>Learn more</b>
            </p>
            <div className="text-start">
              <button className="btn btn-danger">
                {" "}
                <i className="bi bi-lock me-2"></i>Confirm and Pay
              </button>
            </div>
          </div>
          <div
            className="col-6 text-start shadow ms-5"
            style={{ height: "320px", width: "350px" }}>
            <div className="m-3">
              <p>
                <b>Price Detail</b>
              </p>
              <div className="row mt-2">
                <div className="col-4 me-auto text-start">30 x 1 nights</div>
                <div className="col-3 ms-auto">$30</div>
              </div>
              <div className="row mt-2">
                <div className="col-4 me-auto text-start">Discount</div>
                <div className="col-3 ms-auto">-$2</div>
              </div>
              <div className="row mt-2">
                <div className="col-4 me-auto text-start">Service Fees</div>
                <div className="col-3 ms-auto">$5</div>
              </div>
              <div className="row mt-2">
                <div className="col-5 me-auto text-start">
                  Occupancy texes and fees
                </div>
                <div className="col-3 ms-auto">$5</div>
              </div>
              <div className="row mt-2">
                <div className="col-4 me-auto text-start">
                  <b>Total USD</b>
                </div>
                <div className="col-3 ms-auto">$38</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paymentconfirm;
