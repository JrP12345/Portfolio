import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/AboutMe";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
          <Route exact path="/Portfolio" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route path="aboutme" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
 
      </Routes>
    </Router>
  );
};

export default App;
