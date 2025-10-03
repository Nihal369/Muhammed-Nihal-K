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
  return (
    <div id="Home">
      <div className="home">
        <div className={`home-container-1 ${expanded ? "expanded" : ""}`}>
          <div className="profile-card">
            <img src={profile} alt="profile" className="profile-pic" />
            <div className="intro">
              <h2 className="name">Muhammed <span>Nihal</span> K</h2>
              <p>Full-Stack Developer</p>
            </div>
            <button className="expand-1" onClick={() => setExpanded(!expanded)}>
              {expanded ? "Show Less" : "Show More"}
            </button>
            <button className="expand-2" onClick={() => setExpanded(!expanded)}>
              <img src={expanded ? Up : Down} alt="toggle" className="expand-icon" />
            </button>
          </div>
          <div className="contact">
            <div className="cont">
              <img src={mail} alt="mail" />
              <div>
                <h6>E-MAIL</h6>
                <p><a href="mailto:nihalkatteripc@gmail.com" className="c">nihalkatteripc@gmail.com</a></p>
              </div>
            </div>
            <div className="cont">
              <a href="tel:+916282455711"><img src={phone} alt="phone" /></a>
              <div>
                <h6>PHONE</h6>
                <p><a href="tel:+916282455711">+91 6282455711</a></p>
              </div>
            </div>
            <div className="cont">
              <img src={location} alt="location" />
              <div>
                <h6>LOCATION</h6>
                <p>Kannur, Kerala, INDIA</p>
              </div>
            </div>
          </div>
          <div className="social">
            <a href="https://github.com/Nihal369"><img src={Github} alt="" /></a>
            <a href=""><img src={Twitter} alt="" /></a>
            <a href=""><img src={Instagram} alt="" /></a>
              
              
              
          </div>
        </div>


        <div className="home-container-2">
          <div className="intro">
            <h2 className="about">About</h2>
            <div className="saprator"></div>
            <p>I’m Muhammed Nihal K, a passionate Full-Stack Developer specializing in React and Django. 
              I enjoy building modern, scalable web applications with clean UI/UX and solid backend systems. 
              Currently, I’m sharpening my skills through real-world projects, with a long-term vision to 
              work at top global companies like Google or Microsoft. I value continuous learning, problem-solving, 
              and creating technology that makes life easier.</p>
          </div>
          {/* <div className="skills">
            <div className="skill-card">React</div>
            <div className="skill-card">Django</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">Python</div>
            <div className="skill-card">MongoDB</div>
          </div> */}


          <div className="work">
            <h2 className="about">What I'm Doing</h2>
            <div className="saprator"></div>
            <div className="service">
              <img className="service-logo" src={Design} alt="" />
              <div>
                <h4>Web design</h4>
                <p>The most modern and high-quality design made at a professional level.</p>
              </div>
            </div>
            <div className="service">
              <img className="service-logo" src={Development} alt="" />
              <div>
                <h4>Web development</h4>
                <p>High-quality development of sites at the professional level.</p>
              </div>
            </div>
            <div className="service">
              <img className="service-logo" src={Mobile} alt="" />
              <div>
                <h4>Mobile apps</h4>
                <p>Professional development of applications for iOS and Android.</p>
              </div>
            </div>
            <div className="service">
              <img className="service-logo" src={Camera} alt="" />
              <div>
                <h4>Photography</h4>
                <p>I make high-quality photos of any category at a professional level</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  );
};

export default Home;
