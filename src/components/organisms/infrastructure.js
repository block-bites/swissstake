import React from "react";

import InfrastructureBlock from "../molecules/infrastructure-block";

import Swiss from "../../assets/Swiss-flag.svg";
import Lock from "../../assets/Lock.svg";
import Star from "../../assets/Star.svg";

function Infrastructure() {
  return (
    <div className="infrastructure-positioner" id="infractructure">
      <div className="infrastructure">
        <div className="infrastructure__header">
          <h2 className="infrastructure__title">Swiss Infrastructure</h2>
          <p className="infrastructure__subtitle">
            Our server is proudly hosted in Basel, Switzerland, leveraging the
            robust Swiss infrastructure.
          </p>
        </div>
        <div className="infrastructure__blocks-in-row">
          <InfrastructureBlock
            title={"Stability"}
            text={
              "Benefit from Switzerland's renowned<br />  political and economic stability."
            }
            image={Swiss}
          />

          <InfrastructureBlock
            title={"Privacy"}
            text="Enjoy the stringent privacy laws that <br /> Switzerland is famous for."
            image={Lock}
          />
          <InfrastructureBlock
            title={"Quality"}
            text="Experience top-tier service quality <br /> backed by Swiss precision and reliability."
            image={Star}
          />
        </div>
      </div>
    </div>
  );
}

export default Infrastructure;
