import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  vuejs,
  csharp,
  flutter,
  python,
  java,
  sql,
  git,
  threejs,
  kjsce,
  book,
  mstar,
  chatSpace,
  fundoo,
  pollen,
  spot,
  sotq,
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Sql Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Flutter Developer (Intern)",
    company_name:
      "K. J. Somaiya Institute Of Engineering and Information Technology",
    icon: kjsce,
    iconBg: "#383E56",
    date: "Jun 2019 - Jul 2019",
    points: [
      "Simplified the process of Event Management in the college.",
      "Implemented an application for the college staff and coordinators.",
      "Created a cross-platform application using Flutter and Firebase.",
    ],
  },
  {
    title: "Full Stack Developer (Intern)",
    company_name: "Babasai Mission",
    icon: book,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Jun 2021",
    points: [
      "Analyzed the requirements to create a high-quality app for needy students and Babasai Mission's online library admin staff.",
      "Developed a cross-platform mobile application using Flutter and other related technologies.",
      "Updating the app as per the requirement of the staff and ensuring optimal performance.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Morningstar",
    icon: mstar,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Building and maintaining Web APIs using C#.NET and similar technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility, accessibility, and XSS attack prevention.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const awards = [
  {
    award: sotq,
    name: "Star of the Quarter Award",
    company: "Morningstar",
    image: mstar,
    height: "1/2",
    date: "Jan 2023",
  },
  {
    award: spot,
    name: "SPOT Award",
    company: "Morningstar",
    image: mstar,
    height: "full",
    date: "Feb 2022",
  },
];

const projects = [
  {
    name: "ChatSpace",
    description:
      "Built and deployed a live chatroom web application that also uses an authentication system.",
    tags: [
      {
        name: "vueJs",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chatSpace,
    source_code_link: "https://github.com/NirajBhavnani/ChatSpace",
  },
  {
    name: "Fundoo",
    description:
      "Fundoo is a rather simplistic note taking application that allows notes to be organized in folders (labels) and archived.",
    tags: [
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "expressJs",
        color: "blue-text-gradient",
      },
      {
        name: "vueJs",
        color: "green-text-gradient",
      },
      {
        name: "nodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: fundoo,
    source_code_link: "https://github.com/NirajBhavnani/Fundoo",
  },
  {
    name: "Pollen",
    description:
      "Designed a web-based application that predicts the pollen count of a region and performs future estimation of the pollen count and categorizes pollen taxa using image classification analysis.",
    tags: [
      {
        name: "django",
        color: "pink-text-gradient",
      },
      {
        name: "machineLearning",
        color: "orange-text-gradient",
      },
      {
        name: "jQuery",
        color: "blue-text-gradient",
      },
    ],
    image: pollen,
    source_code_link: "https://github.com/NirajBhavnani/Pollen",
  },
];

export { services, technologies, experiences, awards, projects };
