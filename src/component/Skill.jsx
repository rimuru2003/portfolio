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

