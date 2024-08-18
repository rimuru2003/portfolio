import React, { useEffect, useRef, useState } from "react";
import "../css/Project.css";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { useSelector } from "react-redux";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const reduxProjects = useSelector((state) => state?.counter?.items?.project);

  useEffect(() => {
    if (reduxProjects) {
      setProjects(reduxProjects);
    }
  }, [reduxProjects]);

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 470;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 450;
    }
  };

  return (
    <>
      <h1 className="heads">Recent projects</h1>

      <div className="projects-container-wrapper">
        <div className="projects-container" ref={scrollRef}>
          {projects.length > 0 ? (
            projects.map((proj, i) => (
              <div className="project" key={i}>
                <div className="hide">
                  <div className="project-inner">
                    <div className="front-face">
                      <img
                        className="project-image"
                        src={proj.img}
                        alt={proj.title}
                      />
                    </div>
                    <div className="back-face">
                      <h1>{proj.title}</h1>
                      <p>{proj.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No projects available</p>
          )}
        </div>
      </div>

      <div className="btns">
        <button id="prev" onClick={scrollLeft}>
          <MdOutlineKeyboardDoubleArrowLeft />
        </button>
        <button id="next" onClick={scrollRight}>
          <MdOutlineKeyboardDoubleArrowRight />
        </button>
      </div>
    </>
  );
};

export default Project;
