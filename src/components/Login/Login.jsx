import React from "react";
import "./login.scss";
import IndiaImg from "../../images/india.png";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-section">
        <div className="login-menu">
          <p className="login-left">Get Started</p>
          <i class="fa-solid fa-xmark"></i>
        </div>
        <div className="login-type">
          <div className="login-with-google">
            <img
              src="https://in.bmscdn.com/webin/common/icons/googlelogo.svg"
              alt="google logo"
            />
            <p>Continue with Google</p>
          </div>

          <div className="login-with-email">
            <img
              src="https://in.bmscdn.com/webin/common/icons/email.svg"
              alt="email logo"
            />
            <p>Continue with Email</p>
          </div>

          <div className="login-with-guest">
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/youyinzhibo/guest.png"
              alt="email logo"
            />
            <p>Continue As a Guest</p>
          </div>

          <div className="or">
            <p>OR</p>
          </div>

          <div className="login-with-phone">
            <div className="india-img">
              <img src={IndiaImg} alt="India Img" />
              <span>+91</span>
            </div>

            <div className="ph-number">
              <input type="number" placeholder="Continue with mobile number" />
            </div>
          </div>
        </div>
        <div className="agree-message">
          <p>
            I agree to the <span>Terms & Conditions</span> &{" "}
            <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
