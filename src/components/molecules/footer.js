import React from "react";

import stakeLogo from "../../assets/Logo.svg";

function Footer() {
  return (
    <div className="footer-positioner">
      <div className="footer">
        <img className="footer__logo" src={stakeLogo} alt="footer-logo" />
        <div className="footer__left">
          <div className="footer__left--title">
            <h4>Label</h4>
          </div>
          <div className="footer__left--subtitle">Label</div>
          <div className="footer__left--subtitle">Label</div>
          <div className="footer__left--subtitle">Label</div>
          <div className="footer__left--subtitle">Label</div>
        </div>

        <div className="footer__right">
          <div className="footer__right--title">
            <h4>Label</h4> 
          </div>
          <div className="footer__right--subtitle">Label</div>
          <div className="footer__right--subtitle">Label</div>
          <div className="footer__right--subtitle">Label</div>
          <div className="footer__right--subtitle">Label</div>
        </div>
        {/* <div className="footer__watermark">
        <p className="footer__watermark--title">Swiss Stake 2023</p>
      </div> */}
      </div>
      <div className="watermark">
        <p className="watermark__title">Swiss Stake 2023</p>
      </div>
    </div>
  );
}

export default Footer;
