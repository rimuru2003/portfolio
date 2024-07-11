import React, { useEffect, useState } from "react";
import "../css/Navbar.css";

const Navbar = () => {
  const [navState, setNavState] = useState(false);

  const onnavscroll = () => {
    if (window.scrollY > 40) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onnavscroll);
    return () => {
      window.removeEventListener("scroll", onnavscroll);
      
    };
  }, []);

  return (
    <div className={`n1 ${navState ? "blur" : ""}`}>
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
