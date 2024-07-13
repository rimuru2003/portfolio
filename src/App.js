import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Project from "./component/Project";
import About from "./component/About";
import Skill from "./component/Skill";
import Contact from "./component/Contact";
import Experience from "./component/Experience";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="ao1">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Aryan Singh</title>
      </Helmet>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Experience />
      <Contact />
        
    </div>
  );
}

export default App;
