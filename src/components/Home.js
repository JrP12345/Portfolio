import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import "./Home.css";
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

  return (
    <>
      <div className="container" id="home">
        <div className="homeconmainallthree">
          <Image
            src={`${process.env.PUBLIC_URL}/portfolioimg.jpeg`}
            className="portimage"
            alt="Image"
          />

          <div className="onetwothree">
            <div className="lefthomecon">
              <div className="introcon">
                <h2 className="introheadtxt">
                  Hey there! I'm Jay Prajapati, a final-year student
                  specializing in website and application development.
                </h2>
                <p className="intropara">
                  I'm passionate about creating interactive and user-friendly
                  web applications using modern technologies.
                </p>
                <button className="cvbtn" onClick={handleDownload}>
                  Download CV
                </button>
              </div>
            </div>

            
                <div className="contactcon">
                  <div className="items">
                    <h6>
                      {" "}
                      <Link
                        className="contact-link"
                        to={`https://www.linkedin.com/in/${linkedinUsername}`}
                        target="_blank"
                      >
                        <i className="fa-brands fa-linkedin"></i>
                      </Link>
                    </h6>
                  </div>
                  <div className="items">
                    <h6>
                      {" "}
                      <Link
                        className="contact-link"
                        to={`https://www.instagram.com/${instagramUsername}`}
                        target="_blank"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </h6>
                  </div>
                  <div className="items">
                    <h6>
                      {" "}
                      <Link
                        className="contact-link"
                        to={`https://github.com/${githubUsername}`}
                        target="_blank"
                      >
                        <i className="fa-brands fa-github"></i>
                      </Link>
                    </h6>
                  </div>
                  <div className="items">
                    <h6>
                      {" "}
                      <Link
                        className="contact-link"
                        to={`mailto:${emailAddress}`}
                      >
                        <i className="fa-solid fa-envelope"></i>
                      </Link>
                    </h6>
                  </div>
                  <div className="items">
                    <h6>
                      {" "}
                      <Link className="contact-link" to={`tel:${phoneNumber}`}>
                        <i className="fa-solid fa-phone"></i>
                      </Link>
                    </h6>
                  </div>
               
            </div>
          </div>
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
