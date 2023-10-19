import React from "react";

import ExperiencedBlock from "../molecules/experienced-block";
import Joinblock from "../molecules/join-block";

function Experienced() {
  return (
    <div className="experienced-positioner">
      <div className="experienced-block">
        <ExperiencedBlock />
      </div>
      <div className="experienced-join">
        <Joinblock />
      </div>
    </div>
  );
}

export default Experienced;
