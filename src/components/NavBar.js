import React, { useState, useEffect } from "react";
import "./NavBar.css";

const NavBar = ({ scrollToSection }) => {
  const [showIcon, setShowIcon] = useState(false);
  const [hideItems, setHideItems] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Default active section

  useEffect(() => {
    const handleResize = () => {
      setShowIcon(window.innerWidth <= 950);
      if (window.innerWidth > 950) {
        setHideItems(false); // Show menu items when resizing above 975px
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

    // Initial setup and cleanup for resize and scroll event listeners
    handleScroll();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
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
    setActiveSection(id); // Update active section immediately on click
    if (window.innerWidth <= 975) {
      setHideItems(true); // Close menu items after clicking on a section (mobile view)
    }
  };

  return (
    <nav className="navbar">
      <div className={`nav-bar ${activeSection}-bg`}>
        <h3  className={`nav-link ${activeSection}` }>Jay Prajapati</h3>
        <div className={`menu-items ${hideItems ? "hidden" : ""}`}>
          <ul>
            {["home", "aboutme", "skills", "experience", "projects"].map((section) => (
              <li key={section}>
                <div
                  className={`nav-link ${activeSection}` }
                  onClick={() => handleItemClick(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </div>
              </li>
            ))}
          </ul>
        </div>
        {showIcon && (
          <div className="menu-icon" onClick={toggleItemsVisibility}>
            <i className="fas fa-bars"></i>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
