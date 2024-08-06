import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Sanity",
    type: "Database",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "JavaScript Library",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "March 2020 - April 2021",
    points: [
      "Developing interactive and user-friendly web applications using React components.",
      "Managing component state and props to create dynamic user interfaces.",
      "Collaborating with designers to implement visually appealing and responsive designs.",
      "Writing clean, maintainable, and efficient React code following best practices.",
    ],
  },
  {
    title: "Nextjs",
    company_name: "React Framework",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Building high-performance React applications with server-side rendering (SSR) for improved SEO and user experience.",
      "Leveraging Next.js features like Image Optimization, Static Generation, and API Routes for efficient development.",
      "Integrating with backend services and databases to create robust full-stack applications.",
      "Optimizing application performance and ensuring code quality through testing and profiling.",
    ],
  },
  {
    title: "Content Creator",
    company_name: "Forest Creations",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Crafting engaging and informative content aligned with target audience preferences.",
      "Collaborating with designers and marketers to develop visually appealing content formats.",
      "Optimizing content for search engines and social media platforms to increase visibility.",
      "Analyzing content performance metrics and making data-driven improvements.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelance",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-black",
    name: "Forest Creations",
    description:
      "Developed an e-commerse web application with custom features from the ground up, including payment integration, content curation, front-end, back-end and everything in-between!",
    link: "https://forest-creations-chi.vercel.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack StackOverflow Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Stack Overflow" using Next.js, React.js, MongoDB & TypeScript.',
    link: "https://stack-overflow-nextjs-blush.vercel.app/",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Ellastrology",
    description:
      "Curated and integrated content, worked on a 2-man team to develop this entire project using Next.js and TailwindCSS.",
    link: "https://www.ellastrology.com/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Magic After Dark",
    description:
      "Worked in a team to create this e-Commerce website using React.js. My main tasks were in the UI/UX side of this application, integrating new and interesting CSS animations.",
    link: "https://www.magicafterdark.co.za/",
  },
];
