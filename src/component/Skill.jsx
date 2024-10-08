import React, { useEffect, useState } from "react";
import "../css/Skill.css";
import { useSelector } from "react-redux";

const Skill = () => {
  const [skills, setSkills] = useState({});
  const stacks = useSelector((state) => state.counter.items?.skill);

  useEffect(() => {
    setSkills(stacks || {});
  }, [stacks]);

  return (
    <>
      <div className="so1">
        <h1 className="skillheading reveal">Stack</h1>
        <div className="so2 reveal">
          {Object.keys(skills).map((category, index) => {

            const skillList = skills[category];
            const categoryName = skillList.find((item) => item?.name)?.name || category;

            return (
              <div key={index} className="parent reveal">
                <h1 className="skillname revela">{categoryName}</h1>
                <div className="so3 reveal">
                  {skillList
                    .map((skill, i) => (
                      <i key={i} className={`${skill} icons`} ></i>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skill;













