import React, { useEffect, useState } from "react";
import "../css/About.css";

import { useSelector } from "react-redux";

const About = () => {

  const [abimg ,setAbimg] = useState(null);
  const [about ,setAbout] = useState(null);


  const items = useSelector((state) => state.counter.items);
  const abouts = items.info?.find(item => item.aboutMe)?.aboutMe || "";
  const aboutimg = items.img?.find(item => item.about)?.about || "";

useEffect(() =>{
  setAbimg(aboutimg)
  setAbout(abouts)
})
  

  return (
    <>
      <div className="a1">
        <img className="a2" src={abimg} alt="About" />
        <div className="a4">
          <h1 className="a7">About Me</h1>
          <p className="a6">{about}</p>
        </div>
      </div>
    </>
  );
};

export default About;
