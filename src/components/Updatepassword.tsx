import React, { useState } from "react";
import "./horsebnb.css";
import img1 from "../images/other/changepassword.png";
import henceforthApi from "./utils/henceforthApi";
function Updatepassword() {
  henceforthApi.setToken(localStorage.getItem("token"));
  const [show, setShow] = useState(true);
  const [showUpdate, setShowUpdate] = useState(false);
  const [password, setPasword] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const ShowpasswordUpdate = () => {
    setShow(false);
    setShowUpdate(true);
  };
  const CancelpasswordUpdate = () => {
    setShow(true);
    setShowUpdate(false);
  };
  const PasswordChange = (e: any) => {
    let name = e.target.name;
    let value = e.target.value;
    setPasword({
      ...password,
      [name]: value,
    });
  };
  const passwordUpdate = () => {
    let res = henceforthApi.Auth.updatePassword(password);
  };
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
        <div className="col-6 shadow  mt-3 me-5">
          <div className="row p-3">
            <div className="col-4 me-auto">Password</div>
            {show ? (
              <div className="col-2 ms-auto text-danger">
                <button
                  className="btn border-0 shadow-none text-danger"
                  onClick={ShowpasswordUpdate}>
                  Update
                </button>
              </div>
            ) : (
              <div className="col-2 ms-auto text-danger">
                <button
                  className="btn border-0 shadow-none text-danger"
                  onClick={CancelpasswordUpdate}>
                  Cancel
                </button>
              </div>
            )}

            {showUpdate ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  passwordUpdate();
                }}>
                <div className="row mt-1">
                  <label>Current Password</label>
                  <br></br>
                  <input
                    type="password"
                    onChange={PasswordChange}
                    placeholder="Current password"
                    name="currentPassword"
                    required
                  />

                  <br></br>
                  <label>New Password</label>
                  <br></br>
                  <input
                    type="password"
                    onChange={PasswordChange}
                    placeholder="New password"
                    name="newPassword"
                    required
                  />
                  <br></br>
                  <label>Confirm Password</label>
                  <br></br>
                  <input
                    type="password"
                    value={password.newPassword}
                    placeholder="Confirm password"
                    required
                  />
                  <br></br>
                  <span className="text-start mt-3 me-2">
                    <button
                      type="submit"
                      className="btn btn-success border-0 shadow-none text-start">
                      Update Password
                    </button>
                  </span>
                </div>
              </form>
            ) : (
              ""
            )}
          </div>
        </div>
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
              ratione tenetur esse cumque, mollitia fuga.
            </p>
          </div>
        </div>
        ;
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
