import React from "react";
import useIsMobile from "../../hooks/useIsMobile";

function ImageScroller() {
  const isMobile = useIsMobile();

  return (
    <div className="outer-container" id="about">
      <div className="animation">
        <h1> animation </h1>
      </div>
      {/* {isMobile ? (
        <img src={MobileAnimation} alt="animation" className="image"></img>
      ) : (
        <img src={Animation} alt="animation" className="image"></img>
      )} */}
    </div>
  );
}

export default ImageScroller;
