import React from "react";
import Validator from "../molecules/validator";
import Whychoose from "../molecules/why-choose";
import Business from "../molecules/business";

function Intro() {
  return (
    <div className="page">
      <Validator />
      <Whychoose />
      <Business />
    </div>
  );
}

export default Intro;
