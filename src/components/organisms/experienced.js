import React, { useState, useEffect } from 'react';

import ExperiencedBlock from "../molecules/experienced-block";
import MobileExperiencedBlock from "../molecules/mobile-experienced-block";
import Joinblock from "../molecules/join-block";

function Experienced() {
  const [Width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let ExperiencedSize;
  if (Width <= 480) {
    ExperiencedSize = MobileExperiencedBlock;
  } else if (Width > 480 && Width <= 768) {
    ExperiencedSize = MobileExperiencedBlock; 
  } else if (Width > 768 && Width <= 1200) {
    ExperiencedSize = ExperiencedBlock; 
  } else {
    ExperiencedSize = ExperiencedBlock;
  }

  return (
    <div className="experienced-positioner" id="adopter">
      <div className="experienced-block">
        <ExperiencedSize />
      </div>
      <div className="experienced-join">
        <Joinblock />
      </div>
    </div>
  );
}

export default Experienced;
