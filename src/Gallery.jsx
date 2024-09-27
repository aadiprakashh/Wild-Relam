// src/components/BentoGridGallery.js
import React from "react";
import "./Gallery.css";
import bengalTiger from "./assets/image/bengalTiger.jpg";
import indianElephant from "./assets/image/indianElephant.jpg";
import indianBustard from "./assets/image/indianBustard.jpg";
import indianLeopard from "./assets/image/indianLeopard.jpg";
import indianCobra from "./assets/image/indianCobra.jpg";
import indianEagle from "./assets/image/indianEagle.jpg";
import indianPeacock from "./assets/image/indianPeacock.jpg";
import indianRhinoceros from "./assets/image/indianRhinoceros.jpg";
import indianVulture from "./assets/image/indianVulture.jpg";
import indianStarTortoise from "./assets/image/indianStarTortoise.jpg";
const bentoItems = [
  // Replace these with actual image URLs and titles
  { src: bengalTiger, title: "Bengal Tiger" },
  { src: indianElephant, title: "Inidan Elephant" },
  { src: indianBustard, title: "Indian Bustard" },
  { src: indianLeopard, title: "indian Leopard" },
  { src: indianCobra, title: "Indian Cobra" },
  { src: indianEagle, title: "Indian Eagle" },
  { src: indianPeacock, title: "Indian Peacock" },
  { src: indianRhinoceros, title: "Rhinoceros" },
  { src: indianVulture, title: "Indian Vulture" },
  { src: indianStarTortoise, title: "Indian Star Tortoise" },
  // Add more items as needed
];

const Gallery = () => {
  return (
    <>
      <section className="gallery-section container-fluid"></section>
      <div className="bento-grid m-3 row">
        {bentoItems.map((item, index) => (
          <div key={index} className="bento-item col-md-3">
            <img src={item.src} alt={item.title} className="img-fluid" />
            <div className="bento-title">{item.title}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
