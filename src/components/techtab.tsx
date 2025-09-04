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
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10">
      {/* left side - selected destination details */}
      <div className="flex gap-6 lg:gap-12">
        {/* triggers */}
        <div className="flex flex-col gap-8">
          {technologies.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setSelectedTechnology(t)}
              className={`flex justify-center items-center w-10 h-10 rounded-full border border-white/25  ${
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
          <div className="space-y-4">
            <p className="uppercase text-white/25 text-[2rem]">
              THE TERMINOLOGY…
            </p>
            <h2 className="text-4xl lg:text-[56px] font-bellefair font-bold uppercase">
              {selectedTechnology.name}
            </h2>
            <p className="text-[18px] font-barlow text-[#D0D6F9] leading-[1.8]">
              {selectedTechnology.description}
            </p>
          </div>
        )}
      </div>
      {/* right side - selected destination image */}
      <div className="flex items-center justify-center">
        {selectedTechnology && (
          <img
            src={selectedTechnology.images?.portrait}
            alt={selectedTechnology.name}
            className="max-w-xs lg:max-w-md"
          />
        )}
      </div>
    </section>
  );
};

export default TechTab;
