import React, { useState } from "react";
import logo from "../images/other/logo.svg";
import stallmain from "../images/other/stallmain.png";
import { Link } from "react-router-dom";
import henceforthApi from "./utils/henceforthApi";

function CreateStallStep1() {
  henceforthApi.setToken(localStorage.getItem("token"));
  const [stall, setStall] = useState("");
  const [title, setTitle] = useState();
  const [shortMonthly, setShortMonthly] = useState({});
  const TitlePost = async () => {
    let res = await henceforthApi.Auth.postTitle({
      title: title,
      publicData: {
        type: "1",
        stepCompleted: [1],
      },
    });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark shadow">
        <div className="container-fluid">
          <img src={logo} className="navbar-brand" alt="" />
        </div>
      </nav>
      <div className="container mt-4">
        <div className="row">
          <div className="col-4 mt-3">
            <h4>
              <b>Hi, John Let's Get started listning your place</b>{" "}
            </h4>
            <p className="mt-3">Step 1</p>
            <h4>What kind of place do you have?</h4>
            <select
              className="form-select mt-3"
              aria-label="Default select example"
              onChange={(e: any) => {
                setShortMonthly(e.target.value);
              }}>
              <option selected>Choose your Stalls</option>
              <option value="1">Short terms stalls</option>
              <option value="2">Monthly Board</option>
            </select>
            {/* <div className="row mt-3">
              <div className="col-6 me-auto">
                <select
                  className="form-select mt-2"
                  aria-label="Default select example">
                  <option selected>For 1 stalls</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="2">3</option>
                </select>
              </div>
              <div className="col-6 ms-auto">
                <select
                  className="form-select mt-2"
                  aria-label="Default select example">
                  <option selected>For 1 guests</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="2">3</option>
                </select>
              </div>
            </div> */}
            <input
              type="text"
              value={title}
              placeholder="Create Your Title"
              className="w-100 mt-4 p-1"
              onChange={(e: any) => {
                setTitle(e.target.value);
              }}
            />
            <button className="btn btn-success mt-3">
              <Link to="/createstallstep3">
                <span className="text-white" onClick={TitlePost}>
                  Continue
                </span>
              </Link>
            </button>
          </div>
          <div className="col-7">
            <img src={stallmain} alt="" height="450px" width="700px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateStallStep1;
