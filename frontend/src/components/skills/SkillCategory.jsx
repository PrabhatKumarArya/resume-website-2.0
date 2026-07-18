import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const SkillCategory = ({ category, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/50
        p-6
        shadow-lg
      "
    >
      {/* Category Heading */}
      <h3
        className="
          mb-6
          text-2xl
          font-bold
          text-cyan-400
        "
      >
        {category}
      </h3>

      {/* Skills Grid */}
      <div
        className="
          grid
          gap-4
          sm:grid-cols-2
        "
      >
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;