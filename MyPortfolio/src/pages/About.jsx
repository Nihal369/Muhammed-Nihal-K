import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>
        I'm a React + Django developer who loves building interactive, scalable, 
        and efficient web applications. Passionate about clean UI/UX and solving 
        real-world problems with technology.
      </p>
      <div className="skills">
        <div className="skill-card">React</div>
        <div className="skill-card">Django</div>
        <div className="skill-card">JavaScript</div>
        <div className="skill-card">Python</div>
        <div className="skill-card">MongoDB</div>
      </div>
    </div>
  );
};

export default About;
