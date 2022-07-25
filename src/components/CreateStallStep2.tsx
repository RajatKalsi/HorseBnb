import React from "react";

function CreateStallStep2() {
  return (
    <div className="mb-5">
      <div className="container">
        <div className="row">
          <div className="col-5 mt-5">
            <h3>
              <b>What kind of place are you listing?</b>
            </h3>
            <p className="mt-3">Now choose a property type</p>
            <form>
              <select
                className="form-select mt-3"
                aria-label="Default select example">
                <option selected> Barn</option>
                <option value="1">Short terms stalls</option>
                <option value="2">Monthly Board</option>
              </select>
              <p className="mt-3">What will guests have</p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label">
                  Entire Barn
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </label>
              </div>
              <div className="form-check mb-5">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label className="form-check-label">
                  Private Stall
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </label>
              </div>
            </form>

            <hr className="mt-5" />
            <div className="row">
              <div className="col-4 me-auto text-danger" onClick={()=>{window.history.back()}}>
                <i className="bi bi-chevron-left"></i>Back
              </div>
              <div className="col-4 ms-auto">
                <button className="btn btn-success border-0">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateStallStep2;
