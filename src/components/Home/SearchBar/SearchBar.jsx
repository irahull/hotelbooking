import React, { useState } from "react";
import "./searchbar.scss";
import Calendar from "react-calendar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const SearchBar = () => {
  const [date, setDate] = useState(new Date());
  const [calenderShowHide, setCalenderShowHide] = useState(false);

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
  console.log(date);

  return (
    <div className="search-section">
      <div className="container">
        <div className="option">
          <select id="cars">
            <option value="residential">Residentail</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>
        <div className="search">
          <SearchOutlinedIcon style={{ color: "gray" }} />
          <input type="text" placeholder="Search Flats and Farms" />
        </div>
        <div className="search-btn">
          <MyLocationOutlinedIcon style={iconStyle} />
          <CalendarMonthOutlinedIcon style={iconStyle} onClick={OpenCalender} />
          <div className="s-btn">
            <button>Search</button>
          </div>
        </div>

        <div
          className={`${
            calenderShowHide ? "calender" : "calender hide-calender"
          }`}
        >
          <Calendar onChange={setDate} value={date}/>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
