import { useState, useEffect } from "react";
import type { Techdata } from "@/types/types";

interface TechtabProps {
  technologies: Techdata[];
}

const TechTab = ({ technologies }: TechtabProps) => {
  const [selectedTechnology, setSelectedTechnology] = useState<Techdata | null>(
    null
  );

  useEffect(() => {
    if (technologies.length > 0 && !selectedTechnology) {
      setSelectedTechnology(technologies[0]);
    }
  }, [technologies, selectedTechnology]);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:py-10 lg:items-center">
      {/*  selected destination image */}
      <div className="flex items-center justify-center order-1 lg:order-2">
        {/* image on mobile and tablet*/}
        {selectedTechnology && (
          <img
            src={selectedTechnology.images?.landscape}
            alt={selectedTechnology.name}
            className="w-full lg:hidden"
          />
        )}

        {selectedTechnology && (
          <img
            src={selectedTechnology.images?.portrait}
            alt={selectedTechnology.name}
            className="hidden lg:flex lg:w-full"
          />
        )}
      </div>

      {/* selected destination details */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 order-2 lg:order-1 lg:ml-[96px] lg:mr-0">
        {/* triggers */}
        <div className="flex lg:flex-col justify-center lg:justify-start gap-8">
          {technologies.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setSelectedTechnology(t)}
              className={`flex justify-center items-center w-10 lg:w-[80px] h-10 lg:h-[80px] lg:text-[2rem] rounded-full border border-white/25 hover:border-white  ${
                selectedTechnology?.name === t.name
                  ? "bg-white text-[#0B0D17]"
                  : "bg-transparent text-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* details */}
        {selectedTechnology && (
          <div className="space-y-4 md: max-w-[512px] lg:max-w-full mx-auto lg:m-0">
            <p className="uppercase text-white/25 text-lg md:text-2xl lg:text-[2rem] text-center lg:text-left">
              THE TERMINOLOGY…
            </p>
            <h2 className="text-2xl md:text-[40px] lg:text-4xl lg:text-[56px] text-center lg:text-left font-bellefair font-bold uppercase">
              {selectedTechnology.name}
            </h2>
            <p className="text-[15px] md:text-base lg:text-[18px] text-center lg:text-left font-barlow text-[#D0D6F9] leading-[1.8] px-4 md:px-0">
              {selectedTechnology.description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechTab;
