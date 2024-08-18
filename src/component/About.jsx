// About.js
import React, { useState, useEffect } from "react";
import "../css/About.css";
import { useSelector } from "react-redux";

const About = () => {
  const [abimg, setAbimg] = useState(null);
  const [aboutone, setAboutone] = useState(null);
  const [abouttwo, setAbouttwo] = useState(null);
  const [aboutthree, setAboutthree] = useState(null);

  const items = useSelector((state) => state.counter.items);
  const aboutmeone =
    items.info?.find((item) => item.aboutmeone)?.aboutmeone || "";
  const aboutmetwo =
    items.info?.find((item) => item.aboutmetwo)?.aboutmetwo || "";
  const aboutmethree =
    items.info?.find((item) => item.aboutmethree)?.aboutmethree || "";
  const aboutimg = items.img?.find((item) => item.about)?.about || "";

  useEffect(() => {
    setAbimg(aboutimg);
    setAboutone(aboutmeone);
    setAbouttwo(aboutmetwo);
    setAboutthree(aboutmethree);
  }, [aboutimg, aboutmeone, aboutmetwo, aboutmethree]);

  return (
    <section id="about" className="a1">
        <h1 className="a7">About Me!</h1>
        <div className="a3">
      <img className="a2" src={abimg} alt="About" />
      <div className="a4">
        <p className="a6">{aboutone}</p>
        <p className="a6">{abouttwo}</p>
        <p className="a6">{aboutthree}</p>
      </div>
      </div>
    </section>
  );
};

export default About;
