import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [hideItems, setHideItems] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 950) {
        setShowIcon(true);
      } else {
        setShowIcon(false);
        setHideItems(false); // Show menu items when resizing
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleItemsVisibility = () => {
    setHideItems(!hideItems);
  };

  return (
    <>
      <nav>
        <div className="nav-bar">
          <h3>Jay Prajapati</h3>
          <div className={`menu-items ${hideItems ? "hidden" : ""}`}>
            <ul>
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutme" className="nav-link">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/skills" className="nav-link">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/experience" className="nav-link">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/projects" className="nav-link">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          {showIcon && (
            <div className="menu-icon" onClick={toggleItemsVisibility}>
              <i className="fas fa-bars"></i>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
