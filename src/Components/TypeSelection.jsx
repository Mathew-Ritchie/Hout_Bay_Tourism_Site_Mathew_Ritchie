import React from "react";

import { useEstablishmentStore } from "../store/useEstablishmentStore";

export default function TypeSelection() {
  const establishmentTypes = useEstablishmentStore((state) => state.establishmentTypes);
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {" "}
      {/* <--- Added div for buttons and Tailwind classes */}
      {establishmentTypes.map((type) => (
        <button
          key={type} // <--- NEW: Add key prop
          className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200 text-sm font-medium shadow-md"
        >
          {type.charAt(0).toUpperCase() + type.slice(1)} {/* <--- Optional: Capitalize type */}
        </button>
      ))}
    </div>
  );
}
