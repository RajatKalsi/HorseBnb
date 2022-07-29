import React, { useState, useEffect } from "react";
import "./horsebnb.css";
import img1 from "../images/other/personalinfo.png";
import henceforthApi from "./utils/henceforthApi";

function PersonalInformation() {
  henceforthApi.setToken(localStorage.getItem("token"));
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [show4, setShow4] = useState(true);
  const [show5, setShow5] = useState(true);
  const [showname, setShowname] = useState(false);
  const [showGender, setShowGender] = useState(false);
  const [showBirthday, setShowBirthday] = useState(false);
  const [showemail, setShowemail] = useState(false);
  const [showphoneNumber, setShowphoneNumber] = useState(false);
  const [showaddress, setshowAddress] = useState(false);
  const [editUserName, setEditUserName] = useState({
    firstName: "",
    lastName: "",
  });
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState("");

  const EditName = () => {
    setShow(false);
    setShowname(true);
  };
  const EditCancel = () => {
    setShow(true);
    setShowname(false);
  };
  const EditGender = () => {
    setShow1(false);
    setShowGender(true);
  };
  const EditGendercancel = () => {
    setShow1(true);
    setShowGender(false);
  };
  const EditBirthday = () => {
    setShow2(false);
    setShowBirthday(true);
  };
  const EditBirthdaycancel = () => {
    setShow2(true);
    setShowBirthday(false);
  };
  const EditEmail = () => {
    setShow3(false);
    setShowemail(true);
  };
  const EditEmailcancel = () => {
    setShow3(true);
    setShowemail(false);
  };
  const EditphoneNumber = () => {
    setShow4(false);
    setShowphoneNumber(true);
  };
  const EditphoneNumbercancel = () => {
    setShow4(true);
    setShowphoneNumber(false);
  };
  const EditAddress = () => {
    setShow5(false);
    setshowAddress(true);
  };
  const EditAddresscancel = () => {
    setShow5(true);
    setshowAddress(false);
  };
  const UsernameChange = (e: any) => {
    let name = e.target.name;
    let value = e.target.value;

    setEditUserName({
      ...editUserName,
      [name]: value,
    });
  };

  const SaveName = async () => {
    console.log(editUserName);
    let res = await henceforthApi.Auth.updateProfile({
      firstName: editUserName.firstName,
      lastName: editUserName.lastName,
    });
  };
  const GenderEdit = async () => {
    let res = await henceforthApi.Auth.updateProfile({
      publicData: { gender: gender },
    });
  };

  const DateEdit = async () => {
    let res = await henceforthApi.Auth.updateProfile({
      publicData: { protectedData: { age: age } },
    });
    console.log(res);
  };
  const EmailEdit = async () => {
    let res = henceforthApi.Auth.updateProfile({ email: email });
  };
  const PhoneNumberEdit = () => {
    let res = henceforthApi.Auth.updateProfile(
      // ...phoneNumber,
      { protectedData: { phoneNumber: phoneNumber } }
    );
  };
  const AddressEdit = () => {
    let res = henceforthApi.Auth.updateProfile({
      publicData: { city: address },
    });
  };
  const Getprofile = async () => {
    let res = await henceforthApi.Auth.getprofile();
    localStorage.setItem("id", res.data.id.uuid);
    console.log(res.data.id.uuid);
    setEditUserName(res.data.attributes.profile.firstName);
    setEmail(res.data.attributes.email);
    setGender(res.data.attributes.profile.publicData.gender);
    setPhoneNumber(res.data.attributes.profile.protectedData.phoneNumber);
    setAge(res.data.attributes.profile.publicData.age);
    setAddress(res.data.attributes.profile.publicData.address.city);
    // setAddress(res);
  };
  useEffect(() => {
    Getprofile();
  }, []);
  return (
    <div className="container mb-5">
      <div className="d-flex mt-5">
        <p className="">Account</p>
        <b>
          {" "}
          <i className="bi bi-chevron-compact-right ms-2"></i>
        </b>
        <p className="ms-2">Personal info</p>
      </div>
      <div className="row mt-2">
        <h3>Personal info</h3>
      </div>
      {/* Name  */}
      <div className="row mt-3">
        <div className="col-6">
          <div className="row border border-2 p-2">
            <div className="col-4 me-auto">
              <b>Name</b>
              {show ? (
                <p>
                  {editUserName.firstName}
                  {editUserName.lastName}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="col-2 text-danger ms-auto">
              {show ? (
                <button
                  className="btn border border-0 text-danger  shadow-none"
                  onClick={EditName}>
                  Edit
                </button>
              ) : (
                <button
                  className="btn bg-white border-0 text-danger shadow-none"
                  onClick={EditCancel}>
                  Cancel
                </button>
              )}
            </div>
            {showname ? (
              <div className="col-12">
                <p className="mb-1">
                  This is the name on your travel document which could be a
                  licence or passport
                </p>
                <div className="row">
                  <div className="col-6">
                    <label>First Name</label>
                    <br></br>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      value={editUserName.firstName}
                      className="w-100"
                      onChange={UsernameChange}
                    />
                  </div>
                  <div className="col-6">
                    <label>Last Name</label>
                    <br></br>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-100"
                      value={editUserName.lastName}
                      name="lastName"
                      onChange={UsernameChange}
                    />
                  </div>
                </div>
                <button
                  className="btn btn-success border-0 mt-2"
                  onClick={SaveName}>
                  Save
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
          {/* Gender  */}
          <div className="col-12 mt-2">
            <div className="row border border-2 p-2">
              <div className="col-4 me-auto">
                <b>Gender</b>
                {show1 ? <p>{gender}</p> : ""}
              </div>
              <div className="col-2 text-danger ms-auto">
                {show1 ? (
                  <button
                    className="btn border border-0 text-danger  shadow-none"
                    onClick={EditGender}>
                    Edit
                  </button>
                ) : (
                  <button
                    className="btn bg-white border-0 text-danger shadow-none"
                    onClick={EditGendercancel}>
                    Cancel
                  </button>
                )}
              </div>
              {showGender ? (
                <div className="col-12">
                  <select
                    className="form-select"
                    onChange={(e: any) => {
                      setGender(e.target.value);
                    }}
                    id="sel1"
                    name=""
                    title="gh">
                    <option selected>Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <button
                    className="btn btn-success border-0 mt-2"
                    onClick={GenderEdit}>
                    Save
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          {/* Date of Birth  */}
          <div className="col-12 mt-2">
            <div className="row border border-2 p-2">
              <div className="col-4 me-auto">
                <b>Date of Birth</b>
                {show2 ? <p>{age}</p> : ""}
              </div>
              <div className="col-2 text-danger ms-auto">
                {show2 ? (
                  <button
                    className="btn border border-0 text-danger  shadow-none"
                    onClick={EditBirthday}>
                    Edit
                  </button>
                ) : (
                  <button
                    className="btn bg-white border-0 text-danger shadow-none"
                    onClick={EditBirthdaycancel}>
                    Cancel
                  </button>
                )}
              </div>
              {showBirthday ? (
                <div className="col-12">
                  <input
                    type="date"
                    className="w-100"
                    value={age}
                    onChange={(e: any) => setAge(e.target.value)}
                    placeholder="Choose your Birth Date"
                  />
                  <button
                    className="btn btn-success border-0 mt-2"
                    onClick={DateEdit}>
                    Save
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          {/* Email Address  */}
          <div className="col-12 mt-2">
            <div className="row border border-2 p-2">
              <div className="col-4 me-auto">
                <b>Email address</b>
                {show3 ? <p>{email}</p> : ""}
              </div>
              <div className="col-2 text-danger ms-auto">
                {show3 ? (
                  <button
                    className="btn border border-0 text-danger  shadow-none"
                    onClick={EditEmail}>
                    Edit
                  </button>
                ) : (
                  <button
                    className="btn bg-white border-0 text-danger shadow-none"
                    onClick={EditEmailcancel}>
                    Cancel
                  </button>
                )}
              </div>
              {showemail ? (
                <div className="col-12">
                  <p>For Notification, remainders,and help logging in</p>
                  <input
                    type="email"
                    value={email}
                    onChange={(e: any) => {
                      setEmail(e.target.value);
                    }}
                    className="w-100"
                    placeholder="Enter Your mail"
                  />
                  <button
                    className="btn btn-success border-0 mt-2"
                    onClick={EmailEdit}>
                    Save
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          {/* Phone number  */}
          <div className="col-12 mt-2">
            <div className="row border border-2 p-2">
              <div className="col-4 me-auto">
                <b>Phone Number</b>
                {show4 ? <p>{phoneNumber}</p> : ""}
              </div>
              <div className="col-2 text-danger ms-auto">
                {" "}
                {show4 ? (
                  <button
                    className="btn border border-0 text-danger  shadow-none"
                    onClick={EditphoneNumber}>
                    Edit
                  </button>
                ) : (
                  <button
                    className="btn bg-white border-0 text-danger shadow-none"
                    onClick={EditphoneNumbercancel}>
                    Cancel
                  </button>
                )}
              </div>
              {showphoneNumber ? (
                <div className="me-5 position-relative">
                  <p>For Notification, remainders,and help logging in</p>
                  <select
                    className="form-select form-select- mb-3"
                    aria-label=".form-select-lg example">
                    <option value="1">+91</option>
                    <option value="2">+63</option>
                    <option value="3">+1</option>
                  </select>
                  <div className="col-auto">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">91</div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        value={phoneNumber}
                        id="inlineFormInputGroup"
                        onChange={(e: any) => {
                          setPhoneNumber(e.target.value);
                        }}
                        placeholder="Mobile number"
                        name="mobile_number"
                      />
                    </div>
                    <button
                      className="btn btn-success border-0 mt-2"
                      onClick={PhoneNumberEdit}>
                      Save
                    </button>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          {/* Address  */}
          <div className="col-12 mt-2">
            <div className="row border border-2 p-2">
              <div className="col-4 me-auto">
                <b>Address</b>
                {show5 ? <p>{address}</p> : ""}
              </div>
              <div className="col-2 text-danger ms-auto">
                {show5 ? (
                  <button
                    className="btn border border-0 text-danger  shadow-none"
                    onClick={EditAddress}>
                    Edit
                  </button>
                ) : (
                  <button
                    className="btn bg-white border-0 text-danger shadow-none"
                    onClick={EditAddresscancel}>
                    Cancel
                  </button>
                )}
              </div>
              {showaddress ? (
                <div className="col-12">
                  <input
                    type="text"
                    className="w-100"
                    placeholder="Enter Your Location"
                    name="publicData"
                    onChange={(e: any) => {
                      setAddress(e.target.value);
                    }}
                    value={address}
                  />
                  <button
                    className="btn btn-success border-0 mt-2"
                    onClick={AddressEdit}>
                    Save
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div
          className="col-4 border border-2 ms-5"
          style={{ height: "250px", width: "350px" }}>
          <div className="row p-3">
            <div className="col-4">
              <img src={img1} alt="" height="50px" width="50px" />
            </div>
            <p className="mt-1">
              <b>What information is shared with others?</b>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
              ratione tenetur esse cumque, mollitia fuga.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
