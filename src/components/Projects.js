import React from "react";
import "./project.css";
// import { Image } from "react-bootstrap";
function Projects() {
  return (
    <>
      <div className="projcontainer">
      
      <div className="projtitle">
        <h2 className="projh2">Projects</h2>
      </div>
      <div className="projcon">
        <div className="itemcontainer">
          <div className="card">
            <img
              className="card-image"
               src={process.env.PUBLIC_URL + "/pdflogo.jpg"}
              alt="hlo"
            />
            <div className="card-content">
              <h3 className="card-title">Pdf Share Application</h3>
              <p className="card-text">
                A Platform where admin can share and remove pdf for multiple
                users
              </p>
              {/* <a href="/" className="card-link">
                Link
              </a> */}
            </div>
          </div>
          <div className="card2">
            <img
              className="card-image"
               src={process.env.PUBLIC_URL + "/inproggress.jpg"}
              alt="hlo"
            />
            <div className="card-content">
              <h3 className="card-title">Gym Website</h3>
              <p className="card-text">
                In Progress
              </p>
              {/* <a href="/" className="card-link">
                Link
              </a> */}
            </div>
          </div>
          

          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
      </div>
    </>
  );
}

export default Projects;
