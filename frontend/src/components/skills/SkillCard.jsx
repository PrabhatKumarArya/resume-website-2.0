import { motion } from "framer-motion";

const SkillCard = ({ name, icon: Icon }) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.05,
      }}
      transition={{ duration: 0.25 }}
      className="
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-slate-800
        bg-slate-900/60
        px-5
        py-4
        shadow-md
        transition-all
        hover:border-cyan-400
      "
    >
      <div className="text-3xl text-cyan-400">
        {Icon ? <Icon /> : "💻"}
      </div>

      <span
        className="
          text-base
          font-medium
          text-slate-200
        "
      >
        {name}
      </span>
    </motion.div>
  );
};

export default SkillCard;