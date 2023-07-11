import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <>
      <div className="skillcon">
        <div className="aboutitle">
          <h2 className="skillh2">Skills</h2>
        </div>
        <div className="iconconatiners">
          <div className="iconcon">
            <div className="itemms">
              <i class="fa-brands fa-html5"></i>
              <h4 className="fntskill">Html</h4>
            </div>
            <div className="itemms2">
              <i class="fa-brands fa-css3-alt"></i>
              <h4 className="fntskill">Css</h4>
            </div>
            <div className="itemms">
              <i class="fa-brands fa-js"></i>
              <h4 className="fntskill">Js</h4>
            </div>
            <div className="itemms2">
              <i class="fa-brands fa-react"></i>
              <h4 className="fntskill">React</h4>
            </div>
            <div className="itemms">
              <i class="fa-brands fa-node"></i>
              <h4 className="fntskill">Node</h4>
            </div>
          </div>
          <div className="iconcon">
            <div className="itemms2">
              <i class="fa-brands fa-java"></i>
              <h4 className="fntskill">Java</h4>
            </div>
            <div className="itemms">
              <i class="fa-brands fa-python"></i>
              <h4 className="fntskill">Python</h4>
            </div>
            <div className="itemms2">
              <i class="fa-solid fa-database"></i>
              <h4 className="fntskill">Dbms</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
