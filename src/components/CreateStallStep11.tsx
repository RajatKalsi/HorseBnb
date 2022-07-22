import React from 'react'
import horseimage from "../images/other/horseimage.png";

function CreateStallStep11() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-5 ms-5'>
            <h4 className="mt-5">
            <b>Successful Hosting starts with an accurate calender</b>
          </h4>
          <p>
            <small>
              Guests will book available days instantly.Only get booked when you can host by Keeping your calender and availability settings upto date
            </small>
          </p>
          <p>
            <small>
              Cancelling distrupts guest's plans,if you cancel because your calender is inaccurate you'll be charged a penalty fee and the dates won't be available for anyone else to book
            </small>
          </p>
          <form>
            <input type="checkbox"/> <span></span> Got it! i w'll keep my calander up to date
            <hr className='mt-4'/>
            <div className="row mt-2 mb-4 align-items-end" style={{height:"90px"}}>
           <div className="col-4 me-auto mb-2 ">
              <i className="bi bi-chevron-left text-danger"></i><span className='text-danger'>Back</span>
            </div>
            <div className="col-4 ms-auto mt-4">
              <button className="btn btn-success border-0">Next</button>
            </div>
          </div>
          </form>
            </div>
            <div className="col-5 pt-4 mt-5 ms-auto">
            <img src={horseimage} className="ms-5 mt-4" alt="" />
          </div>
        </div>
    </div>
  )
}

export default CreateStallStep11