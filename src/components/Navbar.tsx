import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const linkClass =
  "text-sm font-medium text-gray-800 hover:text-[#FFBF00] transition";

const activeClass =
  "text-[#FFBF00] border-b-2 border-[#FFBF00] pb-1";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [iprOpen, setIprOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-extrabold tracking-tight text-black"
        >
          Atul Kathole
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8">
          {["/", "/experience", "/bio", "/contact"].map((path, i) => (
            <li key={i}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                {path === "/"
                  ? "Home"
                  : path.replace("/", "").charAt(0).toUpperCase() +
                    path.slice(2)}
              </NavLink>
            </li>
          ))}

          {/* IPR DROPDOWN */}
          <li className="relative group">
            <span className={`${linkClass} flex items-center gap-1 cursor-pointer`}>
              IPR
              <svg
                className="w-3 h-3 mt-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </span>

            <ul className="absolute left-0 mt-3 w-48 bg-white border shadow-lg rounded
              opacity-0 invisible group-hover:opacity-100
              group-hover:visible transition-all duration-200 z-50">

              {[
                ["Publications", "/publications"],
                ["Patents", "/patents"],
                ["Copyrights", "/copyrights"],
                ["Research Grant", "/research-grant"],
              ].map(([label, link]) => (
                <li key={link}>
                  <NavLink
                    to={link}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FFBF00]/20"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        {/* DESKTOP SOCIAL */}
        <div className="hidden md:flex items-center gap-4 text-gray-700">
          {[FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF].map(
            (Icon, i) => (
              <a key={i} href="#" className="hover:text-[#FFBF00]">
                <Icon />
              </a>
            )
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4 space-y-4">
          {["/", "/experience", "/bio", "/contact"].map((path) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block ${linkClass} ${isActive ? "text-[#FFBF00]" : ""}`
              }
            >
              {path === "/"
                ? "Home"
                : path.replace("/", "").charAt(0).toUpperCase() +
                  path.slice(2)}
            </NavLink>
          ))}

          {/* MOBILE IPR */}
          <div>
            <button
              onClick={() => setIprOpen(!iprOpen)}
              className="flex justify-between w-full text-sm font-medium text-gray-800"
            >
              IPR
              <span>{iprOpen ? "−" : "+"}</span>
            </button>

            {iprOpen && (
              <div className="mt-2 pl-3 space-y-2">
                {[
                  ["Publications", "/publications"],
                  ["Patents", "/patents"],
                  ["Copyrights", "/copyrights"],
                  ["Research Grant", "/research-grant"],
                ].map(([label, link]) => (
                  <NavLink
                    key={link}
                    to={link}
                    onClick={() => setMenuOpen(false)}
                    className="block text-sm text-gray-600 hover:text-[#FFBF00]"
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* MOBILE SOCIAL */}
          <div className="flex gap-4 pt-3 text-gray-700">
            <FaInstagram />
            <FaLinkedinIn />
            <FaTwitter />
            <FaFacebookF />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
