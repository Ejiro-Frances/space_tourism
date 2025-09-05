import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/header";

const Layout = () => {
  const location = useLocation();

  const backgrounds: Record<string, string> = {
    "/": "bg-[url('/home/background-home-mobile.jpg')] sm:bg-[url('/home/background-home-tablet.jpg')] lg:bg-[url('/home/background-home-desktop.jpg')]",
    "/destination":
      "bg-[url('/destination/background-destination-mobile.jpg')] sm:bg-[url('/destination/background-destination-tablet.jpg')] lg:bg-[url('/destination/background-destination-desktop.jpg')]",
    "/crew":
      "bg-[url('/crew/background-crew-mobile.jpg')] sm:bg-[url('/crew/background-crew-tablet.jpg')] lg:bg-[url('/crew/background-crew-desktop.jpg')]",
    "/technology":
      "bg-[url('/technology/background-technology-mobile.jpg')] sm:bg-[url('/technology/background-technology-tablet.jpg')] lg:bg-[url('/technology/background-technology-desktop.jpg')]",
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-[#0B0D17]">
      {/* Background crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={location.pathname + "-bg"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={`absolute inset-0 bg-cover bg-no-repeat ${
            backgrounds[location.pathname] || ""
          }`}
        />
      </AnimatePresence>

      {/* Foreground content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />

        <AnimatePresence mode="sync">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`flex-1 ${
              location.pathname !== "/technology" &&
              "max-w-[1275px] mx-auto p-6 md:p-10 lg:px-20"
            }`}
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Layout;
