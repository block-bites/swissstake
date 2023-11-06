import React, { useState, useEffect } from "react";

import { MOBILE_BREAKPOINT } from "../atoms/constans";

import MobileNavbar from "../molecules/navbar-mobile";
import DesktopNavbar from "../molecules/navbar-desktop";

function Navbar() {
  const isBrowser = typeof window !== "undefined";
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    if (!isBrowser) {
      return;
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isBrowser]);

  return (
    <div className="navbar">
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
    </div>
  );
}

export default Navbar;
