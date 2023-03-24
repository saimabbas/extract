import React, { useState, useContext } from "react";

import "../styles/views/earn.css";
import DepositsCardImg from "../assets/img/deposits-card-img.png";

const DepositsCard = () => {
  return (
    <div className="deposits-card">
      <div className="deposits-card-bg"></div>
      <div className="deposits-card-content">
        <img src={DepositsCardImg} alt="DepositsCardImg" />
        <h5>Critters Cult</h5>
        <h6>CRITCULT-SOL</h6>
        <div className="dc-text-box">
          <p>Deposited</p>
          <span>24.40 ₳</span>
        </div>
        <div className="dc-text-box">
          <p>Pending fees</p>
          <span>0 ₳</span>
        </div>
        <div className="dc-btn-grid">
          <button className="fill-grd-btn">
            <i>Withdraw</i> <span className="grd-text">Withdraw</span>
          </button>
          <button className="outline-grd-btn">
            <div>
              <span className="grd-text">New Deposit</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepositsCard;
