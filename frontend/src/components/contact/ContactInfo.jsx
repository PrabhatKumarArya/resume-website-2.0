import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

import { motion } from "framer-motion";

const ContactInfo = () => {
  const contactItems = [
    {
      id: 1,
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Bhopal, Madhya Pradesh, India",
    },
    {
      id: 2,
      icon: FaEnvelope,
      title: "Email",
      value: "prabhatkumararya9@email.com",
      link: "mailto:prabhatkumararya9@email.com",
    },
    {
      id: 3,
      icon: FaGithub,
      title: "GitHub",
      value: "github.com/PrabhatKumarArya",
      link: "https://github.com/PrabhatKumarArya",
    },
    {
      id: 4,
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/prabhat-kumar-arya-883a79324",
      link: "https://linkedin.com/in/prabhat-kumar-arya-883a79324",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/60
        p-8
        shadow-xl
      "
    >
      <h3 className="text-3xl font-bold text-white">
        Contact Information
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        I'm always open to discussing internships, software
        development opportunities, hackathons, or exciting projects.
        Feel free to connect with me.
      </p>

      <div className="mt-8 space-y-6">
        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex items-start gap-4"
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-cyan-500/10
                  text-cyan-400
                "
              >
                <Icon size={20} />
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  {item.title}
                </h4>

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      text-slate-400
                      transition
                      hover:text-cyan-400
                    "
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-slate-400">
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <a
        href="resume/My_Resume.pdf"
        download
        className="
          mt-10
          inline-flex
          items-center
          gap-3
          rounded-xl
          bg-cyan-500
          px-6
          py-3
          font-semibold
          text-slate-950
          transition
          hover:bg-cyan-400
        "
      >
        <FaDownload />
        Download Resume
      </a>
    </motion.div>
  );
};

export default ContactInfo;