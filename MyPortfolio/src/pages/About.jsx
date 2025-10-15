import React from "react";
import "../styles/About.css";
import Book from "../assets/images/book.svg";
// import Briefcase from "../assets/images/briefcase.svg";

const About = () => {
  const education = [
    {
      year: "2010",
      title: "10th Grade",
      institution: "Sree Sankara Vidya Peetam, Mattannur",
      description: "Completed secondary education with focus on core subjects"
    },
    {
      year: "2022",
      title: "12th Grade",
      institution: "Sree Sankara Vidya Peetam, Mattannur",
      description: "Higher secondary education in Commerce stream"
    },
    {
      year: "2025",
      title: "B.Com Computer Application",
      institution: "Naher Arts and Science College, Kanhirode",
      description: "Bachelor's degree in Commerce with Computer Application specialization"
    }
  ];

  const skills = [
    { name: "React", level: 85 },
    { name: "Django", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "PostgreSQL", level: 70 },
    { name: "MongoDB", level: 65 },
    { name: "JavaScript (ES6+)", level: 85 },
    { name: "HTML & CSS", level: 90 },
    { name: "REST APIs", level: 80 }
  ];

  const certifications = [
    "Full Stack Development - Udemy",
    "React Developer - Coursera",
    "Python & Django - Codecademy"
  ];

  return (
    <section id="resume">
      <div className="resume-header">
        <h2 className="resume-title">Resume</h2>
        <p className="resume-subtitle">My education, skills, and professional journey</p>
      </div>

      <div className="resume-container">
        {/* Left Column - Education & Experience */}
        <div className="resume-left">
          {/* Education */}
          <div className="resume-section">
            <div className="section-header">
              <div className="section-icon">
                <img src={Book} alt="Education" />
              </div>
              <h3>Education</h3>
            </div>
            
            <div className="timeline">
              {education.map((edu, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">{edu.year}</span>
                    <h4 className="timeline-title">{edu.title}</h4>
                    <p className="timeline-institution">{edu.institution}</p>
                    <p className="timeline-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="resume-section">
            <div className="section-header">
              <div className="section-icon">
                <img src={Book} alt="Experience" />
              </div>
              <h3>Experience</h3>
            </div>
            
            <div className="experience-content">
              <div className="fresher-card">
                <div className="fresher-icon">🚀</div>
                <h4>Seeking Opportunities</h4>
                <p>Enthusiastic and motivated fresher looking for entry-level positions in web development.</p>
                <div className="fresher-highlights">
                  <div className="highlight-item">
                    <span className="highlight-dot"></span>
                    <span>Quick Learner</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-dot"></span>
                    <span>Adaptable</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-dot"></span>
                    <span>Eager to Contribute</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Skills & Certifications */}
        <div className="resume-right">
          {/* Skills */}
          <div className="resume-section">
            <h3>Technical Skills</h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="resume-section">
            <h3>Certifications</h3>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <div className="certification-item" key={index}>
                  <div className="certification-icon">📜</div>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="resume-section">
            <h3>Interests</h3>
            <div className="interests-container">
              {["Web Development", "UI/UX Design", "Open Source", "Tech Blogging", "Learning New Technologies"].map((interest, index) => (
                <span key={index} className="interest-tag">{interest}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;