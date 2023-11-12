import React from "react";
import First from "../../assets/First-animation.png";

function ImageScroller() {
  return (
    <div className="outer-container" id="about">
      <img src={First} alt="first" className="image" />
    </div>
  );
}

export default ImageScroller;
