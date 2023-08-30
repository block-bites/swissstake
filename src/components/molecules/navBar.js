import React from "react";

import Primarybtn from "../atoms/primary-btn";

import stakeLogo from "../../assets/Logo.svg";

function Navbar() {
  return (
    <div className="navbar-positioner">
      <div className="navbar">
      <img className="navbar__logo" src={stakeLogo} alt="SwissStake Logo" />
      <Primarybtn />
    </div>
    </div>
    
    
  );
}

export default Navbar;
