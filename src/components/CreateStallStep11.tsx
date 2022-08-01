import React, { useState } from "react";
import horseimage from "../images/other/horseimage.png";
import { Link } from "react-router-dom";
import henceforthApi from "./utils/henceforthApi";

function CreateStallStep11() {
  const [gotit, setGotit] = useState("");
  henceforthApi.setToken(localStorage.getItem("token"));
  const CheckPermission = async () => {
    let res = await henceforthApi.Auth.checktrue({
      id: localStorage.getItem("id"),
      publicData: {
        gotit: gotit,
        stepsCompleted: [1, 3, 5, 6, 7, 8, 9, 14, 14, 8, 9, 14, 15],
      },
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 ms-5">
          <h4 className="mt-5">
            <b>Successful Hosting starts with an accurate calender</b>
          </h4>
          <p>
            <small>
              Guests will book available days instantly.Only get booked when you
              can host by Keeping your calender and availability settings upto
              date
            </small>
          </p>
          <p>
            <small>
              Cancelling distrupts guest's plans,if you cancel because your
              calender is inaccurate you'll be charged a penalty fee and the
              dates won't be available for anyone else to book
            </small>
          </p>
          <form>
            <input
              type="checkbox"
              placeholder="fv"
              onChange={(e: any) => {
                setGotit(e.target.checked);
              }}
            />{" "}
            <span></span> Got it! i w'll keep my calander up to date
            <hr className="mt-4" />
            <div
              className="row mt-2 mb-4 align-items-end"
              style={{ height: "90px" }}>
              <div className="col-4 me-auto mb-2 ">
                <i
                  className="bi bi-chevron-left text-danger"
                  onClick={() => {
                    window.history.back();
                  }}></i>
                <span className="text-danger">Back</span>
              </div>
              <div className="col-4 ms-auto mt-4">
                <button className="btn btn-success border-0">
                  <Link to="/createstallstep12">
                    <span className="text-white" onClick={CheckPermission}>
                      Next
                    </span>
                  </Link>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-5 pt-4 mt-5 ms-auto">
          <img src={horseimage} className="ms-5 mt-4" alt="" />
        </div>
      </div>
    </div>
  );
}

export default CreateStallStep11;
