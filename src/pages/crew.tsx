import { useState, useEffect } from "react";
import Header from "@/components/header";
import CrewTab from "@/components/crewtab";
import { fetchData } from "@/lib/getData";
import type { DataType } from "@/types/types";

const Crew = () => {
  const [crew, setCrew] = useState<DataType[]>([]);

  useEffect(() => {
    fetchData().then((data) => setCrew(data.crew));
  }, []);

  return (
    <div className="min-h-screen bg-[url('/crew/background-crew-mobile.jpg')] sm:bg-[url('/crew/background-crew-tablet.jpg')] lg:bg-[url('/crew/background-crew-desktop.jpg')] bg-cover bg-no-repeat text-white">
      <Header />

      {/* main content */}
      <div className="max-w-[1110px] m-auto py-4 px-6 lg:px-20 space-y-10">
        <div className="flex gap-4">
          <span className="text-[28px] font-bold text-[#3f404b]">02</span>
          <p className="text-[28px] uppercase text-sm tracking-widest text-white">
            meet your crew
          </p>
        </div>
        <CrewTab crew={crew} />
      </div>
    </div>
  );
};

export default Crew;
