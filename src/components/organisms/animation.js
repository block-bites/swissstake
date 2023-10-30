import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

import First from "../../assets/First-animation.png";
import Second from "../../assets/Second-animation.png";
import Third from "../../assets/Third-animation.png";
import Fourth from "../../assets/Fourth-animation.png";

function ParallaxImages() {
  const disableBodyScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableBodyScroll = () => {
    document.body.style.overflow = "auto";
  };

  return (
    <ParallaxProvider>
      <div className="parallax-container" id="about">
        <div
          className="parallax"
          onMouseEnter={disableBodyScroll}
          onMouseLeave={enableBodyScroll}
        >
          <Parallax y={[-25, 25]}>
            <img src={First} alt="" className="parallax-image" />
          </Parallax>
          <Parallax x={[0, 50]} y={[-25, 25]}>
            <img src={Second} alt="" className="parallax-image" />
          </Parallax>
          <Parallax y={[-50, 50]}>
            <img src={Third} alt="" className="parallax-image" />
          </Parallax>
          <Parallax x={[0, 50]} y={[-50, 50]}>
            <img src={Fourth} alt="" className="parallax-image" />
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default ParallaxImages;
