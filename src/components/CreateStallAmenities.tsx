import React, { useState, useRef } from "react";
import horseimage from "../images/other/horseimage.png";
import { Link } from "react-router-dom";
import henceforthApi from "./utils/henceforthApi";

function CreateStallAmenities() {
  henceforthApi.setToken(localStorage.getItem("token"));
  const [ischecked, setIschecked] = useState(false);
  const [amenities, setAmenities] = useState([]);
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  let k = document.getElementById("checkbox");
  let Arraylist = ["tv", "wifi", "ge", "ghtet"];

  let amentiesArray = [];
  for (let checkbox in k) {
    // if(checkbox.checked==true)
  }
  // let checkvalue = document.getElementById("checkbox").value;
  const AmenitiesUpdate = () => {
    // console.log(amenities);
    let res = henceforthApi.Auth.amenitiesUpdate({
      id: localStorage.getItem("id"),
      amenities: amenities,
    });
    // if (amenities != null) {
    //   console.log("hello");
    // } else {
    //   console.log("error");
    // }
  };
  let amenitiesChange=(e:any)=>{
    // let data=e.target
const{value,checked}=e.target
if(checked){
  setAmenities(...amenities as [],value)
}
else{
  // setAmenities(amenities.filter((e:any)=>{e !==value}))
}
// setAmenities(...amenities as[],value)
console.log(value,checked)
  }
  // let checkbox = document.getElementById("checkbox") as HTMLInputElement | null;
  // if (checkbox?.checked) {
  // } else {
  //   console.log("value is unchecked");
  // }
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h4 className="mt-5">
              <b>What amenities do you offer?</b>
            </h4>
            <p>
              There are just the amenities guests usually expect,but you can add
              even more after you bublish
            </p>
            <form
              onSubmit={(e: any) => {
                e.preventDefault();
                AmenitiesUpdate();
              }}>
              {/* {Arraylist.map((res) => {
                return (
                  <>
                    <input
                      type={`checkbox`}
                      className="me-3"
                      id="checkbox"
                      placeholder="gh"
                      // checked={ischecked}
                      value={[res]}
                      onChange={(e: any) => setAmenities(e)}
                    />
                    {res}
                    <br></br>
                  </>
                );
              })} */}
              <input
                type="checkbox"
                className="me-3"
                placeholder="gh"
                id="checkbox"
                // ref={inputRef}
                value="wifi"
                onChange={(e: any) => {
                  amenitiesChange(e);
                }}
              />
              <label>Essentials </label>
              <br></br>
              <input
                type="checkbox"
                className="me-3 mt-3 checkbox"
                id="checkbox"
                placeholder="gh"
                // ref={inputRef1}
                value="essential"
                onChange={(e: any) => {
                  amenitiesChange(e);
                }}
              />

              <label>WiFi</label>
              <br></br>
              <input
                type="checkbox"
                className="me-3 mt-3"
                id="checkbox"
                value="Tv"
                placeholder="gh"
                onChange={(e: any) => {
                  amenitiesChange(e);
                }}
              />
              <label
               >
                Tv
              </label>
              <br></br>
              <input
                type="checkbox"
                className="me-3 mt-3 checkbox"
                placeholder="gh"
                id="checkbox"
                value="air"
                onChange={(e: any) => {
                  amenitiesChange(e);
                }}
               
              />
              <label>Air-conditionding</label>

              {/* <p className="mt-5">
                <b>Saftely Amenities</b>
              </p>
              <input
                type="checkbox"
                className="me-3 checkbox"
                placeholder="gh"
              />
              <label>
                Smoke detector{" "}
               
              </label> */}
              {/* <br></br>
              <input
                type="checkbox"
                className="me-3 checkbox"
                placeholder="gh"
              />
              <label>
                Carbon monooxide detector{" "}
             
              </label> */}
              {/* <br></br>
              <input
                type="checkbox"
               
                className="me-3 checkbox"
                placeholder="gh"
              />
              <label>
                First aid kit
              
              </label> */}
              <hr className="mt-5" />
              <div className="row mt-2">
                <div
                  className="col-4 me-auto text-danger"
                  onClick={() => {
                    window.history.back();
                  }}>
                  <i className="bi bi-chevron-left"></i>Back
                </div>
                <div className="col-4 ms-auto">
                  <button
                    type="submit"
                    className="btn btn-success border-0"
                    // onClick={AmenitiesUpdate}
                  >
                    <Link to="/createstallstep6">
                      <span className="text-white">Next</span>
                    </Link>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-5 pt-4 mt-5 ms-auto">
            <img src={horseimage} className="ms-5 mt-4" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateStallAmenities;
