import React from "react";
import useIsMobile from "../../hooks/useIsMobile";

import ExperiencedBlock from "../molecules/experienced-block";
import MobileExperiencedBlock from "../molecules/mobile-experienced-block";
import Joinblock from "../molecules/join-block";

function Experienced() {
  const isMobile = useIsMobile();

  return (
    <div className="experienced-positioner" id="adopter">
      <div className="experienced-block">
        {isMobile ? <MobileExperiencedBlock /> : <ExperiencedBlock />}
      </div>
      <div className="experienced-join">
        <Joinblock />
      </div>
    </div>
  );
}

export default Experienced;
