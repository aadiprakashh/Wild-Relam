import React from "react";
import matter from "./assets/image/matter.jpg";
import aware from "./assets/image/aware.jpg";
import approach from "./assets/image/approach.jpg";
import impact from "./assets/image/deer.jpg";
import team from "./assets/image/approach.jpg";
import "./about.css";
export default function About() {
  return (
    <div id="about" className="d-flex flex-column gap-5">
      <section className="about-section container-fluid pt-3 m-auto">
        {/* <img src={aboutImage} alt="aboutImage" className='container'/> */}
      </section>

      <section className="about-info container col-md-8 pt-4 text-center">
        <h1>Welcome to India's Wild Realm</h1>
        <p>
          At India’s Wild Realm, our mission is to connect you with the
          breathtaking beauty and vital importance of India’s wildlife. Our
          website serves as a digital sanctuary where you can explore the
          diverse flora and fauna of the Indian subcontinent, learn about
          ongoing conservation efforts, and discover how you can contribute to
          preserving this rich natural heritage.
        </p>
        <p>
          Through compelling stories, stunning visuals, and insightful
          information, we aim to inspire a deeper appreciation for the natural
          world and empower you to become a steward of wildlife conservation.
          Join us on this journey to safeguard India’s wildlife for future
          generations and celebrate the wonders of nature.
        </p>
      </section>

      <section className="our-mission reason col-md-10 container p-4">
    
          <img
            src={matter}
            alt="matter"
            className="img-fluid reason-img col-md-3"
          />
          <div className="col-md-7">
            <h3>Our Mission</h3>
            <p>
              Our mission is to educate people about the rich biodiversity of
              India and inspire a collective effort towards wildlife
              conservation. We aim to create a platform that not only highlights
              the magnificence of Indian wildlife but also underscores the
              urgency of preserving their habitats for future generations.
            </p>

        </div>
      </section>

      <section className="our-story flex-wrap-reverse col-md-10  reason container p-4">

          <div className="col-md-7">
            <h3>Our Story</h3>
            <p>
              India’s Wild Realm was born from a deep passion for wildlife and a
              desire to make a difference. Our journey began with countless
              encounters with India’s majestic animals, each inspiring us to
              share these awe-inspiring moments with the world. We envisioned a
              platform where people could connect with nature, learn about
              conservation, and contribute to protecting our planet’s wild
              treasures.
            </p>
          </div>
          <img
            src={aware}
            alt="aware"
            className="img-fluid reason-img col-md-3"
          />

      </section>

      <section className="approach reason col-md-10 container p-4">

          <img
            src={approach}
            alt="matter"
            className="img-fluid reason-img col-md-3"
          />
          <div className="col-md-7">
            <h3>Our Approach</h3>
            <p>
              We believe in an innovative and inclusive approach to
              conservation. Our efforts focus on educating the public,
              supporting on-ground conservation projects, and fostering
              community involvement. By combining storytelling, scientific
              research, and grassroots initiatives, we strive to create a
              lasting impact on wildlife preservation.
            </p>
        </div>
      </section>

      <section className="impact flex-wrap-reverse container reason col-md-10 p-4">
          <div className="col-md-7">
            <h3>Our Impact</h3>
            <p>
              Since our inception, India’s Wild Realm has reached thousands of
              individuals, raising awareness about wildlife conservation and
              inspiring action. We have supported numerous conservation
              projects, collaborated with local communities, and shared
              countless success stories. Our impact is a testament to the power
              of collective effort in protecting our natural world.
            </p>
          </div>
          <img
            src={impact}
            alt="aware"
            className="img-fluid reason-img col-md-3"
          />
      </section>

      <section className="our-team reason col-md-10 container p-4">
          <img
            src={team}
            alt="matter"
            className="img-fluid reason-img col-md-3"
          />
          <div className="col-md-7">
            <h3>Meet the Team</h3>
            <p>
              Our dedicated team comprises wildlife enthusiasts, photographers,
              conservationists, and educators. Each member brings a unique
              perspective and expertise to the table, united by a common goal:
              to celebrate and safeguard India’s extraordinary wildlife.
              [Include photos and short bios of team members]
            </p>
            <div className="team"></div>
          </div>
      </section>

      <section className="get-involved">
        <div className="container">
          <h2>Get Involved</h2>
          <p>
            Join us in our mission to protect wildlife and promote awareness
            about nature. There are many ways you can contribute and make a
            difference.
          </p>
          <div className="cta-buttons">
            <button className="btn donate">Donate</button>
            <button className="btn volunteer">Volunteer</button>
            <button className="btn share">Share</button>
          </div>
        </div>
      </section>
    </div>
  );
}
