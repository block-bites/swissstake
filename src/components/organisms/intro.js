import React from "react";
import useIsMobile from "../../hooks/useIsMobile";


import Validator from "../molecules/validator";
import Whychoose from "../molecules/why-choose";
import Animation from "../molecules/animation";
import Mobileanimation from "../molecules/mobile-animation";

function Intro() {
  const isMobile = useIsMobile();
  return (
    <div className="intro-page" id="top">
      <div className="intro-page__container">
        <div className="intro-page__content">
          <Validator />
        </div>

        <div className="intro-page__block">
          <Whychoose />
        </div>

        <div className="intro-page__animation" id="about">
          {isMobile ? <Mobileanimation /> : <Animation />}
        </div>
      </div>
    </div>
  );
}

export default Intro;
