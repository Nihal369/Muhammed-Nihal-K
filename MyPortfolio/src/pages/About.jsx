import React from "react";
import "../styles/About.css";
import Book from "../assets/images/book.svg"

const Resume = () => {
  return (
    <section id="resume">
      <h2 className="resume-title">Resume</h2>
      <div className="resume-container">

        {/* Education */}
        <div className="education">
          <div className="mark">
            <div className="book">
              <img src={Book}alt="" />
            </div>
            <div className="line">
              <div className="dot-1">
                <div className="dot"></div>
              </div>
              <div className="dot-2">
                <div className="dot"></div>
              </div>
              <div className="dot-3">
                <div className="dot"></div>
              </div>
            </div>
          </div>
          <div className="edu">
            <h3>Education</h3>
            <ul>
              <li class="timeline-item">
                <strong>2010</strong> – 10th Passed  
                <br /> School: Sree Sankara Vidya Peetam, Mattannur
              </li>
              <li class="timeline-item">
                <strong>2022</strong> – 12th Passed  
                <br /> School: Sree Sankara Vidya Peetam, Mattannur
              </li>
              <li class="timeline-item">
                <strong>2025</strong> – Degree (B.Com CA) Completed  
                <br /> College: Naher Arts and Science, Kanhirode
              </li>
            </ul>
          </div>
          
        </div>

        {/* Experience */}
        <div className="experience">
          <h3>Experience</h3>
          <p>Fresher</p>
        </div>

        {/* Skills */}
        <div className="skills">
          {[
            "React",
            "Django",
            "Node.js",
            "PostgreSQL",
            "MongoDB",
            "JavaScript (ES6+)",
            "HTML & CSS",
            "REST APIs",
          ].map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
