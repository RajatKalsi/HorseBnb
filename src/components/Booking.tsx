import React from 'react'
import experience from "../images/other/experience.png";

function Booking() {
  return (
    <div className='container'>
        <h4 className='text-start'><b>Bookings</b></h4>
        <div className='row mt-3'>
            <div className='col-1 active'><b>Upcoming</b></div>
            <div className='col-1 text-start ms-1'><b>Past</b></div>
        </div>
        <hr/>
        <p className='mt-2'>When you are ready to start planning your next booking we're here for help</p>
        <div className='row'>
        <div className='col-5 m-auto'>
            <img className='' src={experience} alt=""/>
        </div>
        </div>
        <div className='text-center mt-2'> <button className='btn btn-outline-danger'>Explore HorseBnb</button></div>
       
    </div>
  )
}

export default Booking;