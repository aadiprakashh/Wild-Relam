// Footer.js
import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
// import logo from '../assets/image/logo/tiger.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h4>About Us</h4>
          {/* <img src={logo} alt="logo" style={{width:'200px'}}/> */}
          <p>
            India’s Wild Realm is dedicated to showcasing the diverse wildlife
            of India and promoting conservation efforts to protect these
            magnificent creatures and their habitats.
          </p>
        </div>
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/species">Species</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: info@indiaswildrealm.com</p>
          <p>Phone: +91-1234567890</p>
        </div>
        <div className="footer-section social ">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              // className="fab fa-facebook-f"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} India’s Wild Realm. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
