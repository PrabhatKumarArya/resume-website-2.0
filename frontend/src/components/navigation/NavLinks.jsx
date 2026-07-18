import { navigationLinks } from "./navigationData";

const NavLinks = ({
  mobile = false,
  activeSection,
  setActiveSection,
  onLinkClick,
}) => {
  return (
    <>
      {navigationLinks.map((link) => {
        const isActive = activeSection === link.title;

        return (
          <a
            key={link.id}
            href={link.href}
            onClick={() => {
              setActiveSection(link.title);

              if (onLinkClick) {
                onLinkClick();
              }
            }}
            className={`
              relative
              transition-all
              duration-300
              font-medium

              ${
                mobile
                  ? "block py-3 text-lg"
                  : "px-1 py-2"
              }

              ${
                isActive
                  ? "text-cyan-400"
                  : "text-slate-300 hover:text-cyan-400"
              }
            `}
          >
            {link.title}

            {isActive && (
              <span
                className="
                  absolute
                  left-0
                  bottom-0
                  h-0.5
                  w-full
                  rounded-full
                  bg-cyan-400
                "
              />
            )}
          </a>
        );
      })}
    </>
  );
};

export default NavLinks;