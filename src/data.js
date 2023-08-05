import tour1 from './images/tour-1.jpeg';
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";


export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [{ id: 1,
   icon: "fas fa-wallet fa-fw", 
   title: "saving money", 
   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.", },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "march 15th,2022",
    title: "Tibet Adventure",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "china",
    duration: 6,
    cost: 2100,
  },

  {
    id: 2,
    image: tour2,
    date: "september 07th,2022",
    title: "best of java",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "indonestia",
    duration: 11,
    cost: 1400,
  },

  {
    id: 3,
    image: tour3,
    date: "december 31st,2022",
    title: "explore hong kong",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "hong kong",
    duration: 8,
    cost: 5000,
  },

  {
    id: 4,
    image: tour4,
    date: "march 05th,2023",
    title: "kenya highlights",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "kenya",
    duration: 20,
    cost: 3300,
  },

  {
    id: 5,
    image: tour5,
    date: "may 12th,2023",
    title: "jurassic park",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "america",
    duration: 9,
    cost: 4500,
  },

  {
    id: 6,
    image: tour6,
    date: "august 05th,2023",
    title: "Taj mahal",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "india",
    duration: 15,
    cost: 7000,
  },
];