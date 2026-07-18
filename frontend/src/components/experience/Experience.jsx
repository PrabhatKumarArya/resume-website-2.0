import { motion } from "framer-motion";

import { experienceData } from "./experienceData";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section
      id="experience"
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
            Professional Journey
          </p>

          <h2
            className="
              text-4xl
              font-bold
              text-white
              md:text-5xl
            "
          >
            {experienceData.heading}
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
            {experienceData.subHeading}
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
            {experienceData.description}
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="mt-16 space-y-8">
          {experienceData.experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              icon={experience.icon}
              role={experience.role}
              organization={experience.organization}
              duration={experience.duration}
              location={experience.location}
              technologies={experience.technologies}
              responsibilities={experience.responsibilities}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;