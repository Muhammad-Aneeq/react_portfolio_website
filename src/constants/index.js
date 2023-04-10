import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  starbucks,
  carrent,
  jobit,
  tripguide,
  nextjs,
  booking_app,
  ecommerce,
  metaverse,
  youtube,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React Js",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Next Js",
    icon: nextjs,
  },
  {
    name: "Express Js",
    icon: nodejs,
  },
  {
    name: "MongoDb",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer Internee",
    company_name: "Riksof Pvt ltd",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Oct-2022 - Dec-2022",
    points: [
      "Working on different projects as a web developer with other developers",
      "Debuging the code and handling errors in the code",
      "Implementing new changes in the projects as assinged",
      "learning about different things and enhancing programming skills",
    ],
  },
  {
    title: "MernStack Developer",
    company_name: "SoftApps.io",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan-2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Developing and maintaing cross platform applications using React Native and other related technologies",
      "Debuging the code  and adding new features in the projects",
      "Working on backend for creating apis and other backend functionalities",
      "Implementing responsive design",
      "Collaborating with cross-functional teams and other developers to create high-quality products",
      "participating in code in team work for better productions results",
    ],
  },
];

const projects = [
  {
    name: "FullStack Booking App",
    description:
      "Web-based platform that allows hotel guests to schedule the dates of their stay, choose rooms at the time of booking, and take payment from them.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: booking_app,
    source_code_link:
      "https://github.com/Muhammad-Aneeq/booking_app_cyclic_backend",
    website_link: "https://booking-app-frontend-kth4.vercel.app/",
  },
  {
    name: "Ecommerse Website",
    description:
      "Web application that enables people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/Muhammad-Aneeq/booking_app_frontend",
    website_link: "https://ecommerce-website-bd75a.web.app/",
  },
  {
    name: "Youtube Clone",
    description:
      "Web application similar to youtube from which users can watch multiple videos of various categories",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Materail ui",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/Muhammad-Aneeq/youtube-2.0",
    website_link: "https://youtube-2-0-mauve.vercel.app/",
  },
  {
    name: "Metaverse Website",
    description: "Animated meatverse website created using framer motion",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "framer motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: metaverse,
    source_code_link: "https://github.com/Muhammad-Aneeq/meatverse_website",
    website_link: "https://meatverse-website.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
