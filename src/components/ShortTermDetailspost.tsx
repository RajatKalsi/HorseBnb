import React from "react";
import sparkling from "../images/other/sparklingclean.png";
import entirebarn from "../images/other/entirebarn.png";
import cancellationpolicy from "../images/other/cancellationpolicy.png";
import star from "../images/other/star.png";
import security from "../images/other/security.png";
import horseone from "../images/other/horse_one.png";

function ShortTermDetailspost() {
  return (
    <div className="section">
      <div className="container">
        <div className="row mt-5">
          <h4>test</h4>
          <div className="col-3">
            <img src={star} alt="" />
            reviews
          </div>
          <div className="col-3 offset-6">
            <i className="bi bi-share mt-1 me-2"></i>share
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <img
              src="https://a-z-animals.com/media/horse-3.jpg"
              alt=""
              className="image-fluid w-100"
              height="310px"
              width="470px"
            />
          </div>
          <div className="col-6">
            <img
              src="https://a-z-animals.com/media/horse-3.jpg"
              alt=""
              className="image-fluid w-100"
              height="310px"
              //   width="470px"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-7 me-auto">
            <div className="row">
              <div className="col-6">
                <h5 className="text-start mt-4">Test hosted by Mohit kumar</h5>
              </div>
              <div className="col-4 ms-auto">
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

            <div className="row">
              <span className="text-start">
                <img src={entirebarn} alt="" />
                <b className="ms-2 font">Great Check in experience</b>
              </span>
              <p className="text-start">
                100% of recent guests gave the check-in process a 5 star rating
              </p>
            </div>
            <hr />
            <div className="row">
              <span className="text-start">
                <h3>Description</h3>
              </span>
              <p className="text-start mb-0">Lorem ipsum dolor sit amet.</p>
              <p className="text-start">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
            <form>
              <div className="row">
                <h4>Select check-in date</h4>

                <div className="col-4">
                  <input
                    type="date"
                    placeholder="Select-Date"
                    className="form-control"
                  />
                </div>
                <div className="col-4">
                  <input
                    type="date"
                    placeholder="Select-Date"
                    className="form-control"
                  />
                </div>
              </div>
            </form>
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
                    <input type="date" placeholder="date" />
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
        <hr />
        {/* Amenities  */}
        <div className="row">
          <h3>Amenities</h3>
          <div className="col-3">
            <img src={horseone} alt="" />
            <span className="ms-2">Lorem ipsum dolor sit.</span>
          </div>
          <div className="col-3">
            <img src={horseone} alt="" />
            <span className="ms-2">Lorem ipsum dolor sit.</span>
          </div>
        </div>
        <hr />
        {/* Reviews  */}
        <div className="row" mt-5>
          <p>
            <img src={star} alt="" />{" "}
            <span>
              <b>0(0)reviews</b>
            </span>
          </p>
          <div className="row align-items-center">
            <div className="col-12 text-center " style={{ height: "100px" }}>
              <span className="font"> No Reviews yet </span>
            </div>
          </div>
        </div>
        <div className="row" mt-5>
          <h4>Where you will'be</h4>
          <div className="row align-items-center">
            <div
              className="col-12 text-center bg-success "
              style={{ height: "200px" }}></div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7cuMJk4cJVq7-VDjoB0cNbBhUvx_CyyudGA&usqp=CAU"
                  height="40px"
                  width="40px"
                  alt=""
                  className="mt-4 me-5"
                />
              </div>
              <div className="col-7 mt-2">
                <p className="font mb-0 ">Hosted by mohit kumar</p>
                <small>Join on 21 Sep 2021 </small>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-12">
                <img src={security} alt="" />{" "}
                <span className="ms-2">
                  To protect your payment, never transfer money or communicate
                  outside of the HorseBnB website or app.
                </span>
              </div>
              <div className="col-4 mt-3 ms-3">
                <button className="btn btn-outline-success">
                  Contact Host
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-4 font me-auto">Mohit kumar listings</div>
          <div className="col-3">
            <button className="btn btn-success ms-auto">View Listings</button>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-4">
            <img
              src="https://a-z-animals.com/media/horse-3.jpg"
              alt=""
              className="w-100"
            />
          </div>
          <div className="col-4">
            <img
              src="https://a-z-animals.com/media/horse-3.jpg"
              alt=""
              className="w-100"
            />
          </div>
          <div className="col-4">
            <img
              src="https://a-z-animals.com/media/horse-3.jpg"
              alt=""
              className="w-100"
            />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default ShortTermDetailspost;
