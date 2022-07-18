import React from "react";
import logo from "../images/other/logo.svg";
import GooglePlay from "../images/other/GooglePlay.png";
import AppleStore from "../images/other/AppleStore.png";

function Footer() {
  return (
    <div
      className="bg-dark w-100 d-flex justify-content-between align-items-center text-white"
      style={{ height: "250px" }}>
      <div className="ms-5">
        <img src={logo} alt="" />
        <p>@ 2020 horseBnb.inc</p>
      </div>
      <div className="">
        <p className="text-start">About Us</p>
        <p className="text-start">Contact us</p>
        <p className="text-start">Terms and Conditions</p>
      </div>
      <div className="">
        <p className="text-start">
          <i className="bi bi-facebook"></i>
          <span className="ms-2">Facebook</span>
        </p>
        <p className="text-start">
          <i className="bi bi-instagram"></i>{" "}
          <span className="ms-2">Instagram</span>
        </p>
      </div>
      <div className="me-5">
        <div>
          <img src={AppleStore} alt="" />
        </div>
        <div className="mt-3">
          <img src={GooglePlay} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
