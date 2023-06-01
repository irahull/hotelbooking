import React from "react";
import "./homeMiddle.scss";
import MiddleBtn from "./MiddleButton/MiddleBtn";
import NewBg from "./../../../utils/new-bg.png";

const HomeMiddle = () => {
  return (
    <div className="home-middle">
      <div className="left-middle">
        <img src={NewBg} alt="Background" />
      </div>
      <div className="right-middle">
        <div className="heading">
          <h1>Introduction Insights</h1>
          <h3>One stop for making an informed decision</h3>
          <p>Price Trends | Locality Insights | Reviews | Registry Records</p>
        </div>
        <div className="middle-btn">
          <MiddleBtn />
        </div>
      </div>
    </div>
  );
};

export default HomeMiddle;
