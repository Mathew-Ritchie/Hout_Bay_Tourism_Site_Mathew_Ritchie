// src/pages/LandingPage.jsx
import { useEffect } from "react";
import { useEstablishmentStore } from "./store/useEstablishmentStore";
import "./App.css"; // Keep this if you have global Tailwind base styles or other essentials here

// Assuming your image is in src/assets/
// <--- NEW: Import your image
import Intro from "./Components/Intro";
import LandingPageTypeSelection from "./Components/LandingPageTypeSelection";
import StatComponent from "./Components/StatComponent";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import ScrollToTopBtn from "./Components/ScrollUpButton";

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
    <div className="min-h-screen bg-gray-100 pt-8">
      <Intro />
      <LandingPageTypeSelection />
      <StatComponent />
      <Gallery />
      <Footer />
      <ScrollToTopBtn />
    </div>
  );
}

export default LandingPage;
