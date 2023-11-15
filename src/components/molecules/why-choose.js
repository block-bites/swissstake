import React from "react";

import Frame2 from "../../assets/casper-logo.svg";

function Whychoose() {
  return (
    <div className="why-choose-positioner">
      <div className="why-choose">
        <div className="why-choose__block">
          <div className="why-choose__text">
            <h2 className="why-choose__title">Why Choose SwissStake?</h2>
            <p className="why-choose__subtitle">
              SwissStake is not just another validator; we offer unique
              advantages that set us apart from the crowd. Our commitment to
              independence, quality, and experience makes us the ideal choice
              for staking on the Casper Network.
            </p>

            <p className="why-choose__mobile-subtitle">
              SwissStake is not just
              <br /> another validator; we offer
              <br /> unique advantages that
              <br /> set us apart from the
              <br /> crowd. Our commitment to
              <br />
              independence, quality,
              <br /> and experience makes us
              <br /> the ideal choice for
              <br /> staking on the Casper
              <br /> Network.
            </p>
          </div>
          <div className="why-choose__logo-container">
            <div className="why-choose__casperlogo">
              <img
                className="why-chose-logo-size"
                src={Frame2}
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
