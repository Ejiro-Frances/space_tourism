import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="max-w-[512px] lg:max-w-[1110px] m-auto grid grid-cols-1 lg:grid-cols-2 lg:items-end">
      <div className="flex flex-col lg:justify-between items-center lg:items-start gap-6 lg:gap-4 text-[#D0D6F9]">
        <p className="md:text-[1.75rem] uppercase leading-none">
          So, you want to travel to
        </p>
        <p className="text-[5rem] md:text-[9rem] uppercase font-bellefair leading-none">
          space
        </p>
        <p className="text-[15px] md:text-base text-[#D0D6F9] text-center lg:text-left leading-[1.8] font-barlow">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      {/* right side */}
      <div className="flex justify-center lg:justify-end items-center">
        <Link
          to="/destination"
          className="w-40 h-40 md:w-[272px] md:h-[272px] lg:w-60 lg:h-60 bg-white text-black rounded-full flex items-center justify-center mt-20 lg:mt-0 group hover:shadow-[0_0_0_40px_rgba(255,255,255,0.1)] transition-shadow duration-300 ease-in-out cursor-pointer lg:ml-auto"
        >
          <p className="uppercase font-bellefair text-2xl text-[#0B0D17] group-hover:text-[#0B0D17]/60 transition-colors duration-300 ease-in-out">
            Explore
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Home;
