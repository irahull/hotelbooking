import React from "react";
import "./accountHover.scss";
import { useNavigate } from "react-router-dom";

const AccountHover = () => {
  const navigate = useNavigate()
  return (
    <div className="account-hover">
      <div className="user-hover-btn">
        <button onClick={()=> navigate("/login")}>Login</button>
        <span>/</span>
        <button onClick={()=> navigate("/register")}>Register</button>
      </div>
      <div className="my-activity">
        <p>My Activity</p>
        <div className="activity-list">
          <p> Recently Search</p>
          <p> Recently Viewed</p>
          <p>Shortlisted</p>
          <p>Contacted</p>
        </div>
      </div>
    </div>
  );
};

export default AccountHover;
