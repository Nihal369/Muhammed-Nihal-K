import React, { useState } from "react";
import "../styles/Home.css";
import profile from "../assets/images/profile.png"; 
import mail from "../assets/images/mail.svg"
import phone from "../assets/images/phone.svg"
import location from "../assets/images/location.svg"
import Facebook from "../assets/images/facebook.svg"
import Instagram from "../assets/images/instagram.svg"
import Github from "../assets/images/github.svg"
import Twitter from "../assets/images/twitter.svg"
import resume from "../assets/images/resume.png"
import Up from "../assets/images/up.svg"
import Down from "../assets/images/down.svg"
import Design from "../assets/images/web-designer.svg"
import Development from "../assets/images/web-development.svg"
import Mobile from "../assets/images/mobile.svg"
import Camera from "../assets/images/camera.svg"

const Home = () => {
  const [expanded, setExpanded] = useState(false);
  
  const services = [
    {
      icon: Design,
      title: "Web Design",
      description: "Creating modern, responsive designs with focus on user experience and aesthetics"
    },
    {
      icon: Development,
      title: "Web Development",
      description: "Building scalable web applications using React, Django, and modern technologies"
    },
    {
      icon: Mobile,
      title: "Mobile Apps",
      description: "Developing cross-platform mobile applications with React Native"
    },
    {
      icon: Camera,
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces and seamless user experiences"
    }
  ];

  return (
    <div id="home">
      <div className="home-container">
        {/* Left Sidebar */}
        <div className={`home-sidebar ${expanded ? "expanded" : ""}`}>
          <div className="profile-section">
            <div className="profile-image-container">
              <img src={profile} alt="Muhammed Nihal K" className="profile-image" />
              <div className="profile-status"></div>
            </div>
            
            <div className="profile-info">
              <h1 className="profile-name">
                Muhammed <span className="name-accent">Nihal</span> K
              </h1>
              <p className="profile-title">Full-Stack Developer</p>
              <p className="profile-tagline">Building digital experiences that matter</p>
            </div>

            <button 
              className="expand-toggle"
              onClick={() => setExpanded(!expanded)}
            >
              <span>{expanded ? "Show Less" : "Show More"}</span>
              <img src={expanded ? Up : Down} alt="toggle" />
            </button>
          </div>

          <div className="contact-section">
            <div className="contact-item">
              <div className="contact-icon">
                <img src={mail} alt="Email" />
              </div>
              <div className="contact-info">
                <label>Email</label>
                <a href="mailto:nihalkatteripc@gmail.com">nihalkatteripc@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <img src={phone} alt="Phone" />
              </div>
              <div className="contact-info">
                <label>Phone</label>
                <a href="tel:+916282455711">+91 6282455711</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <img src={location} alt="Location" />
              </div>
              <div className="contact-info">
                <label>Location</label>
                <span>Kannur, Kerala, India</span>
              </div>
            </div>
          </div>

          <div className="social-section">
            <div className="social-links">
              <a href="https://github.com/Nihal369" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src={Github} alt="GitHub" />
                <span>GitHub</span>
              </a>
              <a href="#" className="social-link">
                <img src={Twitter} alt="Twitter" />
                <span>Twitter</span>
              </a>
              <a href="#" className="social-link">
                <img src={Instagram} alt="Instagram" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="home-main">
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-content">
              <div className="welcome-badge">
                <span>👋 Welcome to my portfolio</span>
              </div>
              <h1 className="hero-title">
                Crafting <span className="highlight">Digital Experiences</span> 
                <br />That Make an Impact
              </h1>
              <p className="hero-description">
                I'm a passionate Full-Stack Developer specializing in modern web technologies. 
                I build scalable applications with clean code, intuitive design, and exceptional 
                user experiences.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Years Learning</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Technologies</span>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="about-section">
            <div className="section-header">
              <h2>About Me</h2>
              <div className="section-divider"></div>
            </div>
            <div className="about-content">
              <p>
                I'm <strong>Muhammed Nihal K</strong>, a dedicated Full-Stack Developer with expertise in 
                <strong> React</strong> and <strong>Django</strong>. I thrive on transforming complex problems 
                into elegant, user-friendly solutions.
              </p>
              <p>
                My journey in web development started with curiosity and has evolved into a passion for 
                creating technology that makes life easier. I'm constantly learning and adapting to new 
                technologies while maintaining a strong foundation in software engineering principles.
              </p>
              <p>
                My goal is to contribute to innovative projects at leading tech companies while growing 
                as a developer and making a positive impact through technology.
              </p>
            </div>
          </section>

          {/* Services Section */}
          <section className="services-section">
            <div className="section-header">
              <h2>What I Do</h2>
              <div className="section-divider"></div>
            </div>
            <div className="services-grid">
              {services.map((service, index) => (
                <div className="service-card" key={index}>
                  <div className="service-icon">
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;