import React from "react";
import "./experience.css";

function Experience() {
  return (
    <div className="excontainer">
      <h2 className="experience-title">Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Shanti Developers, Chikhli</h3>
            <h4>Fullstack Intern (6 Months)</h4>
            <p>1 Jan 2024 - 30 June 2024</p>
            <ul>
              <li>
                Gained hands-on experience by assisting in front-end
                development, designing simple user interfaces, and implementing
                basic back-end functionality.
              </li>
              <li>
                Applied modern web technologies like React.js, Node.js, and
                Express.js to create dynamic and responsive web pages.
              </li>
              <li>
                Contributed to user authentication, creating RESTful APIs, and
                managing application.
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="timeline-item">
          <div className="timeline-content">
            <h3>Shanti Developers, Chikhli</h3>
            <h4>Fullstack Intern (3 Months)</h4>
            <p>15 July 2023 - 15 Oct 2023</p>
            <ul>
              <li>Completed assigned tasks efficiently within deadlines, utilizing technologies such as JavaScript, HTML, CSS, and MongoDB.</li>
              <li>Gained valuable experience in web development, focusing on tasks like responsive design, database interactions, and debugging.</li>
              <li>Collaborated with the development team to improve code quality and implement new features.</li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Experience;
