import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="
        overflow-hidden
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/60
        shadow-lg
        transition-all
        hover:border-cyan-400
      "
    >
      {/* Project Image */}
      <div className="relative">
        <div className="overflow-hidden rounded-t-2xl bg-slate-800">

        <div className="flex gap-2 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>

        <img
            src={project.image}
            alt={project.title}
            className="w-full object-contain"
        />

        </div>

        {project.featured && (
          <span
            className="
              absolute
              left-4
              top-4
              rounded-full
              bg-cyan-500
              px-3
              py-1
              text-sm
              font-semibold
              text-slate-950
            "
          >
            Featured
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6">

        {/* Title */}
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-white">
            {project.title}
          </h3>

          <span className="text-sm text-slate-400">
            {project.duration}
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 leading-7 text-slate-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-cyan-500
                px-3
                py-1
                text-sm
                text-cyan-400
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-2
              rounded-lg
              border
              border-slate-700
              px-5
              py-3
              text-white
              transition
              hover:border-cyan-400
              hover:text-cyan-400
            "
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-2
              rounded-lg
              bg-cyan-500
              px-5
              py-3
              font-semibold
              text-slate-950
              transition
              hover:bg-cyan-400
            "
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

          <button
            onClick={() => onViewDetails(project)}
            className="
              rounded-lg
              border
              border-cyan-500
              px-5
              py-3
              text-cyan-400
              transition
              hover:bg-cyan-500
              hover:text-slate-950
            "
          >
            View Details
          </button>

        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;