import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Project from "./component/Project";
import About from "./component/About";
import Skill from "./component/Skill";
import Contact from "./component/Contact";
import Projectsection from "./component/Projectsection";
import Footer from "./component/Footer";
import Loader from "./component/Loader"; // Import the Loader component

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Add useSelector to access the state
import { fetchdata } from "./redux/counterSlice";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.counter.status); // Get the status from Redux

  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);

  if (status === "loading") {
    return <Loader />; // Show the Loader component when the status is "loading"
  }

  return (
    <Router>
      <div className="ao1">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="home">
                  <Home />
                </div>
                <div id="about">
                  <About />
                </div>
                <div id="skill">
                  <Skill />
                </div>
                <div id="project">
                  <Project />
                </div>
                {/* <div id="experience"><Experience /></div> */}
                <div id="contact">
                  <Contact />
                </div>
                <div>
                  <Footer />
                </div>
              </>
            }
          />
          <Route path="/projects" element={<Projectsection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
