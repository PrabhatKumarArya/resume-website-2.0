import { heroData } from "./heroData";

const HeroImage = () => {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative">
        {/* Background Glow */}
        <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl"></div>

        {/* Profile Image */}
        <img
          src={heroData.profileImage}
          alt={`${heroData.firstName} ${heroData.lastName}`}
          className="
            relative
            h-72
            w-72
            rounded-full
            border-4
            border-cyan-400
            object-cover
            shadow-2xl
            lg:h-96
            lg:w-96
          "
        />
      </div>
    </div>
  );
};

export default HeroImage;