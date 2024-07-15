import React, { useEffect, useState } from "react";
import "../css/Home.css";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";



import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  const [para, setPara] = useState("");
  const [w, setW] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const name = "Hello, I'm Aryan Singh";
  const work = {
    work: "Frontend Developer,",
    desc: "I love crafting solid and scalable front-end products with great user experiences. Skilled in HTML, CSS, and JavaScript, I thrive on creating intuitive and visually appealing websites. My goal is to build seamless and engaging web applications that delight users.",
  };
  const speed = 50;

  useEffect(() => {
    const textapp = () => {
      if (w < name.length) {
        setPara((a) => a + name.charAt(w));
        setW((prevI) => prevI + 1);
      }
    };
    if (w < name.length) {
      const timers = setTimeout(textapp, speed);
      return () => clearTimeout(timers);
    }
  }, [w, name.length]);

  return (
    <div className="ho1">
      <div className="ho2">
        <h1 className="ho3">{para}</h1>
        <h2 className="ho4">{work.work}</h2>
        <p className="ho5">{work.desc}</p>
        <div className={`menu ${isActive ? "active" : ""}`}>
          <button className={`toggle ${isActive ? "active" : ""}`} onClick={toggleMenu}>
            Contact
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
            <ul>
              <li style={{ "--i": 1, "--clo": "#c32aa3" }}>
                <Link to="https://www.instagram.com/aryansingh070503/?hl=en">
                  <FaInstagram />
                </Link>
              </li>
              <li style={{ "--i": 2, "--clo": "#000000" }}>
                <Link to="https://x.com/karansnh007">
                  <FaSquareXTwitter />
                </Link>
              </li>
              <li style={{ "--i": 3, "--clo": "#BB001B" }}>
                <Link to="mailto:karansnh007@@gmail.com">
                <SiGmail />

                </Link>
              </li>
              <li style={{ "--i": 4, "--clo": "#000000" }}>
                <Link to="https://github.com/rimuru2003">
                  <FaGithub />
                </Link>
              </li>
              <li style={{ "--i": 5, "--clo": "#0a66c2" }}>
                <Link to="https://www.linkedin.com/in/aryan-singh-a57715224/">
                  <FaLinkedin />
                </Link>
              </li>
            </ul>
          </button>
        </div>
      </div>
      <span className="ho6">
        <img
          className="ho7"
          src="https://unsplash.com/photos/3TLl_97HNJo/download?force=true&w=640"
          alt="image"
        />
      </span>
    </div>
  );
};

export default Home;
