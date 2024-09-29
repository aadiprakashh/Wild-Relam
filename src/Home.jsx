import React from "react";
import gal1 from "./assets/image/lion-g.jpg";
import gal2 from "./assets/image/parrot-g.jpg";
import gal3 from "./assets/image/giraff-g.jpg";
// import img1 from './assets/image/slide-snake.jpg'
import img2 from './assets/image/slide-elephant.jpg'
import img1 from "./assets/image/slide-bird.jpg";
import img4 from './assets/image/slide-deer.jpg'
import "./Home.css";
import mountain from "./assets/image/mountain-icn.png";
import vision from "./assets/image/binocular-icn.png";
import history from "./assets/image/history-icn.png";
export default function Home() {
  return (
    <div>
      <section className="hero container-fluid">
        <div className="intro col-md-6 px-5">
          <h4>WELCOME TO</h4>
          <h1>India's Wild Relam</h1>
          <p>
            Discover the untamed beauty of our planet. Dive into the rich
            tapestry of wildlife, uncover exotic destinations, and join a
            community dedicated to preserving nature's most magnificent
            creatures. Welcome to your ultimate wildlife adventure!
          </p>
          <button>Start your Adventure</button>
        </div>
      </section>

      {/* card section */}
      <section className="container aim my-5 mb-5">
        <div className="row d-flex align-items-center overflow-hidden justify-content-center gap-5">
          <div className="card col-md-3 m-2">
            <img src={mountain} alt="mountain" className="img-fluid" />
            <h4>Our Mission</h4>
            <p>
              We aim to inspire and educate our audience about the importance of
              protecting nature through engaging content and community
              involvement.
            </p>
          </div>
          <div className="card col-md-3 m-2">
            <img src={vision} alt="vision" className="img-fluid" />
            <h4>Our Vision</h4>
            <p>
              We strive to be a leading platform that connects individuals with
              the wonders of Indian wildlife, fostering a global community
              committed to conservation and sustainable living.
            </p>
          </div>
          <div className="card col-md-3 m-2">
            <img src={history} alt="history" className="img-fluid" />
            <h4>Our History</h4>
            <p>
              Since our inception, we have grown into a trusted source for
              wildlife enthusiasts, offering rich content and fostering a
              dedicated community.
            </p>
          </div>
        </div>
      </section>

      {/* carousel */}
      <section className="container mb-5">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active ">
              <img src={img1} className="w-100" alt="First Slide" />
              <div className="carousel-caption ">
                <h5>First Slide Label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
                <a role="button" href="#new" className="btn btn-warning">
                  Learn More
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="Second Slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second Slide Label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
                <a href="#new" className="btn btn-warning">
                  Learn More
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img4} className="d-block w-100" alt="Third Slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third Slide Label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
                <a href="#new" className="btn btn-warning">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>

      <section className="container mb-5 gallery justify-content-center d-flex col-md-12 m-auto pt-5">
        <div className="row flex-wrap">
          <div className="col-md-9">
            <img src={gal1} alt="Gallery1" className="img-fluid gal1" />
          </div>
          <div className="box2 col-md-3 d-flex flex-column gap-3">
            <div className="col-10">
              <img src={gal2} alt="Gallery2" className="img-fluid gal2" />
            </div>
            <div className="col-10">
              <img src={gal3} alt="Gallery3" className="img-fluid gal3 " />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
