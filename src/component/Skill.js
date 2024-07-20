// Skill.js
import React, { useEffect, useState } from "react";
import "../css/Skill.css";
import { useSelector } from "react-redux";

const Skill = () => {
  const [skills, setSkills] = useState(null);
  const items = useSelector((state) => state.counter.items);
  const skill = items?.skill;
  useEffect(() => {
    setSkills(skill || []);
  }, [skill]);
  return (
    <>
      <div className="so1">
        <h1 className="skillheading">Stack</h1>
        <div className="so2">
        {skills?.map((key, i) => (
            <i key={i} className={`${key} icons`}></i>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skill;

{
  /* <i className="devicon-javascript-plain icon"></i>

<i class="devicon-nextjs-plain icon"></i>
<i class="devicon-redux-original icon"></i>
<i className="devicon-html5-plain colored icon"></i>
<i className="devicon-css3-plain colored icon"></i>
<i className="devicon-tailwindcss-original colored icon"></i>

<i className="devicon-github-original colored icon"></i>
<i className="devicon-linux-plain colored icon"></i>

<i class="devicon-cplusplus-plain icon"></i>
<i className="devicon-mongodb-plain colored icon"></i>
<i className="devicon-java-plain colored icon"></i>

<i className="devicon-firebase-plain colored icon"></i>
<i class="devicon-c-line icon"></i>

<i class="devicon-reactrouter-plain icon"></i>

<i class="devicon-express-original icon"></i>
<i className="devicon-react-original colored icon"></i>
<i className="devicon-archlinux-plain colored icon"></i>

<i class="devicon-nodejs-plain-wordmark colored icon"></i> */
}
