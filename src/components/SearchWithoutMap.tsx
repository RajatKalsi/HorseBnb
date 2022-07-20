import React from "react";
import off from "../images/other/off.png";
import on from "../images/other/on.png";

function SearchWithoutMap() {
  return (
    <div className="container mt-4">
      <div className="row">
        <span className="text-start mt-3">
          53 stalls & Stays 5 Jun-6 Jun - 1stall 1- guest
        </span>
      </div>
      <div className="row">
        <h3 className="text-start mt-3">
          Stalls in New York, USA{" "}
          <span className="font-size ms-3">Short term stalls</span>
        </h3>
      </div>
      <div className="row ">
        <div className="d-flex mt-3 ">
          <div className=" text-start">
            <button className="btn btn-success rounded-pill">Dates</button>
          </div>
          <div className=" text-start">
            <button className="btn btn-success rounded-pill ms-2">
              Guests
            </button>
          </div>
          <div className=" text-start">
            <button className="btn btn-success rounded-pill ms-2">
              Prizes
            </button>
          </div>
          <div className=" text-start">
            <button className="btn btn-success rounded-pill ms-2">
              More Filters
            </button>
          </div>
          {/* <div className="row"> */}
          <div className="col-7 text-end">
            <span> Show Map</span>{" "}
            <span>
              <img
                src={off}
                alt=""
                height="40px"
                width="60px"
                className="ms-2"
              />
            </span>
          </div>
        </div>
      </div>
      {/* </div> */}
      <hr />
      <div className="row">
        <b className="text-start">Showing results for New York</b>
      </div>
      {/* New york results Showing  */}
      <div className="row mt-3">
        <div className="col-3">
          <div className="card" style={{ width: "15rem" }}>
            <img
              src="https://a-z-animals.com/media/horse-3.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchWithoutMap;
