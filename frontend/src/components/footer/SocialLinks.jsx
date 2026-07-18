import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const socialLinks = [
  {
    id: 1,
    icon: FaGithub,
    href: "https://github.com/PrabhatKumarArya",
    label: "GitHub",
  },
  {
    id: 2,
    icon: FaLinkedin,
    href: "https://linkedin.com/in/prabhat-kumar-arya-883a79324",
    label: "LinkedIn",
  },
  {
    id: 3,
    icon: FaEnvelope,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=prabhatkumararya9@gmail.com",
    label: "Email",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-5">
      {socialLinks.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-slate-700
              text-slate-300
              transition-all
              duration-300
              hover:border-cyan-400
              hover:bg-cyan-500
              hover:text-slate-950
            "
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;