import { useState } from "react";
import { FaBars } from "react-icons/fa";

import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  // Controls the mobile drawer
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Controls the highlighted navigation item
  const [activeSection, setActiveSection] = useState("Home");

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold tracking-wide text-cyan-400 transition hover:text-cyan-300"
          >
            Prabhat.dev
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            <NavLinks
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-lg
                bg-cyan-500
                px-5
                py-2.5
                font-semibold
                text-slate-950
                transition-all
                duration-300
                hover:scale-105
                hover:bg-cyan-400
              "
            >
              Resume
            </a>

            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={openMenu}
            aria-label="Open navigation menu"
            className="
              rounded-lg
              p-2
              transition
              hover:bg-slate-800
              lg:hidden
            "
          >
            <FaBars size={24} />
          </button>
        </div>
      </header>
      
      {/* Mobile Navigation */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </>
  );
};

export default Navbar;