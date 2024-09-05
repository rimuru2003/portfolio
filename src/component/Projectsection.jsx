import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../css/Projectsection.css";

const Projectsection = () => {
  const [projects, setProjects] = useState([]);
  const reduxProject = useSelector(
    (state) => state?.counter?.items?.project || []
  );

  useEffect(() => {
    setProjects(reduxProject);
  }, [reduxProject]);

  return (
    <div className="all-projects-wrapper">
      <h1 className="projects-header">All Projects Details</h1>
      <div className="all-projects-container">
        {projects.length > 0 ? (
          projects.map((proj) => (
            <div className="single-project" key={proj.title}>
           
              <div className="project-content">
                <div className="project-image-container">
                  <img
                    className="project-image"
                    src={proj.image} // Fixed property name from image to img
                    alt={proj.title}
                  />
                </div>
                <div className="project-desc-container">
                  <h1>{proj.title}</h1>
                  <p>{proj.descdetail}</p>{" "}
                  {/* Changed property name from descdetail to desc */}
                  {proj.tools && proj.tools.length > 0 && (
                    <div className="project-tools">
                      {proj.tools.map((tool, index) => (
                        <i key={index} className={tool}></i>
                      ))}
                    </div>
                  )}
                  
                  <a
                    href={proj.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btnp"
                  >
                    Visit Project
                  </a>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btng"
                  >
                    Code Source
                    <div className="arrow-container">
                      <svg
                        
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="arrow-icon" // Add class name for styling
                      >
                        <path
                          clipRule="evenodd"
                          d="M32,16.009c0-0.267-0.11-0.522-0.293-0.714l-9.899-9.999c-0.391-0.395-1.024-0.394-1.414,0c-0.391,0.394-0.391,1.034,0,1.428l8.193,8.275H1c-0.552,0-1,0.452-1,1.01s0.448,1.01,1,1.01h27.586l-8.192,8.275c-0.391,0.394-0.39,1.034,0,1.428c0.391,0.394,1.024,0.394,1.414,0l9.899-9.999C31.894,16.534,31.997,16.274,32,16.009z"
                          fill="#121313"
                          fillRule="evenodd"
                          id="Arrow_Forward"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No projects available</p>
        )}
      </div>
    </div>
  );
};

export default Projectsection;
