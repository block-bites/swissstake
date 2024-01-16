import React from "react";
import Lottie from "lottie-react";
import desktopAnimation from "../../assets/animation-desk.json";

const Animation = () => {
  return (
    <div className="outer-container" id="about">
      <div className="animation">
        <Lottie animationData={desktopAnimation} />
      </div>
    </div>
  );
};

export default Animation;
