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
          <h4 className="infrastructure__subtitle">
            Our server is proudly hosted in Basel, Switzerland, leveraging the
            robust Swiss infrastructure.
          </h4>
        </div>
        <div className="infrastructure__blocks-in-row">
          <InfrastructureBlock
            title={"Stability"}
            text={
              "Benefit from Switzerland's renowned<br />  political and economic stability."
            }
            image={Swiss}
            className="image1"
          />

          <InfrastructureBlock
            title={"Privacy"}
            text="Enjoy the stringent privacy laws <br /> that Switzerland is famous for."
            image={Lock}
            className="image2"
          />
          <InfrastructureBlock
            title={"Quality"}
            text="Experience top-tier service quality <br /> backed by Swiss precision and reliability."
            image={Star}
            className="image3"
          />
        </div>
      </div>
    </div>
  );
}

export default Infrastructure;
