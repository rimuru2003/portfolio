import React, { useEffect, useState } from "react";
import "../css/Home.css";

const Home = () => {
  const [para, setPara] = useState("");
  const [w, setW] = useState(0);
  
  const name =  "Hello, I'm Aryan Singh";
  const work = {
    work: "Frontend Developer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in orci volutpat, vitae fermentum magna ullamcorper."
  }
  const speed = 50;

  useEffect(()=>{
    const textapp = ()=>{
    if(w< name.length){
      setPara((a) => a + name.charAt(w))
      setW((prevI) => prevI + 1)

    }
    }
    if(w< name.length){
      const timers = setTimeout(textapp,speed);
      return() => clearTimeout(timers);
    }
  })


  return (
    <div className="ho1">
      <div className="ho2">
        <h1 className="ho3">{para}</h1>
        <h2 className="ho4">{work.work}</h2>
        <p className="ho5">
          {work.desc}
        </p>
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
