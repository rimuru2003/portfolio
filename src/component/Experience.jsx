import React, { useEffect, useState } from "react";
import "../css/Experience.css";
import { useSelector } from "react-redux";

const Experience = () => {
  const items = useSelector((state) => state.counter.items?.experience?.data);
  const [storeexperience, setStoreexperience] = useState(null);

  useEffect(() => {
    if (items) {
      setStoreexperience(items);
    }
  }, [items]);

  console.log(storeexperience);

  return (
    <>
      {storeexperience ? (
        <div>
          <div className="eo1">
            <h1 className="experheading reveal">My Work Experience</h1>
          </div>
          <div className="eo2">
            {storeexperience.map((experience, index) => (
              <div className="w" key={index}>
                <div className="eo3 reveal">
                  <h2>{experience.workPlace}</h2>
                  <p>Position: {experience.position}</p>
                  <p>Location: {experience.location}</p>
                  <p>Started From: {experience.startedFrom}</p>
                  <p>Worked Till: {experience.workedTill}</p>
                  {experience.link && (
                    <p>
                      Link: <a href={experience.link}>{experience.link}</a>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Experience;
