import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import First from "../../assets/Animation-first.svg";
import Second from "../../assets/Animation-second.svg";
import Third from "../../assets/Animation-third.svg";
import Fourth from "../../assets/Animation-fourth.svg";

const ImageAnimation = () => {
  return (
    <ParallaxProvider>
      <div className="animation-container">
        <Parallax className="parallax-image" x={[-20, 20]}>
          <img src={First} alt="Image 1" />
        </Parallax>
        <Parallax className="parallax-image" x={[-40, 40]}>
          <img src={Second} alt="Image 2" />
        </Parallax>
        <Parallax className="parallax-image" x={[-60, 60]}>
          <img src={Third} alt="Image 3" />
        </Parallax>
        <Parallax className="parallax-image" x={[-80, 80]}>
          <img src={Fourth} alt="Image 4" />
        </Parallax>
      </div>
    </ParallaxProvider>
  );
};

export default ImageAnimation;
