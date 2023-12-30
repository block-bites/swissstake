import React, { useState } from "react";
import { Link } from "react-scroll";
import Hamburger from "hamburger-react";

import Navbutton from "../atoms/nav-btn";
import telegramicon from "../../assets/TelegramIcon.svg";


function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (to) => {
    setIsOpen(false);
  };

  return (
    <div className="mobile-positioner">
      <div className="navbar-mobile">
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
                offset={-94}
                onClick={() => handleClick("about")}
              >
                <Navbutton text={"About"} />
              </Link>
              <Link
                to="infractructure"
                spy
                smooth
                duration={500}
                offset={-144}
                onClick={() => handleClick("infractructure")}
              >
                <Navbutton text={"Infrastructure"} />
              </Link>
              <Link
                to="adopter"
                spy
                smooth
                duration={500}
                offset={-95}
                onClick={() => handleClick("adopter")}
              >
                <Navbutton text={"Adopter"} />
              </Link>
              <Link
                to="join"
                spy
                smooth
                duration={500}
                offset={-164}
                onClick={() => handleClick("join")}
              >
                <Navbutton text={"Join"} />
              </Link>

              <div className="navbar-mobile__menu--line">
                <a
                  className="navbar-mobile__menu--telegram"
                  href="https://t.me/joinchat/XuVh94v4X3o4Yjk8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={telegramicon} alt="Telegram" />
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
