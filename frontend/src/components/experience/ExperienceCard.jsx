import { motion } from "framer-motion";

const ExperienceCard = ({
  icon: Icon,
  role,
  organization,
  duration,
  location,
  technologies,
  responsibilities,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/60
        p-6
        shadow-lg
        transition-all
        hover:border-cyan-400
      "
    >
      {/* Header */}
      <div className="flex items-start gap-4">

        {/* Icon */}
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-cyan-500/10
            text-cyan-400
          "
        >
          <Icon size={28} />
        </div>

        {/* Title */}
        <div className="flex-1">

          <h3 className="text-2xl font-bold text-white">
            {role}
          </h3>

          <p className="mt-1 text-lg text-cyan-400">
            {organization}
          </p>

          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-300">
              {duration}
            </span>

            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-cyan-400">
              {location}
            </span>
          </div>

        </div>

      </div>

      {/* Technologies */}
      <div className="mt-6">
        <h4 className="mb-3 text-lg font-semibold text-white">
          Technologies
        </h4>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
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
      </div>

      {/* Responsibilities */}
      <div className="mt-6">
        <h4 className="mb-3 text-lg font-semibold text-white">
          Responsibilities
        </h4>

        <ul className="list-disc space-y-2 pl-5 text-slate-400">
          {responsibilities.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;