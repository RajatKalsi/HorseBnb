import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Horsebnbindex from "./components/Horcebnbindex";
import Modals from "./components/Modals";
import Header from "./components/Header";
import SearchWithoutMap from "./components/SearchWithoutMap";
import PostDetails from "./components/PostDetails";
import Paymentconfirm from "./components/Paymentconfirm";

function App() {
  return (
    <div className="App">
      {/* <Horsebnbindex/> */}
      {/* <Modals /> */}
      {/* <Header /> */}
      {/* <SearchWithoutMap /> */}
      {/* <PostDetails /> */}
      <Paymentconfirm />
    </div>
  );
}

export default App;
