import React, { useState, useEffect } from "react";
import "./NavBar.css";

const NavBar = ({ scrollToSection }) => {
  const [showIcon, setShowIcon] = useState(window.innerWidth <= 950);
  const [hideItems, setHideItems] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleResize = () => {
      setShowIcon(window.innerWidth <= 950);
      if (window.innerWidth > 950) {
        setHideItems(false);
      } else {
        setHideItems(true);
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 50;
      const sections = document.querySelectorAll(".section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          activeSection !== section.id
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const toggleItemsVisibility = () => {
    setHideItems(!hideItems);
  };

  const handleItemClick = (id) => {
    scrollToSection(id);
    setActiveSection(id);
    if (window.innerWidth <= 950) {
      setHideItems(true);
    }
  };

  return (
    <nav className="navbar">
      <div className={`nav-bar ${activeSection}-bg`}>
        <h3 className={`nav-link ${activeSection}`}>Jay Prajapati</h3>
        {showIcon && (
          <div className="menu-icon" onClick={toggleItemsVisibility}>
            <i className="fas fa-bars navbar-burger"></i>
          </div>
        )}
        <div className={`menu-items ${hideItems ? "hidden" : ""}`}>
          <ul>
            {["home", "aboutme", "skills", "experience", "projects"].map((section) => (
              <li key={section}>
                <div
                  className={`nav-link ${activeSection}`}
                  onClick={() => handleItemClick(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
