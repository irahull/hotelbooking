import React from "react";
import "./error.scss";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="error-page">
      <div className="error">
        <p>oops - 404 Page Not Found</p>
        <button onClick={() => navigate("/")}>Go To Home</button>
      </div>
    </div>
  );
};

export default Error;
