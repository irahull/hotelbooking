import React from "react";
import "./postproperty.scss";
import PropertyLeft from "./../../assets/d_hp_ppf_xl.webp";

const PostProperty = () => {
  return (
    <div className="post-property">
      <p>ARE YOU AN OWNER?</p>
      <h2 className="heading">Sell or Rent your property faster with 99acres</h2>
      <div className="container">
        <div className="left">
          <img src={PropertyLeft} alt="property left img" />
        </div>
        <div className="right">
            <span>POST YOUR PROPERTY</span>
            <h2>Register to post your property for <span>FREE</span></h2>
            <p>Sell or rent your residential / commercial property</p>
            <div className="p-btn">
                <button>Post your property for FREE</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PostProperty;
