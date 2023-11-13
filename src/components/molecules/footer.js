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
            <h4 className="footer__content__left--title">Navigation</h4>
            <Link to="about" spy smooth duration={500} offset={-85}>
              <button className="footer__content__left--subtitle">About</button>
            </Link>
            <Link to="infractructure" spy smooth duration={500} offset={-85}>
              <button className="footer__content__left--subtitle">
                Infastructure
              </button>
            </Link>
            <Link to="adopter" spy smooth duration={500} offset={-85}>
              <button className="footer__content__left--subtitle">
                Adopter
              </button>
            </Link>
            <Link to="join" spy smooth duration={500} offset={-85}>
              <button className="footer__content__left--subtitle">Join</button>
            </Link>
          </div>

          <div className="footer__content__right">
            <h4 className="footer__content__right--title">Social</h4>

            <a
              className="footer__content__right--subtitle"
              href="https://t.me/joinchat/XuVh94v4X3o4Yjk8"
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
