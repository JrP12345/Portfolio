import React from "react";
import "./About.css";
function AboutMe() {
  return (
    <>
      <div className="aboutcontainer">
        <div className="aboutitle">
          <h2 className="abouttext">About Me</h2>
        </div>
        <div className="aboutsec">
          <h3 className="aboutp">
          Hello! I'm Jay Prajapati, a final-year student with a passion for website and application development. My journey in the world of technology began with a curiosity for how things work on the web, which soon evolved into a dedicated pursuit of becoming a proficient developer. I also have a  understanding of data structures and algorithms (DSA).
          </h3>{" "}
          {/* <h3 className="aboutp">
          I specialize in the MERN stack (MongoDB, Express.js, React, and Node.js) and have a  understanding of various web development technologies.
          </h3>{" "} */}
          <h3 className="aboutp">
          As I approach the completion of my degree, I am eager to step into the professional world and contribute to innovative projects. My goal is to leverage my technical expertise to build impactful applications that enhance user experiences and drive business success.
          </h3>{" "}
          <h3 className="aboutp">
            {" "}
            Thank you for visiting my portfolio. I look forward to connecting with you and exploring potential opportunities to work together.
          </h3>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
