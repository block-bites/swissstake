import React from "react";
import Primarybtn from "../atoms/primary-btn";
import Secondarybtn from "../atoms/secondary-btn";

function Validator() {
  return (
    <div className="validator">
      <body className="validatorText">
        <header>
          <h1>
            - Your Swiss Validator on <br /> the Casper Network
          </h1>
        </header>
        <p className="validatorP">
          Start staking with SwissStake and experience the difference that our
          unique <br /> advantages bring. Whether you're new to staking or a
          seasoned pro, we're here to <br /> support you every step of the way.
        </p>
      </body>
      <div className="validatorButton">
        <Primarybtn />
        <Secondarybtn />
      </div>
    </div>
  );
}

export default Validator;
