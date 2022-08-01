import React, { useState } from "react";
import { Link } from "react-router-dom";
import henceforthApi from "./utils/henceforthApi";

function CreateTimingstep() {
  const [afterArrive, setAfterArrive] = useState("");
  const [beforeArrive, setBeforeArrive] = useState("");
  henceforthApi.setToken(localStorage.getItem("token"));
  const TimingUpdate = async () => {
    let res = await henceforthApi.Auth.timingUpdate({
      id: localStorage.getItem("id"),
      publicData: {
        arrive_after: afterArrive,
        arrive_before: beforeArrive,
        leave_before: "",
        leave_time: "",
        stepsCompleted: [1, 3, 5, 6, 7, 8, 9, 14, 14, 8, 9, 14],
      },
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <h4>
            <b>Check-In & Check-Out</b>
          </h4>
          <p>Choose a time for Check-in and Check-out Arrive After</p>
          <label>Arrive After</label>
          <input
            type="time"
            placeholder="time"
            className="w-100 form-control"
            value={afterArrive}
            onChange={(e) => {
              setAfterArrive(e.target.value);
            }}
          />
          <br></br>
          <label>Leave Before</label>
          <input
            type="time"
            placeholder="time"
            className="w-100 form-control"
            value={beforeArrive}
            onChange={(e) => {
              setBeforeArrive(e.target.value);
            }}
          />
          <div className="row mt-4">
            <div
              className="col-3 me-auto text-danger"
              onClick={() => {
                window.history.back();
              }}>
              <i className="bi bi-chevron-left"></i>Back
            </div>
            <div className="col-3 ms-auto">
              <button className="btn btn-success border-0">
                <Link to="/createstallstep11">
                  <span className="text-white" onClick={TimingUpdate}>
                    Next
                  </span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTimingstep;
