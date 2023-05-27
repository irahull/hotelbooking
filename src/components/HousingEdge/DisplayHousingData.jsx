import React from "react";

const DisplayHousingData = ({item,key}) => {
  return (
    <div className="housing-container" key={key}>
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
