import React from "react";

import ExperiencedBlock from "../molecules/experienced-block";
import Joinblock from "../molecules/join-block";

function Experienced() {
  return (
    <div className="experienced-positioner">
      <div className="experienced__block">
        <ExperiencedBlock />
        <Joinblock/>
      </div>
    </div>
  );
}

export default Experienced;
