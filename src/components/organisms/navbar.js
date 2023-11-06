import React, { useState, useEffect } from "react";

import { MOBILE_BREAKPOINT } from "../atoms/constans";

import MobileNavbar from "../molecules/navbar-mobile";
import DesktopNavbar from "../molecules/navbar-desktop";

function Navbar() {
  // const [width, setwidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      // const newwidth = window.innerWidth;
      // setwidth(newwidth);
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar">
      {/* {isMobile === null ? null : isMobile ? (
        <MobileNavbar />
      ) : (
        <DesktopNavbar />
      )} */}
      {isMobile ? <MobileNavbar/> : <DesktopNavbar/>}
    </div>
  );
}

export default Navbar;
