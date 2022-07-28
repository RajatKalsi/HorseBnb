import React, { useEffect, useState } from "react";
import henceforthApi from "./utils/henceforthApi";
import axios from "axios";
import Loading from "./Loading";
import AfterloginHeader from "./AfterloginHeader";
import Horsebnbindex from "./Horcebnbindex";

const SignUpModal = () => {
  const [signup, setSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    protectedData: {
      phoneNumber: "",
    },
    deviceType: "0",
    publicData: {
      country_code: "91",
    },
  });
  const [loading, setLoading] = useState(false);
  const InputChange = (e: any) => {
    let name = e.target.name;
    let value = e.target.value;

    setSignup({
      ...signup,
      [name]: value,
    });
  };
  const handleSignUp = async () => {
    setLoading(true);
    try {
      let res = await henceforthApi.Auth.signup(signup);
      setLoading(false);
    } catch {
      console.log("error");
    }
  };
  return (
    <>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Finish signing Up</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal">
                {" "}
              </button>
            </div>
            <div className="modal-body">
              <div className="me-3 ms-3">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSignUp();
                  }}>
                  <input
                    type="text"
                    onChange={InputChange}
                    name="firstName"
                    value={signup.firstName}
                    className="w-100 mt-3 form-control"
                    placeholder="FirstName"
                    required
                  />
                  <input
                    type="text"
                    onChange={InputChange}
                    name="lastName"
                    value={signup.lastName}
                    className="w-100 mt-3 form-control"
                    placeholder="LastName"
                    required
                  />
                  <input
                    type="text"
                    onChange={InputChange}
                    name="email"
                    value={signup.email}
                    className="w-100 mt-3 form-control"
                    placeholder="Email"
                    required
                  />
                  <div className="col-auto mt-3">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">@</div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        // id="inlineFormInputGroup"
                        name="protectedData"
                        value={signup.protectedData.phoneNumber}
                        onChange={InputChange}
                        placeholder="Enter Phone Number"
                        required
                      />
                    </div>
                  </div>
                  <input
                    type="password"
                    className="w-100 mt-2 form-control"
                    placeholder="password"
                    name="password"
                    value={signup.password}
                    onChange={InputChange}
                    required
                  />
                  <div className="text-start ms-2 mt-2 mb-1">
                    <input
                      type="checkbox"
                      className=""
                      placeholder="gfh"
                      required
                    />
                    <span className="ms-1"> Agree to</span>{" "}
                    <span className="text-danger">Terms </span>and{" "}
                    <span className="text-danger">Conditions</span>
                  </div>
                  <button className="btn btn-danger mt-1 w-100" type="submit">
                    {loading ? <Loading /> : "Sign Up"}
                  </button>

                  <hr />
                </form>
                <div>
                  <button className="btn btn-danger w-100 mt-1">
                    <i className="bi bi-facebook me-5"></i>
                    <span className="text-start ms-5">Login with Facebook</span>
                  </button>
                </div>
                <div>
                  <button className="btn btn-danger w-100 mt-3">
                    <i className="bi bi-google me-5"></i>{" "}
                    <span className="text-start ms-5">Login with Google</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const LoginModal = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const LogininputChange = (e: any) => {
    let name = e.target.name;
    let value = e.target.value;

    setLogin({
      ...login,
      [name]: value,
    });
  };
  // let headers = {
  //   Authorization: localStorage.getItem("token"),
  // };
  const handleLogin = async () => {
    try {
      setLoading(true);
      let res = await henceforthApi.Auth.login(login);
      // console.log(res);
      setLoading(false);
      localStorage.setItem("token", res.data.token);
      henceforthApi.setToken(localStorage.getItem("token"));
      try {
        let res = await henceforthApi.Auth.getprofile();
      } catch {
        console.log("error");
      }
    } catch {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="modal" id="myModal1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title ms-5">
                <span className="text-center ms-5">Log-In</span>
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal">
                {" "}
              </button>
            </div>
            <div className="modal-body">
              <div className="me-3 ms-3">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                  }}>
                  <input
                    type="text"
                    className="w-100 mt-3 form-control"
                    placeholder="Email"
                    name="username"
                    onChange={LogininputChange}
                    value={login.username}
                    required
                  />
                  <input
                    type="password"
                    className="w-100 mt-4 form-control"
                    placeholder="password"
                    name="password"
                    value={login.password}
                    onChange={LogininputChange}
                    required
                  />
                  <div className="row mt-3 ">
                    <div className="col-5 text-start">
                      <input
                        type="checkbox"
                        className=""
                        placeholder="fg"
                        required
                      />
                      <span className="ms-3">Remember me</span>
                    </div>
                    <div className="col-4 ms-auto">
                      <span className="text-danger">forgot password</span>
                    </div>
                  </div>
                  <button
                    className=" btn btn-danger w-100 bg-danger border-0 mt-3 p-2 text-white"
                    type="submit">
                    {loading ? <Loading /> : "Log in"}
                  </button>
                </form>
                <hr />
                <div>
                  <button className="btn btn-danger w-100 mt-1">
                    <i className="bi bi-facebook me-5"></i>
                    <span className="text-start ms-5">Login with Facebook</span>
                  </button>
                </div>
                <div>
                  <button className="btn btn-danger w-100 mt-3">
                    <i className="bi bi-google me-5"></i>{" "}
                    <span className="text-start ms-5">Login with Google</span>
                  </button>
                </div>
                <p className="mt-3">
                  Don't have an HorceBnb Account{" "}
                  <span className="text-danger">Sign-Up</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default {
  SignUpModal,
  LoginModal,
  // <LoginModal handleLogin={handleLogin}/>
};
