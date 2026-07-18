import { FaDownload, FaPaperPlane } from "react-icons/fa";
import { heroData } from "./heroData";

const HeroButtons = () => {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      {/* Hire Me Button */}
      <a
        href="#contact"
        className="
          inline-flex
          items-center
          gap-2
          rounded-xl
          bg-cyan-500
          px-6
          py-3
          font-semibold
          text-slate-950
          transition-all
          duration-300
          hover:scale-105
          hover:bg-cyan-400
        "
      >
        <FaPaperPlane />
        {heroData.cta.primary}
      </a>

      {/* Resume Button */}
      <a
            href={heroData.resume}
            download="My_Resume.pdf"
            className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-cyan-500
                px-6
                py-3
                font-semibold
                text-cyan-400
                transition-all
                duration-300
                hover:bg-cyan-500
                hover:text-slate-950
            "
            >
            <FaDownload />
            {heroData.cta.secondary}
        </a>
    </div>
  );
};

export default HeroButtons;