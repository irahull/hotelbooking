import React from "react";
import "./footer.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PStore from "./../../assets/play-store-logo-33874.png";
import AStore from "./../../assets/pngwing.com.png";
import FLogo from "./../../assets/housing.820bbe77.webp";
import FLogoTwo from "./../../assets/gptweconomic.c3804eff.webp";
import FLogoThree from "./../../assets/gptwLogo.473a42fa.webp";
import ScannerImg from "./../../assets/qr-code.f143ed3a.webp";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="footer-one">
          <div className="footer-logo">
            <img src={FLogo} alt="logo" />
          </div>
          <div className="logo-two">
            <img src={FLogoTwo} alt="logo" />
            <img src={FLogoThree} alt="logo" />
          </div>
          <div className="socials">
            <p>FOLLOW</p>
            <div className="social-icons">
              <FacebookOutlinedIcon />
              <InstagramIcon />
              <TwitterIcon />
              <LinkedInIcon />
              <YouTubeIcon />
            </div>
          </div>
          <div className="copyright">
            <p>2019 -23 Locon Solutions Pvt. Ltd</p>
          </div>
        </div>
        <div className="footer-two">
          <h4>COMPANY</h4>
          <ul>
            <li>
              <a href="http://">Carrers </a>
            </li>
            <li>
              <a href="http://">About Us </a>
            </li>
            <li>
              <a href="http://"> For Partners</a>
            </li>
            <li>
              <a href="http://"> Terms</a>
            </li>
            <li>
              <a href="http://">Anual Return </a>
            </li>
            <li>
              <a href="http://">Privacy Policy </a>
            </li>
            <li>
              <a href="http://"> Contact Us</a>
            </li>
            <li>
              <a href="http://">UnSubscribe </a>
            </li>
            <li>
              <a href="http://"> Merger Hearing Advertisement</a>
            </li>
          </ul>
        </div>
        <div className="footer-three">
          <h4>PARTNER SITES</h4>
          <ul>
            <li>
              <a href="http://"> Proptiger</a>
            </li>
            <li>
              <a href="http://">Makaan</a>
            </li>
            <li>
              <a href="http://">IREF</a>
            </li>
            <li>
              <a href="http://">realestate.com.au</a>
            </li>
            <li>
              <a href="http://">realtor.com</a>
            </li>
            <li>
              <a href="http://">99.co</a>
            </li>
          </ul>
        </div>
        <div className="footer-four">
          <h4>PARTNER SITES</h4>
          <ul>
            <li>
              <a href="http://">News</a>
            </li>
            <li>
              <a href="http://">Home Loans</a>
            </li>
            <li>
              <a href="http://">Sitemap</a>
            </li>
            <li>
              <a href="http://">International</a>
            </li>
          </ul>
        </div>
        <div className="footer-five">
          <h4>EXPERIENCE HOUSING APP ON MOBILE</h4>
          <div className="pstore-logo">
            <img src={PStore} alt="PlayStore Logo" />
            <img src={AStore} alt="AppleStore Logo" />
          </div>
          <div className="scanner">
            <img src={ScannerImg} alt="Scanner" />
            <p>Open camera & scan the QR code to Download the App</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
