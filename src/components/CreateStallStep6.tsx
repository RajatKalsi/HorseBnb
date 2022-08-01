import React, { useState } from "react";
import publish from "../images/other/publish.png";
import lightbulb from "../images/other/lightbulb.png";
import "./horsebnb.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import henceforthApi from "./utils/henceforthApi";
import axios from "axios";

function CreateStallStep6() {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  henceforthApi.setToken(localStorage.getItem("token"));

  const ProfileUpload = async () => {
    const formData = new FormData();
    formData.append("file", image as any);
    let res = await axios.post(
      "https://horsebnb.com:3001/v1/api/upload/aws?storageType=5&environment=4&isDefaultAsset=0",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          // Authorization: localStorage.getItem("token"),
        },
      }
    );
    let filename = res.data.filename;
    let id = res.data.id;
    await UploadImage(id, filename);
  };
  let tkn = localStorage.getItem("token");
  const UploadImage = async (id: any, filename: any) => {
    let data = {
      id: localStorage.getItem("id"),
      images: [`${id}`],
      publicData: {
        cover_photo: {
          id: id,
          images: [],
          url: filename,
          caption: null,
        },
      },
    };
    let res = await axios.post(
      "https://horsebnb.com:3001/v1/api/own_listings/update",
      data,
      {
        headers: {
          Authorization: `` + localStorage.getItem("token"),
        },
      }
    );
  };
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-6 ">
            <h4 className="mt-5">
              <b>Liven up your listing and photos</b>
            </h4>
            <p className="mt-3">
              Take Photos using a phone or camera. Upload atleast one photo to
              publish yopur listing --you can add always more or edit later
            </p>
            <div className="text-center image-border p-3 mt-3" style={{}}>
              <img className="" src={publish} alt="" />
              <br></br>
              <button
                className="btn btn-success disable"
                onClick={() => {
                  document.getElementById("input1")?.click();
                }}>
                Uploads Photos
              </button>
              <input
                type="file"
                ref={inputRef}
                id="input1"
                placeholder="f"
                accept="images/*"
                onChange={(e: any) => {
                  setImage(e.target.files[0]);
                }}
                // style={{ display: "none" }}
              />
              {/* <div className="row">
                <div className="col-6">
                  <img
                    src={image ? URL.createObjectURL(image) : ""}
                    alt=""></img>
                </div>
                <div className="col-6">
                  <img src="" alt=""></img>
                </div>
              </div> */}
            </div>
            <hr className="mt-5" />
            {/* <div className="row mt-4">
              <div
                className="col-3 me-auto text-danger"
                onClick={() => {
                  window.history.back();
                }}>
                <i className="bi bi-chevron-left text-danger"></i>
                <span className="text-danger">Back</span>
              </div>
              <div className="col-3 ms-auto">
                <button className="btn btn-success border-0">
                  Skip for now
                </button>
                <button className="btn btn-success border-0">
                  <Link to="/createstallstep7">
                    <span className="text-white">Next</span>
                  </Link>
                </button>
              </div>
            </div> */}
          </div>
          <div className="col-6 mt-5">
            <div className="row">
              <div className="col-5 ms-auto mt-5 me-5 shadow">
                <img src={lightbulb} alt="" />
                <p className="mt-3">
                  <b>Quick Tips for quality photos</b>
                  <ol>
                    <li>Lorem, ipsum dolor</li>
                    <li>Lorem, ipsum dolor</li>
                    <li>Lorem, ipsum dolor</li>
                    <li>Lorem, ipsum dolor</li>
                    <li>Lorem, ipsum dolor</li>
                    <li>Lorem, ipsum dolor</li>
                    <li>Lorem, ipsum dolor</li>
                  </ol>
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <img
                src={image ? URL.createObjectURL(image as any) : ""}
                alt=""></img>
            </div>
            <div className="col-6">
              {/* <img src="" alt=""></img> */}
              {/* <img src={image ? URL.createObjectURL(image) : ""} alt=""></img> */}
            </div>
          </div>
          <div className="row mt-4">
            <div
              className="col-3 me-auto text-danger"
              onClick={() => {
                window.history.back();
              }}>
              <i className="bi bi-chevron-left text-danger"></i>
              <span className="text-danger">Back</span>
            </div>
            <div className="col-3 ms-auto">
              <button className="btn btn-success border-0">Skip for now</button>
              <button className="btn btn-success border-0" type="submit">
                <Link to="/createstallstep7">
                  <span className="text-white" onClick={ProfileUpload}>
                    Next
                  </span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateStallStep6;
