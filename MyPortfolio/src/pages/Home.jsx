import React from "react";
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

const Home = () => {
  return (
    <div id="Home">
      <div className="home">
        <div className="home-container-1">
          <div className="profile-card">
            <img src={profile} alt="profile" className="profile-pic" />
            <div className="intro">
            <h2 className="name">Muhammed <span>Nihal</span> K</h2>
            <p>Full-Stack Developer</p>
          </div>
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
              <img src={phone} alt="phone" />
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
              <img src={Github} alt="" />
              <img src={Twitter} alt="" />
              <img src={Instagram} alt="" />
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
          <div className="skills">
            <div className="skill-card">React</div>
            <div className="skill-card">Django</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">Python</div>
            <div className="skill-card">MongoDB</div>
          </div>
          <div className="work">
            <h4>What I'm Doing</h4>
          </div>
        </div>
      </div>
    </div>
    
    
  );
};

export default Home;
