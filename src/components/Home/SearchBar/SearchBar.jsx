import React, { useState } from "react";
import "./searchbar.scss";
import { DatePickerProvider } from "@bcad1591/react-date-picker";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import GetDate from "./GetDate";

const SearchBar = () => {
  const [calenderShowHide, setCalenderShowHide] = useState(false);
  const [menuShowHide, setMenuShowHide] = useState(false);
  const [locationShowHide, setLocationShowHide] = useState(false);
  const [calShowHide, setCalShowHide] = useState(false);
  const [timeShowHide, setTimeShowHide] = useState(false);

  const iconStyle = {
    padding: "9px",
    width: "40px",
    height: "40px",
    borderRadius: "999px",
    backgroundColor: "#f0f9ff",
    cursor: "pointer",
  };

  const OpenCalender = (e) => {
    setCalenderShowHide(!calenderShowHide);
  };

  const OpenMenuOption = () => {
    setMenuShowHide(!menuShowHide);
  };

  const showLocation = () => {
    setLocationShowHide(!locationShowHide);
  };
  const hideLocation = () => {
    setLocationShowHide(!locationShowHide);
  };
  const showCal = () => {
    setCalShowHide(true);
  };
  const hideCal = () => {
    setCalShowHide(false);
  };
  const showTime = () => {
    setTimeShowHide(true);
  };
  const hideTime = () => {
    setTimeShowHide(false);
  };

  return (
    <div className="search-section">
      <div className="container">
        <div className="option" onClick={OpenMenuOption}>
          <p>Category</p>
          <KeyboardArrowDownOutlinedIcon />
        </div>

        <div className="center">
          <div className="location">
            <MyLocationOutlinedIcon
              style={iconStyle}
              onMouseEnter={showLocation}
              onMouseLeave={hideLocation}
            />
            <p>Chhatarpur New Delhi</p>
            <div
              className={`${
                locationShowHide
                  ? "location-tooltip"
                  : "location-tooltip hide-tooltip"
              }`}
            >
              <p>
                Search : <span> Near Me</span>
              </p>
            </div>
          </div>

          <div className="cal">
            <CalendarMonthOutlinedIcon
              style={iconStyle}
              onClick={OpenCalender}
              onMouseEnter={showCal}
              onMouseLeave={hideCal}
            />
            <p>06-05-2023</p>
            <div
              className={`${
                calShowHide ? "cal-tooltip" : "cal-tooltip hide-tooltip"
              }`}
            >
              <p>
                Open <span> Calender</span>
              </p>
            </div>
          </div>
          <div className="time">
            <AccessTimeOutlinedIcon
              style={iconStyle}
              onMouseEnter={showTime}
              onMouseLeave={hideTime}
            />
            <p>12:02:16 PM</p>
            <div
              className={`${
                timeShowHide ? "time-tooltip" : "time-tooltip hide-tooltip"
              }`}
            >
              <p>
                Select <span> Time</span>
              </p>
            </div>
          </div>
        </div>
        <div className="search-btn">
          <div className="s-btn">
            <button>Search</button>
          </div>
        </div>

        <div
          className={`${
            calenderShowHide ? "calender" : "calender hide-calender"
          }`}
        >
          {/* <Calendar onChange={setDate} value={date} /> */}
          <DatePickerProvider style={{ padding: "10px !important" }}>
            <GetDate />
          </DatePickerProvider>
        </div>
      </div>
      <div
        className={`${
          menuShowHide ? "option-menu" : "option-menu option-menu-hide"
        } `}
      >
        <div className="menu-container">
          <div className="menu-one">
            <div className="menu-items">
              <input type="checkbox" />
              <span>Flat/Apartment</span>
            </div>

            <div className="menu-items">
              <input type="checkbox" />
              <span>Residential Land</span>
            </div>

            <div className="menu-items">
              <input type="checkbox" />
              <span>Service Apartment</span>
            </div>
          </div>

          <div className="menu-two">
            <div className="menu-items">
              <input type="checkbox" />
              <span>Independent/Building Floor</span>
            </div>

            <div className="menu-items">
              <input type="checkbox" />
              <span>1 RK/Studio Apartment</span>
            </div>

            <div className="menu-items">
              <input type="checkbox" />
              <span>Other</span>
            </div>
          </div>

          <div className="menu-three">
            <div className="menu-items">
              <input type="checkbox" />
              <span>Independent House/Villa</span>
            </div>

            <div className="menu-items">
              <input type="checkbox" />
              <span>Farm House</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
