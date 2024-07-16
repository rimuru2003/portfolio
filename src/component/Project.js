import React from "react";
import "../css/Project.css";
import Project1 from "../pic/Project1.png";
import Project2 from "../pic/Project2.png";
import Project3 from "../pic/Project3.png";

const Project = () => {
  return (
    <>
      <h1 className="head">A small selection </h1>
      <h1 className="heads">of recent projects</h1>
      <div className="p1">
       
        <div className="p">
          <div className="p2">
          <div className="front-face">
            <img className="project1" src={Project1} alt="Project 1" />
          </div>
          <div className="back-face">
          {/* <img className="project2" src={Project1} alt="Project 1" /> */}

            <h1>Project 1 Details</h1>
            <p>Description of Project 1</p>
            </div>
          </div>
        </div>
        
        <div className="p">
          <div className="p2">
          <div className="front-face">
            <img className="project1" src={Project2} alt="Project 2" />
          </div>
          <div className="back-face">
            <h1>Project 2 Details</h1>
            <p>Description of Project 2</p>
          </div>
          </div>
        </div>
        <div className="p">
        <div className="p2">

          <div className="front-face">
            <img className="project1" src={Project3} alt="Project 3" />
          </div>
          <div className="back-face">
            <h1>Project 3 Details</h1>
            <p>Description of Project 3</p>
          </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Project;
