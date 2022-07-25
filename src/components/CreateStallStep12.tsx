import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import lightbulb from "../images/other/lightbulb.png";
import {Link} from 'react-router-dom'

function CreateStallStep12() {
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <h4 className="mt-5">
            <b>Set Your availability</b>
          </h4>
          <p>
            <small>
              Editing your calander is easy-just click on a date to block or
              unblock it.You can always make changes after you publish
            </small>
            <div className="row mt-3">
              <div className="col-5">June 2022</div>
              <div className="col-6 text-success">Unblock this month</div>
            </div>
          </p>
          <Calendar
            className="mt-3"
            onChange={(date: any) => setDate1(date)}
            value={date1}
          />
          <div className="row mt-5">
            <div className="col-5">June 2022</div>
            <div className="col-6 text-success">Unblock this month</div>
          </div>
          <Calendar
            className="mt-3"
            onChange={(date: any) => setDate2(date)}
            value={date2}
          />
          <hr />
          <div className="row mt-2 mb-4">
            <div className="col-4 me-auto text-danger" onClick={()=>{window.history.back()}}>
              <i className="bi bi-chevron-left"></i>Back
            </div>
            <div className="col-4 ms-auto">
              <button className="btn btn-success border-0 me-4"><Link to="/createstallstep13"><span className="text-white">Next</span></Link></button>
            </div>
          </div>
        </div>
        <div
          className="col-4 ms-auto mt-5 me-5 shadow p-3"
          style={{ height: "250px" }}>
          <div className="p-3">
            <img src={lightbulb} alt="" className="mt-3" />
            <p className="mt-3">
              Guests can book available dates upto 3 months advance
            </p>
            <form>
              <input type="checkbox" placeholder="hhj" />
              <span className="ms-3">Available to be booked</span>
              <br></br>
              <input type="checkbox" placeholder="hhj" />
              <span className="ms-3">Blocked</span>
              <br></br>
            </form>
          </div>
        </div>
        {/* <div className="col-5"></div> */}
      </div>
    </div>
  );
}

export default CreateStallStep12;
