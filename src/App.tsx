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
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/hoststalls" element={<HostStalls />} />
          <Route path="/createstallstep1" element={<CreateStallStep1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
