import React, { useState } from "react";
import { Link } from "react-scroll";

import Navbutton from "../atoms/nav-btn";
import SwissLogo from "../../assets/mobile-logo.svg";
import Hamburger from "hamburger-react";
import TelegramIcon from "../../assets/navbar-mobile-icon.svg";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (to) => {
    setIsOpen(false);
  };

  return (
    <div className="mobile-positioner">
      <div className="navbar-mobile">
        <Link
          to="top"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          exact={true}
        >
          <img
            className="navbar-mobile__logo"
            src={SwissLogo}
            alt="SwissStake-Logo"
          />
        </Link>

        <div className="navbar-mobile__hamburger">
          <Hamburger toggled={isOpen} onToggle={setIsOpen} />
        </div>

        {isOpen && (
          <div className="navbar-mobile__menu">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-85}
              exact={true}
              onClick={() => handleClick("about")}
            >
              <Navbutton text={"About"} />
            </Link>
            <Link
              to="infractructure"
              spy={true}
              smooth={true}
              duration={500}
              offset={-85}
              exact={true}
              onClick={() => handleClick("infractructure")}
            >
              <Navbutton text={"Infrastructure"} />
            </Link>
            <Link
              to="adopter"
              spy={true}
              smooth={true}
              duration={500}
              offset={-85}
              exact={true}
              onClick={() => handleClick("adopter")}
            >
              <Navbutton text={"Adopter"} />
            </Link>
            <Link
              to="join"
              spy={true}
              smooth={true}
              duration={500}
              offset={-255}
              exact={true}
              onClick={() => handleClick("join")}
            >
              <Navbutton text={"Join"} />
            </Link>

            <div className="navbar-mobile__menu--line">
              <a
                className="navbar-mobile__menu--telegram"
                href="https://t.me/piotr_dz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={TelegramIcon} alt="Telegram" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MobileNavbar;
