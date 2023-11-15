import React, { useState, useEffect } from "react";

import ExperiencedBlock from "../molecules/experienced-block";
import MobileExperiencedBlock from "../molecules/mobile-experienced-block";
import Joinblock from "../molecules/join-block";
import { MOBILE_BREAKPOINT } from "../../constans";

function Experienced() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="experienced-positioner" id="adopter">
      <div className="experienced-block">
        {width <= MOBILE_BREAKPOINT ? (
          <MobileExperiencedBlock />
        ) : (
          <ExperiencedBlock />
        )}
      </div>
      <div className="experienced-join">
        <Joinblock />
      </div>
    </div>
  );
}

export default Experienced;
