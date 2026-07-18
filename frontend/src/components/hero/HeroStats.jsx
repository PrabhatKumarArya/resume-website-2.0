import { heroData } from "./heroData";

const HeroStats = () => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {heroData.stats.map((stat) => (
        <div
          key={stat.id}
          className="
            rounded-xl
            border
            border-slate-800
            bg-slate-900/50
            p-5
            text-center
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-cyan-400
          "
        >
          <h3
            className="
              text-3xl
              font-bold
              text-cyan-400
            "
          >
            {stat.number}
          </h3>

          <p
            className="
              mt-2
              text-sm
              text-slate-400
            "
          >
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;