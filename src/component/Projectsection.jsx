  import React, { useEffect, useState } from 'react';
  import { useSelector } from 'react-redux';
  import "../css/Projectsection.css";


  const Projectsection = () => {
    const [projects, setProjects] = useState([]);
    const reduxProject = useSelector((state) => state?.counter?.items?.project);

    useEffect(() => {
      if (reduxProject) {
        setProjects(reduxProject); 
      }
    }, [reduxProject]);
    

    return (
      <div className="all-projects-wrapper">
        <h1 className="projects-header">All Projects Details</h1>
        <div className="all-projects-container">
          {projects.length > 0 ? (
            projects.map((proj, i) => (
              <div className="single-project" key={i}>
                <div className="project-content">
                  <div className="project-image-container">
                    <img
                      className="project-image"
                      src={proj.img}
                      alt={proj.title}
                    />
                  </div>
                  <div className="project-desc-container">
                    <h1>{proj.title}</h1>
                    <p>{proj.desc}</p>
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