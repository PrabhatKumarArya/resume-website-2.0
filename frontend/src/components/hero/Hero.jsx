import { motion } from "framer-motion";

import { heroData } from "./heroData";
import HeroImage from "./HeroImage";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        px-6
        py-20
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-12
          lg:grid-cols-2
        "
      >

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p
            className="
              mb-4
              text-lg
              text-cyan-400
            "
          >
            Hello, I'm
          </p>


          <h1
            className="
              text-5xl
              font-bold
              leading-tight
              text-white
              md:text-6xl
            "
          >
            {heroData.firstName}{" "}
            <span className="text-cyan-400">
              {heroData.lastName}
            </span>
          </h1>


          <h2
            className="
              mt-4
              text-2xl
              font-semibold
              text-slate-300
            "
          >
            {heroData.title}
          </h2>


          <p
            className="
              mt-6
              max-w-xl
              text-slate-400
              leading-relaxed
            "
          >
            {heroData.subtitle}
          </p>


          {/* Buttons */}
          <HeroButtons />


          {/* Social Links */}
          <div
            className="
              mt-8
              flex
              gap-5
            "
          >
            {heroData.socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-full
                    border
                    border-slate-700
                    p-3
                    text-slate-300
                    transition-all
                    duration-300
                    hover:border-cyan-400
                    hover:text-cyan-400
                  "
                  aria-label={social.name}
                >
                  <Icon size={22} />
                </a>
              );
            })}
          </div>


          {/* Statistics */}
          <HeroStats />

        </motion.div>


        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <HeroImage />
        </motion.div>

      </div>
    </section>
  );
};


export default Hero;