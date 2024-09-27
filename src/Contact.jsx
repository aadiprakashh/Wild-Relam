import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div>
      <section className="contact-section"></section>
      <div className="container-fluid d-flex align-items-center justify-content-evenly p-5">
        <div className="col-md-5 contact">
          <h1>Contact Us</h1>
          <p>
            If you have any questions or need further information about Indian
            wildlife, feel free to reach out to us. We are here to help!
          </p>

          <form action="/submit-form" method="post" className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>

        <div className="col-md-4 info">
          <div className="contact-info">
            <h2>Our Office</h2>
            <p>
              <strong>Address:</strong> 123 Wildlife Lane, Nature City, IN 45678
            </p>
            <p>
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@wildlifeindian.org"
                rel="noopener noreferrer"
              >
                info@wildlifeindian.org
              </a>
            </p>
          </div>

          <div className="social-media">
            <h2>Follow Us</h2>
            <div>
              <a
                href="https://facebook.com/wildlifeindian"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook-square"></i>
              </a>
              <a
                href="https://twitter.com/wildlifeindian"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter-square"></i>
              </a>
              <a
                href="https://instagram.com/wildlifeindian"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
