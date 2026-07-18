import portfolioImage from "../../assets/images/portfolio.png";
import resumeImage from "../../assets/images/resume.png";

export const projectData = {
  heading: "Projects",

  subHeading: "Building Solutions Through Code",

  description:
    "A collection of projects demonstrating my expertise in frontend development, backend integration, software engineering principles, and problem solving.",

  projects: [
    {
      id: 1,
      featured: true,

      title: "Resume Website 2.0",

      image: resumeImage,

      duration: "2026",

      description:
        "Developed a responsive resume website using React, Vite, Tailwind CSS, Express.js, and MongoDB while following Agile and SDLC methodologies.",

      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
      ],

      github:
        "https://github.com/yourusername/resume-website-2.0",

      live:
        "https://yourwebsite.vercel.app",

      highlights: [
        "Responsive Design",
        "Reusable Components",
        "REST API Integration",
        "Modern UI",
      ],
    },

    {
      id: 2,
      featured: true,

      title: "Portfolio Website",

      image: portfolioImage,

      duration: "2026",

      description:
        "Designed and developed a personal portfolio website to showcase projects, technical skills, education, and experience using modern web technologies.",

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],

      github:
        "https://github.com/PrabhatKumarArya/my-portfolio-website",

      live:
        "https://my-portfolio-website-5-1.vercel.app/",

      highlights: [
        "Responsive UI",
        "Professional Design",
        "Optimized Performance",
      ],
    },
  ],
};