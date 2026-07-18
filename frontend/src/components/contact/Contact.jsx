import { motion } from "framer-motion";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
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
            Get In Touch
          </p>

          <h2
            className="
              text-4xl
              font-bold
              text-white
              md:text-5xl
            "
          >
            Contact Me
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
            Have an internship opportunity, project idea, or just want to
            connect? I'd be happy to hear from you.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div
          className="
            mt-16
            grid
            gap-10
            lg:grid-cols-2
          "
        >
          <ContactInfo />
          <ContactForm />
        </div>

      </div>
    </section>
  );
};

export default Contact;