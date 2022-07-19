import React from 'react'
import vacationfive from "../images/other/vacationfive.png";
import "./horsebnb.css";

function UpcomingBookingDetails() {
    return (
        <div className='container mt-3'>
            <h3><b>You're going to New York!</b></h3>
            <p>Reservation Code:Rcd5525</p>
            <div className='row'>

                <div className='col-6'>
                    <div className='shadow p-3'>
                        <div className='row'>
                            <div className='col-3 mt-2'>
                                <b>Hotel</b>
                            </div>
                            <div className='col-8'>
                                <img src={vacationfive} height="40px" width="60px" alt="" /> <b>Apple Horse stalls & Guests stay</b>
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-3 '>
                                <b>Booking Date</b>
                            </div>
                            <div className='col-8'>
                                <b>5 Jun 2022</b>
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-3'>
                                <b>Stay type</b>
                            </div>
                            <div className='col-8'>
                                <b>Short term</b>
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-3'>
                                <b>Booking Status</b>
                            </div>
                            <div className='col-8'>
                                <p className='text-success'>Confirmed</p>
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-3'>
                                <b>Stalls & Guests</b>
                            </div>
                            <div className='col-8'>
                                1 stall & 1 Guest
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-3'>
                                <b>Check-In</b>
                            </div>
                            <div className='col-3'>
                                Fri 5 jun Anytime after 2 PM
                            </div>
                            <div className='col-3'>
                                <b>Check-Out</b>
                            </div>
                            <div className='col-3'>
                                Sat,07 Jun 12 PM (noon)
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-3'>
                                <b>Stalls Rules</b>
                            </div>
                            <div className='col-8'>
                                <p>Check-in:After 2:00 PM</p>
                                <p>Check-out:After 12:00 PM</p>
                                <p>Pets are Allowed</p>
                                <p>Smoking are Allowed</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpcomingBookingDetails