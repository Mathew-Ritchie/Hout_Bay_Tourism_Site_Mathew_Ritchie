// src/pages/LandingPage.jsx
import { useEffect } from "react";
import { useEstablishmentStore } from "./store/useEstablishmentStore";
import "./App.css"; // Keep this if you have global Tailwind base styles or other essentials here

// Assuming your image is in src/assets/
// <--- NEW: Import your image
import Intro from "./Components/Intro";
import TypeSelection from "./Components/TypeSelection";

function LandingPage() {
  // Add establishmentTypes to the destructuring list
  const establishments = useEstablishmentStore((state) => state.establishments);
  const loading = useEstablishmentStore((state) => state.loading);
  const error = useEstablishmentStore((state) => state.error);
  const message = useEstablishmentStore((state) => state.message);
  const fetchInitialEstablishments = useEstablishmentStore(
    (state) => state.fetchInitialEstablishments
  );

  useEffect(() => {
    console.log(
      "LandingPage.jsx: useEffect triggered, calling fetchInitialEstablishments from store."
    );
    fetchInitialEstablishments();
  }, [fetchInitialEstablishments]);

  return (
    // Main container for the landing page
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      {/* Page Title */}
      <Intro />
      <TypeSelection />
    </div>
  );
}

export default LandingPage;
