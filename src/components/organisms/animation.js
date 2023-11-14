import React from "react";

import Animation from "../../assets/Fourth-animation.png";

function ImageScroller() {
  return (
    <div className="outer-container" id="about">
      <img src={Animation} alt="animation" className="image" />
    </div>
  );
}

export default ImageScroller;
