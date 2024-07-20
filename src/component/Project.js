import React,{useRef} from "react";
import "../css/Project.css";
import Project1 from "../pic/Project1.png";
import Project2 from "../pic/Project2.png";
import Project3 from "../pic/Project3.png";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const Project = () => {
  const scrollRef = useRef(null); // Create a reference for the scrollable container

  // Function to scroll the container to the left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 400; // Scroll left by 4000 pixels
    }
  };

  // Function to scroll the container to the right  
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 400; // Scroll right by 400 pixels
    }
  };

  return (
    <>
      <h1 className="head">A small selection</h1>
      <h1 className="heads">of recent projects</h1>
      <div className="projects-container" ref={scrollRef}>
        <div className="project">
          <div className="hide">
            <div className="project-inner">
              <div className="front-face">
                <img className="project-image" src={Project1} alt="Project 1" />
              </div>
              <div className="back-face">
                <h1>Project 1 Details</h1>
                <p>Description of Project 1</p>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="hide">
            <div className="project-inner">
              <div className="front-face">
                <img className="project-image" src={Project2} alt="Project 2" />
              </div>
              <div className="back-face">
                <h1>Project 2 Details</h1>
                <p>Description of Project 2</p>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="hide">
            <div className="project-inner">
              <div className="front-face">
                <img className="project-image" src={Project3} alt="Project 3" />
              </div>
              <div className="back-face">
                <h1>Project 3 Details</h1>
                <p>Description of Project 3</p>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="hide">
            <div className="project-inner">
              <div className="front-face">
                <img className="project-image" src={Project3} alt="Project 4" />
              </div>
              <div className="back-face">
                <h1>Project 4 Details</h1>
                <p>Description of Project 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button id="prev" onClick={scrollLeft}>
        <MdOutlineKeyboardDoubleArrowLeft />
      </button>
      <button id="next" onClick={scrollRight}>
        <MdOutlineKeyboardDoubleArrowRight />
      </button>
    </>
  );
};

export default Project;
