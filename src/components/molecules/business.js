import React from "react";
import Frame4 from "../../assets/LogoCompany.svg";

function Business() {
  return (
    <div className="business-positioner">
      <div className="business">
        <div className="business__text">
          <p className="business__text--subtitle">Businesses already run their site on SwissStake</p>
        </div>
        <div className="business__logoscontainer">
          <img className="business__logo"  src={Frame4} alt="Businesses on SwissStake" />
          <img className="business__logo" src={Frame4} alt="Businesses on SwissStake" />
          <img className="business__logo" src={Frame4} alt="Businesses on SwissStake" />
          <img className="business__logo" src={Frame4} alt="Businesses on SwissStake" />
          <img className="business__logo" src={Frame4} alt="Businesses on SwissStake" />
          <img className="business__logo" src={Frame4} alt="Businesses on SwissStake" />
          <img className="business__logo" src={Frame4} alt="Businesses on SwissStake" />
          <img className="business__logo" src={Frame4} alt="Businesses on SwissStake" />
        </div>
      </div>
    </div>
  );
}

export default Business;
