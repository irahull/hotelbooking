import React from "react";
import "./accountHover.scss";

const AccountHover = () => {
  return (
    <div className="account-hover">
      <div className="user-hover-btn">
        <button>Login</button>
        <span>/</span>
        <button>Register</button>
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
