import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/restaurants", label: "Restaurants" },
    { path: "/search/location", label: "Search" },
  ];

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-bold text-white">
          <Link to="/" className="flex items-center">
            <span className="text-white">Cuisine</span>
            <span className="text-red-500 ml-1">Quest</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-white text-lg hover:text-red-500 transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="flex flex-col space-y-4 py-4 px-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-white text-lg hover:text-red-500 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
