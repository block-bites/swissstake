import { useState, useEffect } from "react";
import { MOBILE_BREAKPOINT } from "../constans";

export const useIsMobile = () => {
  const isBrowser = typeof window !== "undefined";
  const [isMobile, setIsMobile] = useState(false);

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

  return isMobile;
};

export default useIsMobile;
