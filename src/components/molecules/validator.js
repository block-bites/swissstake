import React from "react";

import Primarybtn from "../atoms/primary-btn";

function Validator() {
  return (
    <div className="validator-positioner">
      <div className="validator">
        <div className="validator__content">
          <h1 className="validator__title">SwissStake</h1>

          <h2 className="validator__subtitle">
            Your Swiss Validator on the Casper Network
          </h2>

          <p className="validator__text">
            Unlock the full potential of staking with SwissStake and elevate
            your experience with our unparalleled advantages. Whether you're a
            staking novice or a seasoned pro, we'll guide you at every step!
          </p>

          <div className="validator__button">
            <Primarybtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Validator;
