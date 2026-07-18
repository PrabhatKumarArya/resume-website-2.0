import { FaTimes } from "react-icons/fa";

import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

const MobileMenu = ({
  isOpen,
  onClose,
  activeSection,
  setActiveSection,
}) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-black/60 transition-opacity duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`
          fixed top-0 right-0 z-50
          h-screen w-72
          bg-slate-950
          border-l border-slate-800
          shadow-2xl
          transform
          transition-transform
          duration-300

          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 p-5">
          <h2 className="text-xl font-bold text-cyan-400">
            Portfolio
          </h2>

          <button
            onClick={onClose}
            className="
              rounded-lg
              p-2
              transition
              hover:bg-slate-800
            "
          >
            <FaTimes size={22} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 p-6">
          <NavLinks
            mobile={true}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            onLinkClick={onClose}
          />
        </nav>

        {/* Bottom Section */}
        <div className="mt-auto border-t border-slate-800 p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">
              Theme
            </span>

            <ThemeToggle />
          </div>

          <a
            href="/resume.pdf"
            className="
              mt-6
              block
              rounded-lg
              bg-cyan-500
              py-3
              text-center
              font-semibold
              text-slate-950
              transition
              hover:bg-cyan-400
            "
          >
            Download Resume
          </a>
        </div>
      </aside>
    </>
  );
};

export default MobileMenu;