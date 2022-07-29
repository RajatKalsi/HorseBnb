import React, { useState } from "react";
import removecircle from "../images/other/removecircle.png";
import addcircle from "../images/other/addcircle.png";
import CreateStallimage from "./CreateStallimage";
import horseimage from "../images/other/horseimage.png";
import { Link } from "react-router-dom";
import henceforthApi from "./utils/henceforthApi";
function CreateStallStep3() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  const Increment1 = () => {
    setCount1(count1 + 1);
  };
  const Decrement = () => {
    count > 0 ? setCount(count - 1) : setCount(count);
  };
  const Decrement1 = () => {
    count1 > 0 ? setCount1(count1 - 1) : setCount1(count1);
  };
  const StallUpdate = async () => {
    let res = await henceforthApi.Auth.stallUpdate({
      id: localStorage.getItem("id"),
      availabilityPlan: { type: "availability-Plan/day" },
      publicData: {
        guests: count1,
        property_subtype: "2",
        property_type: "2",
        stalls: count,
      },
      stepsCompleted: [1, 3, 3],
    });
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-5 mt-5">
            <h4>
              <b>How many Guests Can your place accomodate?</b>
            </h4>
            <p>
              Check that you have enough stalls and beds to accomodate all your
              guests comfortably
            </p>
            <div className="row">
              <div className="col-4 me-auto">
                <b>Stalls</b>
              </div>
              <div className="col-4 ms-auto">
                <span>
                  <img
                    src={removecircle}
                    alt=""
                    className="me-2"
                    onClick={Decrement}
                  />{" "}
                  {count}{" "}
                  <img
                    src={addcircle}
                    alt=""
                    className="ms-2"
                    onClick={Increment}
                  />
                </span>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-4 me-auto">
                <b>Guests</b>
              </div>
              <div className="col-4 ms-auto">
                <span>
                  <img
                    src={removecircle}
                    alt=""
                    className="me-2"
                    onClick={Decrement1}
                  />{" "}
                  {count1}{" "}
                  <img
                    src={addcircle}
                    alt=""
                    className="ms-2"
                    onClick={Increment1}
                  />
                </span>
              </div>
            </div>
            <p>How many stalls guests can use</p>
            <select
              className="form-select mt-3"
              aria-label="Default select example">
              <option selected> 1 stall</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <hr className="mt-5" />
            <div className="row mt-2">
              <div
                className="col-3 me-auto text-danger"
                onClick={() => {
                  window.history.back();
                }}>
                <i className="bi bi-chevron-left"></i>Back
              </div>
              <div className="col-3 ms-auto">
                <button
                  className="btn btn-success border-0"
                  onClick={StallUpdate}>
                  <Link to="/createstallstep5">
                    <span className="text-white">Next</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="col-6 mt-5 ms-5" style={{ height: "500px" }}>
            <div></div>
            <img src={horseimage} className="ms-5 mt-4" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateStallStep3;
