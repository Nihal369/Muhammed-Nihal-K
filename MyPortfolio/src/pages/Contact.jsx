import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5"></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="socials">
        <a href="https://github.com/Nihal369">GitHub</a>
        <a href="https://www.linkedin.com/in/muhammed-nihal-k/">LinkedIn</a>
        <a href="nihalkatteripc@gmail.com">Email</a>
      </div>
    </div>
  );
};

export default Contact;
