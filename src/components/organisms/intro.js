import React from "react";
import Validator from "../molecules/validator";
import Whychoose from "../molecules/why-choose";

function Intro() {
  return (
    <div className="page" id="top">
      <div className="page__container">
        <div className="page__content">
          <Validator />
        </div>
      </div>

      <div className="page__block">
        <Whychoose />
      </div>
    </div>
  );
}

export default Intro;
