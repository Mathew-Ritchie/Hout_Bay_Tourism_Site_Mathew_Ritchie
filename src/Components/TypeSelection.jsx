// src/components/TypeSelection.jsx
import React from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import NavLink and useLocation
import { useEstablishmentStore } from "../store/useEstablishmentStore"; // Adjust path as needed

export default function TypeSelection() {
  const establishmentTypes = useEstablishmentStore((state) => state.establishmentTypes);
  const location = useLocation(); // <--- NEW: Get current location

  // Determine if the current path is the landing page
  const isOnLandingPage = location.pathname === "/";

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8 p-4 bg-white rounded-lg shadow-sm">
      {/* NavLink for "All Establishments" - Conditionally rendered */}
      {!isOnLandingPage && ( // <--- NEW: Ternary operator for visibility
        <NavLink
          to="/" // Link to the root path for all establishments
          // className takes a function to apply active styles
          className={({ isActive }) =>
            `px-4 py-2 rounded-full text-sm font-medium shadow-md transition-colors duration-200
            ${isActive ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-800 hover:bg-gray-400"}`
          }
          end // 'end' prop ensures it's only active when the path is exactly '/'
        >
          Home
        </NavLink>
      )}

      {/* NavLinks for each establishment type */}
      {establishmentTypes.map((type) => (
        <NavLink
          to={`/establishments/${type}`} // Link to the specific type page
          key={type}
          // className takes a function to apply active styles
          className={({ isActive }) =>
            `px-4 py-2 rounded-full text-sm font-medium shadow-md transition-colors duration-200
            ${isActive ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-800 hover:bg-gray-400"}`
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </NavLink>
      ))}
    </div>
  );
}
