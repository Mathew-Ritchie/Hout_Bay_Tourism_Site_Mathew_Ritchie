// src/components/TypeSelection.jsx
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useEstablishmentStore } from "../store/useEstablishmentStore";

export default function LandingPageTypeSelection() {
  const establishmentTypes = useEstablishmentStore((state) => state.establishmentTypes);
  const location = useLocation();

  // Create a mapping of establishment types to their background image URLs
  // I am using placeholder images here, but you can replace these with your own URLs
  const typeBackgrounds = {
    restaurants: "https://houtbay.typepad.com/.a/6a00d8341cb28553ef014e8af78edf970d-600wi",
    "Health care":
      "https://iol-prod.appspot.com/image/e3eb44afe334c4138b788d6a56cfb3899703db48=w700",
    attractions:
      "https://www.chapmanspeakdrive.co.za/media/k2/items/cache/a522a6005d1cb428ea34ef1769cd7452_L.jpg",
    // Add more types here if needed
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8 p-4 rounded-lg">
      {/* NavLinks for each establishment type */}
      {establishmentTypes.map((type) => (
        <NavLink
          to={`/establishments/${type}`} // Link to the specific type page
          key={type}
          // The className function handles the active state styling
          className={({ isActive }) =>
            `block relative h-50 w-70 rounded-lg shadow-md transition-all duration-200 overflow-hidden 
            ${isActive ? "ring-4 ring-blue-600 ring-offset-2" : "ring-0"}`
          }
        >
          {/* A div to display the background image and text */}
          <div
            className="text-shadow-style h-full w-full bg-cover bg-center flex items-center justify-center text-center text-4xl font-semibold text-white p-2"
            style={{ backgroundImage: `url(${typeBackgrounds[type]})` }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </div>
        </NavLink>
      ))}
    </div>
  );
}
