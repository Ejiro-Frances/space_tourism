import { useEffect, useState } from "react";
import { fetchData } from "@/lib/getData";
import DestinationTab from "@/components/destinationtab";
import type { DestinationData } from "@/types/types";

const Destination = () => {
  const [destinations, setDestinations] = useState<DestinationData[]>([]);

  useEffect(() => {
    fetchData().then((data) => setDestinations(data.destinations));
  }, []);

  return (
    <div>
      {/* main content */}
      <div className="max-w-[1110px] m-auto py-4 px-6 md:p-10 lg:px-20 space-y-10">
        <div className="flex justify-center md:justify-start gap-4">
          <span className="text-base md:text-xl lg:text-[28px] font-bold text-white/15">
            01
          </span>
          <p className="text-base md:text-xl lg:text-[28px] uppercase tracking-widest text-white">
            Pick your destination
          </p>
        </div>
        <DestinationTab destinations={destinations} />
      </div>
    </div>
  );
};

export default Destination;
