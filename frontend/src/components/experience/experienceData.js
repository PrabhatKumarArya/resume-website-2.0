import {
  FaLaptopCode,
  FaCode,
  FaUsers,
} from "react-icons/fa";

export const experienceData = {
  heading: "Experience",

  subHeading: "Building Skills Through Projects & Collaboration",

  description:
    "Although I am currently pursuing my B.Tech, I have gained practical experience by developing real-world applications, participating in hackathons, and continuously improving my software development skills.",

  experiences: [
    {
      id: 1,
      icon: FaLaptopCode,
      role: "Full Stack Developer",
      organization: "Personal Projects",
      duration: "2025 – Present",
      location: "Remote",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      responsibilities: [
        "Developed responsive web applications using modern technologies.",
        "Designed scalable project architecture following Agile and SDLC principles.",
        "Built reusable UI components and maintained clean, modular code.",
      ],
    },

    {
      id: 2,
      icon: FaCode,
      role: "Hackathon Participant",
      organization: "Innovation & Hackathons",
      duration: "2025 – Present",
      location: "India",
      technologies: [
        "System Design",
        "JavaScript",
        "React",
      ],
      responsibilities: [
        "Designed innovative software solutions for real-world problems.",
        "Collaborated on project planning, architecture, and presentations.",
        "Applied problem-solving and rapid prototyping during development.",
      ],
    },

    {
      id: 3,
      icon: FaUsers,
      role: "Open Source & Self Learning",
      organization: "Personal Learning",
      duration: "Ongoing",
      location: "Remote",
      technologies: [
        "Git",
        "GitHub",
        "DSA",
      ],
      responsibilities: [
        "Solved 400+ DSA problems to strengthen problem-solving skills.",
        "Practiced Git workflows and version control using GitHub.",
        "Continuously explored modern web development technologies.",
      ],
    },
  ],
};