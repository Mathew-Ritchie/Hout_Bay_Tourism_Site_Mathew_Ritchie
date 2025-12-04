// src/components/TypeSelection.jsx
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useEstablishmentStore } from "../store/useEstablishmentStore";

import restaurant from "../assets/fishandchips.jpg";
import beautyAndWellness from "/beauty-and-wellness.jpg";
import attractions from "../assets/sealisland.jpg";
import beaches from "../assets/beach_hout_bay.jpg";

export default function LandingPageTypeSelection() {
  const establishmentTypes = useEstablishmentStore((state) => state.establishmentTypes);
  const location = useLocation();

  const typeBackgrounds = {
    restaurants: restaurant,
    "Beauty and wellness": beautyAndWellness,
    attractions: attractions,
    beaches: beaches,
  };

  return (
    <div id="establishment-directory">
      <h2 className="landing-sub-title text-center ">Establishment Directory</h2>
      <h3 className="text-center pb-5 ">(pick a category)</h3>
      <div className="flex flex-wrap justify-center gap-4 mb-5 px-4 rounded-lg md:pb-10">
        {establishmentTypes.map((type) => (
          <NavLink
            to={`/establishments/${type}`}
            key={type}
            className="group block relative h-50 w-70 rounded-lg shadow-md transition-all duration-200 overflow-hidden"
          >
            {/* A div to display the background image */}
            <div
              className="text-shadow-style h-full w-full bg-cover bg-center flex items-center justify-center text-center text-4xl font-semibold text-white p-2"
              style={{ backgroundImage: `url(${typeBackgrounds[type]})` }}
            >
              {/* This inner div contains the text and will be on top of the overlay */}
              <div className="z-10">{type.charAt(0).toUpperCase() + type.slice(1)}</div>
            </div>
            {/* Opaque gray overlay that appears on hover */}
            <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
