// import "./index.css";
import img1 from "../images/other/personalinfo.png";
import img2 from "../images/other/changepassword.png";
import img4 from "../images/other/notification.png";
import { Link } from 'react-router-dom'
import "./horsebnb.css";

const Profile = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container mt-5">
          <h3 className="text-start"> Account</h3>
          <p>rajat.henceforth@gmail.com</p>
          <div className="row mt-5 ">
            <div className="col-4 shadow m-auto" style={{ width: "350px" }}>
              <div className="row mt-4">
                <div className="col-3 ms-2">
                  <img src={img1} alt="" height="50px" width="50px" />
                </div>
                <div className="col-6 mt-3">
                  <p><Link to="/personalinformation">Personal info</Link></p>
                </div>
                <div className="col-2 mt-3 me-3">
                  <i className="bi bi-chevron-compact-right"></i>
                </div>
                <p className="mt-2 mb-5">
                  Provide Personal details and how we can reach you{" "}
                </p>
              </div>
            </div>
            <div className="col-4 shadow m-auto" style={{ width: "350px" }}>
              {/* <Link to="/changepassword" className='decoration'> */}
              <div className="row mt-4">
                <div className="col-3 ms-2">
                  <img src={img2} alt="" height="50px" width="50px" />
                </div>
                <div className="col-7 mt-3">
                  <p><Link to="/updatepassword">Update Password</Link></p>
                </div>
                <div className="col-1 mt-3 me-2">
                  <i className="bi bi-chevron-compact-right"></i>
                </div>
                <p className="mt-2 mb-5 ">
                  Update your password and secure Your Account
                </p>
              </div>
              {/* </Link> */}
            </div>
            <div className="col-4 shadow m-auto" style={{ width: "350px" }}>
              {/* <Link to="/notification" className='decoration'> */}
              <div className="row mt-4">
                <div className="col-2 ms-2">
                  <img src={img4} alt="" height="50px" width="50px" />
                </div>
                <div className="col-7 mt-3">
                  <p>
                    <b>Payments & Payouts</b>
                  </p>
                </div>
                <div className="col-2 mt-3 me-2">
                  <i className="bi bi-chevron-compact-right"></i>
                </div>
                <p className="mt-2 mb-5">
                  Reviews Payment,Payout coupons Gifts card & taxes
                </p>
              </div>
              {/* </Link> */}
            </div>
          </div>
          <div className="row shadow m-4">
            <div className="col-4 p-4 ">Need to deactivate your account?</div>
            <div className="col-3 p-4 ms-auto text-danger">
              Take care of that now
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
