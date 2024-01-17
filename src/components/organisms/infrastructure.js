import React from "react";

import InfrastructureBlock from "../molecules/infrastructure-block";

import Swiss from "../../assets/swiss-flag.svg";
import Lock from "../../assets/lock.svg";
import Star from "../../assets/star.svg";

function Infrastructure() {
  return (
    <div className="infrastructure-positioner" id="infractructure">
      <div className="infrastructure">
        <div className="infrastructure__header">
          <h2 className="infrastructure__title">
            Discover the Swiss Infrastructure
          </h2>
          <p className="infrastructure__subtitle">
            Our server is proudly hosted in Basel, Switzerland, leveraging the
            robust Swiss infrastructure. In addition, we're running backup nodes
            in the cloud environment ready for scaling up and adjusting to the
            market conditions.
          </p>
        </div>
        <div className="infrastructure__blocks-in-row">
          <InfrastructureBlock
            title={"Stability"}
            text={
              "Benefit from Switzerland's renowned political and economic stability, ensuring a secure staking environment."
            }
            image={Swiss}
          />

          <InfrastructureBlock
            title={"Privacy"}
            text="Embrace stringent privacy laws that Switzerland is globally acclaimed for, safeguarding your assets."
            image={Lock}
          />
          <InfrastructureBlock
            title={"Quality"}
            text="Immerse yourself in top-tier service quality, backed by Swiss reliability for a seamless staking experience."
            image={Star}
          />
        </div>
      </div>
    </div>
  );
}

export default Infrastructure;
