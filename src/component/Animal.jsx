import React, { useState } from "react";
import "./animal.css";
import bengalTiger from "../assets/image/bengalTiger.jpg";
import indianElephant from "../assets/image/indianElephant.jpg";
import indianBustard from "../assets/image/indianBustard.jpg";
import indianLeopard from "../assets/image/indianLeopard.jpg";
import indianCobra from "../assets/image/indianCobra.jpg";
import indianEagle from "../assets/image/indianEagle.jpg";
import indianPeacock from "../assets/image/indianPeacock.jpg";
import indianRhinoceros from "../assets/image/indianRhinoceros.jpg";
import indianVulture from "../assets/image/indianLeopard.jpg";
import indianStarTortoise from "../assets/image/indianLeopard.jpg";
import asiaticLion from "../assets/image/asiaticLion.jpg";
import snowLeopard from "../assets/image/snowLeopard.jpg";
import slothBear from "../assets/image/slothBear.jpg";
import redPanda from "../assets/image/redPanda.jpg";
import Gharial from "../assets/image/Gharial.jpg";
import Gaur from "../assets/image/Gaur.jpg";
import rockPython from "../assets/image/rockPython.jpg";
import sarusCrane from "../assets/image/sarusCrane.jpg";
import nilagiriThar from "../assets/image/nilagiriThar.jpg";
import kingCobra from "../assets/image/kingCobra.jpg";

