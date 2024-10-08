import React, { useEffect, useState } from "react";
import "../css/Project.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "@splidejs/react-splide/css"; // Import Splide CSS

const Project = () => {
  const [projects, setProjects] = useState([]);
  const reduxProjects = useSelector((state) => state?.counter?.items?.project);

  useEffect(() => {
    if (reduxProjects) {
      setProjects(reduxProjects.slice(0, 3)); // Show first 3 projects
    }
  }, [reduxProjects]);

  return (
    <div className="central">
      <h1 className="heads reveal">Recent projects</h1>

      <Splide
        options={{
          // type: "loop",
          perPage: 3,
          perMove: 1,
          gap: "10px",
          pagination: false,
          arrows: true,
          breakpoints: {
            1100: {
              perPage: 2,
            },
            800: {
              perPage: 2,
            },
            700: {
              perPage: 1,
            },
          },
        }}
        aria-label="Recent projects"
      >
        {projects.length > 0 ? (
          projects.map((proj, i) => (
            <SplideSlide key={i}>
              <div className="project reveal">
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
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))
        ) : (
          <p>No projects available</p>
        )}
      </Splide>

      <div>
        <Link to="/projects">
          <button className="btnp">More Projects</button>
        </Link>
      </div>
    </div>
  );
};

export default Project;
