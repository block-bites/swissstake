import React from "react";

import InfrastructureBlock from "../molecules/infrastructure-block";

import PrivacyImage from "../../assets/infrastructureMap.svg";
import Lock from "../../assets/Lock.svg";
import Trophy from "../../assets/Trophy.svg";

function Infrastructure() {
  return (
    <div className="infrastructure-positioner"> 
      <div className="infrastructure">
        <div className="infrastructure__header">
          <h2 className="infrastructure__title">Swiss Infrastructure</h2>
          <h4 className="infrastructure__subtitle">
            Our server is proudly hosted in Basel, Switzerland, leveraging the
            robust Swiss infrastructure.
          </h4>
          <p> This location offers:</p>
        </div>
        <InfrastructureBlock
          title={"Stability"}
          text="Benefit from Switzerland's renowned political and economic stability."
          image={PrivacyImage}
        />
        <div className="infrastructure__blocks-in-row">
          <InfrastructureBlock
            title={"Privacy"}
            text="Enjoy the stringent privacy laws that Switzerland is famous for."
            image={Lock}
          />
          <InfrastructureBlock
            title={"Quality"}
            text="Experience top-tier service quality backed by Swiss precision and reliability."
            image={Trophy}
          />
        </div>
      </div>
    </div>
  );
}

export default Infrastructure;
