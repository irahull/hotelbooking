import React, { useState } from "react";
import "./searchbar.scss";
import {
  DatePickerProvider,
  DatePicker,
  useDatePickGetter,
  useDatePickReset,
} from "@bcad1591/react-date-picker";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import KeyboardDoubleArrowUpOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useLocation, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [calenderShowHide, setCalenderShowHide] = useState(false);
  const [menuShowHide, setMenuShowHide] = useState(false);
  const [locationShowHide, setLocationShowHide] = useState(false);
  const [calShowHide, setCalShowHide] = useState(false);
  const [dateOne, setDateOne] = useState();
  const [dateTwo, setDateTwo] = useState();

  const location = useLocation();
  const navigate = useNavigate();

  const GetDate = () => {
    const { pickedDates } = useDatePickGetter();
    // const resetFunc = useDatePickReset();

    const saveDate = () => {
      setDateOne(pickedDates.firstPickedDate?.toLocaleDateString());
      setDateTwo(pickedDates.secondPickedDate?.toLocaleDateString());
      setCalenderShowHide(false);
    };

    return (
      <div className="date-container">
        <DatePicker disablePreviousDays />
        {/* <button type="button" onClick={resetFunc}>
          Clear
        </button> */}
        <button type="button" onClick={saveDate}>
          Save
        </button>
      </div>
    );
  };

  const iconStyle = {
    padding: "9px",
    width: "40px",
    height: "40px",
    borderRadius: "999px",
    backgroundColor: "#f0f9ff",
    cursor: "pointer",
  };


  return (
    <div
      className={`${
        location.pathname === "/"
          ? "search-section"
          : "search-section search-extra-style"
      }`}
    >
      <div className="container">
        <div className="option" onClick={() => setMenuShowHide(!menuShowHide)}>
          <p>Category</p>
          <KeyboardArrowDownOutlinedIcon />
        </div>

        <div className="center">
          <div className="location">
            <MyLocationOutlinedIcon
              style={iconStyle}
              onMouseEnter={()=>setLocationShowHide(!locationShowHide)}
              onMouseLeave={()=>setLocationShowHide(!locationShowHide)}
            />
            <p><input type="text" placeholder="Chhatarpur New Delhi" /></p>
            <div
              className={`${
                locationShowHide
                  ? "location-tooltip"
                  : "location-tooltip hide-tooltip"
              }`}
            >
              <KeyboardDoubleArrowUpOutlinedIcon />
              <p>
                Search : <span> Near Me</span>
              </p>
            </div>
          </div>

          <div className="cal">
            <CalendarMonthOutlinedIcon
              style={iconStyle}
              onClick={() => setCalenderShowHide(!calenderShowHide)}
              onMouseEnter={()=> setCalShowHide(true)}
              onMouseLeave={()=> setCalShowHide(false)}
            />
            <p className="date-time">
              From
              <span onClick={() => setCalenderShowHide(!calenderShowHide)}>
                {dateOne}
              </span>
              - To
              <span onClick={() => setCalenderShowHide(!calenderShowHide)}>
                {dateTwo}
              </span>
            </p>
            <div
              className={`${
                calShowHide ? "cal-tooltip" : "cal-tooltip hide-tooltip"
              }`}
            >
              <KeyboardDoubleArrowUpOutlinedIcon />
              <p>
                Open <span> Calender</span>
              </p>
            </div>
          </div>
        </div>
        <div className="search-btn">
          <div className="s-btn">
            <button onClick={() => navigate("/search")}>Search</button>
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
              <input type="checkbox" value="" />
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
