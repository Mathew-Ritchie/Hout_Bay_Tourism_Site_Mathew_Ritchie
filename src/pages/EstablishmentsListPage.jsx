// src/pages/EstablishmentsListPage.jsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { useEstablishmentStore } from "../store/useEstablishmentStore"; // Correct path to your Zustand store
import EstablishmentCards from "../Components/EstablishmentCards"; // Correct path to your components
import TypeSelection from "../Components/TypeSelection";
import "./App.css"; // Keep your global styles
import CategorySelection from "../Components/CategorySelection";
import ScrollToTopBtn from "../Components/ScrollUpButton";

export default function EstablishmentsListPage() {
  // Get the 'type' parameter from the URL
  const { type } = useParams();

  // Select state and actions from the Zustand store
  const filteredEstablishments = useEstablishmentStore((state) => state.filteredEstablishments); // <-- NEW: Select filteredEstablishments
  const loading = useEstablishmentStore((state) => state.loading);
  const error = useEstablishmentStore((state) => state.error);
  const message = useEstablishmentStore((state) => state.message);
  const applyTypeFilter = useEstablishmentStore((state) => state.applyTypeFilter); // <-- NEW: Select applyTypeFilter action
  const fetchInitialEstablishments = useEstablishmentStore(
    (state) => state.fetchInitialEstablishments
  );
  const allEstablishments = useEstablishmentStore((state) => state.allEstablishments);

  // Fetch establishments or apply filter whenever the 'type' URL parameter changes
  useEffect(() => {
    // If allEstablishments data is not yet loaded, fetch it.
    // This handles cases where user directly lands on /establishments/:type
    if (allEstablishments.length === 0 && !loading) {
      // Add !loading to prevent multiple fetches
      console.log("EstablishmentsListPage.jsx: allEstablishments is empty, fetching initial data.");
      fetchInitialEstablishments();
    }

    // Always apply the filter based on the current URL 'type' whenever the component renders
    // or 'type' changes. This ensures the list updates correctly after back navigation.
    console.log(`EstablishmentsListPage.jsx: Applying filter for type: ${type || "All"}`);
    applyTypeFilter(type || null); // Pass type, or null for "All Establishments"
  }, [type, applyTypeFilter, fetchInitialEstablishments, allEstablishments.length, loading]); // Added dependencies

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [type]);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-4 md:mb-6">
        {type ? `${type.charAt(0).toUpperCase() + type.slice(1)}` : "All Establishments"}
      </h1>

      {/* Render the TypeSelection component */}
      <TypeSelection />
      <CategorySelection />

      {/* Render the reusable EstablishmentCards component */}
      <EstablishmentCards
        establishments={filteredEstablishments} // <-- NEW: Pass filteredEstablishments
        loading={loading}
        error={error}
        message={message}
      />
      <ScrollToTopBtn />
    </div>
  );
}
