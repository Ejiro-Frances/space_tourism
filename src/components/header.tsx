import { Link, NavLink } from "react-router-dom";
import { Separator } from "./ui/separator";

const links = [
  { name: "Home", path: "/" },
  { name: "Destination", path: "/destination" },
  { name: "Crew", path: "/crew" },
  { name: "Technology", path: "/technology" },
];

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 sm:p-8 lg:pl-12 lg:pt-12 lg:pr-0">
      {/* logo navigating to home */}
      <Link to="/" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12">
        <img
          src="/shared/logo.svg"
          alt="logo"
          className="w-full h-full object-cover"
        />
      </Link>

      {/* horizontal line */}
      <span className="relative z-50 hidden lg:inline-flex w-1/3 -mr-16">
        <Separator orientation="horizontal" className="bg-white/25" />
      </span>

      {/* nav links */}
      <ul
        className="h-[96px] flex justify-center lg:justify-around items-center 
  uppercase lg:gap-12 px-6 lg:px-20 bg-white/10 lg:backdrop-blur-lg 
  tracking-[2px] font-barlow w-full lg:w-auto"
      >
        {links.map((link, i) => (
          <li key={link.name} className="h-full flex items-center">
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `flex items-center h-full transition-colors duration-300 ${
                  isActive
                    ? "border-b-2 border-white text-white"
                    : "text-white/90 hover:text-white"
                }`
              }
            >
              <span className="font-bold mr-3">
                {i.toString().padStart(2, "0")}
              </span>
              <span>{link.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
