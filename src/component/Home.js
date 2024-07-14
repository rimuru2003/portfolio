import React, { useEffect, useState } from "react";
import "../css/Home.css";

const Home = () => {
  const [para, setPara] = useState("");
  const [w, setW] = useState(0);

  const name = "Hello, I'm Aryan Singh";
  const work = {
    work: "Frontend Developer",
    desc: "I love crafting solid and scalable front-end products with great user experiences. Skilled in HTML, CSS, and JavaScript, I thrive on creating intuitive and visually appealing websites. My goal is to build seamless and engaging web applications that delight users.",
  };
  const speed = 50;

  useEffect(() => {
    const textapp = () => {
      if (w < name.length) {
        setPara((a) => a + name.charAt(w));
        setW((prevI) => prevI + 1);
      }
    };
    if (w < name.length) {
      const timers = setTimeout(textapp, speed);
      return () => clearTimeout(timers);
    }
  });

  return (
    <div className="ho1">
      <div className="ho2">
        <h1 className="ho3">{para}</h1>
        <h2 className="ho4">{work.work}</h2>
        <p className="ho5">{work.desc}</p>
        <button className="ho8" >Contact <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
         </svg>
          </button>
      </div>
      <span className="ho6">
        <img
          className="ho7"
          src="https://unsplash.com/photos/3TLl_97HNJo/download?force=true&w=640"
          alt="image"
        />
      </span>
      
    </div>
  );
};

export default Home;
