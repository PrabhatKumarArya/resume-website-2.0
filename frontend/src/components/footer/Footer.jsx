import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

import SocialLinks from "./SocialLinks";

const Footer = () => {
  const navLinks = [
    { id: 1, name: "Home", href: "#hero" },
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Skills", href: "#skills" },
    { id: 4, name: "Education", href: "#education" },
    { id: 5, name: "Experience", href: "#experience" },
    { id: 6, name: "Projects", href: "#projects" },
    { id: 7, name: "Contact", href: "#contact" },
  ];

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Brand */}
          <h2 className="text-3xl font-bold text-white">
            Prabhat Kumar Arya
          </h2>

          <p className="mt-3 text-slate-400">
            Full Stack Developer • Problem Solver • Lifelong Learner
          </p>

          {/* Navigation */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="
                  text-slate-300
                  transition
                  hover:text-cyan-400
                "
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="mt-10">
            <SocialLinks />
          </div>

          {/* Divider */}
          <div className="my-10 h-px bg-slate-800"></div>

          {/* Copyright */}
          <p className="text-sm text-slate-500">
            © {currentYear} Prabhat Kumar Arya. All rights reserved.
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="
              mt-8
              inline-flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-cyan-500
              text-slate-950
              transition-all
              duration-300
              hover:scale-110
              hover:bg-cyan-400
            "
          >
            <FaArrowUp />
          </button>
        </motion.div>

      </div>
      
    </footer>
  );
};

export default Footer;