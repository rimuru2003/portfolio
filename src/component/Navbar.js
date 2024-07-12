import React, { useEffect, useState } from "react";
import "../css/Navbar.css";

const Navbar = () => {
  const [scrollData, setScrollData] = useState({
    y: 0,
    lastY: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollData((prevState) => ({
        y: window.scrollY,
        lastY: prevState.y,
      }));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const headerElement = document.getElementById("header");
    if (headerElement) {
      if (scrollData.y > 100 && scrollData.lastY < scrollData.y) {
        headerElement.classList.add("hideNav");
      } else {
        headerElement.classList.remove("hideNav");
      }
    }
  }, [scrollData]);

  return (
    <div id="header" className="n1">
      <h1 className="n2">Aryan</h1>
      <ul className="n3">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Project</li>
        <li>Stack</li>
        <li>Resume</li>
      </ul>
    </div>
  );
};

export default Navbar;
