import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Project from "./component/Project";
import About from "./component/About";
import Skill from "./component/Skill";
import Contact from "./component/Contact";

// import Experience from "./component/Experience";
import Projectsection from "./component/Projectsection";
import { fetchdata } from "./redux/counterSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);

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
