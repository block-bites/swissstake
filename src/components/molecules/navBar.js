import React from "react";

import Primarybtn from "../atoms/primary-btn";

import stakeLogo from "../../assets/Logo.svg";

function Navbar() {
  return (
    <div className="navBar">
      <img className="swisslogo" src={stakeLogo} alt="SwissStake Logo" />
      <Primarybtn />
    </div>
  );
}

export default Navbar;
