import React from "react";
import "./horsebnb.css";
import sparkling from "../images/other/sparklingclean.png";
import entirebarn from "../images/other/entirebarn.png";
import cancellationpolicy from "../images/other/cancellationpolicy.png";
import star from "../images/other/star.png";
// import GoogleMapReact from 'google-map-react';
// import Calendar from "react-calendar";
// import Calendar from "react-material-ui-calendar";
import "react-calendar/dist/Calendar.css";
import Cardscomponent from "./Cardscomponent";

function PostDetails() {
  return (
    <div className="container">
      <div className="row">
        <h3 className="text-start mt-3">Apple horse stalls and guest stay</h3>
      </div>
      <p className="text-start mt-1">4.5 (10) . New York City USA</p>
      <div className="row">
        <div className="col-6 text-start">
          <img
            src="https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
            width="550px"
            height="325px"
          />
        </div>
        <div className="col-6 text-end">
          <div className="row">
            <div className="col-3 me-5">
              <img
                src="https://img.etimg.com/thumb/msid-64611815,width-640,resizemode-4,imgsize-322041/memorable-day-at-work.jpg"
                alt=""
                height="150px"
                width="280px"
              />
            </div>
            <div className="col-3 ms-5">
              <img
                src="https://img.etimg.com/thumb/msid-64611815,width-640,resizemode-4,imgsize-322041/memorable-day-at-work.jpg"
                alt=""
                height="150px"
                width="280px"
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-3 me-5">
              <img
                src="https://img.etimg.com/thumb/msid-64611815,width-640,resizemode-4,imgsize-322041/memorable-day-at-work.jpg"
                alt=""
                height="150px"
                width="280px"
              />
            </div>
            <div className="col-3 ms-5">
              <img
                src="https://img.etimg.com/thumb/msid-64611815,width-640,resizemode-4,imgsize-322041/memorable-day-at-work.jpg"
                alt=""
                height="150px"
                width="280px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-7 me-auto">
          <div className="row">
            <div className="col-6">
              <h5 className="text-start mt-3">
                Apple horse stalls and guest stay
              </h5>
              <p className="text-start">
                6 Stalls.6 Guests.3 Bedrooms. 3 Bathrooms
              </p>
            </div>
            <div className="col-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7cuMJk4cJVq7-VDjoB0cNbBhUvx_CyyudGA&usqp=CAU"
                height="40px"
                width="40px"
                alt=""
                className="mt-4 me-5"
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <span className="text-start">
              <img src={entirebarn} alt="" />
              <b className="ms-2 font">Entire Burn</b>
            </span>
            <p className="text-start">You will Have to Stall yourself</p>
          </div>
          <div className="row">
            <span className="text-start">
              <img src={sparkling} alt="" />
              <b className="ms-2 font">Sparkling Clean</b>
            </span>
            <p className="text-start">
              2 Recent peoples says this place is Sparkling clean
            </p>
          </div>
          <div className="row">
            <span className="text-start">
              <img src={entirebarn} alt="" />
              <b className="ms-2 font">Great Check in experience</b>
            </span>
            <p className="text-start">
              100% of recent guests gave the check-in process a 5 star rating
            </p>
          </div>
          <div className="row">
            <span className="text-start">
              <img src={cancellationpolicy} alt="" />
              <b className="ms-2 font">Cancellation Policy</b>
            </span>
            <p className="text-start">
              Cancel before 12:00 PM on 6th Jun and get a full refund
            </p>
          </div>
          <hr />
          <p className="text-start">
            <b>Description</b>
          </p>
          <p className="text-start">Location</p>
          <p className="text-start">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            ipsam adipisci omnis necessitatibus, obcaecati illo officiis,
            deserunt, expedita eos sit autem dolore tempore hic veritatis? Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Soluta quia
            blanditiis aperiam?
          </p>
          <p className="text-start text-danger">contact Host</p>
          <hr />
          <p className="text-start">
            <b>Amenities</b>
          </p>
          <div className="row text-start">
            <div className="col-3 me-auto">
              <i className="bi bi-apple"></i> Apple
            </div>
            <div className="col-3 m-auto">
              <i className="bi bi-circle-fill"></i> Parking
            </div>
            <div className="col-3 ms-auto">
              <i className="bi bi-dribbble"></i> Sports
            </div>
          </div>
          <div className="row text-start mt-2">
            <div className="col-3 me-auto">
              <i className="bi bi-apple"></i> Apple
            </div>
            <div className="col-3 m-auto">
              <i className="bi bi-circle-fill"></i> Parking
            </div>
            <div className="col-3 ms-auto">
              <i className="bi bi-dribbble"></i> Sports
            </div>
          </div>
          <p className="text-start text-danger mt-2">Show more</p>
          <hr />
          <p className="text-start">
            <b>1 night in New York city</b>
          </p>
          <div className="text-start">
            {/* <Calendar /> */}
            <input type="date" />
          </div>
          <hr />
        </div>

        <div
          className="col-5 shadow ms-auto mt-3"
          style={{ height: "380px", width: "340px" }}>
          <div className="m-2">
            <div className="row mt-2">
              <div className="col-4 me-auto text-start">
                <b>30$ / night</b>
              </div>
              <div className="col-4 ms-auto">
                <img src={star} alt="" height="20px" />
                4.5 (10)
              </div>
            </div>
            <div className="row mt-3">
              <div className="row mb-0">
                <div className="col-6  border border-1 p-2">
                  <input type="date" />
                </div>
                <div className="col-6   border border-1 p-2">
                  <input type="date" placeholder="sfsg" />
                </div>
              </div>
              {/* <hr /> */}
              <div className="row border border-1">
                <div className="col-5 p-2 text-start ms-2">
                  <b>Horse Stalls</b>
                </div>
                <div className="col-5 p-2">
                  <b>
                    {" "}
                    <i className="bi bi-chevron-compact-down"></i>
                  </b>
                </div>
              </div>
              <div className="row mt-2">
                <button className="w-100 bg-danger border-0 p-2 rounded">
                  Reverse
                </button>
              </div>
              <div className="row mt-2">
                <div className="col-4 me-auto text-start">30 x 1 nights</div>
                <div className="col-3 ms-auto">$ 30</div>
              </div>
              <div className="row mt-2">
                <div className="col-3 me-auto">Discount</div>
                <div className="col-3 ms-auto">-$2</div>
              </div>
              <div className="row mt-2 mb-2">
                <div className="col-4 me-auto text-start">Service fee</div>
                <div className="col-3 ms-auto">$5</div>
              </div>
              <hr className="mt-3" />
              <div className="row mt-2">
                <div className="col-3 me-auto">
                  <b>Total</b>
                </div>
                <div className="col-3 ms-auto">
                  <b>$33</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-start">
          <img src={star} alt="" height="20px" /> <b>Reviews</b>
        </p>
        <div className="row text-start">
          <div className="col-6">
            <div className="row">
              <div className="col-3 me-auto">
                <p>Cleanliness</p>
              </div>
              <div className="col-3 ms-auto">4.5</div>
            </div>
            <div className="row">
              <div className="col-3 me-auto">
                <p>Communication</p>
              </div>
              <div className="col-3 ms-auto">4.5</div>
            </div>
            <div className="row">
              <div className="col-3 me-auto">
                <p>Check-in</p>
              </div>
              <div className="col-3 ms-auto">4.5</div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-3 me-auto">
                <p>Accuracy</p>
              </div>
              <div className="col-3 ms-auto">4.5</div>
            </div>
            <div className="row">
              <div className="col-3 me-auto">
                <p>Location</p>
              </div>
              <div className="col-3 ms-auto">4.5</div>
            </div>
            <div className="row">
              <div className="col-3 me-auto">
                <p>Value</p>
              </div>
              <div className="col-3 ms-auto">4.5</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-6 text-start mt-1">
              {" "}
              <img
                src="https://images.pexels.com/users/avatars/760258/ricardo-moura-464.jpeg?auto=compress&fit=crop&h=256&w=256"
                alt=""
                height="50px"
                width="50px"
                className="rounded-pill"
              />
              <span className="ms-2">
                {" "}
                <b>John Doe</b>
              </span>
            </div>
          </div>
          <div className="row mt-2 text-start  me-3 ms-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            maiores deleniti, dolore quisquam minus officia aspernatur magnam,
            molestiae itaque vitae ea officiis eos facere, atque tempore nam
            fugiat odio at!
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-6 text-start mt-1">
              {" "}
              <img
                src="https://images.pexels.com/users/avatars/760258/ricardo-moura-464.jpeg?auto=compress&fit=crop&h=256&w=256"
                alt=""
                height="50px"
                width="50px"
                className="rounded-pill"
              />
              <span className="ms-2">
                {" "}
                <b>John Doe</b>
              </span>
            </div>
          </div>
          <div className="row mt-2 text-start  me-3 ms-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            maiores deleniti, dolore quisquam minus officia aspernatur magnam,
            molestiae itaque vitae ea officiis eos facere, atque tempore nam
            fugiat odio at!
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-6 text-start mt-1">
              {" "}
              <img
                src="https://images.pexels.com/users/avatars/760258/ricardo-moura-464.jpeg?auto=compress&fit=crop&h=256&w=256"
                alt=""
                height="50px"
                width="50px"
                className="rounded-pill"
              />
              <span className="ms-2">
                {" "}
                <b>John Doe</b>
              </span>
            </div>
          </div>
          <div className="row mt-2 text-start  me-3 ms-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            maiores deleniti, dolore quisquam minus officia aspernatur magnam,
            molestiae itaque vitae ea officiis eos facere, atque tempore nam
            fugiat odio at!
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-6 text-start mt-1">
              {" "}
              <img
                src="https://images.pexels.com/users/avatars/760258/ricardo-moura-464.jpeg?auto=compress&fit=crop&h=256&w=256"
                alt=""
                height="50px"
                width="50px"
                className="rounded-pill"
              />
              <span className="ms-2">
                {" "}
                <b>John Doe</b>
              </span>
            </div>
          </div>
          <div className="row mt-2 text-start me-3 ms-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            maiores deleniti, dolore quisquam minus officia aspernatur magnam,
            molestiae itaque vitae ea officiis eos facere, atque tempore nam
            fugiat odio at!
          </div>
        </div>
      </div>
      {/* Location  */}
      <p className="text-start mt-4">
        <b>Location</b>
      </p>
      <div className="row"></div>
      {/* Google Map  */}
      <div></div>
      <hr />
      <p className="text-start">
        <b>More places to stay</b>
      </p>
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 text-start ms-3 ">
              <b>
                <p className="mb-0">Overnight and short terms stalls</p>
              </b>
            </div>
            <div className="col-12 text-start ms-3 mt-1">
              <p>
                travelling with your horse ?Find overnight Accomodations for you
                and tour horse
              </p>
            </div>
          </div>
          <Cardscomponent />
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
