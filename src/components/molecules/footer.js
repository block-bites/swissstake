import React from "react";
import { Link } from "react-scroll";

import desktopLogo from "../../assets/swissStake-logo.svg";
import mobileLogo from "../../assets/mobile-logo.svg";
import telegram from "../../assets/telegramicon.svg";

function Footer() {
  return (
    <div className="footer-positioner">
      <div className="footer">
        <img
          className="footer__content__desktoplogo"
          src={desktopLogo}
          alt="desktop-logo"
        />
        <img
          className="footer__content__mobilelogo"
          src={mobileLogo}
          alt="mobile-logo"
        />
        <div className="footer__content">
          <div className="footer__content__left">
            <p className="footer__content__left--title">
              <h4>Navigation</h4>
            </p>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-85}
              exact={true}
            >
              <button className="footer__content__left--subtitle">About</button>
            </Link>
            <Link
              to="infractructure"
              spy={true}
              smooth={true}
              duration={500}
              offset={-85}
              exact={true}
            >
              <button className="footer__content__left--subtitle">Infastructure</button>
            </Link>
            <Link
              to="adopter"
              spy={true}
              smooth={true}
              duration={500}
              offset={-85}
              exact={true}
            >
              <button className="footer__content__left--subtitle">Adopter</button>
            </Link>
            <Link
              to="join"
              spy={true}
              smooth={true}
              duration={500}
              offset={-85}
              exact={true}
            >
              <button className="footer__content__left--subtitle">Join</button>
            </Link>
          </div>

          <div className="footer__content__right">
            <p className="footer__content__right--title">
              <h4>Social</h4>
            </p>

            <a
              className="footer__content__right--subtitle"
              href="https://t.me/piotr_dz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer__content__right--icon"
                src={telegram}
                alt="SwissStake-Logo"
              />
              Telegram channel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
