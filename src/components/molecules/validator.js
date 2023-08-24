import React from "react";
import Primarybtn from "../atoms/primary-btn";
import Secondarybtn from "../atoms/secondary-btn";


function Validator() {
  return (
    <div className="validatorText">
      <h1>SwissStake - Your Swiss Validator On The Casper Network</h1>
      <p>
        Start staking with SwissStake and experience the difference that our
        unique advantages bring. Whether you're new to staking or a seasoned
        pro, we're here to support you every step of the way.
      </p>
      <div>
        <Primarybtn />
        <Secondarybtn />
      </div>
    </div>
  );
}

export default Validator;
