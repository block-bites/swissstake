import React from "react";
import { Link } from "react-scroll";
import useIsMobile from "../../hooks/useIsMobile";

import telegramicon from "../../assets/telegramIcon.svg";
import footerlogo from "../../assets/Footer-logo.svg";
import blockbites from "../../assets/Blockbites-logo.svg";

function Footer() {
  const isMobile = useIsMobile();

  const mobileOffset = (linkTarget) => {
    if (isMobile) {
      switch (linkTarget) {
        case "about":
          return -85;
        case "infrastructure":
          return -144;
        case "adopter":
          return -85;
        case "join":
          return -160;
      }
    } else {
      return -85; //desktop
    }
  };

  return (
    <div className="footer-positioner">
      <div className="footer">
      <div className="footer-left">
          <div className="footer-left__logo">
            <img src={footerlogo} alt="desktop-logo" className="footer-left__logo--swiss-logo"/>
            <p className="footer-left__logo--text">Swiss Stake</p>
          </div>
          <a
            href="https://t.me/joinchat/XuVh94v4X3o4Yjk8"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-left__logo"
          >
            <img src={telegramicon} alt="Telegram icon" className="footer-left__logo--telegram-logo"/>
            <p className="footer-left__logo--text">Telegram channel</p>
          </a>
          <a
            href="https://blockbit.es"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-left__bites-logo"
          >
            <img src={blockbites} alt="blockbites-logo" />
          </a>
        </div>

        <div className="footer-right">
            <Link
              to="about"
              spy
              smooth
              duration={500}
              offset={mobileOffset("about")}
            >
              <button className="footer-right--subtitle">
                About
              </button>
            </Link>
            <Link
              to="infractructure"
              spy
              smooth
              duration={500}
              offset={mobileOffset("infrastructure")}
            >
              <button className="footer-right--subtitle">
                Infastructure
              </button>
            </Link>
            <Link
              to="adopter"
              spy
              smooth
              duration={500}
              offset={mobileOffset("adopter")}
            >
              <button className="footer-right--subtitle">
                Adopter
              </button>
            </Link>
            <Link
              to="join"
              spy
              smooth
              duration={500}
              offset={mobileOffset("join")}
            >
              <button className="footer-right--subtitle">Join</button>
            </Link>
          </div>
      </div>
    </div>
  );
}

export default Footer;
