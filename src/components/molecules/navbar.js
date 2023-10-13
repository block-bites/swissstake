import React from "react";

import Navbutton from "../atoms/nav-btn";

import stakeLogo from "../../assets/swissStake-logo.svg";

function Navbar() {
  return (
    <div className="navbar-positioner">
      <div className="navbar">
        <img className="navbar__logo" src={stakeLogo} alt="SwissStake-Logo" />
        <div className="navbar__buttons">
          <Navbutton text={"About"} />
          <Navbutton text={"Infrastructure"} />
          <Navbutton text={"Adopter"} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
