import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.9,
              opacity: 0,
            }}
            transition={{ duration: 0.25 }}
            className="
              relative
              max-h-[90vh]
              w-full
              max-w-4xl
              overflow-y-auto
              rounded-2xl
              border
              border-slate-800
              bg-slate-900
              shadow-2xl
            "
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="
                absolute
                right-5
                top-5
                rounded-full
                bg-slate-800
                p-2
                text-white
                transition
                hover:bg-red-500
              "
            >
              <FaTimes />
            </button>

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="h-72 w-full object-cover"
            />

            <div className="p-8">
              {/* Title */}
              <h2 className="text-4xl font-bold text-white">
                {project.title}
              </h2>

              <p className="mt-2 text-cyan-400">
                {project.duration}
              </p>

              {/* Description */}
              <p className="mt-6 leading-8 text-slate-300">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-8">
                <h3 className="mb-3 text-xl font-semibold text-white">
                  Technologies
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-cyan-500
                        px-3
                        py-1
                        text-cyan-400
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-8">
                <h3 className="mb-3 text-xl font-semibold text-white">
                  Key Highlights
                </h3>

                <ul className="list-disc space-y-2 pl-6 text-slate-300">
                  {project.highlights.map((item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">

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

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;