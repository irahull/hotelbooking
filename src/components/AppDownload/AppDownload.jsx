import React from "react";
import "./appdownload.scss"
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PlayStore from "../../assets/play-store-logo-33874.png"
import IosStore from "../../assets/pngwing.com.png";
import PhoneImg from "../../assets/phone.png";

const AppDownload = () => {
  return (
    <div className="app-main">
    <div className="app-download">
      <div className="left-container">
        <h2>
          Download 99acres Mobile App
          <span>and never miss out any update </span>
        </h2>
        <div className="line-one">
            <CheckOutlinedIcon/>
            <h3>Get to know about newly posted properties as soon as they are posted</h3>
        </div>
        <div className="line-two">
            <CheckOutlinedIcon/>
            <h3>Manage your properties with ease  and get instant alert about responses</h3>
        </div>
        <div className="get-app">
            <img src={PlayStore} alt="" />
            <img src={IosStore} alt="" />
        </div>
      </div>
      <div className="right-container">
        <img src={PhoneImg} alt="" />

      </div>
    </div>
    </div>
  );
};

export default AppDownload;
