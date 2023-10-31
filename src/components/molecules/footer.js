import React from "react";
import { Link } from "react-scroll";

import stakeLogo from "../../assets/swissStake-logo.svg";
import telegram from "../../assets/telegramicon.svg";

function Footer() {
  return (
    <div className="footer-positioner">
      <div className="footer">
        <img className="footer__logo" src={stakeLogo} alt="footer-logo" />
        <div className="footer__left">
          <p className="footer__left--title">
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
            <button className="footer__left--subtitle">About</button>
          </Link>
          <Link
            to="infractructure"
            spy={true}
            smooth={true}
            duration={500}
            offset={-85}
            exact={true}
          >
            <button className="footer__left--subtitle">Infastructure</button>
          </Link>
          <Link
            to="adopter"
            spy={true}
            smooth={true}
            duration={500}
            offset={-85}
            exact={true}
          >
            <button className="footer__left--subtitle">Adopter</button>
          </Link>
          <Link
            to="join"
            spy={true}
            smooth={true}
            duration={500}
            offset={-85}
            exact={true}
          >
            <button className="footer__left--subtitle">Join</button>
          </Link>
        </div>

        <div className="footer__right">
          <p className="footer__right--title">
            <h4>Social</h4>
          </p>

          <a
            className="footer__right--subtitle"
            href="https://t.me/piotr_dz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footer__right--icon"
              src={telegram}
              alt="SwissStake-Logo"
            />
            Telegram channel
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
