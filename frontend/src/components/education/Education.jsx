import { motion } from "framer-motion";

import { educationData } from "./educationData";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <section
      id="education"
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
            Learning Journey
          </p>

          <h2
            className="
              text-4xl
              font-bold
              text-white
              md:text-5xl
            "
          >
            {educationData.heading}
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
            {educationData.subHeading}
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
            {educationData.description}
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="mt-16 space-y-8">
          {educationData.education.map((item) => (
            <EducationCard
              key={item.id}
              icon={item.icon}
              institution={item.institution}
              degree={item.degree}
              specialization={item.specialization}
              duration={item.duration}
              score={item.score}
              description={item.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;