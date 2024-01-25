import React, { useState } from "react";
import { Link } from "react-scroll";
import Hamburger from "hamburger-react";

import Navbutton from "../atoms/nav-btn";

import telegramicon from "../../assets/telegram-icon.svg";
import twittericon from "../../assets/twitter-icon.svg";
import linkedinicon from "../../assets/linkedin-icon.svg";
import mobilestakelogo from "../../assets/navbar-logo.svg";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (to) => {
    setIsOpen(false);
  };
  return (
    <div className="mobile-positioner">
      <div className="navbar-mobile">
        <Link to="top" spy smooth duration={500} offset={-100}>
          <img
            className="navbar-mobile__logo"
            src={mobilestakelogo}
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
                offset={-600}
                onClick={() => handleClick("about")}
              >
                <Navbutton text={"About"} />
              </Link>
              <Link
                to="infractructure"
                spy
                smooth
                duration={500}
                offset={-74}
                onClick={() => handleClick("infractructure")}
              >
                <Navbutton text={"Infrastructure"} />
              </Link>
              <Link
                to="adopter"
                spy
                smooth
                duration={500}
                offset={-74}
                onClick={() => handleClick("adopter")}
              >
                <Navbutton text={"Adopter"} />
              </Link>
              <Link
                to="join"
                spy
                smooth
                duration={500}
                offset={-55}
                onClick={() => handleClick("join")}
              >
                <Navbutton text={"Join"} />
              </Link>

              <div className="navbar-mobile__menu--line">
                <a
                  href="https://t.me/joinchat/XuVh94v4X3o4Yjk8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar-mobile__menu--telegram"
                >
                  <img src={telegramicon} alt="telegram-icon" />
                </a>
                <a
                  href="https://www.linkedin.com/company/blockbites/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar-mobile__menu--telegram"
                >
                  <img src={linkedinicon} alt="linkedin-icon" />
                </a>
                <a
                  href="https://twitter.com/theblockbites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar-mobile__menu--telegram"
                >
                  <img src={twittericon} alt="twitter-icon" />
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
