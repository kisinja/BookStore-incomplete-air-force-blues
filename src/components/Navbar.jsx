import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  // Get the current location from React Router
  const location = useLocation();
  console.log(location);

  // Navigation links
  let navLinks = [
    { label: "Home", path: "/" },
    { label: "Book Catalog", path: "/book-catalog" },
    { label: "About Us", path: "/about-us" },
    { label: "Contact", path: "/contact" },
  ];

  // State variable for toggling the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <FaBookOpen className="h-6 w-6" />
            <span className="text-xl font-bold tracking-tight">BookPlace</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((navItem) => (
              <NavLink
                to={navItem.path}
                currentPath={location.pathname}
                key={navItem.label}
              >
                {navItem.label}
              </NavLink>
            ))}

            {/* Search and User Icons */}
            <div className="flex items-center space-x-4 ml-4">
              <button className="p-1 rounded-full text-gray-500 hover:text-indigo-600 hover:bg-gray-100 transition-colors">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button className="p-1 rounded-full text-gray-500 hover:text-indigo-600 hover:bg-gray-100 transition-colors">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center cursor-pointer z-[10000] ">
            {isMenuOpen ? (
              <FaXmark onClick={() =>setIsMenuOpen(false)} size={23} className="text-indigo-600" />
            ) : (
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-indigo-600 hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex justify-center items-center">
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map((navItem) => (
              <li key={navItem.label} onClick={() => setIsMenuOpen(false)}>
                <NavLink to={navItem.path} currentPath={location.pathname}>
                  {navItem.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

// Reusable NavLink component for active state styling
const NavLink = ({ to, currentPath, children }) => {
  const isActive = currentPath === to;
  return (
    <Link
      to={to}
      className={`px-1 py-2 text-lg font-medium border-b-2 transition-colors ${
        isActive
          ? "border-indigo-600 text-indigo-600"
          : "border-transparent text-gray-500 hover:text-indigo-500 hover:border-indigo-300"
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
