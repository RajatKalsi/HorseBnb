import React from "react";
import "./horsebnb.css";
import horseimage from "../images/other/horseimage.png";
function CreateStallimage() {
  return (
    <div className="container-fluid">
      {/* <div className="">
        <div className="row  ">
        <div
          className="col-3 background-Imagecolor p-5 ms-auto"
          style={{ height: "600px", width: "600px" }}>
          <img src={horseimage} className="ms-5 mt-4" alt="" />
        </div>
        </div>
      </div> */}
      <div
        className="col-6 mt-5 ms-5 background-Imagecolor"
        style={{ height: "500px" }}>
        <div></div>
        <img src={horseimage} className="ms-5 mt-4" alt="" />
      </div>
    </div>
  );
}

export default CreateStallimage;
