// src/pages/LandingPage.jsx
import { useEffect } from "react";
import { useEstablishmentStore } from "../store/useEstablishmentStore";
import { useWeatherStore } from "../store/useWeatherStore";
import "../App.css"; // Keep this if you have global Tailwind base styles or other essentials here

// Assuming your image is in src/assets/
// <--- NEW: Import your image
import Intro from "../Components/Intro";
import LandingPageTypeSelection from "../Components/LandingPageTypeSelection";
import StatComponent from "../Components/StatComponent";
import Footer from "../Components/Footer";
import Gallery from "../Components/Gallery";
import ScrollToTopBtn from "../Components/ScrollUpButton";
import { useCurrencyStore } from "../store/useCurrencyStore";

function LandingPage() {
  // Add establishmentTypes to the destructuring list

  const fetchInitialEstablishments = useEstablishmentStore(
    (state) => state.fetchInitialEstablishments
  );
  const fetchWeather = useWeatherStore((state) => state.fetchWeather);
  const fetchCurrencyConversions = useCurrencyStore((state) => state.fetchCurrencyConversions);

  useEffect(() => {
    console.log(
      "LandingPage.jsx: useEffect triggered, calling fetchInitialEstablishments from store."
    );
    fetchInitialEstablishments();
    fetchWeather();
    fetchCurrencyConversions();
  }, [fetchInitialEstablishments, fetchWeather, fetchCurrencyConversions]);

  return (
    // Main container for the landing page
    <div className="min-h-screen bg-gray-100 w-screen">
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
