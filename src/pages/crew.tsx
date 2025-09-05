import { useState, useEffect } from "react";
import CrewTab from "@/components/crewtab";
import { fetchData } from "@/lib/getData";
import type { CrewData } from "@/types/types";

const Crew = () => {
  const [crew, setCrew] = useState<CrewData[]>([]);

  useEffect(() => {
    fetchData().then((data) => setCrew(data.crew));
  }, []);

  return (
    <div>
      {/* main content */}
      <div className="max-w-[1110px] m-auto py-4 px-6 md:p-10 lg:px-20 space-y-10">
        <div className="flex justify-center md:justify-start gap-4">
          <span className="text-base md:text-xl lg:text-[28px] font-bold text-white/15">
            02
          </span>
          <p className="text-base md:text-xl lg:text-[28px] uppercase tracking-widest text-white">
            meet your crew
          </p>
        </div>
        <CrewTab crew={crew} />
      </div>
    </div>
  );
};

export default Crew;
