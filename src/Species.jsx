import React, { useState } from "react";
import "./species.css";
import bengalTiger from "./assets/image/bengalTiger.jpg";
import indianElephant from "./assets/image/indianElephant.jpg";
import indianBustard from "./assets/image/indianBustard.jpg";
import indianLeopard from "./assets/image/indianLeopard.jpg";
import indianCobra from "./assets/image/indianCobra.jpg";
import indianEagle from "./assets/image/indianEagle.jpg";
import indianPeacock from "./assets/image/indianPeacock.jpg";
import indianRhinoceros from "./assets/image/indianRhinoceros.jpg";
import indianVulture from "./assets/image/indianLeopard.jpg";
import indianStarTortoise from "./assets/image/indianLeopard.jpg";
import asiaticLion from "./assets/image/asiaticLion.jpg";
import snowLeopard from "./assets/image/snowLeopard.jpg";
import slothBear from "./assets/image/slothBear.jpg";
import redPanda from "./assets/image/redPanda.jpg";
import Gharial from "./assets/image/Gharial.jpg";
import Gaur from "./assets/image/Gaur.jpg";
import rockPython from "./assets/image/rockPython.jpg";
import sarusCrane from "./assets/image/sarusCrane.jpg";
import nilagiriThar from "./assets/image/nilagiriThar.jpg";
import kingCobra from "./assets/image/kingCobra.jpg";
import indianBullfrog from "./assets/image/indianBullfrog.jpg";
import malabarGlidingFrog from "./assets/image/malabarGlidingFrog.jpg";
import indianTreeFrog from "./assets/image/indianTreeFrog.jpg";
import bicoloredFrog from "./assets/image/bicoloredFrog.jpg";
import bombayNightFrog from "./assets/image/bombayNightFrog.jpg";
import goldenFrog from "./assets/image/goldenFrog.jpg";
import indianMackerel from "./assets/image/indianMackerel.jpg";
import rohu from "./assets/image/rohu.jpg";
import indianMajorCarp from "./assets/image/indianMajorCarp.jpg";
import hilsa from "./assets/image/hilsa.jpg";
import mahseer from "./assets/image/mahseer.jpg";
import butterCatfish from "./assets/image/butterCatfish.jpg";

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
      behavior:
        "Solitary, territorial, known for their impressive hood and hiss",
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
      funFacts:
        "Popular in the pet trade. Shell patterns help with camouflage.",
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
      behavior:
        "Social, bask in groups, known for their fish-eating adaptations",
      conservationStatus: "Critically Endangered",
      funFacts:
        "Can grow up to 20 feet long. Known for their unique snout shape adapted for catching fish.",
      distributionMap: "https://example.com/gharial-map.jpg",
    },
    {
      type: "Amphibian",
      name: "Indian Bullfrog",
      scientificName: "Hoplobatrachus tigerinus",
      image: indianBullfrog,
      description:
        "The Indian bullfrog is a large species of frog found in India. They are known for their loud mating calls and are typically found in freshwater habitats.",
      habitat: "Freshwater habitats such as ponds, lakes, and streams",
      diet: "Insects, small fish, and invertebrates",
      behavior: "Nocturnal, loud croaking during the breeding season",
      conservationStatus: "Least Concern",
      funFacts:
        "Indian bullfrogs can change color during the breeding season, with males turning yellow.",
      distributionMap: "https://example.com/indian-bullfrog-map.jpg",
    },
    {
      type: "Amphibian",
      name: "Malabar Gliding Frog",
      scientificName: "Rhacophorus malabaricus",
      image: malabarGlidingFrog,
      description:
        "The Malabar gliding frog is known for its ability to glide from tree to tree. Found in the Western Ghats of India, it inhabits moist forests.",
      habitat: "Moist forests, near water bodies",
      diet: "Insects and small invertebrates",
      behavior: "Arboreal, glides using webbed feet",
      conservationStatus: "Least Concern",
      funFacts:
        "Can glide up to 10 meters between trees using its webbed feet.",
      distributionMap: "https://example.com/malabar-gliding-frog-map.jpg",
    },
    {
      type: "Amphibian",
      name: "Indian Tree Frog",
      scientificName: "Polypedates maculatus",
      image: indianTreeFrog,
      description:
        "The Indian tree frog is a common species found in the forests of India. They are known for their climbing abilities and distinctive vocalizations.",
      habitat: "Forests, gardens, and wetlands",
      diet: "Insects and small invertebrates",
      behavior: "Arboreal, active at night, and good climbers",
      conservationStatus: "Least Concern",
      funFacts:
        "Indian tree frogs have adhesive pads on their fingers and toes to help them climb.",
      distributionMap: "https://example.com/indian-tree-frog-map.jpg",
    },
    {
      type: "Amphibian",
      name: "Bicolored Frog",
      scientificName: "Clinotarsus curtipes",
      image: bicoloredFrog,
      description:
        "The Bicolored frog is easily recognized by its distinct color pattern. It is native to the Western Ghats of India.",
      habitat: "Tropical and subtropical forests, rivers, and streams",
      diet: "Insects and small invertebrates",
      behavior: "Nocturnal, often found near water bodies",
      conservationStatus: "Least Concern",
      funFacts:
        "Their bright colors act as a warning to predators about their toxicity.",
      distributionMap: "https://example.com/bicolored-frog-map.jpg",
    },
    {
      type: "Amphibian",
      name: "Bombay Night Frog",
      scientificName: "Nyctibatrachus humayuni",
      image: bombayNightFrog,
      description:
        "The Bombay night frog is a species endemic to the Western Ghats. They are known for their nocturnal habits and unique breeding behavior.",
      habitat: "Streams and rivers in tropical forests",
      diet: "Insects and small invertebrates",
      behavior: "Nocturnal, breeds in flowing water",
      conservationStatus: "Endangered",
      funFacts:
        "Males call from underwater to attract females during the breeding season.",
      distributionMap: "https://example.com/bombay-night-frog-map.jpg",
    },
    {
      type: "Amphibian",
      name: "Golden Frog",
      scientificName: "Hylarana aurantiaca",
      image: goldenFrog,
      description:
        "The Golden frog is known for its vibrant coloration. It is found in the Western Ghats and is associated with freshwater habitats.",
      habitat: "Streams, rivers, and wet forests",
      diet: "Insects and small invertebrates",
      behavior: "Diurnal, active near water bodies",
      conservationStatus: "Least Concern",
      funFacts:
        "Their bright coloration helps them blend in with the sunlight reflecting off water surfaces.",
      distributionMap: "https://example.com/golden-frog-map.jpg",
    },
    {
      type: "Fish",
      name: "Indian Mackerel",
      scientificName: "Rastrelliger kanagurta",
      image: indianMackerel,
      description:
        "The Indian mackerel is a species of mackerel found in the Indian and Western Pacific Oceans. They are an important food fish and are often caught in large numbers.",
      habitat: "Coastal waters, estuaries, and lagoons",
      diet: "Plankton, small fish, and crustaceans",
      behavior: "Schooling fish, migratory",
      conservationStatus: "Least Concern",
      funFacts:
        "Indian mackerel are known for their speed and agility in the water.",
      distributionMap: "https://example.com/indian-mackerel-map.jpg",
    },
    {
      type: "Fish",
      name: "Rohu",
      scientificName: "Labeo rohita",
      image: rohu,
      description:
        "Rohu is a species of freshwater fish found in rivers in South Asia. It is a popular fish in aquaculture and a significant source of food.",
      habitat: "Rivers, ponds, and lakes",
      diet: "Algae, plant matter, and small invertebrates",
      behavior: "Schooling fish, prefers calm waters",
      conservationStatus: "Least Concern",
      funFacts: "Rohu can grow quite large, reaching up to 2 meters in length.",
      distributionMap: "https://example.com/rohu-map.jpg",
    },
    {
      type: "Fish",
      name: "Indian Major Carp",
      scientificName: "Catla catla",
      image: indianMajorCarp,
      description:
        "The Indian major carp is a large freshwater fish found in rivers and lakes in India. It is a significant species in aquaculture.",
      habitat: "Rivers, lakes, and reservoirs",
      diet: "Plankton and plant matter",
      behavior: "Schooling fish, thrives in large water bodies",
      conservationStatus: "Least Concern",
      funFacts:
        "Catla catla is known for its rapid growth rate, making it a favorite in aquaculture.",
      distributionMap: "https://example.com/indian-major-carp-map.jpg",
    },
    {
      type: "Fish",
      name: "Hilsa",
      scientificName: "Tenualosa ilisha",
      image: hilsa,
      description:
        "Hilsa is an important migratory fish species found in the Indian subcontinent. It is prized for its taste and is a significant part of the local diet.",
      habitat: "Rivers and coastal waters",
      diet: "Plankton",
      behavior: "Migratory, moves between freshwater and saltwater",
      conservationStatus: "Least Concern",
      funFacts:
        "Hilsa fish is known for its unique taste and is considered a delicacy in many regions.",
      distributionMap: "https://example.com/hilsa-map.jpg",
    },
    {
      type: "Fish",
      name: "Mahseer",
      scientificName: "Tor tor",
      image: mahseer,
      description:
        "The Mahseer is a large freshwater fish native to South Asia. It is known for its game qualities and is popular among anglers.",
      habitat: "Rivers and lakes",
      diet: "Insects, crustaceans, and small fish",
      behavior: "Solitary, prefers fast-flowing rivers",
      conservationStatus: "Endangered",
      funFacts:
        "Mahseer is one of the toughest freshwater game fish, making it a prized catch for sport fishing.",
      distributionMap: "https://example.com/mahseer-map.jpg",
    },
    {
      type: "Fish",
      name: "Butter Catfish",
      scientificName: "Ompok bimaculatus",
      image: butterCatfish,
      description:
        "The Butter catfish is a species of catfish found in freshwater bodies across India. It is known for its smooth texture and mild flavor.",
      habitat: "Rivers, ponds, and lakes",
      diet: "Small fish, insects, and plant matter",
      behavior: "Nocturnal, bottom-dwelling",
      conservationStatus: "Least Concern",
      funFacts:
        "Butter catfish is named for its smooth and slippery body texture.",
      distributionMap: "https://example.com/butter-catfish-map.jpg",
    },
  ];

const AnimalCard = ({ animal }) => {
  return (
    <div className="speciesCard col-md-4">
      <img src={animal.image} alt={animal.name} className="card-img" />
      <div className="card-content">
        <h1 className="card-title">{animal.name}</h1>
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

export default function Species() {
    const [selectedType, setSelectedType] = useState("All");

  const filterAnimals = (type) => {
    return type === "All"
      ? animals
      : animals.filter((animal) => animal.type === type);
  };

  return (
    <div>
      <section className="species-section container-fluid"></section>
      <div className="button-group flex-wrap gap-2">
        <button onClick={() => setSelectedType("All")} className="active">All</button>
        <button onClick={() => setSelectedType("Reptile")}>Reptiles</button>
        <button onClick={() => setSelectedType("Mammal")}>Mammals</button>
        <button onClick={() => setSelectedType("Bird")}>Birds</button>
        <button onClick={() => setSelectedType("Amphibian")}>Amphibians</button>
        <button onClick={() => setSelectedType("Fish")}>Fish</button>
      </div>
      <div className="container-fluid d-flex flex-wrap justify-content-around">
        {filterAnimals(selectedType).map((animal, index) => (
          <AnimalCard key={index} animal={animal} />
        ))}
      </div>
    </div>
  );
};
