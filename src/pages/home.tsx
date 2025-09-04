import { Link } from "react-router-dom";
import Header from "@/components/header";

const Home = () => {
  return (
    <div className="min-h-screen bg-[url('/home/background-home-mobile.jpg')] sm:bg-[url('/home/background-home-tablet.jpg')] lg:bg-[url('/home/background-home-desktop.jpg')] bg-cover bg-no-repeat text-white">
      <Header />

      {/* main content */}
      <main className="py-32 px-40">
        <section className="max-w-[1110px] m-auto grid grid-cols-1 lg:grid-cols-2 items-end">
          <div className="flex flex-col justify-between gap-4 text-[#D0D6F9]">
            <p className="uppercase leading-none">So, you want to travel to</p>
            <p className="text-[9rem] uppercase font-bellefair leading-none">
              space
            </p>
            <p className="">
              u want to go to space, you might as well genuinely go to outer
              space and not hover kind of on the edge of it. Well sit back, and
              relax because we’ll give you a truly out of this world experience!
            </p>
          </div>

          {/* right side */}
          <Link
            to="/destination"
            className="flex justify-center lg:justify-end"
          >
            <div className="w-40 h-40 lg:w-60 lg:h-60 bg-white text-black rounded-full flex items-center justify-center mt-20 lg:mt-0 group hover:shadow-[0_0_0_40px_rgba(255,255,255,0.1)] transition-shadow duration-300 ease-in-out cursor-pointer ml-auto">
              <p className="uppercase font-bellefair text-2xl text-[#0B0D17] group-hover:text-[#0B0D17]/60 transition-colors duration-300 ease-in-out">
                Explore
              </p>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Home;
