import React from "react";
import { Link } from "react-scroll";
import useIsMobile from "../../hooks/useIsMobile";

import mobileLogo from "../../assets/mobile-logo.svg";
import telegram from "../../assets/telegramicon.svg";
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
        {/* <img
          className="footer__content__desktoplogo"
          src={desktopLogo}
          alt="desktop-logo"
        /> */}
        <img
          className="footer__content__mobilelogo"
          src={mobileLogo}
          alt="mobile-logo"
        />
        <div className="footer__content">
          <div className="footer__content__left">
            <h4 className="footer__content__left--title">Navigation</h4>
            <Link
              to="about"
              spy
              smooth
              duration={500}
              offset={mobileOffset("about")}
            >
              <button className="footer__content__left--subtitle">About</button>
            </Link>
            <Link
              to="infractructure"
              spy
              smooth
              duration={500}
              offset={mobileOffset("infrastructure")}
            >
              <button className="footer__content__left--subtitle">
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
              <button className="footer__content__left--subtitle">
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
              <p className="footer__content__right--text">Telegram channel</p>
            </a>
          </div>
        </div>

        <a
          className="footer__blockbites-positioner"
          href="https://blockbit.es"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="footer__blockbites">
            <p className="footer__blockbites--title">Made by</p>
            <img
              className="footer__blockbites--icon"
              src={blockbites}
              alt="blockbites-logo"
            ></img>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Footer;
