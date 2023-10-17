import React from "react";
import Validator from "../molecules/validator";
import Whychoose from "../molecules/why-choose";

function Intro() {
  return (
    <div className="page">
      <div className="page__container">
        <div className="page__content">
          <Validator />
          <Whychoose />
        </div>
      </div>
    </div>
  );
}

export default Intro;
