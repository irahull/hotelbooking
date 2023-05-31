import React from 'react';
import "./fortenant.scss";
import tenantLogo from "../../../utils/d_hp_ppf_xl.png"

const ForTenants = () => {
  return (
    <div  className='fortenant-container'>
        <div className="tenant-box-one">
            <p>Owner Offerings</p>
            <p>Insights</p>
            <p>Article & News</p>
            <div className="box-one-bottom">
                <p>Contact us toll free on</p>
                <span>+91 8123432344</span>
            </div>
        </div>
        <div className="tenant-box-two">
            <p>Owner Offering</p>
            <div className="box-two-text">
                <p>Post Property for Free</p>
                <p>Owner Services</p>
                <p>My99acares</p>
                <p>Views Responses</p>
            </div>
        </div>
        <div className="tenant-box-three">
            <img src={tenantLogo} alt="tenant Image" />
        </div>
    </div>
  )
}

export default ForTenants