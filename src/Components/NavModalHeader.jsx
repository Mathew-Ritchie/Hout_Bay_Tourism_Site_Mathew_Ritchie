import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Weather from "./Weather";

export default function NavModalHeader() {
  // State to manage the visibility of the navigation modal.
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the navigation modal's open/close state.
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      {/* Main header bar */}
      <div className="flex items-center justify-between p-4 bg-gray-800 text-white shadow-lg">
        {/* Hamburger menu button to toggle the navigation modal */}
        <button
          className="text-white hover:text-gray-400 focus:outline-none p-2 rounded-md transition duration-300"
          onClick={toggleNav}
          aria-label="Toggle navigation menu"
        >
          {/* Hamburger icon SVG */}
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
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <Weather />
      </div>

      {/* Backdrop for the navigation modal. Closes the modal on click. */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isNavOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleNav}
        aria-hidden={!isNavOpen}
      ></div>

      {/* Navigation modal content */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white shadow-xl transform transition-transform duration-300 z-50 ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Modal header with a close button */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button
            className="text-white hover:text-gray-400 focus:outline-none p-2 rounded-md transition duration-300"
            onClick={toggleNav}
            aria-label="Close navigation menu"
          >
            {/* Close icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Modal navigation links */}
        <nav className="p-4 space-y-2">
          <NavLink
            to="/#intro-message"
            className="block p-2 rounded-md hover:bg-gray-700 transition duration-200"
            onClick={toggleNav}
          >
            Welcome
          </NavLink>
          <NavLink
            to="/#establishment-directory"
            className="block p-2 rounded-md hover:bg-gray-700 transition duration-200"
            onClick={toggleNav}
          >
            Directory
          </NavLink>

          <NavLink
            to={"/establishments/restaurants"}
            className="text-gray-300 block p-2 rounded-md hover:bg-gray-700 transition duration-200 text-center"
            onClick={toggleNav}
          >
            Restaurants
          </NavLink>
          <NavLink
            to={"/establishments/attractions"}
            className="text-gray-300 block p-2 rounded-md hover:bg-gray-700 transition duration-200 text-center"
            onClick={toggleNav}
          >
            Attractions
          </NavLink>
          <NavLink
            to={"/establishments/Health care"}
            className="text-gray-300 block p-2 rounded-md hover:bg-gray-700 transition duration-200 text-center"
            onClick={toggleNav}
          >
            Health care
          </NavLink>
          <NavLink
            to="/#interesting-stats"
            className="block p-2 rounded-md hover:bg-gray-700 transition duration-200"
            onClick={toggleNav}
          >
            Interesting stats
          </NavLink>
          <NavLink
            to="/#picture-gallery"
            className="block p-2 rounded-md hover:bg-gray-700 transition duration-200"
            onClick={toggleNav}
          >
            Gallery
          </NavLink>
        </nav>
      </div>
    </>
  );
}
