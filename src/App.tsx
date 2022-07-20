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

function App() {
  return (
    <div className="App">
      {/* <Horsebnbindex/> */}
      {/* <Modals /> */}
      <Header />
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
      <Updatepassword />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
