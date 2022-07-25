import React from "react";
import logo from "../images/other/logo.svg";
import logo1 from "../images/other/logo_experience.png";
import home from "../images/other/home.png";
import global from "../images/other/global.png";
import build from "../images/other/build.png";
import five from "../images/other/five.png";
import experience from "../images/other/experiencebanner.jpg";
import submit from "../images/other/submit.jpg";
import horsebnb from "../images/other/horsebnb.jpg";
import { Link } from "react-router-dom";

function HostanExperience() {
  return (
    <div className="">
      <nav className="navbar navbar-expand-sm navbar-dark shadow">
        <div className="container-fluid">
          <img src={logo} className="navbar-brand" alt="" />
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4 mt-1 me-2">
              <button className="border-0 bg-success p-2 ">
                <Link to="/hostanexperiencestep1">
                  <span className="text-white decoration">Get started</span>
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-4 mt-5 ms-5">
            <p className="mb-1">Host an experience on HorseBnB</p>
            <h2>
              Earn <span className="text-danger">money</span> leading people on{" "}
              <span className="text-danger">activities </span>you love
            </h2>
            <button className="btn btn-dark text-white shadow-none mt-3">
              <Link to="/hostanexperiencestep1">
                <span className="text-white">Let's go</span>
              </Link>
            </button>
          </div>
          <div className="col-5 ms-5 m-auto">
            <img src={experience} height="370px" width="550px" alt="" />
          </div>
        </div>
      </div>
      <div
        className="container-fluid container-color"
        style={{ height: "430px" }}>
        <div className="row mt-5">
          <div className="col-sm-1 m-auto mt-5">
            {" "}
            <img src={logo1} alt="" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-6 m-auto">
            <p className="font-size">
              HorseBnB Experience are engaging activites designed by locals that
              go beyond the typical tour or class.And now you can host them for
              anyone from anywhere{" "}
            </p>
          </div>
        </div>
        <div className="container mt-4">
          <div className="row ms-3">
            <div className="col-sm-3 m-auto">
              <img src={home} alt="" />
              <h4 className="mt-2">
                <b>Host from Home</b>
              </h4>
              <p>Share your expertise and a windows to your world</p>
            </div>
            <div className="col-sm-3 m-auto">
              <img src={global} alt="" />
              <h4 className="mt-2">
                <b>Meet global guests</b>
              </h4>
              <p>Make the world feel a little smaller and a lot friendlier</p>
            </div>
            <div className="col-sm-3 m-auto">
              <img src={build} alt="" />
              <h4 className="mt-2">
                <b>Build a business</b>
              </h4>
              <p>Earn money doing something you love support with HorseBnB</p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="container mt-5">
        <h3 className="text-center">
          <b>How it Works</b>
        </h3>
        <div className="row mt-3">
          <div className="col-6 m-auto">
            <h6 className="font-size text-center">
              HorseBnB Experience are engaging activites designed by locals that
              go beyond the typical tour or class.And now you can host them for
              anyone from anywhere
            </h6>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-5 ms-auto ">
            <img src={five} alt="" />
          </div>
          <div className="col-4 me-auto">
            <p className="p-4">
              {" "}
              <h5>
                <b>Design your experience</b>
              </h5>
              HorseBnB If you’re planning to give them to your horse, he knows.
              And if you’re not planning to, he also knows. He even knows when
              you’re planning to give him the carrots but
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-4  m-auto">
            <p className="p-4">
              {" "}
              <h5>
                <b>Share your idea</b>
              </h5>
              HorseBnB If you’re planning to give them to your horse, he knows.
              And if you’re not planning to, he also knows. He even knows when
              you’re planning to give him the carrots but
            </p>
          </div>
          <div className="col-5 ms-auto ">
            <img src={five} alt="" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-4 m-auto">
            <img src={submit} alt="" />
          </div>
          <div className="col-4 m-auto">
            <h5>
              <p>Submit your experience</p>
            </h5>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              inventore quaerat cum dolor placeat nisi at a?
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-4  m-auto">
            <p className="p-4">
              <h5>
                <b>Startup and start Hosting</b>
              </h5>
              HorseBnB If you’re planning to give them to your horse, he knows.
              And if you’re not planning to, he also knows. He even knows when
              you’re planning to give him the carrots but
            </p>
          </div>
          <div className="col-5 ms-auto ">
            <img src={five} alt="" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-3 m-auto">
            <button className="btn btn-outline-success shadow-none">
              Start created your experience
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="position-relative">
          <img src={horsebnb} alt="" height="370px" width="100%" />
          <div
            className="position-absolute  col-3"
            style={{ left: "420px", top: "110px" }}>
            <h2 className="text-center top-0 text-white">
              <span className="text-center">
                Learn more about hosting with HorseBnB Experience
              </span>
            </h2>
            <div className="text-center">
              <button className="btn btn-dark text-white mt-2 ms-3 shadow-none">
                <Link to="/hostanexperiencestep1">
                  <span className="text-white">Let's go</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostanExperience;
