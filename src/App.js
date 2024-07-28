// App.js
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Project from "./component/Project";
import About from "./component/About";
import Skill from "./component/Skill";
import Contact from "./component/Contact";
import Experience from "./component/Experience";
import { fetchdata } from "./redux/counterSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  // const status = useSelector((state) => state.counter.status);

  useEffect(() => {
    dispatch(fetchdata());  
  }, [dispatch]);

  return (
    <div className="ao1">
       <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skill"><Skill /></div>
      <div id="project"><Project /></div>
      <div id="experience"><Experience /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
