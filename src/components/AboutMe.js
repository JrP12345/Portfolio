import React from "react";
import "./About.css";
function AboutMe() {
  return (
    <>
      <div className="aboutcontainer">
        <div className="aboutitle">
          <h2 className="vertical-text">About Me</h2>
        </div>
        <div className="aboutsec">
          <h3>
            I am a third-year student pursuing a degree in Computer Science and
             Engineering. I have a genuine passion for coding and
            problem-solving.
          </h3>{" "}
          <h3>
            Throughout my studies, I have gained a foundation in
            programming languages such as Java, C , and Python. I have also
            learned about web development and databases.
          </h3>{" "}
          <h3>
            As a third-year student, I am eager to gain practical experience
            through internships and projects. I am a dedicated learner,
            detail-oriented, and can manage my time effectively to meet
            deadlines.
          </h3>{" "}
          <h3>
            {" "}
            In summary, I am a third-year student in Computer Science and
            Engineering with a strong foundation in programming
            languages and practical experience. I am enthusiastic about learning
            and ready to take on new challenges in the field of software
            development.
          </h3>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
