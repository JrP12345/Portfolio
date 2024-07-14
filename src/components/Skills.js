import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    { name: "HTML", icon: "fa-html5", level: 90 },
    { name: "CSS", icon: "fa-css3-alt", level: 100 },
    { name: "JavaScript", icon: "fa-js", level: 80 },
    { name: "React", icon: "fa-react", level: 75 },
    { name: "Node.js", icon: "fa-node", level: 70 },
    { name: "Java", icon: "fa-java", level: 65 },
    { name: "Python", icon: "fa-python", level: 60 },
    { name: "DBMS", icon: "fa-database", level: 55 }
  ];

  return (
    <div className="skillcon">
      <div className="aboutitle">
        <h2 className="skillh2">Skills</h2>
      </div>
      <div className="iconconatiners">
        <div className="iconcon">
          {skills.map((skill, index) => (
            <div className="itemms" key={index}>
              <i className={`fa-brands ${skill.icon}`}></i>
              <h4 className="fntskill">{skill.name}</h4>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-level">{`${skill.level}%`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
