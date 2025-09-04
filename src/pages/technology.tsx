import { useState, useEffect } from "react";

import Header from "@/components/header";
import TechTab from "@/components/techtab";

import { fetchData } from "@/lib/getData";
import type { Techdata } from "@/types/types";

const Technology = () => {
  const [technologies, setTechnologies] = useState<Techdata[]>([]);

  useEffect(() => {
    fetchData().then((data) => setTechnologies(data.technology));
  }, []);

  return (
    <div className="min-h-screen bg-[url('/technology/background-technology-mobile.jpg')] sm:bg-[url('/technology/background-technology-tablet.jpg')] lg:bg-[url('/technology/background-technology-desktop.jpg')] bg-cover bg-no-repeat text-white">
      <Header />

      {/* main content */}
      <div className="max-w-[1275px] ml-auto py-4 px-6 lg:pl-20 lg:pr-0 space-y-10">
        <div className="flex gap-4">
          <span className="text-[28px] font-bold text-[#3f404b]">03</span>
          <p className="text-[28px] uppercase text-sm tracking-widest text-white">
            space launch 101
          </p>
        </div>
        <TechTab technologies={technologies} />
      </div>
    </div>
  );
};

export default Technology;
