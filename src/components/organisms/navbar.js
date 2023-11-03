import React, { useState, useEffect } from 'react';

import MobileNavbar from '../molecules/navbar-mobile';
import DesktopNavbar from '../molecules/navbar-desktop';

function Navbar() {
  const [Width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let NavbarSize;
  if (Width <= 480) {
    NavbarSize = MobileNavbar;
  } else if (Width > 480 && Width <= 768) {
    NavbarSize = MobileNavbar; 
  } else if (Width > 768 && Width <= 1200) {
    NavbarSize = DesktopNavbar; 
  } else {
    NavbarSize = DesktopNavbar;
  }

  return (
    <div className='navbar'>
      <NavbarSize />
    </div>
  );
}

export default Navbar;
