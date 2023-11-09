import React from "react";
import First from "../../assets/First-animation.png";
import Second from "../../assets/Second-animation.png";
import Third from "../../assets/Third-animation.png";
import Fourth from "../../assets/Fourth-animation.png";

function ImageScroller() {
  return (
    <div className="outer-container">
      <img src={First} alt="image" className="image" />
    </div>
  );
}

export default ImageScroller;
