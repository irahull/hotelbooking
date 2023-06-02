import React, { useState } from "react";
import "./searchbar.scss";
import {
  DatePicker,
  DatePickerProvider,
  useDatePickGetter,
  useDatePickReset,
} from "@bcad1591/react-date-picker";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';


const GetDate = () =>{
  const { pickedDates } = useDatePickGetter();
  const resetFunc = useDatePickReset();
  return (
    <div className="date-container">
    <DatePicker disablePreviousDays />
    <div className="start-date">{pickedDates.firstPickedDate?.toLocaleString()}</div>
    <div className="end-date">{pickedDates.secondPickedDate?.toLocaleString()}</div>
    <button type="button" onClick={resetFunc}>
      Reset
    </button>
  </div>
  )
}


const SearchBar = () => {
  const [calenderShowHide, setCalenderShowHide] = useState(false);
  const [menuShowHide, setMenuShowHide] = useState(false);

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



  return (
    <div className="search-section">
      <div className="container">
        <div className="option" onClick={OpenMenuOption}>
          <p>Category</p>
          <KeyboardArrowDownOutlinedIcon />
        </div>
        <div className="search">
          {/* <SearchOutlinedIcon style={{ color: "gray" }} /> */}
          {/* <input type="text" placeholder="Search Flats and Farms" /> */}
          <MyLocationOutlinedIcon style={iconStyle} />
          <div className="location">Chhatarpur New Delhi</div>
          <CalendarMonthOutlinedIcon style={iconStyle} onClick={OpenCalender} />
          <p>06-05-2023</p>
          <AccessTimeOutlinedIcon  style={iconStyle} />
          <p>12:02:16 PM</p>
        
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
          <DatePickerProvider style = {{padding:"10px !important"}}>
            <GetDate/>
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
