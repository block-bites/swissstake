import React from "react";

import Frame2 from "../../assets/Frame 2.svg";

function Whychoose() {
  return (
    <div className="why-choose-positioner">
      <div className="why-choose">
        <div className="why-choose__block">
          <div className="why-choose__text">
            <h2 className="why-choose__text--title">Why Choose SwissStake?</h2>
            <p className="why-choose__text--subtitle">
              SwissStake is not just another validator; we offer unique
              advantages that set us apart <br /> from the crowd. Our commitment
              to independence, quality, and experience makes us the <br /> ideal
              choice for staking on the Casper Network.
            </p>
          </div>
          <div className="why-choose__casperlogo">
            <img className="why-chose-logo-size" src={Frame2} alt="casper ecosystem img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whychoose;
