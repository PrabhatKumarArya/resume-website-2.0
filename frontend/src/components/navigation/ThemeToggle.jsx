import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      title="Toggle Theme"
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-slate-700
        bg-slate-900
        text-yellow-400
        transition-all
        duration-300
        hover:scale-110
        hover:border-cyan-400
        hover:text-cyan-400
      "
    >
      {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
};

export default ThemeToggle;