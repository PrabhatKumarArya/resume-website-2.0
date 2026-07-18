import { motion } from "framer-motion";

const AboutCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
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
      "
    >
      {/* Icon */}
      <div
        className="
          mb-5
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
      <h3
        className="
          mb-3
          text-xl
          font-semibold
          text-white
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          leading-7
          text-slate-400
        "
      >
        {description}
      </p>
    </motion.div>
  );
};

export default AboutCard;