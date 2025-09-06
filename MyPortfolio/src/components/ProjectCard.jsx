import React from "react";
import "../styles/ProjectCard.css"

export default function ProjectCard({ title, description, image, demoLink, codeLink }) {
  return (
      <div className="project-card">
        <img src={image} alt={title} className="project-image" />
        <div className="project-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="buttons">
            <a href={demoLink} target="_blank" rel="noreferrer" className="btn demo">Demo</a>
            <a href={codeLink} target="_blank" rel="noreferrer" className="btn code">Code</a>
          </div>
        </div>
      </div>
  );
}
