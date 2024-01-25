import React, { useState } from "react";
import PrivacyPolicy from "../molecules/privacy-policy";
import { Link } from "react-scroll";
import useIsMobile from "../../hooks/useIsMobile";
import Swal from "sweetalert2";

import footerlogo from "../../assets/footer-logo.svg";
import blockbites from "../../assets/blockbites-logo.svg";
import telegramicon from "../../assets/telegram-icon.svg";
import twittericon from "../../assets/twitter-icon.svg";
import linkedinicon from "../../assets/linkedin-icon.svg";
import emailicon from "../../assets/email-icon.svg";

function Footer() {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const isMobile = useIsMobile();

  const openPrivacyPolicy = () => setIsPrivacyPolicyOpen(true);
  const closePrivacyPolicy = () => setIsPrivacyPolicyOpen(false);

  const mobileOffset = (linkTarget) => {
    switch (linkTarget) {
      case "about":
        return isMobile ? -600 : -435;
      case "infrastructure":
        return isMobile ? -70 : -80;
      case "adopter":
        return isMobile ? -85 : -80;
      case "join":
        return isMobile ? -50 : -250;
      default:
        return isMobile ? -100 : -80;
    }
  };

  const copyEmailToClipboard = () => {
    const email = "hello@swissstake.net";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "The email was copied to the clipboard",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Failed to copy e-mail",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  return (
    <div className="footer-positioner">
      <div className="footer">
        <div className="footer-left">
          <div className="footer-left__content">
            <div className="footer-left__logo">
              <img
                src={footerlogo}
                alt="logo"
                className="footer-left__logo--icon"
              />
              <p className="footer-left__logo--title">Swiss Stake</p>
            </div>
            <div className="footer-left__logo--subtitle">
              <p>
                Embark on your staking journey with SwissStake now and make the
                most of the reliability, security, and expertise. Get Started
                now!
              </p>
            </div>
          </div>
          <div className="footer-left__social">
            <div className="footer-left__social--title">
              <p>Connect with us on:</p>
            </div>
            <div className="footer-left__social--icon">
              <a
                href="https://t.me/joinchat/XuVh94v4X3o4Yjk8"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-left__social--icon"
              >
                <img
                  src={telegramicon}
                  alt="telegram"
                  className="footer-left__social--icon"
                />
              </a>
              <button
                id="emailLink"
                onClick={copyEmailToClipboard}
                className="footer-left__social--btn"
              >
                <img
                  src={emailicon}
                  alt="e-mail"
                  className="footer-left__social--icon"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-right__column">
            <Link
              to="about"
              spy
              smooth
              duration={500}
              offset={mobileOffset("about")}
            >
              <button className="footer-right__column--item">About</button>
            </Link>

            <Link
              to="infractructure"
              spy
              smooth
              duration={500}
              offset={mobileOffset("infrastructure")}
            >
              <button className="footer-right__column--item">Structure</button>
            </Link>
            <Link
              to="adopter"
              spy
              smooth
              duration={500}
              offset={mobileOffset("adopter")}
            >
              <button className="footer-right__column--item">Adopter</button>
            </Link>
            <Link
              to="join"
              spy
              smooth
              duration={500}
              offset={mobileOffset("join")}
            >
              <button className="footer-right__column--item">Join</button>
            </Link>
          </div>
          <div className="footer-right__column">
            <button
              onClick={openPrivacyPolicy}
              className="footer-right__column--item"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-bottom--title">
          All rights reserved SwissStake, 2024
        </p>
        <div className="footer-bottom__logo">
          <div className="footer-bottom__right-logo">
            <p className="footer-bottom__right-logo--title">Powered by </p>
            <div className="footer-bottom__right-logo--icon">
              <a
                href="https://blockbit.es"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={blockbites}
                  alt="blockbites"
                  className="footer-bottom__right-logo--icon"
                />
              </a>
            </div>
          </div>
          <div className="footer-bottom__contact">
            <a
              href="https://t.me/blockbites_official"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-bottom__contact--icon"
            >
              <img
                src={telegramicon}
                alt="telegram"
                className="footer-bottom__contact--icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/blockbites/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-bottom__contact--icon"
            >
              <img
                src={linkedinicon}
                alt="linkedin"
                className="footer-bottom__contact--icon"
              />
            </a>
            <a
              href="https://twitter.com/theblockbites"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-bottom__contact--icon"
            >
              <img
                src={twittericon}
                alt="twitter"
                className="footer-bottom__contact--icon"
              />
            </a>
          </div>
        </div>
      </div>

      <PrivacyPolicy
        isOpen={isPrivacyPolicyOpen}
        onClose={closePrivacyPolicy}
      />
    </div>
  );
}

export default Footer;
