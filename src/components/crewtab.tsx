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
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10">
      {/* left side - show selected crew details */}
      <div className="flex flex-col gap-6 lg:gap-12 py-10">
        {/* details */}
        {selectedCrew && (
          <div className="space-y-4">
            <p className="text-[2rem] font-bellefair uppercase text-[#D0D6F9]">
              {selectedCrew.role}
            </p>
            <h2 className="text-4xl lg:text-[56px] font-normal font-bellefair uppercase">
              {selectedCrew.name}
            </h2>
            <p className="font-barlow text-lg text-[#D0D6F9] leading-[1.8]">
              {selectedCrew.bio}
            </p>
          </div>
        )}

        {/* triggers */}
        <div className="flex gap-8 mt-auto">
          {crew.map((c) => (
            <button
              key={c.name}
              onClick={() => setSelectedCrew(c)}
              className={`w-2 h-2 rounded-full ${
                selectedCrew?.name === c.name ? "bg-white" : "bg-gray-400"
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
            className=""
          />
        )}
      </div>
    </section>
  );
};

export default CrewTab;
