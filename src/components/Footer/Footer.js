// Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-columns">
          {/* Quick Links Section */}
          <div className="col-md-4 footer-links">
            <h5>Quick Links</h5>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact Us</a>
          </div>

          {/* Contact Section */}
          <div className="col-md-4">
            <h5>Contact Info</h5>
            <p>Rohan Corner, Paud Rd, Pratik Nagar, Shivthirth Nagar, Kothrud, Pune, Maharashtra 411038</p>
            <p>Phone: +91 9764096069</p>
            <p>Email: info@mithracowork.in</p>
          </div>

          {/* Social Media Section */}
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar Section */}
      <div className="bottom-bar">
        <p>&copy; 2024 Mithra Cowork. All rights reserved. | <a href="#privacy-policy">Privacy Policy</a></p>
      </div>
    </footer>
  );
}

export default Footer;
