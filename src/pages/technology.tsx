import { useState, useEffect } from "react";

import TechTab from "@/components/techtab";

import { fetchData } from "@/lib/getData";
import type { Techdata } from "@/types/types";

const Technology = () => {
  const [technologies, setTechnologies] = useState<Techdata[]>([]);

  useEffect(() => {
    fetchData().then((data) => setTechnologies(data.technology));
  }, []);

  return (
    <div>
      {/* main content */}
      <div className="max-w-[1275px] ml-auto py-4 px-6 md:p-10 lg:pl-20 lg:pr-0 space-y-10">
        <div className="flex justify-center md:justify-start gap-4">
          <span className="text-base md:text-xl lg:text-[28px] font-bold text-white/15">
            03
          </span>
          <p className="text-base md:text-xl lg:text-[28px] uppercase tracking-widest text-white">
            space launch 101
          </p>
        </div>
      </div>
      <TechTab technologies={technologies} />
    </div>
  );
};

export default Technology;
