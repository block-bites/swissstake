import React from "react";

import Join from "../molecules/join";
import ExperiencedBlock from "../molecules/experienced-block";

function Experienced() {
  return (
    <div className="experienced-positioner">
      <div className="experienced-block">
        <div className="experienced">
          <h2 className="experienced__title">Experienced Casper Adopter</h2>
          <p className="experienced__text">
            Managed by an individual deeply involved with the Casper <br />{" "}
            ecosystem, SwissStake brings unparalleled expertise to the table:
          </p>
        </div>
        <div className="block-positioner">
          <ExperiencedBlock />
        </div>
        <div className="join-positioner">
          <Join />
        </div>
      </div>
    </div>
  );
}

export default Experienced;
