import { ClassNames } from "@emotion/react";
import React from "react";
import lightbulb from "../images/other/lightbulb.png";
function CreateStallStep8() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <h4 className="mt-5">
            <b>Create a title for your Listing</b>
          </h4>
          <p>
            <small>
              Catch guest's attention with a listing title that highligts what
              makes your place special
            </small>
          </p>
          <form>
            <input type="text" className="w-100" placeholder="Enter title" />
          </form>
        </div>
        <div className="col-4 ms-auto mt-5 me-5 shadow">
          <div className="p-3">
            <img src={lightbulb} alt="" className="mt-3" />
            <p className="mt-3">
              <b>New york Home with a view</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateStallStep8;
