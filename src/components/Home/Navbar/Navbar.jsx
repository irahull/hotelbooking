import React, { useState } from "react";
import "./navbar.scss";
import Logo from "../../../utils/nnacres_white_v2.png";
import AccountHover from "./UserHover/AccountHover";
import ForBuilders from "./ForBuilders/ForBuilders";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [accountHover, setAccountHover] = useState(false);
  const [builderHover, setBuilderHover] = useState(false);
  const [ownerHover, setOwnerHover] = useState(false);
  const [tenantHover, setTenantHover] = useState(false);
  const [insightsHover, setInsightsHover] = useState(false);
  const [menuHandler, setMenuHandler] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const OpenDialogBox = () => {
    setAccountHover(!false);
  };
  const CloseDialogBox = () => {
    setAccountHover(!true);
  };

  const OpenBuilderBox = () => {
    setBuilderHover(true);
  };
  const CloseBuilderBox = () => {
    setBuilderHover(false);
  };

  const OpenOwnerBox = () => {
    setOwnerHover(true);
  };
  const CloseOwnerBox = () => {
    setOwnerHover(false);
  };

  const OpenTenantBox = () => {
    setTenantHover(true);
  };
  const CloseTenantBox = () => {
    setTenantHover(false);
  };

  const OpenInsightBox = () => {
    setInsightsHover(true);
  };
  const CloseInsightBox = () => {
    setInsightsHover(false);
  };

  const OpenMenu = () => {
    setMenuHandler(!menuHandler);
  };

  return (
    <div
      className={`${
        location.pathname === "/"
          ? "navbar-container"
          : "navbar-container nav-bg"
      }`}
    >
      <div className="navbar-section">
        <div className="nav-left">
          <p onClick={OpenMenu}>
            <i className="fa-solid fa-bars"></i>
          </p>

          <div className="logo">
            <img src={Logo} alt="Logo" onClick={() => navigate("/")} />
          </div>
        </div>
        <div className="nav-right">
          <ul className={`${menuHandler ? "ul" : "ul ul-list"}`}>
            <div className="nav-list">
              <li>
                <a href="#">For Buyers</a>
              </li>
            </div>
            <div
              className="nav-list"
              onMouseEnter={OpenTenantBox}
              onMouseLeave={CloseTenantBox}
            >
              <li>
                <a href="#">For Tenants</a>
              </li>
              <div
                className={`${
                  tenantHover ? "nav-tenant" : "nav-tenant nav-hide"
                }`}
              >
                <ForBuilders />
              </div>
            </div>
            <div
              className="nav-list"
              onMouseEnter={OpenOwnerBox}
              onMouseLeave={CloseOwnerBox}
            >
              <li>
                <a href="#">For Owners</a>
              </li>
              <div
                className={`${ownerHover ? "nav-owner" : "nav-owner nav-hide"}`}
              >
                <ForBuilders />
              </div>
            </div>
            <div
              className="nav-list"
              onMouseEnter={OpenBuilderBox}
              onMouseLeave={CloseBuilderBox}
            >
              <li>
                <a href="#">For Dealer/Builders</a>
              </li>

              <div
                className={`${
                  builderHover ? "nav-builder" : "nav-builder nav-hide"
                }`}
              >
                <ForBuilders />
              </div>
            </div>
            <div
              className="nav-list"
              onMouseEnter={OpenInsightBox}
              onMouseLeave={CloseInsightBox}
            >
              <li>
                <a href="#">Insights</a>
              </li>
              <div
                className={`${
                  insightsHover ? "nav-insight" : "nav-insight nav-hide"
                }`}
              >
                <ForBuilders />
              </div>
            </div>
          </ul>
          <div className="nav-btn">
            <button onClick={()=> navigate("/search/123")}>Post property</button>
          </div>
          <div
            className="user-hover"
            onMouseEnter={OpenDialogBox}
            onMouseLeave={CloseDialogBox}
          >
            <div className="user-account">
              {/* <img src={User} alt="User" /> */}
              <p>
                <i className="fa-solid fa-user"></i>
              </p>
              <span>
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </div>
            <div className={`${accountHover ? "user-show" : "user-show hide"}`}>
              {/* {accountHover && <AccountHover />} */}
              <AccountHover />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
