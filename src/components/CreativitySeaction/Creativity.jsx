import React from "react";
import "./creativity.scss";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FlipCameraAndroidOutlinedIcon from "@mui/icons-material/FlipCameraAndroidOutlined";
import CreativityImg from "./../../assets/resources.webp";

const Creativity = () => {
  const bottomIconStyle = {
    padding: "10px",
    width: "45px",
    height: "45px",
    borderRadius: "5px",
    backgroundColor: "#d0e8fd",
    color:"#469af5",
    cursor: "pointer",
  };
  return (
    <div className="creativity-section">
      <h2>
        The smartest choice for <span>creatives like you</span>
      </h2>
      <p>
        Whether you’re looking for designs or photographs, you'll find the
        perfect asset on Freepik.
      </p>
      <div className="creativity-container">
        <div className="creativity-left">
          <div className="d-flex">
            <StarBorderOutlinedIcon style={bottomIconStyle}/>
            <div className="text">
              <h3>High-quality stock content</h3>
              <p>
                Download scroll-stopping images of the best quality to make your
                projects look professional.
              </p>
            </div>
          </div>

          <div className="d-flex">
            <ThumbUpOutlinedIcon style={bottomIconStyle} />
            <div className="text">
              <h3>Ready-to-use assets</h3>
              <p>
                Access thousands of images and designs ready-to-publish and get
                your project ready double quick.
              </p>
            </div>
          </div>

          <div className="d-flex">
            <SearchOutlinedIcon style={bottomIconStyle}/>
            <div className="text">
              <h3>Guaranteed search results</h3>
              <p>
                There’s an image and style for every project, whatever your
                needs are.
              </p>
            </div>
          </div>

          <div className="d-flex">
            <FlipCameraAndroidOutlinedIcon style={bottomIconStyle} />
            <div className="text">
              <h3>Fresh content everyday</h3>
              <p>
                Our library is updated on a daily basis so you can find the
                newest and trendiest photos and designs.
              </p>
            </div>
          </div>
        </div>
        <div className="creativity-right">
          <img src={CreativityImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Creativity;
