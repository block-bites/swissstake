import React from "react";
import stakeLogo from "/static/Logo.svg";
import Primarybtn from "../atoms/primary-btn";

function Navbar() {
  return (
    <div>
      <img src={stakeLogo} alt="SwissStake Logo" />
      <Primarybtn />
    </div>
  );
}

export default Navbar;
