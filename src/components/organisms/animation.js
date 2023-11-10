import React from "react";
import First from "../../assets/First-animation.png";

function ImageScroller() {
  return (
    <div className="outer-container">
      <img src={First} alt="image" className="image" />
    </div>
  );
}

export default ImageScroller;
