import React, { useEffect, useState } from "react";
import "../css/Home.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { useSelector } from "react-redux";
import Profile from "../pic/profile.jpeg";

const Home = () => {
  const [para, setPara] = useState("");
  const [w, setW] = useState(0);

  const items = useSelector((state) => state?.counter?.items);



  const name = items.home?.find((item) => item.nametag)?.nametag || "";
  const work = items.home?.find((item) => item.work)?.work || "";
  const desc = items.home?.find((item) => item.desc)?.desc || "";

  // console.log(name)
  const speed = 50;
  // const connect = items.link?.find((item) => item.link)?.link || "";

  const link = [
    {
      href: "https://www.instagram.com/aryansingh070503/?hl=en",
      icon: <FaInstagram />,
      color: "#c32aa3",
      id: 1,
    },
    {
      href: "https://x.com/karansnh007",
      icon: <FaSquareXTwitter />,
      color: "#000000",
      id: 2,
    },
    {
      href: "mailto:karansnh007@gmail.com",
      icon: <SiGmail />,
      color: "#BB001B",
      id: 3,
    },
    {
      href: "https://github.com/rimuru2003",
      icon: <FaGithub />,
      color: "#000000",
      id: 4,
    },
    {
      href: "https://www.linkedin.com/in/aryan-singh-a57715224/",
      icon: <FaLinkedin />,
      color: "#0a66c2",
      id: 5,
    },
  ];
  useEffect(() => {
    if (w < name.length) {
      const textapp = () => {
        setPara((a) => `${a}${name.charAt(w)}`);
        setW((prevI) => prevI + 1);
      };
      const timer = setTimeout(textapp, speed);
      return () => clearTimeout(timer);
    }
  }, [w, name]);

  return (
    <div className="ho1">
      <div className="ho2">
        <h1 className="ho3">{para}</h1>
        <h2 className="ho4">{work}</h2>
        <p className="ho5">{desc}</p>
        
          <button
            className="btn"
          
          >
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
        <img className="ho7" src={Profile} alt="image" />
      </span>
    </div>
  );
};

export default Home;
