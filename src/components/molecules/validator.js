import React from "react";
import Primarybtn from "../atoms/primary-btn";
import Secondarybtn from "../atoms/secondary-btn";

function Validator() {
  return (
    <div className="validator-positioner">
      <div className="validator">
        <div className="validator__header">
          <div>
            <h1>
              - Your Swiss Validator <br /> on <br /> the Casper Network
            </h1>
          </div>
          <p className="validator__text">
            Start staking with SwissStake and experience the difference that our
            unique <br /> advantages bring. Whether you're new to staking or a
            seasoned pro, we're here to <br /> support you every step of the
            way.
          </p>
        </div>
        <div className="validator__button">
          <Primarybtn />
          <Secondarybtn />
        </div>
      </div>
    </div>
  );
}

export default Validator;
