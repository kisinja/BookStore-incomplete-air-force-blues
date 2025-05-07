import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

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
            <NavLink to="/" currentPath={location.pathname}>
              Home
            </NavLink>
            <NavLink to="/book-catalog" currentPath={location.pathname}>
              Book Catalog
            </NavLink>
            <NavLink to="/about-us" currentPath={location.pathname}>
              About Us
            </NavLink>
            <NavLink to="/contact" currentPath={location.pathname}>
              Contact
            </NavLink>

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
          <div className="md:hidden flex items-center">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-indigo-600 hover:bg-gray-100 transition-colors">
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
          </div>
        </div>
      </div>
    </nav>
  );
};

// Reusable NavLink component for active state styling
const NavLink = ({ to, currentPath, children }) => {
  const isActive = currentPath === to;
  return (
    <Link
      to={to}
      className={`px-1 py-2 text-sm font-medium border-b-2 transition-colors ${
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
