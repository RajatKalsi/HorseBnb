import React from "react";
import logo from "../images/other/logo.svg";
import "./horsebnb.css";
import chat from "../images/other/chat.png";
import search from "../images/other/search.png";

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
              <button className="border-0 bg-white">Hosts your Stalls</button>
            </li>
            <li className="nav-item me-4 mt-3 me-2">
              <button className="border-0 bg-white">Hosts an Experience</button>
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
            <li className="nav-item me-3">
              <button className="btn ">
                {" "}
                <div className="shadow p-2">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7cuMJk4cJVq7-VDjoB0cNbBhUvx_CyyudGA&usqp=CAU"
                    height="30px"
                    width="30px"
                    alt=""
                  />
                  <span className="text-danger">John Doe</span>
                </div>{" "}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
