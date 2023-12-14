import React from "react";

import Primarybtn from "../atoms/primary-btn";

function Validator() {
  return (
    <div className="validator-positioner">
      <div className="validator">
        <div>
          <h1 className="validator__title">SwissStake</h1>
        </div>
        <div>
          <h2 className="validator__subtitle">
            Your Swiss Validator on the Casper Network
          </h2>
        </div>

        <div className="validator__text">
          <p className="validator__text">
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
