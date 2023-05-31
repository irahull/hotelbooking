import React from 'react';
import "./forbuilders.scss";
import BuilderLogo from "../../../utils/d_hp_ppf_xl.png"

const ForBuilders = () => {
  return (
    <div  className='forbuilder-container'>
        <div className="builder-box-one">
            <p>Owner Offerings</p>
            <p>Insights</p>
            <p>Article & News</p>
            <div className="box-one-bottom">
                <p>Contact us toll free on</p>
                <span>+91 8123432344</span>
            </div>
        </div>
        <div className="builder-box-two">
            <p>Owner Offering</p>
            <div className="box-two-text">
                <p>Post Property for Free</p>
                <p>Owner Services</p>
                <p>My99acares</p>
                <p>Views Responses</p>
            </div>
        </div>
        <div className="builder-box-three">
            <img src={BuilderLogo} alt="Builder Image" />
        </div>
    </div>
  )
}

export default ForBuilders