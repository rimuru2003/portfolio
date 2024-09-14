import React, { useEffect, useState } from "react";
import "../css/Home.css";
import { initRevealOnScroll } from "../js/Scroll.js"; // Make sure this points to the correct path
import { useSelector } from "react-redux";
import Profile from "../pic/profile.jpeg";

const Home = () => {
  const [para, setPara] = useState("");
  const [w, setW] = useState(0);

  const items = useSelector((state) => state?.counter?.items);

  const name = items.home?.find((item) => item.nametag)?.nametag || "";
  const work = items.home?.find((item) => item.work)?.work || "";
  const desc = items.home?.find((item) => item.desc)?.desc || "";
  const resume = items.home?.find((item) => item.resume)?.resume || "";

  const speed = 50;

  // Typewriter effect for the name
  useEffect(() => {
    if (w < name.length) {
      const textapp = () => {
        setPara((prev) => `${prev}${name.charAt(w)}`);
        setW((prevW) => prevW + 1);
      };
      const timer = setTimeout(textapp, speed);
      return () => clearTimeout(timer);
    }
  }, [w, name]);

  useEffect(() => {
    initRevealOnScroll();
  }, []);

  const handleResumeClick = () => {
    if (resume) {
      window.open(resume, "_blank", "noopener noreferrer");
    }
  };

  return (
    <div className="ho1">
      <div className="ho2">
        <h1 className="ho3 reveal">{para}</h1>
        <h2 className="ho4 reveal">{work}</h2>
        <p className="ho5 reveal">{desc}</p>

        <button className="btn reveal" onClick={handleResumeClick}>
          Resume
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
        </button>
      </div>
      <span className="ho6">
        <img className="ho7 reveal" src={Profile} alt="Profile" />
      </span>
    </div>
  );
};

export default Home;
