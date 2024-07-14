import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import "./Home.css";
import NavBar from "./NavBar";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";

const Home = () => {
  const linkedinUsername = process.env.REACT_APP_LINKEDIN;
  const instagramUsername = process.env.REACT_APP_INSTAGRAM;
  const githubUsername = process.env.REACT_APP_GITHUB;
  const emailAddress = process.env.REACT_APP_EMAIL;
  const phoneNumber = process.env.REACT_APP_MOBILE;
  const publicUrl = process.env.REACT_APP_PUBLIC_URL;

  const handleDownload = () => {
    const pdfUrl = publicUrl + "Jay R Prajapati Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Jay_Prajapati_Resume.pdf"; // Set the desired filename for the downloaded file
    link.target = "_blank";
    link.click();
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavBar scrollToSection={scrollToSection} />
      <div className="container" id="home">
        <div className="contactcon">
          <h4>CONTACT ME</h4>
          <div className="items">
            <i className="fa-brands fa-linkedin"></i>
            <h6>
              {" "}
              <Link
                className="contact-link"
                to={`https://www.linkedin.com/in/${linkedinUsername}`}
                target="_blank"
              >
                LinkedIn
              </Link>
            </h6>
          </div>
          <div className="items">
            <i className="fa-brands fa-instagram"></i>
            <h6>
              {" "}
              <Link
                className="contact-link"
                to={`https://www.instagram.com/${instagramUsername}`}
                target="_blank"
              >
                Instagram
              </Link>
            </h6>
          </div>
          <div className="items">
            <i className="fa-brands fa-github"></i>
            <h6>
              {" "}
              <Link
                className="contact-link"
                to={`https://github.com/${githubUsername}`}
                target="_blank"
              >
                GitHub
              </Link>
            </h6>
          </div>
          <div className="items">
            <i className="fa-solid fa-envelope"></i>
            <h6>
              {" "}
              <Link className="contact-link" to={`mailto:${emailAddress}`}>
                Email
              </Link>
            </h6>
          </div>
          <div className="items">
            <i className="fa-solid fa-phone"></i>
            <h6>
              {" "}
              <Link className="contact-link" to={`tel:${phoneNumber}`}>
                Call
              </Link>
            </h6>
          </div>
        </div>
        <div className="imagecon">
          <Image
            src={`${process.env.PUBLIC_URL}/portfolioimg.jpeg`}
            className="portpic"
            alt="Image"
          />
        </div>
        <div className="introcon">
          <h2>
            Hey there! I'm Jay Prajapati, a final-year student specializing in
            website and application development.
          </h2>
          <p>
            I'm passionate about creating interactive and user-friendly web
            applications using modern technologies.
          </p>
          <button className="cvbtn" onClick={handleDownload}>
            Download CV
          </button>
        </div>
      </div>
      {/* AboutMe section */}
      <section id="aboutme" className="section">
        <AboutMe />
      </section>
      {/* Example sections, replace with your content */}
      <section id="skills" className="section">
        <Skills />
      </section>

      <section id="experience" className="section">
        <Experience />
      </section>

      <section id="projects" className="section">
        <Projects />
      </section>

      {/* Footer or additional sections */}
    </>
  );
};

export default Home;
