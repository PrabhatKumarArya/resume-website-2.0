import { motion } from "framer-motion";

const EducationCard = ({
  icon: Icon,
  institution,
  degree,
  specialization,
  duration,
  score,
  description,
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
        relative
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
      {/* Top Row */}
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

        {/* Content */}
        <div className="flex-1">

          <h3
            className="
              text-xl
              font-bold
              text-white
            "
          >
            {institution}
          </h3>

          <h4
            className="
              mt-1
              text-lg
              font-medium
              text-cyan-400
            "
          >
            {degree}
          </h4>

          <p
            className="
              text-slate-300
            "
          >
            {specialization}
          </p>

          <div
            className="
              mt-3
              flex
              flex-wrap
              gap-4
              text-sm
            "
          >
            <span
              className="
                rounded-full
                bg-slate-800
                px-3
                py-1
                text-slate-300
              "
            >
              {duration}
            </span>

            <span
              className="
                rounded-full
                bg-cyan-500/10
                px-3
                py-1
                text-cyan-400
              "
            >
              {score}
            </span>
          </div>

          <p
            className="
              mt-4
              leading-7
              text-slate-400
            "
          >
            {description}
          </p>

        </div>

      </div>
    </motion.div>
  );
};

export default EducationCard;