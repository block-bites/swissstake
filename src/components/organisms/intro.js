import React from "react";

import Validator from "../molecules/validator";
import Whychoose from "../molecules/why-choose";

import background from "../../assets/Intro-background.svg";

function Intro() {
  return (
    <div className="page">
      <div className="page__content">
        <Validator />
        <Whychoose />
      </div>
    </div>
  );
}

export default Intro;
