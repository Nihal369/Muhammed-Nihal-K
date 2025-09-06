import React from "react";
import "../styles/Works.css";
import Pimage from "../assets/images/screenshot.png";
// import Projects from "./Projects";

const projects = [
  { title: "E-Commerce Site", desc: "React + Django full-stack shopping site", img: Pimage },
  { title: "Music Player", desc: "YouTube/Deezer API-based music app", img: Pimage },
  { title: "Chat App", desc: "Realtime chat app with React & Django", img: Pimage }
];

const Works = () => {
  return (
    <div id="work">
      <div className="works-container">
        <h2>My Works</h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <img src={p.img} alt={p.title} className="project-img" />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <Projects /> */}
    </div>
  );
};

export default Works;
