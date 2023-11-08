import React from "react";
import Primarybtn from "../atoms/primary-btn";

function Validator() {
  return (
    <div className="validator-positioner">
      <div className="validator">
        <h1 className="validator__title">
          <span>SwissStake</span>
          - Your Swiss Validator <br /> on <br /> the Casper Network
        </h1>

        {/* <div className="validator__mobile">
          <h1 className="validator__mobile">
            <span className="validator__mobile--blue">SwissStake</span> Your Swiss Validator <br /> on{" "}
            <br /> the Casper Network
          </h1>
        </div> */}

        {/* <div className="validator__desktopSubtitle">
          <p className="validator__subtitle">
            Start staking with SwissStake and experience the difference that our
            unique <br /> advantages bring. Whether you're new to staking or a
            seasoned pro, we're here to <br /> support you every step of the
            way.
          </p>
        </div> */}

        {/* <div className="validator__mobile">
          <p className="validator__mobile">
            Start staking with SwissStake and
            <br /> experience the difference that our
            <br />
            unique advantages bring. Whether
            <br /> you're new to staking or a<br />
            seasoned pro, we're here to <br /> support you every step of the
            way.
          </p>
        </div> */}

        <div className="validator__button">
          <Primarybtn />
        </div>
      </div>
    </div>
  );
}

export default Validator;
