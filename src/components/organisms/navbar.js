import React from "react";

import useIsMobile from "../../hooks/useIsMobile";

import MobileNavbar from "../molecules/navbar-mobile";
import DesktopNavbar from "../molecules/navbar-desktop";

function Navbar() {
  const isMobile = useIsMobile();

  return (
    <div className="navbar">
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
    </div>
  );
}

export default Navbar;
