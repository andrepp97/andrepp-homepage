import thumbMovielabs from "../assets/images/movielabs.webp";
import thumbTwidd from "../assets/images/twidd.png";
import thumbTjermin from "../assets/images/tjermin.webp";
import thumbNawadata from "../assets/images/nawadata.webp";

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
    id: "tjermin-marketplace",
    href: "https://tjermin-marketplace.andreputerap.workers.dev/",
    title: "Tjermin Marketplace",
    thumbnail: thumbTjermin,
    description:
      "A marketplace website built with Next.js, Redux, Tanstack Query, Framer Motion, Tailwind CSS and Cloudflare Workers.",
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
  {
    id: "nawadata",
    href: "https://nawadata.com/",
    title: "Nawa Data Solutions",
    thumbnail: thumbNawadata,
    description:
      "An IT Consulting company website built with PHP CodeIgniter.",
  },
];
