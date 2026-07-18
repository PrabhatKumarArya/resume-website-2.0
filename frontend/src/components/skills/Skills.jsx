import { motion } from "framer-motion";

import { skillsData } from "./skillsData";
import SkillCategory from "./SkillCategory";

const Skills = () => {
  return (
    <section
      id="skills"
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
            My Expertise
          </p>

          <h2
            className="
              text-4xl
              font-bold
              text-white
              md:text-5xl
            "
          >
            Technical Skills
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
            These are the technologies, programming languages, frameworks,
            databases, and tools I use to build efficient, scalable, and
            user-friendly software solutions.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div
          className="
            mt-16
            grid
            gap-8
            lg:grid-cols-2
          "
        >
          {skillsData.map((category) => (
            <SkillCategory
              key={category.id}
              category={category.category}
              skills={category.skills}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;