// src/pages/EstablishmentsListPage.jsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { useEstablishmentStore } from "./store/useEstablishmentStore"; // Correct path to your Zustand store
import EstablishmentCards from "./Components/EstablishmentCards"; // Correct path to your components
import TypeSelection from "./Components/TypeSelection";
import "./App.css"; // Keep your global styles

export default function EstablishmentsListPage() {
  // Get the 'type' parameter from the URL
  const { type } = useParams();

  // Select state and actions from the Zustand store
  const filteredEstablishments = useEstablishmentStore((state) => state.filteredEstablishments); // <-- NEW: Select filteredEstablishments
  const loading = useEstablishmentStore((state) => state.loading);
  const error = useEstablishmentStore((state) => state.error);
  const message = useEstablishmentStore((state) => state.message);
  const applyTypeFilter = useEstablishmentStore((state) => state.applyTypeFilter); // <-- NEW: Select applyTypeFilter action

  // Fetch establishments or apply filter whenever the 'type' URL parameter changes
  useEffect(() => {
    console.log(`EstablishmentsListPage.jsx: Applying filter for type: ${type || "All"}`);
    // Call the store action to apply the filter based on the URL parameter
    // This will update activeTypeFilter and then run _applyClientSideFilters
    applyTypeFilter(type || null); // Pass type, or null if type is undefined (for "All Establishments" if routed directly)

    // Note: fetchInitialEstablishments should be called once, typically on the LandingPage or App.jsx mount,
    // to ensure allEstablishments data is present for client-side filtering.
  }, [type, applyTypeFilter]); // Re-run effect if 'type' or 'applyTypeFilter' changes

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-8 md:mb-12">
        {type
          ? `${type.charAt(0).toUpperCase() + type.slice(1)} Establishments`
          : "All Establishments"}
      </h1>

      {/* Render the TypeSelection component */}
      <TypeSelection />

      {/* Render the reusable EstablishmentCards component */}
      <EstablishmentCards
        establishments={filteredEstablishments} // <-- NEW: Pass filteredEstablishments
        loading={loading}
        error={error}
        message={message}
      />
    </div>
  );
}
