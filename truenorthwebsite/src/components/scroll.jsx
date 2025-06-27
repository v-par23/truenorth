import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const savedPos = sessionStorage.getItem(`scroll-${location.pathname}`);
    if (savedPos) {
      window.scrollTo(0, parseInt(savedPos));
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      sessionStorage.setItem(`scroll-${location.pathname}`, window.scrollY);
    };
  }, [location]);

  return null;
};

export default ScrollToTop;
