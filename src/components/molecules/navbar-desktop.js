import React from "react";
import { Link } from "react-scroll";

import Navbutton from "../atoms/nav-btn";

import stakeLogo from "../../assets/swissStake-logo.svg";

function DesktopNavbar() {
  return (
    <div className="navbar-positioner">
      <div className="navbar">
        <Link to="top" spy smooth duration={500} offset={-100}>
          <img className="navbar__logo" src={stakeLogo} alt="SwissStake-Logo" />
        </Link>

        <div className="navbar__buttons">
          <Link to="about" spy smooth duration={500} offset={-85}>
            <Navbutton text={"About"} />
          </Link>

          <Link to="infractructure" spy smooth duration={500} offset={-85}>
            <Navbutton text={"Infrastructure"} />
          </Link>

          <Link to="adopter" spy smooth duration={500} offset={-85}>
            <Navbutton text={"Adopter"} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DesktopNavbar;
