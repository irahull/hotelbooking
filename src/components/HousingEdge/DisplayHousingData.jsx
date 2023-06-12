import React from "react";

const DisplayHousingData = ({item}) => {
  return (
    <div className="housing-container">
      <div className="image-section">
        <img src={item.image} alt="aaaa" />
      </div>
      <div className="title-section">
        <h4>{item.title}</h4>
      </div>
    </div>
  );
};

export default DisplayHousingData;
