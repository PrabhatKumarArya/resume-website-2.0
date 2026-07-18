import resumePDF from "../../assets/resume/My_Resume.pdf";
import { motion } from "framer-motion";

import { aboutData } from "./aboutData";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-950 px-6 py-20"
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
          <p className="mb-2 text-cyan-400 font-semibold tracking-widest uppercase">
            Get To Know Me
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            {aboutData.heading}
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-400">
            {aboutData.subHeading}
          </p>
        </motion.div>

        {/* About Description */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-4xl text-center"
        >
          <p className="leading-8 text-slate-300">
            {aboutData.description}
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {aboutData.cards.map((card) => (
            <AboutCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <a
            href="/resume/My_Resume.pdf"
            download="My_Resume.pdf"
            className="
              rounded-xl
              bg-cyan-500
              px-8
              py-3
              font-semibold
              text-slate-950
              transition-all
              duration-300
              hover:scale-105
              hover:bg-cyan-400
            "
          >
            Download Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;