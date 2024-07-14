import React, { useEffect , useState } from "react";
import "../css/About.css";
import Aboutimg from '../pic/Aboutimg.svg'

const About = () => {
  
  const txts = {
   about: "II am a passionate and dedicated front-end web developer with a strong focus on crafting responsive, user-friendly websites. During my recent internship at Codesoft, I honed my expertise in HTML, CSS, JavaScript, and modern front-end frameworks. My skill set extends beyond the front end, as I also have a foundational understanding of backend technologies and databases, allowing me to develop seamless and efficient web applications.I thrive in collaborative environments, bringing creativity, enthusiasm, and a problem-solving mindset to every project. I am always eager to learn and adapt, staying current with the latest industry trends and best practices. My goal is to join a dynamic team where I can contribute to cutting-edge web solutions, leverage my diverse skill set, and continue to grow as a developer."


  }
  return (
    <>
      <div className="a1">
       <img src={Aboutimg}/>

        <div className="a4">
          <h1 className="a7">About Me</h1>

          <p className="a6">{txts.about}</p>
        </div>
      </div>
    </>
  );
};

export default About;
