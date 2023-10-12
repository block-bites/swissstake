import React from "react";

import stakeLogo from "../../assets/swissStake-logo.svg";
import telegram from "../../assets/telegramicon.svg";

function Footer() {
  return (
    <div className="footer-positioner">
      <div className="footer">
        <img className="footer__logo" src={stakeLogo} alt="footer-logo" />
        <div className="footer__left">
          <button className="footer__left--title">
            <h4>Navigation</h4>
          </button>
          <button className="footer__left--subtitle">About</button>
          <button className="footer__left--subtitle">Structure</button>
          <button className="footer__left--subtitle">Adopter</button>
          <button className="footer__left--subtitle">Join</button>
        </div>

        <div className="footer__right">
          <button className="footer__right--title">
            <h4>Social</h4>
          </button>

          <button className="footer__right--subtitle">
            <img
              className="footer__right--icon"
              src={telegram}
              alt="SwissStake-Logo"
              // style={{ width: '30px', height: '30px' }}
            />
            Telegram channel
          </button>
        </div>
      </div>
      {/* <div className="watermark">
        <p className="watermark__title">Swiss Stake 2023</p>
      </div> */}
    </div>
  );
}

export default Footer;
