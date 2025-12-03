import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const elementId = hash.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        window.requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: "smooth" });
        });
      }
    } else if (key !== "default") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [pathname, hash, key]);

  return null;
}
