import React from "react";
import "../styles/home.css";
import profile from "../assets/images/profile.png"; // put your image in /src/assets
import resume from "../assets/images/resume.png"

const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-card">
        <img src={profile} alt="profile" className="profile-pic" />
      </div>
      <div className="intro">
        <h2>Hello, I'm <span>Nihal</span></h2>
        <p>A passionate Full-Stack Developer specialized in React & Django.</p>
        <div className="buttons">
          <a href="#works" className="btn">View Works</a>
          <a href={resume} className="btn secondary" download>Download Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
