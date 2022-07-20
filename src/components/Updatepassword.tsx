import React, { useState } from "react";
import "./horsebnb.css";
import img1 from "../images/other/changepassword.png";
function Updatepassword() {
  return (
    <div className="container">
      <div className="d-flex mt-5">
        <b>
          <p className="">Account</p>
        </b>
        <b>
          <i className="bi bi-chevron-compact-right ms-2"></i>
        </b>
        <p className="ms-2">
          <b>Personal info</b>
        </p>
      </div>
      <div className="row mt-2">
        <h3>Update Password</h3>
      </div>
      <div className="row mt-3">
        <h5>Log In </h5>
      </div>
      <div className="row mt-3">
        <div className="col-6 shadow  mt-5 me-5">
          <div className="row p-3">
            <div className="col-4 me-auto">Password</div>
            <div className="col-2 ms-auto text-danger">Update</div>
            <div className="row mt-1">
              <label>Current Password</label>
              <br></br>
              <input type="password" placeholder="Current password" />
              <br></br>
              <label>New Password</label>
              <br></br>
              <input type="password" placeholder="New password" />
              <br></br>
              <label>Confirm Password</label>
              <br></br>
              <input type="password" placeholder="Confirm password" />
              <br></br>
              <span className="text-start mt-2 me-2">
                <button className="btn btn-success border-0 shadow-none text-start">
                  Update Password
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Updatepassword;

<div className="row p-3">
  <div className="col-9">
    <label>Current password</label>
    <br></br>
    <input type="text" placeholder="Current password" className="w-100" />
  </div>
  <div className="col-12">
    <label>Current password</label>
    <br></br>
    <input type="text" className="w-100" placeholder="New password" />
  </div>
</div>;

<div
  className="col-6 border border-2 ms-5"
  style={{ height: "250px", width: "350px" }}>
  <div className="row p-3">
    <div className="col-4">
      <img src={img1} alt="" height="50px" width="50px" />
    </div>
    <p className="mt-1">
      <b>Keep your Account secure ?</b>
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ratione
      tenetur esse cumque, mollitia fuga.
    </p>
  </div>
</div>;
