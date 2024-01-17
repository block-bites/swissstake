import React from "react";

import casperlogo from "../../assets/caspereco-logo.svg";

function Whychoose() {
  return (
    <div className="why-choose-positioner">
      <div className="why-choose">
        <div className="why-choose__block">
          <div className="why-choose__text">
            <h2 className="why-choose__title">Why Choose SwissStake?</h2>
            <p className="why-choose__subtitle">
              SwissStake isn't just another validator; we redefine excellence
              with distinct advantages that set us apart. Our commitment to
              independence, quality, and experience positions us as the ultimate
              choice for staking on the Casper Network.
            </p>
          </div>
          <div className="why-choose__logo-container">
            <div className="why-choose__casperlogo">
              <img
                className="why-chose-logo-size"
                src={casperlogo}
                alt="casper ecosystem img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whychoose;
