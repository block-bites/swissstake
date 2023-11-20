import React from "react";
import useIsMobile from "../../hooks/useIsMobile";

import Animation from "../../assets/Animation.png";
import MobileAnimation from "../../assets/Mobile-Animation.png";

function ImageScroller() {
  const isMobile = useIsMobile();

  return (
    <div className="outer-container" id="about">
      {isMobile ? (
        <img src={MobileAnimation} alt="animation" className="image"></img>
      ) : (
        <img src={Animation} alt="animation" className="image"></img>
      )}
    </div>
  );
}

export default ImageScroller;
