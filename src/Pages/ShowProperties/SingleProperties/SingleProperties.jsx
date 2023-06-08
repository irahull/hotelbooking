import React, { useMemo, useState } from "react";
import "./singleProperties.scss";
import RoomImg from "./../../../assets/room-one.webp";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import SingleBedOutlinedIcon from "@mui/icons-material/SingleBedOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import SingleOne from "./../../../assets/single-room-one.webp";
import SingleTwo from "./../../../assets/single-room-two.webp";
import SingleThree from "./../../../assets/single-room-three.webp";
import SingleFour from "./../../../assets/single-room-four.webp";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { BedOutlined } from "@mui/icons-material";
import {
  DatePickerProvider,
  DatePicker,
  useDatePickGetter,
  useDatePickReset,
} from "@bcad1591/react-date-picker";

const SingleProperties = () => {
  const date = new Date().toLocaleDateString();
  const [dateOne, setDateOne] = useState(date);
  const [dateTwo, setDateTwo] = useState("6/18/2023");
  const [calShowHide, setCalShowHide] = useState(false);
  const [selectPerson, setSelectPerson] = useState(1);
  const [selectChild, setSelectChild] = useState(0);
  const [selectInfant, setSelectInfant] = useState(0);
  const [selectPet, setSelectPet] = useState(0);
  const [guestToggle, setGuestToggle] = useState(false);
  const [roomPrice] = useState(2500);
  const [cleaningFee] = useState(340);
  // const [TotalPrice] = useState( roomPrice+cleaningFee)

  const GetDate = () => {
    const { pickedDates } = useDatePickGetter();
    // const resetFunc = useDatePickReset();

    const saveDate = () => {
      setDateOne(pickedDates.firstPickedDate?.toLocaleDateString());
      setDateTwo(pickedDates.secondPickedDate?.toLocaleDateString());
      setCalShowHide(false);
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

  const spIconStyle = {
    padding: "9px",
    width: "40px",
    height: "40px",
    borderRadius: "999px",
    backgroundColor: "#f0f9ff",
    cursor: "pointer",
  };

  return (
    <div className="single-property-container">
      <h3>Family Room : Nirvana Homes|Wooden house|Farm stay</h3>
      <span>Pharog, Himachal Pradesh, India</span>
      <div className="single-property">
        <div className="left-section">
          <img src={RoomImg} alt="" />
        </div>
        <div className="right-section">
          <img src={SingleOne} alt="Property Image" />
          <img src={SingleTwo} alt="Property Image" />
          <img src={SingleThree} alt="Property Image" />
          <img src={SingleFour} alt="Property Image" />
        </div>
      </div>
      <div className="extra-details">
        <div className="extra-left">
          <div className="left-heading">
            <h3>Room in a bed and breakfast hosted by Tarana</h3>
            <img
              src="https://a0.muscache.com/im/pictures/user/2c0dc3eb-3671-479b-a3c5-725ede36f6d8.jpg?im_w=240"
              alt=""
            />
          </div>
          <div className="left-tab">
            <div className="tab">
              <BedOutlined />
              <p>2 Beds</p>
            </div>
            <div className="tab">
              <BathtubOutlinedIcon />
              <p>Dedicated bathroom</p>
            </div>
            <div className="tab">
              <HouseOutlinedIcon />
              <p>Awesome Balcony</p>
            </div>
          </div>
          <div className="left-text">
            <div className="text-box">
              <SingleBedOutlinedIcon />
              <div className="text-box-item">
                <h4>Room in a bed and breakfast</h4>
                <p>Your own room in a home, plus access to shared spaces.</p>
              </div>
            </div>
            <div className="text-box">
              <AcUnitOutlinedIcon />
              <div className="text-box-item">
                <h4>Furry friends welcome</h4>
                <p>Bring your pets along for the stay.</p>
              </div>
            </div>
          </div>
          <div className="left-about">
            <h3>About this place</h3>
            <p>
              Nirvana Homes uses a 19th-Century wooden house built using “Kath
              Kuni” Architecture, an indigenous construction technique.
              Providing a panoramic view of the Himalayas, amidst apple orchards
              we're located 80km from Shimla. With 2 king-size beds & seating
              space, this room is for groups that want to stay together without
              giving up on comfort. The room has wooden floors & walls
              complimented with colorful décor. All our rooms have access to the
              lawn, kitchen, living area & our apple orchards
            </p>
          </div>
        </div>

        <div className="extra-right">
          <div className="extra-right-box">
            <div className="right-price">
              <p>
                &#x20B9; 2500 <span>night</span>
              </p>
              <div className="star">
                <StarOutlinedIcon style={{ color: "#0078DB" }} />
                <p>4.87</p>
                <span>171 reviews</span>
              </div>
            </div>
            <div className="right-date">
              <div className="setTime">
                <div className="check-in-out">
                  <CalendarMonthOutlinedIcon
                    style={spIconStyle}
                    onClick={() => setCalShowHide(!calShowHide)}
                  />
                  <p>
                    <span> {dateOne} </span> To <span> {dateTwo}</span>
                  </p>
                </div>
                <div
                  className={`${calShowHide ? "sp-cal" : "sp-cal hide-sp-cal"}`}
                >
                  <DatePickerProvider>
                    <GetDate />
                  </DatePickerProvider>
                </div>
              </div>
              <div className="guests">
                <p>
                  {selectPerson === 1
                    ? selectPerson + " Guest "
                    : selectPerson + " Adults "}
                  {selectChild >= 1 ? selectChild + " Child " : ""}
                  {selectInfant >= 1 ? selectInfant + " Infants" : ""}
                </p>
                <ArrowDropDownOutlinedIcon
                  onClick={() => setGuestToggle(!guestToggle)}
                  style={{ cursor: "pointer" }}
                />
                <div
                  className={`${
                    guestToggle ? "select-guest" : "select-guest hide-guest"
                  }`}
                >
                  <ul className="ul-list-one">
                    <li>
                      Adults <span>Age 13+</span>
                    </li>
                    <div className="inc-desc">
                      <div
                        className="desc"
                        onClick={() =>
                          selectPerson === 0
                            ? setSelectPerson(0)
                            : setSelectPerson(selectPerson - 1)
                        }
                      >
                        <i class="fa-solid fa-minus"></i>
                      </div>
                      <div className="number">{selectPerson}</div>
                      <div
                        className="inc"
                        onClick={() => setSelectPerson(selectPerson + 1)}
                      >
                        <i class="fa-solid fa-plus"></i>
                      </div>
                    </div>
                  </ul>
                  <ul className="ul-list-two">
                    <li>
                      Children <span>Age 2-12</span>
                    </li>
                    <div className="inc-desc">
                      <div
                        className="desc"
                        onClick={() =>
                          selectChild === 0
                            ? setSelectChild(0)
                            : setSelectChild(selectChild - 1)
                        }
                      >
                        <i class="fa-solid fa-minus"></i>
                      </div>
                      <div className="number">{selectChild}</div>
                      <div
                        className="inc"
                        onClick={() => setSelectChild(selectChild + 1)}
                      >
                        <i class="fa-solid fa-plus"></i>
                      </div>
                    </div>
                  </ul>
                  <ul className="ul-list-three">
                    <li>
                      Infants <span>Under 2</span>
                    </li>
                    <div className="inc-desc">
                      <div
                        className="desc"
                        onClick={() =>
                          selectInfant === 0
                            ? setSelectInfant(0)
                            : setSelectInfant(selectInfant - 1)
                        }
                      >
                        <i class="fa-solid fa-minus"></i>
                      </div>
                      <div className="number">{selectInfant}</div>
                      <div
                        className="inc"
                        onClick={() => setSelectInfant(selectInfant + 1)}
                      >
                        <i class="fa-solid fa-plus"></i>
                      </div>
                    </div>
                  </ul>
                  <ul className="ul-list-four">
                    <li>
                      Pets <span></span>
                    </li>
                    <div className="inc-desc">
                      <div
                        className="desc"
                        onClick={() =>
                          selectPet === 0
                            ? setSelectPet(0)
                            : setSelectPet(selectPet - 1)
                        }
                      >
                        <i class="fa-solid fa-minus"></i>
                      </div>
                      <div className="number">{selectPet}</div>
                      <div
                        className="inc"
                        onClick={() => setSelectPet(selectPet + 1)}
                      >
                        <i class="fa-solid fa-plus"></i>
                      </div>
                    </div>
                  </ul>
                  <p className="bottom-para">
                    This place has a maximum of 2 guests, not including infants.
                    If you're bringing more than 2 pets, please let your Host
                    know.
                  </p>
                  <div className="exit">
                    <p onClick={() => setGuestToggle(!guestToggle)}>Close</p>
                  </div>
                </div>
              </div>
              <button className="sp-button">Book Now</button>
              <span className="d-charge">You won't be charge yet</span>
            </div>
            <div className="price-cal">
              <div className="price-one">
                <p>
                  {" "}
                  &#x20B9; {roomPrice} * {selectPerson} night
                </p>
                <p>{roomPrice * selectPerson}</p>
              </div>
              <div className="price-one">
                <p>Cleaning fee</p>
                <p>&#x20B9;{cleaningFee}</p>
              </div>
              <div className="price-total">
                <p>Total Price</p>
                <p>&#x20B9;{roomPrice * selectPerson + cleaningFee}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map">
        <h3>Where you’ll be</h3>
        <p>New Delhi, Delhi, India</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d56053.10572697137!2d77.19123018808592!3d28.590202210298823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1686136473844!5m2!1sen!2sin"
          width="90%"
          height="350"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default SingleProperties;
