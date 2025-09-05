import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Separator } from "./ui/separator";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const links = [
  { name: "Home", path: "/" },
  { name: "Destination", path: "/destination" },
  { name: "Crew", path: "/crew" },
  { name: "Technology", path: "/technology" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="flex justify-between items-center h-[88px] md:h-[96px] lg:h-[138px] p-6 sm:py-8 sm:pr-0 lg:pl-12 lg:pt-12 lg:pr-0 relative">
      {/* Logo */}
      <Link to="/" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12">
        <img
          src="/shared/logo.svg"
          alt="logo"
          className="w-full h-full object-cover"
        />
      </Link>

      {/* Horizontal line for desktop */}
      <span className="relative z-50 hidden lg:inline-flex w-1/3 -mr-16">
        <Separator orientation="horizontal" className="bg-white/25" />
      </span>

      {/* Hamburger / Close button for mobile */}
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="md:hidden cursor-pointer z-50"
      >
        {isMenuOpen ? (
          <IoCloseOutline className="w-6 h-6 text-[#D0D6F9]" />
        ) : (
          <RxHamburgerMenu className="w-6 h-6 text-[#D0D6F9]" />
        )}
      </button>

      {/* Desktop nav links */}
      <ul
        className="hidden md:flex justify-center lg:justify-around items-center 
        uppercase md:gap-6 lg:gap-12 h-[96px] pl-6 lg:px-20 bg-white/10 lg:backdrop-blur-lg 
        tracking-[2px] font-barlow w-[85%] lg:w-auto"
      >
        {links.map((link, i) => (
          <li key={link.name} className="h-full flex items-center">
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-3 h-full transition-colors duration-300 border-b-[3px] border-transparent hover:border-white/50 text-white ${
                  isActive ? "border-white" : ""
                }`
              }
            >
              <span className="font-bold lg:mr-1">
                {i.toString().padStart(2, "0")}
              </span>
              <span>{link.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile slide-out menu */}
      {isMenuOpen && (
        <nav
          ref={menuRef}
          className="absolute top-0 right-0 md:hidden w-3/4 h-screen bg-white/10 backdrop-blur-lg z-40"
        >
          <ul className="flex flex-col gap-6 uppercase tracking-[2px] font-barlow p-6 pt-20 text-white">
            {links.map((link, i) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center transition-colors duration-300 ${
                      isActive
                        ? "border-r-2 border-white text-white"
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
        </nav>
      )}
    </header>
  );
};

export default Header;
