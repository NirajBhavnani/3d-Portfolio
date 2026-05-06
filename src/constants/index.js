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
  nextjs,
  threejs,
  kjsce,
  bm,
  mstar,
  niq,
  dash,
  threader,
  shippr,
  chatSpace,
  fundoo,
  spot,
  spot2,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Technology Enthusiast",
    icon: mobile,
  },
  {
    title: "Problem Solver",
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
    name: "Next JS",
    icon: nextjs,
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
    name: "Flutter",
    icon: flutter,
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
    title: "Software Engineer",
    company_name: "NielsenIQ",
    icon: niq,
    iconBg: "#E6DEDD",
    date: "Jul 2025 - Present",
    points: [
      "Spearheading development and maintenance of ClaimManager, a core product enabling insurance companies and third-party adjusters to quickly determine replacement and present values for 10M+ items dating back to 1990.",
      "Building and optimizing features for direct and manual claim valuation requests, ensuring fast, accurate responses, and reducing manual processing overhead.",
      "Collaborating with back-office systems such as SpexAdmin to maintain interoperability and streamline workflows for claims adjusters, thereby improving operational efficiency.",
      "Handling deployments, troubleshooting, and performance tuning in a lean, Kanban-driven environment to achieve SLA targets, with 90% of valuation requests completed within two minutes.",
      "Actively participating in code reviews, providing valuable feedback to enhance code quality",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Morningstar",
    icon: mstar,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Jul 2025",
    points: [
      "Promoted from Associate Software Engineer to Software Engineer in July 2023.",
      "Driven the development of advanced web applications using Vue.js and related technologies.",
      "Created and maintained robust Web APIs with .NET for scalable backend systems supporting frontend applications.",
      "Proactively researched industry trends, incorporating innovative solutions, and enhancing technical skills.",
      "Demonstrated a strong commitment to code quality, performance, and security standards.",
      "Fostered a collaborative work environment through active participation in discussions and brainstorming sessions.",
    ],
  },
  {
    title: "Full Stack Developer (Intern)",
    company_name: "Babasai Mission",
    icon: bm,
    iconBg: "#383E56",
    date: "Mar 2021 - Jun 2021",
    points: [
      "Analyzed the requirements to create a high-quality app for needy students and Babasai Mission's online library admin staff.",
      "Developed a cross-platform mobile application using Flutter and other related technologies.",
      "Updating the app as per the requirement of the staff and ensuring optimal performance.",
    ],
  },
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
];

const awards = [
  {
    award: spot2,
    name: "SPOT Award",
    company: "Morningstar",
    image: mstar,
    height: "full",
    date: "Jun 2023",
  },
  {
    award: spot,
    name: "SPOT Award",
    company: "Morningstar",
    image: mstar,
    height: "full",
    date: "Feb 2022",
  },
  {
    award: sotq,
    name: "Star of the Quarter Award",
    company: "Morningstar",
    image: mstar,
    height: "1/2",
    date: "Jan 2023",
  }
];

const projects = [
  {
    name: "Dash",
    description:
      "Developed Dash, a secure video conferencing platform featuring advanced authentication, real-time interactions, screen sharing, and comprehensive meeting controls.",
    tags: [
      {
        name: "nextJs",
        color: "blue-text-gradient",
      },
      {
        name: "stream",
        color: "orange-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent",
      },
      {
        name: "clerk",
        color: "bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent",
      },
      {
        name: "vercel",
        color: "bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent",
      },
    ],
    image: dash,
    source_code_link: "https://github.com/NirajBhavnani/Dash",
  },
  {
    name: "Threader",
    description:
      "Pioneered Threader, an innovative social media platform where users can post and interact with short messages.",
    tags: [
      {
        name: "nextJs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent",
      },
      {
        name: "clerk",
        color: "bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent",
      },
      {
        name: "vercel",
        color: "bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent",
      },
    ],
    image: threader,
    source_code_link: "https://github.com/NirajBhavnani/Threader",
  },
  {
    name: "Shippr",
    description:
      "Developed and deployed a fully responsive Modern Full Stack E-commerce application with payments functionality.",
    tags: [
      {
        name: "nextJs",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "orange-text-gradient",
      },
      {
        name: "sanity",
        color: "pink-text-gradient",
      },
      {
        name: "vercel",
        color: "green-text-gradient",
      },
    ],
    image: shippr,
    source_code_link: "https://github.com/NirajBhavnani/Shippr",
  },
  {
    name: "ChatSpace",
    description:
      "Built and deployed a live chatroom web application using an authentication system.",
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
      "A simplistic note-taking application that allows notes to be organized in folders (labels) and archived.",
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
  }
];

export { services, technologies, experiences, awards, projects };
