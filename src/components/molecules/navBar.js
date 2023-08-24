import React from "react";

import Primarybtn from "../atoms/primary-btn";

import stakeLogo from "../../assets/Logo.svg";

function Navbar() {
  return (
    <div>
      <img src={stakeLogo} alt="SwissStake Logo" />
      <Primarybtn />
    </div>
  );
}

export default Navbar;
