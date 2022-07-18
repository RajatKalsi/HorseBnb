import React from "react";

function Modals() {
  return (
    <div>
      {/* Sign-Up Modal  */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#myModal">
        Open modal
      </button>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Finish signing Up</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal">
                {" "}
              </button>
            </div>
            <div className="modal-body">
              <div className="me-3 ms-3">
                <input
                  type="text"
                  className="w-100 mt-3"
                  placeholder="FirstName"
                />
                <input
                  type="text"
                  className="w-100 mt-3"
                  placeholder="LastName"
                />
                <input type="text" className="w-100 mt-3" placeholder="Email" />
                <div className="col-auto mt-3">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">@</div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroup"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                </div>
                <input
                  type="password"
                  className="w-100 mt-2"
                  placeholder="password"
                />

                <div className="text-start ms-3 mt-3">
                  <input type="checkbox" className="" />
                  <span className="ms-1"> Agree to</span>{" "}
                  <span className="text-danger">Terms</span>and{" "}
                  <span className="text-danger">Conditions</span>
                </div>
                <button className="btn btn-danger mt-1  w-100">Sign Up</button>
                <div className="mt-1">
                  -------------------------or------------------------
                </div>
                <div>
                  <button className="btn btn-danger w-100 mt-1">
                    <i className="bi bi-facebook me-5"></i>
                    <span className="text-start ms-5">Login with Facebook</span>
                  </button>
                </div>
                <div>
                  <button className="btn btn-danger w-100 mt-3">
                    <i className="bi bi-google me-5"></i>{" "}
                    <span className="text-start ms-5">Login with Google</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Login modal */}

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#myModal1">
        open modal 1
      </button>

      <div className="modal" id="myModal1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title ms-5">
                <span className="text-center ms-5">Log-In</span>
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal">
                {" "}
              </button>
            </div>
            <div className="modal-body">
              <div className="me-3 ms-3">
                <input type="text" className="w-100 mt-3" placeholder="Email" />
                <input
                  type="password"
                  className="w-100 mt-4"
                  placeholder="password"
                />
                <div className="row mt-3 ">
                  <div className="col-5 text-start">
                    <input type="checkbox" />
                    <span className="ms-3">Remember me</span>
                  </div>
                  <div className="col-4 ms-auto">
                    <span className="text-danger">forgot password</span>
                  </div>
                </div>
                <button className="w-100 bg-danger border-0 mt-3 p-2 text-white">
                  Log In
                </button>
                <hr />
                <div>
                  <button className="btn btn-danger w-100 mt-1">
                    <i className="bi bi-facebook me-5"></i>
                    <span className="text-start ms-5">Login with Facebook</span>
                  </button>
                </div>
                <div>
                  <button className="btn btn-danger w-100 mt-3">
                    <i className="bi bi-google me-5"></i>{" "}
                    <span className="text-start ms-5">Login with Google</span>
                  </button>
                </div>
                <p className="mt-3">
                  Don't have an HorceBnb Account{" "}
                  <span className="text-danger">Sign-Up</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modals;
