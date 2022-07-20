import React from 'react'
import vacationfive from "../images/other/vacationfive.png";
import check from "../images/other/check.png";
import experience from "../images/other/experience.png";
import "./horsebnb.css";
function BookingCreated() {
    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">open </button>
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <img src={experience} alt="" />
                            <div className='col-12'><h3><b className='text-center ms-3'>Just a moment we're getting your booking ready</b></h3></div>
                            <p className='text-start'><img src={check} />Booking Created</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* login modal  */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal1">open </button>
            <div className="modal shadow text-start" id="myModal1" style={{height:"370px",width:"250px"}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                       <div className="modal-body">
                            <p><b>Bookings</b></p>
                            <p><b>Favouirite</b></p>
                            <hr/>
                            <p><b>Manage Listings</b></p>
                            <p><b>Profile</b></p>
                            <p><b>Account</b></p>
                            <hr/>
                            <p><b>Log out</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingCreated