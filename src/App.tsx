import "./index.scss";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Horsebnbindex from "./components/Horcebnbindex";
import Modals from "./components/Modals";
import BookingCreated from "./components/BookingCreated";
import ChattingMessage from "./components/ChattingMessage";
import Booking from "./components/Booking";
import UpcomingBookingDetails from "./components/UpcomingBookingDetails";
import Paymentconfirm from "./components/Paymentconfirm";
import PostDetails from "./components/PostDetails";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import PersonalInformation from "./components/PersonalInformation";
import Updatepassword from "./components/Updatepassword";
import HostStalls from "./components/HostStalls";
import CreateStallStep1 from "./components/CreateStallStep1";
import CreateStallStep2 from "./components/CreateStallStep2";
import CreateStallimage from "./components/CreateStallimage";
import CreateStallStep3 from "./components/CreateStallStep3";
import CreateStallStep4 from "./components/CreateStallStep4";
import CreateStallStep5 from "./components/CreateStallStep5";
import CreateStallAmenities from "./components/CreateStallAmenities";
import CreateStallStep6 from "./components/CreateStallStep6";
import CreateStallStep7 from "./components/CreateStallStep7";
import CreateStallStep8 from "./components/CreateStallStep8";
import CreateStallStep9 from "./components/CreateStallStep9";
import CreateStallsStep10 from "./components/CreateStallsStep10";
// import CreateStallsStep11 from "./components/CreateStallsStep11";
import CreateStallStep11 from "./components/CreateStallStep11";
import CreateStallStep12 from "./components/CreateStallStep12";
import CreateStallStep13 from "./components/CreateStallStep13";
import CreateStallStep14 from "./components/CreateStallStep14";
import CreateStallStep15 from "./components/CreateStallStep15";
import Extrafile from "./components/Extrafile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HostanExperience from "./components/HostanExperience";
import HorseExperienceStep1 from "./components/HostanExperienceStep1";
import HostanExperienceStep1 from "./components/HostanExperienceStep1";
import HostExperienceLocation from "./components/HostExperienceLocation";
import HostExperienceGroup from "./components/HostExperienceGroup";
// import InitMap from "./components/GoogleMap";
import Loading from "./components/Loading";
import { GoogleMap } from "@react-google-maps/api";
import CreateTimingstep from "./components/CreateTimingstep";
import ShorttermStalls from "./components/ShorttermStalls";
import SearchWithoutMap from "./components/SearchWithoutMap";
import ShortTermDetailspost from "./components/ShortTermDetailspost";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      {/* <Horsebnbindex /> */}
      {/* <Modals /> */}
      {/* <Header /> */}
      {/* <SearchWithoutMap /> */}
      {/* <PostDetails /> */}
      {/* <Paymentconfirm /> */}

      {/* <Modals /> */}
      {/* <BookingCreated /> */}
      {/* <ChattingMessage/> */}
      {/* <Booking /> */}
      {/* <UpcomingBookingDetails /> */}
      {/* <Profile /> */}
      {/* <PersonalInformation /> */}
      {/* <Updatepassword / */}
      {/* <Footer /> */}
      {/* <HostStalls /> */}
      {/* <CreateStallStep1 /> */}
      {/* <CreateStallStep2 /> */}
      {/* <CreateStallimage /> */}
      {/* <CreateStallStep3 /> */}
      {/* <CreateStallStep4 /> */}
      {/* <CreateStallStep5 /> */}
      {/* <CreateStallAmenities /> */}
      {/* <CreateStallStep6 /> */}
      {/* <CreateStallStep7 /> */}
      {/* <CreateStallStep8 /> */}
      {/* <CreateStallStep9/> */}
      {/* <CreateStallsStep10/> */}
      {/* <CreateStallStep11/> */}
      {/* <CreateStallStep12 /> */}
      {/* <CreateStallStep13 /> */}
      {/* <CreateStallStep14 /> */}
      {/* <CreateStallStep15 /> */}
      {/* <Extrafile /> */}
      {/* <HostanExperience/> */}
      {/* <HostExperienceLocation /> */}
      {/* <Loading /> */}
      {/* <Header /> */}
      {/* <GoogleMap /> */}
      {/* <ShorttermStalls /> */}
      {/* <AboutUs/> */}

      <Router>
        <Routes>
          <Route path="/" element={<Horsebnbindex />} />
          {/* <Route path="/header" element={<Header />} /> */}
          <Route path="/hoststalls" element={<HostStalls />} />
          <Route path="/createstallstep1" element={<CreateStallStep1 />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/personalinformation"
            element={<PersonalInformation />}
          />
          <Route path="/updatepassword" element={<Updatepassword />} />
          <Route path="/createstallstep3" element={<CreateStallStep3 />} />
          <Route path="/createstallstep5" element={<CreateStallStep5 />} />
          <Route
            path="/createstallamenities"
            element={<CreateStallAmenities />}
          />
          <Route path="/createstallstep6" element={<CreateStallStep6 />} />
          <Route path="/createstallstep7" element={<CreateStallStep7 />} />
          <Route path="/createstallstep11" element={<CreateStallStep11 />} />
          <Route path="/createtimingstep" element={<CreateTimingstep />} />
          <Route path="/createstallstep12" element={<CreateStallStep12 />} />
          <Route path="/createstallstep13" element={<CreateStallStep13 />} />
          <Route path="/createstallstep14" element={<CreateStallStep14 />} />
          <Route path="/createstallstep15" element={<CreateStallStep15 />} />
          <Route path="/hostanexperience" element={<HostanExperience />} />
          <Route
            path="/shorttermdetailpost/:id"
            element={<ShortTermDetailspost />}
          />
          <Route
            path="/hostanexperiencestep1"
            element={<HostanExperienceStep1 />}
          />
          <Route
            path="/hostexperiencelocation"
            element={<HostExperienceLocation />}
          />
          <Route path="/shorttermstalls" element={<ShorttermStalls />} />
          <Route path="/aboutus" element={<AboutUs/>} />
        </Routes>
        {/* <HostanExperienceStep1/> */}
        {/* <HostExperienceGroup/> */}
        {/* <InitMap /> */}
        {/* <CreateTimingstep /> */}
        {/* <SearchWithoutMap /> */}
        {/* <ShortTermDetailspost /> */}
      </Router>
    </div>
  );
}

export default App;
