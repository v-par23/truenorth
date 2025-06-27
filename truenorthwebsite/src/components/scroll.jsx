import { Scroll } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Wait for the DOM to load
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0); // You can increase this if content is async
    }
  }, [location]);

  return null;
};
export default ScrollToHashElement;