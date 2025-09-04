import { useEffect, useState } from "react";
import type { DataType } from "@/types/types";

type CrewTabProps = {
  crew: DataType[];
};

const CrewTab = ({ crew }: CrewTabProps) => {
  const [selectedCrew, setSelectedCrew] = useState<DataType | null>(null);

  // Set default when destinations load
  useEffect(() => {
    if (crew.length > 0 && !selectedCrew) {
      setSelectedCrew(crew[0]);
    }
  }, [crew, selectedCrew]);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:py-10 lg:items-center">
      {/* left side - show selected crew details */}
      <div className="flex flex-col gap-6 lg:gap-12 md:py-10 max-w-[512px] lg:max-w-full mx-auto">
        {/* details */}
        {selectedCrew && (
          <div className="flex flex-col items-center lg:items-start space-y-2">
            <p className="text-lg md:text-2xl lg:text-[2rem] font-bellefair uppercase text-white/50">
              {selectedCrew.role}
            </p>
            <h2 className="text-2xl md:text-[40px] lg:text-[56px] font-normal font-bellefair uppercase">
              {selectedCrew.name}
            </h2>
            <p className="font-barlow text-[15px] md:text-base lg:text-lg text-[#D0D6F9] text-center lg:text-left leading-[1.8] mt-6">
              {selectedCrew.bio}
            </p>
          </div>
        )}

        {/* triggers */}
        <div className="flex justify-center lg:justify-start gap-8 mt-10 lg:mt-auto">
          {crew.map((c) => (
            <button
              key={c.name}
              onClick={() => setSelectedCrew(c)}
              className={`w-2.5 h-2.5 lg:w-[15px] lg:h-[15px] hover:bg-white/50 rounded-full transition-colors duration-100 ease-in-out cursor-pointer ${
                selectedCrew?.name === c.name ? "bg-white" : "bg-white/[17.44%]"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* right side- shows the selected image */}
      <div className="flex items-center justify-center">
        {selectedCrew && (
          <img
            src={selectedCrew.images?.png}
            alt={selectedCrew.name}
            className="w-full mask-b-from-90%"
          />
        )}
      </div>
    </section>
  );
};

export default CrewTab;
