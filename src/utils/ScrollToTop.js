import React, { useState } from "react";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
  
      <i
        onClick={scrollToTop}
        class="fas fa-angle-up"
        style={{
          display: visible ? "inline" : "none",
          position: "fixed",
          width: "100%",
          right: "-90%",
          bottom: "15px",
          height: "40px",
          fontSize: "2.5rem",
          zIndex: 1,
          cursor: "pointer",
          color: "#ffffff",
        }}
      ></i>
  
  );
};

export default ScrollButton;