const animals = [
  {
    type: "Mammal",
    name: "Bengal Tiger",
    scientificName: "Panthera tigris tigris",
    image: bengalTiger,
    description:
      "The Bengal tiger is one of the largest tiger subspecies and is primarily found in India. They inhabit grasslands,rainforests, mangroves, and deciduous forests.",
    habitat: "Grasslands, rainforests, mangroves, deciduous forests",
    diet: "Deer, wild boar, water buffalo",
    behavior: "Solitary, territorial, strong swimmers",
    conservationStatus: "Endangered",
    funFacts:
      "Roar can be heard up to 3 km away. Unique stripe patterns for identification.",
    distributionMap: "https://example.com/bengal-tiger-map.jpg",
  },
  {
    type: "Mammal",
    name: "Indian Elephant",
    scientificName: "Elephas maximus indicus",
    image: indianElephant,
    description:
      "Indian elephants are smaller than their African counterparts and have smaller ears. They are found in forested regionsacross India.",
    habitat: "Forests, grasslands",
    diet: "Grasses, leaves, bamboo, bark, fruits",
    behavior: "Social, live in herds, led by a matriarch",
    conservationStatus: "Endangered",
    funFacts:
      "Can consume up to 150 kg of food per day. Known for their intelligence and memory.",
    distributionMap: "https://example.com/indian-elephant-map.jpg",
  },
  {
    type: "Mammal",
    name: "Indian Leopard",
    scientificName: "Panthera pardus fusca",
    image: indianLeopard,
    description:
      "Indian leopards are adaptable predators found in a variety of habitats across India, from forests to deserts.",
    habitat: "Forests, grasslands, deserts",
    diet: "Deer, wild boar, monkeys, rodents",
    behavior: "Solitary, nocturnal, excellent climbers",
    conservationStatus: "Vulnerable",
    funFacts:
      "Can leap up to 6 meters. Each leopard has a unique pattern of rosettes.",
    distributionMap: "https://example.com/indian-leopard-map.jpg",
  },
  {
    type: "Mammal",
    name: "Asiatic Lion",
    scientificName: "Panthera leo persica",
    image: asiaticLion,
    description:
      "Asiatic lions are slightly smaller than African lions and are found in the Gir Forest of India.",
    habitat: "Dry deciduous forests, grasslands",
    diet: "Deer, wild boar, buffalo",
    behavior: "Social, live in prides, territorial",
    conservationStatus: "Endangered",
    funFacts:
      "Only a few hundred left in the wild. Known for their smaller manes compared to African lions.",
    distributionMap: "https://example.com/asiatic-lion-map.jpg",
  },
  {
    type: "Mammal",
    name: "Snow Leopard",
    scientificName: "Panthera uncia",
    image: snowLeopard,
    description:
      "Snow leopards are elusive big cats found in the mountainous regions of India.",
    habitat: "Mountains, alpine regions",
    diet: "Blue sheep, ibex, marmots",
    behavior: "Solitary, crepuscular, well-adapted to cold",
    conservationStatus: "Vulnerable",
    funFacts:
      "Can jump up to 50 feet. Their thick fur and long tail help them survive in cold climates.",
    distributionMap: "https://example.com/snow-leopard-map.jpg",
  },
  {
    type: "Mammal",
    name: "Indian Rhinoceros",
    scientificName: "Rhinoceros unicornis",
    image: indianRhinoceros,
    description:
      "The Indian rhinoceros, also known as the one-horned rhinoceros, is native to the Indian subcontinent.",
    habitat: "Grasslands, swamps",
    diet: "Grasses, leaves, fruits",
    behavior: "Solitary, territorial, known for their semi-aquatic lifestyle",
    conservationStatus: "Vulnerable",
    funFacts:
      "Can run at speeds of up to 40 km/h. Known for their thick, armor-like skin.",
    distributionMap: "https://example.com/indian-rhinoceros-map.jpg",
  },
  {
    type: "Mammal",
    name: "Sloth Bear",
    scientificName: "Melursus ursinus",
    image: slothBear,
    description:
      "Sloth bears are unique to the Indian subcontinent and are known for their shaggy fur and long, curved claws.",
    habitat: "Forests, grasslands",
    diet: "Insects, fruits, honey",
    behavior: "Nocturnal, solitary, skilled climbers",
    conservationStatus: "Vulnerable",
    funFacts:
      "Can suck up insects with their specially adapted lips. Known for their loud snorting noises.",
    distributionMap: "https://example.com/sloth-bear-map.jpg",
  },
  {
    type: "Mammal",
    name: "Nilgiri Tahr",
    scientificName: "Nilgiritragus hylocrius",
    image: nilagiriThar,
    description:
      "The Nilgiri Tahr is a mountain goat endemic to the Nilgiri Hills and the southern part of the Western Ghats in India.",
    habitat: "Mountain slopes, grasslands",
    diet: "Grasses, shrubs",
    behavior: "Social, live in herds, adept climbers",
    conservationStatus: "Endangered",
    funFacts:
      "Males are significantly larger than females. Known for their distinctive curved horns.",
    distributionMap: "https://example.com/nilgiri-tahr-map.jpg",
  },
  {
    type: "Mammal",
    name: "Gaur",
    scientificName: "Bos gaurus",
    image: Gaur,
    description:
      "The Gaur, also known as the Indian Bison, is the largest species of wild cattle, native to South Asia.",
    habitat: "Forests, grasslands",
    diet: "Grasses, leaves, fruits",
    behavior: "Social, live in small herds, diurnal",
    conservationStatus: "Vulnerable",
    funFacts: "Can weigh up to 1,500 kg. Known for their strength and size.",
    distributionMap: "https://example.com/gaur-map.jpg",
  },
  {
    type: "Mammal",
    name: "Red Panda",
    scientificName: "Ailurus fulgens",
    image: redPanda,
    description:
      "The Red Panda is a small arboreal mammal found in the eastern Himalayas and southwestern China.",
    habitat: "Temperate forests",
    diet: "Bamboo, fruits, insects",
    behavior: "Solitary, crepuscular, excellent climbers",
    conservationStatus: "Endangered",
    funFacts:
      "Known for their reddish-brown fur and bushy tail. They use their tails for balance and warmth.",
    distributionMap: "https://example.com/red-panda-map.jpg",
  },
  {
    type: "Bird",
    name: "Indian Peacock",
    scientificName: "Pavo cristatus",
    image: indianPeacock,
    description:
      "The Indian Peacock, or Indian Peafowl, is known for its iridescent blue and green plumage and long tail feathers.",
    habitat: "Forests, grasslands, farmlands",
    diet: "Seeds, insects, fruits",
    behavior:
      "Social, territorial, known for their elaborate courtship displays",
    conservationStatus: "Least Concern",
    funFacts:
      "National bird of India. Males display their feathers to attract females.",
    distributionMap: "https://example.com/indian-peacock-map.jpg",
  },
  {
    type: "Bird",
    name: "Great Indian Bustard",
    scientificName: "Ardeotis nigriceps",
    image: indianBustard,
    description:
      "The Great Indian Bustard is one of the heaviest flying birds, found in the Indian subcontinent.",
    habitat: "Grasslands, semi-arid regions",
    diet: "Seeds, insects, small reptiles",
    behavior: "Ground-dwelling, solitary or in small groups",
    conservationStatus: "Critically Endangered",
    funFacts:
      "Known for their slow reproduction rate. Males perform a unique display during mating season.",
    distributionMap: "https://example.com/great-indian-bustard-map.jpg",
  },
  {
    type: "Bird",
    name: "Sarus Crane",
    scientificName: "Grus antigone",
    image: sarusCrane,
    description:
      "The Sarus Crane is the tallest flying bird in the world, found in parts of the Indian subcontinent.",
    habitat: "Wetlands, grasslands",
    diet: "Aquatic plants, grains, insects",
    behavior: "Monogamous, known for their elaborate courtship dances",
    conservationStatus: "Vulnerable",
    funFacts: "Pairs mate for life. Known for their loud trumpeting calls.",
    distributionMap: "https://example.com/sarus-crane-map.jpg",
  },
  {
    type: "Bird",
    name: "Indian Vulture",
    scientificName: "Gyps indicus",
    image: indianVulture,
    description:
      "The Indian Vulture is a medium-sized scavenger bird found in South Asia.",
    habitat: "Open areas, near human settlements",
    diet: "Carrion",
    behavior: "Social, found in colonies, known for their scavenging habits",
    conservationStatus: "Critically Endangered",
    funFacts:
      "Play a crucial role in the ecosystem by cleaning up carcasses. Population declined due to veterinary drug poisoning.",
    distributionMap: "https://example.com/indian-vulture-map.jpg",
  },
  {
    type: "Bird",
    name: "Indian Eagle Owl",
    scientificName: "Bubo bengalensis",
    image: indianEagle,
    description:
      "The Indian Eagle Owl is a large owl species found in the Indian subcontinent.",
    habitat: "Forests, rocky hills, scrublands",
    diet: "Small mammals, birds, reptiles",
    behavior: "Nocturnal, territorial, known for their deep hooting calls",
    conservationStatus: "Least Concern",
    funFacts:
      "Can rotate their heads up to 270 degrees. Known for their distinctive ear tufts.",
    distributionMap: "https://example.com/indian-eagle-owl-map.jpg",
  },
  {
    type: "Reptile",
    name: "Indian Cobra",
    scientificName: "Naja naja",
    image: indianCobra,
    description:
      "The Indian Cobra is a highly venomous snake species found across the Indian subcontinent.",
    habitat: "Forests, grasslands, human settlements",
    diet: "Rodents, frogs, birds",
    behavior: "Solitary, known for their hood display when threatened",
    conservationStatus: "Least Concern",
    funFacts:
      "Symbol of Indian culture and mythology. Venom is used in traditional medicine.",
    distributionMap: "https://example.com/indian-cobra-map.jpg",
  },
  {
    type: "Reptile",
    name: "King Cobra",
    scientificName: "Ophiophagus hannah",
    image: kingCobra,
    description:
      "The King Cobra is the world's longest venomous snake, found in forests across India and Southeast Asia.",
    habitat: "Forests, grasslands, mangroves",
    diet: "Other snakes, lizards, small mammals",
    behavior: "Solitary, territorial, known for their impressive hood and hiss",
    conservationStatus: "Vulnerable",
    funFacts:
      "Can reach lengths of up to 18 feet. Known for their intelligence and ability to stand up to one-third of their bodylength.",
    distributionMap: "https://example.com/king-cobra-map.jpg",
  },
  {
    type: "Reptile",
    name: "Indian Rock Python",
    scientificName: "Python molurus",
    image: rockPython,
    description:
      "The Indian Rock Python is a large, non-venomous python species found in the Indian subcontinent.",
    habitat: "Forests, grasslands, swamps",
    diet: "Mammals, birds, reptiles",
    behavior: "Solitary, primarily nocturnal, excellent swimmers",
    conservationStatus: "Near Threatened",
    funFacts:
      "Can grow up to 20 feet long. Known for their powerful constriction method to subdue prey.",
    distributionMap: "https://example.com/indian-rock-python-map.jpg",
  },
  {
    type: "Reptile",
    name: "Indian Star Tortoise",
    scientificName: "Geochelone elegans",
    image: indianStarTortoise,
    description:
      "The Indian Star Tortoise is a small tortoise species known for its star-patterned shell.",
    habitat: "Dry areas, scrub forests, grasslands",
    diet: "Herbivorous, grasses, fruits, flowers",
    behavior: "Solitary, diurnal, known for their slow movement",
    conservationStatus: "Vulnerable",
    funFacts: "Popular in the pet trade. Shell patterns help with camouflage.",
    distributionMap: "https://example.com/indian-star-tortoise-map.jpg",
  },
  {
    type: "Reptile",
    name: "Gharial",
    scientificName: "Gavialis gangeticus",
    image: Gharial,
    description:
      "The Gharial is a critically endangered crocodilian species with a long, narrow snout, found in the rivers of the Indian subcontinent.",
    habitat: "Freshwater rivers",
    diet: "Fish",
    behavior: "Social, bask in groups, known for their fish-eating adaptations",
    conservationStatus: "Critically Endangered",
    funFacts:
      "Can grow up to 20 feet long. Known for their unique snout shape adapted for catching fish.",
    distributionMap: "https://example.com/gharial-map.jpg",
  },
];

