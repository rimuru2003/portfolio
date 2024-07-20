import React from "react";
import "../css/About.css";
import Aboutimg from '../pic/Aboutimg.svg';
import { useSelector } from "react-redux";

const About = () => {
  const items = useSelector((state) => state.counter.items);
  const about = items.info?.find(item => item.aboutMe)?.aboutMe || "";

  

  return (
    <>
      <div className="a1">
        <img className="a2" src={Aboutimg} alt="About" />
        <div className="a4">
          <h1 className="a7">About Me</h1>
          <p className="a6">{about}</p>
        </div>
      </div>
    </>
  );
};

export default About;
