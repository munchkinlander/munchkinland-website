import "./Scroll.scss";
import { useState, useEffect } from "react";

export default function Scroll() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //

  return (
    <div className="scroll">
      {showScrollToTop && (
        <button className="scroll__button" onClick={scrollToTop}>
          Back to Top
        </button>
      )}
    </div>
  );
}
