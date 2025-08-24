import React from "react";
import "../styles/works.css";

const projects = [
  { title: "E-Commerce Site", desc: "React + Django full-stack shopping site" },
  { title: "Music Player", desc: "YouTube/Deezer API-based music app" },
  { title: "Chat App", desc: "Realtime chat app with React & Django" }
];

const Works = () => {
  return (
    <div className="works-container">
      <h2>My Works</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
