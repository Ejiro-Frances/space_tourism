import { useState, useEffect } from "react";
import type { CrewData } from "@/types/types";

type CrewTabProps = {
  crew: CrewData[];
};

const CrewTab = ({ crew }: CrewTabProps) => {
  const [index, setIndex] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!crew.length) return;

    const { clientX, currentTarget } = e;
    const middle = currentTarget.clientWidth / 2;

    if (clientX < middle) {
      // left side → go back
      setIndex((prev) => (prev === 0 ? crew.length - 1 : prev - 1));
    } else {
      // right side → go forward
      setIndex((prev) => (prev === crew.length - 1 ? 0 : prev + 1));
    }
  };

  // keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!crew.length) return;

      if (e.key === "ArrowLeft") {
        setIndex((prev) => (prev === 0 ? crew.length - 1 : prev - 1));
      }
      if (e.key === "ArrowRight") {
        setIndex((prev) => (prev === crew.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [crew.length]);

  // guard
  if (!crew.length) {
    return (
      <div className="flex items-center justify-center h-full text-white">
        Loading crew...
      </div>
    );
  }

  const current = crew[index];

  return (
    <section
      onClick={handleClick}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:py-10 lg:items-center w-full h-full cursor-pointer select-none relative"
    >
      {/* left side - details */}
      <div className="flex flex-col gap-6 lg:gap-12 md:py-10 max-w-[512px] lg:max-w-full mx-auto">
        <div className="flex flex-col items-center lg:items-start space-y-2">
          <p className="text-lg md:text-2xl lg:text-[2rem] font-bellefair uppercase text-white/50">
            {current.role}
          </p>
          <h2 className="text-2xl md:text-[40px] lg:text-[56px] font-normal font-bellefair uppercase">
            {current.name}
          </h2>
          <p className="font-barlow text-[15px] md:text-base lg:text-lg text-[#D0D6F9] text-center lg:text-left leading-[1.8] mt-6">
            {current.bio}
          </p>
        </div>

        {/* dot buttons */}
        <div className="flex justify-center lg:justify-start gap-8 mt-10 lg:mt-auto z-10">
          {crew.map((c, i) => (
            <button
              key={c.name}
              onClick={(e) => {
                e.stopPropagation(); // prevent body click from firing
                setIndex(i);
              }}
              className={`w-2.5 h-2.5 lg:w-[15px] lg:h-[15px] rounded-full transition-colors duration-200 ease-in-out cursor-pointer ${
                index === i ? "bg-white" : "bg-white/20 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* right side - image */}
      <div className="flex items-center justify-center">
        <img
          src={current.images?.png}
          alt={current.name}
          className="w-full mask-b-from-90%"
        />
      </div>

      {/* invisible left/right click areas */}
      <div className="absolute inset-y-0 left-0 w-1/2" />
      <div className="absolute inset-y-0 right-0 w-1/2" />
    </section>
  );
};

export default CrewTab;
