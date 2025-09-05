import { useState, useEffect } from "react";
import type { DestinationData } from "@/types/types";

interface DestinationTabProps {
  destinations: DestinationData[];
}

const DestinationTab = ({ destinations }: DestinationTabProps) => {
  const [selectedDestination, setSelectedDestination] =
    useState<DestinationData | null>(null);

  // Set default when destinations load
  useEffect(() => {
    if (destinations.length > 0 && !selectedDestination) {
      setSelectedDestination(destinations[0]);
    }
  }, [destinations, selectedDestination]);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-8 lg:py-10">
      {/* left side - selected destination image */}
      <div className="flex items-center justify-center md:p-[42px]">
        {selectedDestination && (
          <img
            src={selectedDestination.images?.png}
            alt={selectedDestination.name}
            className="max-w-[150px] md:max-w-[300px] lg:max-w-[480px]"
          />
        )}
      </div>

      {/* right side - details + triggers */}
      <div className="flex flex-col gap-6 lg:gap-12 md:px-6 lg:px-10">
        {/* triggers */}
        <div className="flex justify-center lg:justify-start gap-8">
          {destinations.map((d) => (
            <button
              key={d.name}
              onClick={() => setSelectedDestination(d)}
              className={`text-sm md:text-base uppercase tracking-wide pb-2 border-b-[3px] border-transparent text-white transition-all duration-200 ease-in-out hover:border-white/50 cursor-pointer ${
                selectedDestination?.name === d.name ? "border-white" : ""
              }`}
            >
              {d.name}
            </button>
          ))}
        </div>

        {/* details */}
        {selectedDestination && (
          <div className="max-w-[514px] lg:max-w-full mx-auto space-y-4">
            <h2 className="text-[56px] md:text-[80px] lg:text-[96px] text-center lg:text-left font-bellefair font-bold uppercase">
              {selectedDestination.name}
            </h2>
            <p className="text-[15px] md:text-base lg:text-[18px] text-center lg:text-left font-barlow text-[#D0D6F9] leading-[1.8]">
              {selectedDestination.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-6 lg:mt-10 pt-6 lg:pt-10 uppercase border-t border-white/25">
              <div className="flex flex-col items-center lg:items-start gap-3">
                <p className="text-sm text-[#D0D6F9]">Avg. Distance</p>
                <p className="text-[1.75rem] font-semibold font-bellefair">
                  {selectedDestination.distance}
                </p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <p className="text-sm text-[#D0D6F9]">Est. Travel Time</p>
                <p className="text-[1.75rem] font-semibold font-bellefair">
                  {selectedDestination.travel}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DestinationTab;
