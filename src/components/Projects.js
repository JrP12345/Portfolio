import React from "react";
import "./project.css";
import { Image } from "react-bootstrap";
function Projects() {
  return (
    <div className="projcontainer">
      <div className="projtitle">
        <h2 className="projh2">Projects</h2>
      </div>
      <div className="itemcontainer">
        <div className="projcon">
          <div className="card">
            <Image
              src={`${process.env.PUBLIC_URL}/pickleplazoo.jpg`}
              className="project-image"
              alt="PicklePlazoo"
            />
            <div className="card-content">
              <h3 className="project-name">PicklePlazoo Website</h3>
              <a
                href="https://github.com/JrP12345/MERNPickle"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Github
              </a>{" "}
              |
              {/* <a href="https://mernpickle-frontend.onrender.com/" target="_blank" rel="noopener noreferrer" className="project-link">Live Project</a> */}
              <p className="project-description">
                Built with React for frontend interactivity and Node.js with
                Express for backend stability. Utilizes MongoDB for flexible
                product and user data management. Includes a responsive UI,
                search and filter options, secure checkout, real-time inventory
                management, customer reviews, and personalized user profiles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
