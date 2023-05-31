import React from "react";
import "./homePage.scss";
import Navbar from "./Navbar/Navbar";
import MiddleBtn from "./MiddleButton/MiddleBtn";
import HomeMiddle from "./HomeMiddle/HomeMiddle";

const HomePage = () => {
  return (
    <div className="homePage">
      <Navbar />
      <HomeMiddle />
    </div>
  );
};

export default HomePage;
