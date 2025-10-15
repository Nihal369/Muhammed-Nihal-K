import React, { useState } from "react";
import "../styles/Contact.css";
import emailIcon from "../assets/images/mail.svg";
import phoneIcon from "../assets/images/phone.svg";
import locationIcon from "../assets/images/location.svg";
import githubIcon from "../assets/images/github.svg";
// import linkedinIcon from "../assets/images/linkedin.svg";
import twitterIcon from "../assets/images/twitter.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: emailIcon,
      title: "Email",
      value: "nihalkatteripc@gmail.com",
      link: "mailto:nihalkatteripc@gmail.com"
    },
    {
      icon: phoneIcon,
      title: "Phone",
      value: "+91 6282455711",
      link: "tel:+916282455711"
    },
    {
      icon: locationIcon,
      title: "Location",
      value: "Kannur, Kerala, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: githubIcon,
      name: "GitHub",
      url: "https://github.com/Nihal369",
      username: "Nihal369"
    },
    {
      icon: githubIcon,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/muhammed-nihal-k/",
      username: "muhammed-nihal-k"
    },
    {
      icon: twitterIcon,
      name: "Twitter",
      url: "#",
      username: "nihal_dev"
    }
  ];

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>Have a project in mind or want to collaborate? I'd love to hear from you!</p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-infos">
            <div className="info-section">
              <h3>Let's talk</h3>
              <p>
                I'm always open to discussing new opportunities, 
                creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.link}
                  className="contact-items"
                  target={item.link.startsWith('http') ? "_blank" : "_self"}
                  rel={item.link.startsWith('http') ? "noopener noreferrer" : ""}
                >
                  <div className="contact-icons">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <div className="contact-text">
                    <span className="contact-title">{item.title}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-section">
              <h4>Follow me on</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="social-icon">
                      <img src={social.icon} alt={social.name} />
                    </div>
                    <div className="social-info">
                      <span className="social-name">{social.name}</span>
                      <span className="social-username">{social.username}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell me about your project or just say hello..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;