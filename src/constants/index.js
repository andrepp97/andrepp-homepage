import thumbMovielabs from "../assets/images/movielabs.jpg";
import thumbTwidd from "../assets/images/twidd.png";
import thumbPokedex from "../assets/images/pokedex.png";

export const timeline = [
  {
    year: "1997",
    text: "Born and raised in Blitar, East Java, Indonesia.",
  },
  {
    year: "2015",
    text: "Initiated studies in Management Information Systems at Ciputra University Surabaya, before pivoting early to focus entirely on software development.",
  },
  {
    year: "2019",
    text: "Completed an intensive Fullstack Software Development Bootcamp at Purwadhika Coding School, specializing in modern JavaScript frameworks.",
  },
  {
    year: "2020",
    text: "Launched professional career as a Frontend Developer at Nawa Data Solutions.",
  },
  {
    year: "2022",
    text: "Joined Majoo Indonesia as a Frontend Engineer, building scalable user interfaces for the POS platform.",
  },
  {
    year: "2023",
    text: "Frontend Engineer at Steradian Data Optima, delivering high-security, high-performance web applications for enterprise banking clients.",
  },
];

export const projects = [
  {
    id: "pokedex",
    href: "https://pokedex-andrepp.vercel.app/",
    title: "Pokédex",
    thumbnail: thumbPokedex,
    description:
      "A simple Pokémon website built with React, TypeScript, Tailwind CSS and PokéAPI.",
  },
  {
    id: "movielabs",
    href: "https://movielabs.vercel.app/",
    title: "Movielabs",
    thumbnail: thumbMovielabs,
    description:
      "A movie database website built with Next.js, Framer Motion and The Movie Database (TMDb) API.",
  },
  {
    id: "twidd",
    href: "https://twidd.vercel.app/",
    title: "Twidd",
    thumbnail: thumbTwidd,
    description:
      "A twitter-inspired website built with Next.js, Tailwind CSS and Firebase.",
  },
];
