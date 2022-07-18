import React from "react";
import logo from "../images/other/logo.svg";
import horseimg from "../images/other/horseimg.png";
import monthly from "../images/other/monthly.png";
import "./horsebnb.css";
import Cardscomponent from "./Cardscomponent";
import HorseAdventures from "./HorseAdventures";
import Footer from "./Footer";

function Horsebnbindex() {
  return (
    // Navbar
    <div className="container-fluid">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <img src={logo} className="navbar-brand" alt="" />
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4 mt-1">
              <button>Sign Up</button>
            </li>
            <li className="nav-item me-3">
              <button className="btn btn-danger"> Login </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="row mt-5">
          <div className="col-2 ms-0 me-0 ">
            <b>Short term Stalls</b>
          </div>
          <div className="col-2 ms-0 me-0">
            <b className="ms-0 me-0">Monthly Board</b>
          </div>
          <div className="col-2 ms-0 me-0">
            <b>horse Experience</b>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row container mt-4 search-part-style">
          <div className="col-3 p-3">
            <div className="col-12 text-start position-relative">
              <b>WHERE</b>
            </div>
            <div className="col-12 text-start rounded-pill">
              <i className="bi bi-search search-position"></i>
              <input
                type="text"
                className="rounded-pill border-0"
                placeholder="Anywhere"
              />
            </div>
          </div>
          <div className="col-3 p-3">
            <div className="col-12 text-start">
              <b>Check-In/Check-Out</b>
            </div>
            <div className="col-12 text-start rounded-pill">Add Dates</div>
          </div>
          <div className="col-3 p-3">
            <div className="col-12 text-start ">
              <b>HORSE STALLS</b>
            </div>
            <div className="col-12 text-start">Add Stalls & guests</div>
          </div>
          <div className="col-3  p-3 ">
            <button className="btn btn-danger mt-1 text-end me-0">
              Search
            </button>
          </div>
        </div>
      </div>
      {/* 3 image section  */}
      <section className="mt-5">
        <div className="container">
          <div className="row text-start">
            <b>
              <p>Explore HorseBnB</p>
            </b>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img
                src="https://a-z-animals.com/media/horse-3.jpg"
                alt=""
                height="200px"
                width="350px"
              />
            </div>
            <div className="col-4">
              <img
                src="https://www.nobroker.in/blog/wp-content/uploads/2022/02/7-running-horses-vastu.jpg"
                alt=""
                height="200px"
                width="350px"
              />
            </div>
            <div className="col-4">
              <img
                src="https://static8.depositphotos.com/1001374/965/i/600/depositphotos_9652329-stock-photo-black-horse-gallop.jpg"
                alt=""
                height="200px"
                width="350px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 1 Image section */}
      <div className="container mt-5">
        <div className="position-relative">
          <div>
            <img src={horseimg} alt="" className="w-100" height="300px" />
          </div>
          <div className="row image-textposition text-white">
            <div className="col-12 text-start ms-5">
              <p>INTRODUCING</p>
            </div>
            <div className="col-12  text-start ms-5 mt-1">
              <h3>HorseBnB</h3>
            </div>
            <div className="col-12  text-start ms-5 mt-3">
              <button className="btn border-0 bg-white">About Us</button>
            </div>
          </div>
        </div>
      </div>

      {/* 4 images in one row section  */}
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
        <p className="text-start mt-5 text-success">
          Show all short term accomodation
          <i className="bi bi-chevron-compact-right"></i>
        </p>
      </div>
      {/* 2nd single image mothly section */}
      <div className="container">
        <div className="position-relative">
          <div>
            <img src={monthly} alt="" className="w-100" height="300px" />
          </div>
          <div className="row image-textposition text-white"></div>
        </div>
      </div>
      <div className="container">
        <Cardscomponent />
        <p className="text-start mt-5 text-success">
          Show all short term accomodation
          <i className="bi bi-chevron-compact-right"></i>
        </p>
      </div>
      {/* Equestrain advanture */}
      <div>
        <HorseAdventures />
      </div>

      <Footer />
    </div>
  );
}

export default Horsebnbindex;
