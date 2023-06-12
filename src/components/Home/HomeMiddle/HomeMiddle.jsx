import React from "react";
import "./homeMiddle.scss";
import MiddleBtn from "./MiddleButton/MiddleBtn";

const HomeMiddle = () => {
 
  return (
    <div className="home-middle">
      <div className="left-middle">
        <iframe
          width="445"
          height="250"
          src="https://www.youtube.com/embed/1Jc4ywxopmY?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
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
