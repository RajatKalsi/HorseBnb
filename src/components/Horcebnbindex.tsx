import React, { useState, useEffect } from "react";
import logo from "../images/other/logo.svg";
import horseimg from "../images/other/horseimg.png";
import monthly from "../images/other/monthly.png";
import "./horsebnb.css";
import Cardscomponent from "./Cardscomponent";
import HorseAdventures from "./HorseAdventures";
import Footer from "./Footer";
import Modals from "./Modals";
import SignupHeader from "./SignupHeader";
import Header from "./Header";
import { Link } from "react-router-dom";
import AfterloginModal from "./AfterloginHeader";
import AfterloginHeader from "./AfterloginHeader";
import henceforthApi from "./utils/henceforthApi";
// import Modals from "./Modals";

function Horsebnbindex() {
  const [shorttermShow, setShorttermShow] = useState(true);
  const [monthlyShow, setMonthlyShow] = useState(false);
  const [horseexperienceShow, setHorseexperienceShow] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [data, setData] = useState([] as any);

  const ShorttermPost = () => {
    setMonthlyShow(false);
    setShorttermShow(true);
    setHorseexperienceShow(false);
  };
  const MonthlyPost = () => {
    setShorttermShow(false);
    setMonthlyShow(true);
    setHorseexperienceShow(false);
  };
  const HorseexperienceShow = () => {
    setShorttermShow(false);
    setMonthlyShow(false);
    setHorseexperienceShow(true);
  };
  const GetProfileApi = async () => {
    let res = await henceforthApi.Auth.getprofileapi();
    // setData(res.data);
    // console.log(res.data);
  };
  const ShortTermList = async () => {
    let res = await henceforthApi.Auth.getListing();
    console.log(res.data);
    setData(res.data);
  };
  useEffect(() => {
    GetProfileApi();
    ShortTermList();
  }, []);

  return (
    // Navbar
    <div className="container-fluid">
      <SignupHeader />

      {/* <Header /> */}

      <div className="container">
        <div className="row mt-4">
          <div className="col-2 ms-0 me-0 ">
            <button
              className="btn btn-white border-2 shadow-none"
              onClick={ShorttermPost}>
              <b>Short term Stalls</b>
            </button>
          </div>
          <div className="col-2 ms-0 me-0">
            <button
              className="ms-0 me-0 btn btn-white border-2 shadow-none"
              onClick={MonthlyPost}>
              <b className=""> Monthly Board</b>
            </button>
          </div>
          <div className="col-2 ms-0 me-0 ">
            <button
              className="btn btn-white border-2 shadow-none"
              onClick={HorseexperienceShow}>
              <b>Horse experience</b>
            </button>
          </div>
        </div>
      </div>
      {/* Short term  */}
      {shorttermShow ? (
        <div className="container">
          <div className="row container mt-4 search-part-style">
            <div className="col-3 p-3">
              <div className="col-12 text-start position-relative">
                <b>WHERE</b>
              </div>
              <div className="col-12 text-start rounded-pill">
                <i className="bi bi-search search-position mt-2"></i>
                <input
                  type="location"
                  className="rounded border-0 shadow-none mt-2"
                  placeholder="Anywhere"
                />
              </div>
            </div>
            <div className="col-3 p-3">
              <div className="col-12 text-start">
                <b>Check-In/Check-Out</b>
              </div>
              <div className="col-12 text-start rounded-pill">
                <input
                  type="date"
                  placeholder="Add dates"
                  className="form-control rounded mt-2 border-0 shadow-none"
                />
              </div>
            </div>
            <div className="col-3 p-3 ms-auto">
              <div className="col-12 text-start ">
                <b>HORSE STALLS</b>
              </div>
              <div className="col-12 text-start mt-2">
                <input
                  type="text"
                  placeholder="Add stals"
                  className="form-control border-0 shadow-none"
                />
              </div>
            </div>
            <div className="col-1  p-3 ms-auto ">
              <button className="btn btn-danger mt-1 text-end me-0">
                Search
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* Monthly  */}
      {monthlyShow ? (
        <div className="container">
          <div className="row container mt-4 search-part-style">
            <div className="col-3 p-3 m-auto">
              <div className="col-12 text-start position-relative">
                <b>WHERE</b>
              </div>
              <div className="col-12 text-start rounded-pill">
                <i className="bi bi-search search-position mt-2"></i>
                <input
                  type="location"
                  className="rounded border-0 shadow-none mt-2"
                  placeholder="Anywhere"
                />
              </div>
            </div>
            <div className="col-3 p-3 m-auto">
              <div className="col-12 text-start">
                <b>Select Month</b>
              </div>
              <div className="col-12 text-start rounded-pill">
                <input
                  type="month"
                  placeholder="Add dates"
                  className="form-control rounded mt-2 border-0 shadow-none"
                />
              </div>
            </div>
            <div className="col-3 p-3 ms-auto">
              <div className="col-12 text-start ">
                <b>HORSE STALLS</b>
              </div>
              <div className="col-12 text-start mt-2">
                <input
                  type="text"
                  placeholder="Add stals"
                  className="form-control border-0 shadow-none"
                />
              </div>
            </div>
            <div className="col-2  p-3 m-auto ">
              <button className="btn btn-danger mt-1 text-end me-0">
                Search
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* Horse Experience  */}
      {horseexperienceShow ? (
        <div className="container">
          <div className="row container mt-4 search-part-style">
            <div className="col-3 p-3 m-auto">
              <div className="col-12 text-start position-relative">
                <b>WHERE</b>
              </div>
              <div className="col-12 text-start rounded-pill">
                <i className="bi bi-search search-position1 mt-2"></i>
                <input
                  type="text"
                  className="rounded border-0 shadow-none mt-2"
                  placeholder="Anywhere"
                />
              </div>
            </div>

            <div className="col-3 p-3 m-auto">
              <div className="col-12 text-start ms-3">
                <b>DATE</b>
              </div>
              <div className="col-12 text-start rounded-pill mt-2">
                <input
                  type="date"
                  placeholder="Add dates"
                  className="form-control rounded mt-2 border-0 shadow-none"
                />
              </div>
            </div>

            <div className="col-2  p-3 m-auto">
              <button className="btn btn-danger mt-1 text-end me-0">
                Search
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* 3 image section  */}

      <section className="mt-5">
        <div className="container">
          <div className="row text-start">
            <b>
              <p>Explore HorseBnB</p>
            </b>
          </div>
        </div>
        <div className="container">
          {/* <Link></Link> */}
          <div className="row">
            {/* <Link to="/shorttermstalls"> */}
            <div className="col-4">
              <Link to="/shorttermstalls">
                {" "}
                <img
                  src="https://a-z-animals.com/media/horse-3.jpg"
                  alt=""
                  height="200px"
                  width="350px"
                />
              </Link>
              <div className="row shadow">
                <Link to="/shorttermstalls">
                  {" "}
                  <div className="col-5">
                    <p className="mt-2">
                      <b>Short term Stalls</b>
                    </p>
                  </div>
                  <div className="col-3 mt-2 offset-4">
                    <i className="bi bi-arrow-right"></i>
                  </div>
                </Link>
              </div>
            </div>
            {/* </Link> */}
            {/* <Link to=""> */}
            <div className="col-4">
              <img
                src="https://www.nobroker.in/blog/wp-content/uploads/2022/02/7-running-horses-vastu.jpg"
                alt=""
                height="200px"
                width="350px"
              />
              <div className="row shadow">
                <div className="col-5">
                  <p className="mt-2 ">
                    <b>Monthly Board</b>
                  </p>
                </div>
                <div className="col-3 mt-2 offset-4">
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </div>
            {/* </Link> */}
            <div className="col-4">
              <img
                src="https://static8.depositphotos.com/1001374/965/i/600/depositphotos_9652329-stock-photo-black-horse-gallop.jpg"
                alt=""
                height="200px"
                width="350px"
              />
              <div className="row shadow">
                <div className="col-6">
                  <p className="mt-2">
                    <b>Guest Accomodation</b>
                  </p>
                </div>
                <div className="col-2 mt-2 offset-4">
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1 Image section */}
      <div className="container mt-5">
        <div className="position-relative">
          <div>
            <img src={horseimg} alt="" className="w-100" height="300px" />
          </div>
          <div className="row image-textposition text-white">
            <div className="col-12 text-start ms-5">
              <p>INTRODUCING</p>
            </div>
            <div className="col-12  text-start ms-5 mt-1">
              <h3>HorseBnB</h3>
            </div>
            <div className="col-12  text-start ms-5 mt-3">
              <button className="btn border-0 bg-white">About Us</button>
            </div>
          </div>
        </div>
      </div>

      {/* 4 images in one row section  */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-start ms-3 ">
            <b>
              <p className="mb-0">Overnight and short terms stalls</p>
            </b>
          </div>
          <div className="col-12 text-start ms-3 mt-1">
            <p>
              travelling with your horse ?Find overnight Accomodations for you
              and tour horse
            </p>
          </div>
        </div>
        <Cardscomponent />
        <p className="text-start mt-5 text-success">
          Show all short term accomodation
          <i className="bi bi-chevron-compact-right"></i>
        </p>
      </div>
      {/* 2nd single image mothly section */}
      <div className="container">
        <div className="position-relative">
          <div>
            <img src={monthly} alt="" className="w-100" height="300px" />
          </div>
          <div className="row image-textposition text-white"></div>
        </div>
      </div>
      <div className="container">
        <Cardscomponent />
        <p className="text-start mt-5 text-success">
          Show all short term accomodation
          <i className="bi bi-chevron-compact-right"></i>
        </p>
      </div>
      {/* Equestrain advanture */}
      <div>
        <HorseAdventures />
      </div>

      <Footer />
      <Modals.SignUpModal />
      <Modals.LoginModal />
    </div>
  );
}

export default Horsebnbindex;
