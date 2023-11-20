import React from "react";

import Primarybtn from "../atoms/primary-btn";

function Validator() {
  return (
    <div className="validator-positioner">
      <div className="validator">
        <h1 className="validator__desktop-title">
          <span className="validator__desktop-title--blue">SwissStake</span> -
          Your Swiss Validator on <br /> the Casper Network
        </h1>

        <div className="validator__subtitle">
          <p className="validator__subtitle">
            Start staking with SwissStake and experience the difference that our
            unique advantages bring. Whether you're new to staking or a seasoned
            pro, we're here to support you every step of the way.
          </p>
        </div>

        <div className="validator__button">
          <Primarybtn />
        </div>
      </div>
    </div>
  );
}

export default Validator;
