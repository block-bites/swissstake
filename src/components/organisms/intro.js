import React from "react";
import Navbar from "../molecules/navBar";
import Validator from "../molecules/validator";
import Whychoose from "../molecules/whychoose";
import Business from "../molecules/business";

function Intro() {
  return (
    <div className="page">
      <Navbar />
      <Validator />
      <Whychoose />
      <Business />
    </div>
  );
}

export default Intro;
