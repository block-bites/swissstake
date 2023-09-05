import React from "react";

import ExperiencedBlock from "../molecules/experienced-block";

function Experienced() {
  return (
    <div className="experienced-positioner">
      <div className="experienced">
        <h2 className="experienced__title">Experienced Casper Adopter</h2>
        <p className="experienced__subtitle">
          Managed by an individual deeply involved with the Casper <br />
          ecosystem, SwissStake brings unparalleled expertise to the table:
        </p>
        <div className="experienced__block">
          <ExperiencedBlock />
        </div>
      </div>
    </div>
  );
}

export default Experienced;
