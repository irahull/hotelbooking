import React from "react";
import "./properties.scss";
import { useNavigate } from "react-router-dom";
import PropertySimmerEffect from "../SimmerEffect/PropertySimmerEffect";
import { useState } from "react";
import { useEffect } from "react";

const ShowProperties = ({ image }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(false);
    console.log(loading)
  });

  return (
    <>
      {loading ? (
        <PropertySimmerEffect />
      ) : (
        <div className="properties-section">
          <img
            src={image}
            alt="Room One"
            onClick={() => navigate("/search/123")}
          />
          <div className="title">
            <h4> Room in New Delhi</h4>
          </div>
          <div className="para">Stay with Naveen - Luxury Jacuzzi Spa Tub</div>
          <div className="price">$-99.00</div>
        </div>
      )}
    </>
  );
};

export default ShowProperties;