const AnimalCard = ({ animal }) => {
  return (
    <div className="speciesCard col-md-4">
      <img src={animal.image} alt={animal.name} className="card-img" />
      <div className="card-content">
        <h2 className="card-title">{animal.name}</h2>
        <p className="card-text">{animal.description}</p>
        <div className="card-details">
          <div className="detail">
            <i className="fas fa-home"></i>
            <span>
              <b>Habitat:</b> {animal.habitat}
            </span>
          </div>
          <div className="detail">
            <i className="fas fa-paw"></i>
            <span>
              <b>Diet:</b> {animal.diet}
            </span>
          </div>
          <div className="detail">
            <i className="fas fa-users"></i>
            <span>
              <b>Behavior:</b> {animal.behavior}
            </span>
          </div>
          <div className="detail">
            <i className="fas fa-exclamation-triangle"></i>
            <span>
              <b>Conservation Status:</b> {animal.conservationStatus}
            </span>
          </div>
          <div className="detail">
            <i className="fas fa-info-circle"></i>
            <span>
              <b>Fun Facts:</b> {animal.funFacts}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Animal = () => {
  return (
    <div className="contianer-fluid d-flex flex-wrap justify-content-around">
      {animals.map((animal, index) => (
        <AnimalCard key={index} animal={animal} />
      ))}
    </div>
  );
};

export default Animal;
