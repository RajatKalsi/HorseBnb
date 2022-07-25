import React from "react";
import logo from "../images/other/logo.svg";
import "./horsebnb.css";
import chat from "../images/other/chat.png";
import search from "../images/other/search.png";
import check from "../images/other/check.png";
import experience from "../images/other/experience.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container-fluid shadow">
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
          <img src={logo} className="navbar-brand" alt="" />
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4 mt-3 me-2">
              <button className="border-0 bg-white position-relative">
                <input
                  type="search"
                  placeholder="Search"
                  className="border-0 rounded-pill p-1 search-border"
                />{" "}
                <img
                  src={search}
                  alt=""
                  className="search-position mt-1  rounded-pill"
                />
              </button>
            </li>
            <li className="nav-item me-4 mt-3 me-2">
              <button className="border-0 bg-white">
                <Link to="/hoststalls">
                  <span className="text-dark decoration-text">Hosts your Stalls</span>
                </Link>
              </button>
            </li>
            <li className="nav-item me-4 mt-3 me-2">
              <button className="border-0 bg-white">
                <Link to="/hostanexperience"><span className="text-dark ">Hosts an Experience</span></Link></button>
            </li>
            <li className="nav-item me-4 mt-3 me-2">
              <button className="border-0 bg-white">Help</button>
            </li>
            <li className="nav-item me-4 mt-3 me-2">
              <button className="border-0 bg-white">
                {" "}
                <img src={chat} alt="" />
              </button>
            </li>
            <li className="nav-item me-1">
              <button className="btn border-0 shadow-none">
                {" "}
                <div className="shadow p-2 d-flex ">
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7cuMJk4cJVq7-VDjoB0cNbBhUvx_CyyudGA&usqp=CAU"
                      height="30px"
                      width="30px"
                      alt=""
                    />
                  </div>
                  <div className="text-danger">
                    <div className="dropdown" style={{}}>
                      <a
                        className="btn dropdown-toggle"
                        href="df"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="true">
                        John Doe
                      </a>

                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                        style={{ width: "400px" }}>
                        <li>
                          {" "}
                          <button
                            className="btn btn-white border-0"
                            data-bs-dismiss="modal"
                            data-bs-target="modal">
                            <b><Link to="/booking">Bookings</Link></b>
                          </button>
                        </li>
                        <li>
                          {" "}
                          <button
                            className="btn btn-white border-0"
                            data-bs-dismiss="modal"
                            data-bs-target="modal">
                            {" "}
                            <b>favourite</b>
                          </button>
                        </li>
                        <hr />
                        <li>
                          {" "}
                          <button
                            className="btn btn-white border-0 shadow-none"
                            data-bs-dismiss="modal"
                            data-bs-target="modal">
                            {" "}
                            <b>Manage Listings</b>
                          </button>
                        </li>
                        <li>
                          {" "}
                          <button
                            className="btn btn-white border-0"
                            data-bs-dismiss="modal"
                            data-bs-target="modal">
                            {" "}
                            <b><Link to="/profile">Profile</Link></b>
                          </button>
                        </li>
                        <li>
                          {" "}
                          <button
                            className="btn btn-white border-0"
                            data-bs-dismiss="modal"
                            data-bs-target="modal">
                            {" "}
                            <b>Account</b>
                          </button>
                        </li>
                        <hr />
                        <li>
                          <button
                            className="btn btn-white border-0"
                            data-bs-dismiss="modal"
                            data-bs-target="modal">
                            {" "}
                            <b>Log out</b>
                          </button>
                        </li>
                      </ul>
                    </div>{" "}
                  </div>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </nav>
     

      {/* after login profile modal  */}
    </div>
  );
}

export default Header;
