import { useState } from "react";
import { motion } from "framer-motion";

import { projectData } from "./projectData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section
        id="projects"
        className="
          min-h-screen
          bg-slate-950
          px-6
          py-20
        "
      >
        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p
              className="
                mb-2
                font-semibold
                uppercase
                tracking-widest
                text-cyan-400
              "
            >
              Portfolio Showcase
            </p>

            <h2
              className="
                text-4xl
                font-bold
                text-white
                md:text-5xl
              "
            >
              {projectData.heading}
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-3xl
                text-lg
                text-slate-400
              "
            >
              {projectData.subHeading}
            </p>

            <p
              className="
                mx-auto
                mt-6
                max-w-4xl
                leading-8
                text-slate-300
              "
            >
              {projectData.description}
            </p>
          </motion.div>

          {/* Project Cards */}
          <div
            className="
              mt-16
              grid
              gap-8
              lg:grid-cols-2
            "
          >
            {projectData.projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={openProject}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={closeProject}
      />
    </>
  );
};

export default Projects;