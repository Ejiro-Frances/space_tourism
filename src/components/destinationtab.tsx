import { useState, useEffect } from "react";
import type { DataType } from "@/types/types";

interface DestinationTabProps {
  destinations: DataType[];
}

const DestinationTab = ({ destinations }: DestinationTabProps) => {
  const [selectedDestination, setSelectedDestination] =
    useState<DataType | null>(null);

  // Set default when destinations load
  useEffect(() => {
    if (destinations.length > 0 && !selectedDestination) {
      setSelectedDestination(destinations[0]);
    }
  }, [destinations, selectedDestination]);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10">
      {/* left side - selected destination image */}
      <div className="flex items-center justify-center">
        {selectedDestination && (
          <img
            src={selectedDestination.images?.png}
            alt={selectedDestination.name}
            className="max-w-xs lg:max-w-md"
          />
        )}
      </div>

      {/* right side - details + triggers */}
      <div className="flex flex-col gap-6 lg:gap-12 px-10">
        {/* triggers */}
        <div className="flex gap-8">
          {destinations.map((d) => (
            <button
              key={d.name}
              onClick={() => setSelectedDestination(d)}
              className={`uppercase tracking-wide pb-2 ${
                selectedDestination?.name === d.name
                  ? "border-b-2 border-white"
                  : "text-gray-400"
              }`}
            >
              {d.name}
            </button>
          ))}
        </div>

        {/* details */}
        {selectedDestination && (
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-[96px] font-bellefair font-bold uppercase">
              {selectedDestination.name}
            </h2>
            <p className="text-[18px] font-barlow text-[#D0D6F9] leading-[1.8]">
              {selectedDestination.description}
            </p>

            <div className="grid grid-cols-2 gap-12 mt-10 pt-10 uppercase border-t border-white/25">
              <div className="flex flex-col gap-3">
                <p className="text-sm text-[#D0D6F9]">Avg. Distance</p>
                <p className="text-2xl font-semibold font-bellefair">
                  {selectedDestination.distance}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-sm text-[#D0D6F9]">Est. Travel Time</p>
                <p className="text-2xl font-semibold font-bellefair">
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
