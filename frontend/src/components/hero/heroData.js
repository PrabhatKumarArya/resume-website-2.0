import heroImage from "../../assets/images/hero.jpeg";
import resumePDF from "../../assets/resume/My_Resume.pdf";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export const heroData = {
  firstName: "Prabhat",
  lastName: "Kumar Arya",

  title: "Full Stack Developer",

  subtitle:
    "Computer Science Engineering student passionate about building scalable web applications, solving real-world problems, and continuously learning modern technologies.",

  profileImage: heroImage,

  resume: "/resume/My_Resume.pdf",

  cta: {
    primary: "Hire Me",
    secondary: "Download Resume",
  },

  socialLinks: [
    {
      id: 1,
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/PrabhatKumarArya",
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/prabhat-kumar-arya-883a79324",
    },
    {
      id: 3,
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:prabhatkumararya9@email.com",
    },
  ],

  stats: [
    {
      id: 1,
      number: "2+",
      title: "Years Learning",
    },
    {
      id: 2,
      number: "10+",
      title: "Projects",
    },
    {
      id: 3,
      number: "400+",
      title: "DSA Problems",
    },
  ],
};