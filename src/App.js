import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import NavBar from "./components/NavBar";
const App = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Router>
      <NavBar scrollToSection={scrollToSection}/ >
      <Routes>
     
          <Route exact path="/" element={<Home />} />
          
 
      </Routes>
    </Router>
  );
};

export default App;
