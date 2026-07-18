import { FaGraduationCap, FaSchool } from "react-icons/fa";

export const educationData = {
  heading: "Education",

  subHeading: "My Academic Journey",

  description:
    "My educational background has provided me with a strong foundation in computer science, software engineering, and problem-solving while encouraging continuous learning and innovation.",

  education: [
    {
      id: 1,
      icon: FaGraduationCap,
      institution: "Indian Institute of Information Technology (IIIT) Bhopal",
      degree: "Bachelor of Technology (B.Tech)",
      specialization: "Computer Science & Engineering",
      duration: "2024 – Present",
      score: "CGPA: 7.47",
      description:
        "Studying core computer science subjects including Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, and Software Engineering.",
    },
    {
      id: 2,
      icon: FaSchool,
      institution: "Central Board Of Secondary Education(CBSE)",
      degree: "Higher Secondary (Class XII)",
      specialization: "Science",
      duration: "2022 – 2024",
      score: "85.2%",
      description:
        "Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics.",
    },
    {
      id: 3,
      icon: FaSchool,
      institution: "Central Board Of Secondary Education(CBSE)",
      degree: "Secondary School (Class X)",
      specialization: "General Education",
      duration: "2021 – 2022",
      score: "94.6%",
      description:
        "Built a strong academic foundation and developed analytical and problem-solving skills.",
    },
  ],
};