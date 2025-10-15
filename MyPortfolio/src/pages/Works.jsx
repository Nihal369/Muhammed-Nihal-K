import React from "react";
import "../styles/Works.css";
import Pimage from "../assets/images/screenshot.png";
import commandium from "../assets/images/commandium.png"
import broker from "../assets/images/broker.png"
import euphoria from "../assets/images/euphoria.png"
import eltrix from "../assets/images/eltrix.png"
import Chat from "../assets/images/Chat.png"

const projects = [
  { 
    title: "E-Commerce Site", 
    desc: "Full-stack shopping platform with React frontend and Django backend", 
    img: Pimage,
    tech: ["React", "Django", "PostgreSQL", "Stripe"],
    liveLink: "#",
    githubLink: "#",
    category: "Full Stack"
  },
  { 
    title: "Euphoria - Shopping website", 
    desc: "Premium quality cloths for mens, womens, kids", 
    img: euphoria,
    tech: ["React",],
    liveLink: "#",
    githubLink: "#",
    category: "Frontend"
  },
  { 
    title: "Eltrix E-commerce Site", 
    desc: "Elevate Your Digital Experience", 
    img: eltrix,
    tech: ["React", "Django", "Node.js", "React-native"],
    liveLink: "#",
    githubLink: "#",
    category: "Full-Stack"
  },
  { 
    title: "Commandium - Launching Soon", 
    desc: "Transforms business operations with AI-driven ERP automation", 
    img: commandium,
    tech: ["React",],
    liveLink: "#",
    githubLink: "#",
    category: "Frontend"
  },
  { 
    title: "Chat App", 
    desc: "Real-time messaging application with WebSocket functionality", 
    img: Chat,
    tech: ["React", "Django", "WebSocket", "Redis"],
    liveLink: "#",
    githubLink: "#",
    category: "Full Stack"
  },
  { 
    title: "The Broker Academy - Launching Soon", 
    desc: "Launching soon page of The broker academy", 
    img: broker,
    tech: ["React",],
    liveLink: "#",
    githubLink: "#",
    category: "Frontend"
  },
];

const Works = () => {
  return (
    <div id="work">
      <div className="works-container">
        <div className="works-header">
          <h2>Featured Projects</h2>
          <p>Here are some of my recent works that showcase my skills and experience</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image-container">
                <img src={project.img} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveLink} className="project-link live-demo" target="_blank" rel="noopener noreferrer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Live Demo
                    </a>
                    <a href={project.githubLink} className="project-link github" target="_blank" rel="noopener noreferrer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9 19C4.7 20.4 4.7 16.5 3 16M15 21V17.5C15 16.5 15.1 16.1 14.5 15.5C17.3 15.2 20 14.2 20 9.5C19.9988 8.3 19.6 7.1 18.9 6.2C19.3 5.1 19.3 3.9 18.9 3C18.9 3 17.7 3 16 4.5C14.6 4.1 13.1 4.1 11.7 4.5C10 3 8.8 3 8.8 3C8.4 3.9 8.4 5.1 8.8 6.2C8.1 7.1 7.7 8.3 7.7 9.5C7.7 14.2 10.4 15.1 13.2 15.5C12.6 16.1 12.7 16.6 12.7 17.5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-category">{project.category}</div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>

                {/* Bottom action buttons */}
                <div className="project-actions">
                  <a href={project.liveLink} className="action-btn primary" target="_blank" rel="noopener noreferrer">
                    Visit Project
                  </a>
                  <a href={project.githubLink} className="action-btn secondary" target="_blank" rel="noopener noreferrer">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;