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
          spy
          smooth
          duration={500}
          offset={-100}
          onClick={() => handleClick("top")}
        >
          <img
            className="navbar-mobile__logo"
            src={SwissLogo}
            alt="SwissStake-Logo"
          />
        </Link>

        <div
          className={`mobile-hamburger ${
            isOpen ? "mobile-hamburger__toggled" : "mobile-hamburger__deafult"
          }`}
        >
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>

        {isOpen && (
          <div className="navbar-mobile__menu">
            <div className="navbar-mobile__menu--content">
              <Link
                to="about"
                spy
                smooth
                duration={500}
                offset={5}
                onClick={() => handleClick("about")}
              >
                <Navbutton text={"About"} />
              </Link>
              <Link
                to="infractructure"
                spy
                smooth
                duration={500}
                offset={-50}
                onClick={() => handleClick("infractructure")}
              >
                <Navbutton text={"Infrastructure"} />
              </Link>
              <Link
                to="adopter"
                spy
                smooth
                duration={500}
                offset={5}
                onClick={() => handleClick("adopter")}
              >
                <Navbutton text={"Adopter"} />
              </Link>
              <Link
                to="join"
                spy
                smooth
                duration={500}
                offset={-25}
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
          </div>
        )}
      </div>
    </div>
  );
}

export default MobileNavbar;
