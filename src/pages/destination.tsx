import { useEffect, useState } from "react";
import Header from "@/components/header";
import { fetchData } from "@/lib/getData";
import DestinationTab from "@/components/destinationtab";
import type { DataType } from "@/types/types";

const Destination = () => {
  const [destinations, setDestinations] = useState<DataType[]>([]);

  useEffect(() => {
    fetchData().then((data) => setDestinations(data.destinations));
  }, []);

  return (
    <div className="min-h-screen bg-[url('/destination/background-destination-mobile.jpg')] sm:bg-[url('/destination/background-destination-tablet.jpg')] lg:bg-[url('/destination/background-destination-desktop.jpg')] bg-cover bg-no-repeat text-white">
      <Header />

      {/* main content */}
      <div className="max-w-[1110px] m-auto py-4 px-6 lg:px-20 space-y-10">
        <div className="flex gap-4">
          <span className="text-[28px] font-bold text-[#3f404b]">01</span>
          <p className="text-[28px] uppercase text-sm tracking-widest text-white">
            Pick your destination
          </p>
        </div>
        <DestinationTab destinations={destinations} />
      </div>
    </div>
  );
};

export default Destination;
