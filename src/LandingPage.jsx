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
  const fetchEstablishments = useEstablishmentStore((state) => state.fetchEstablishments);

  useEffect(() => {
    console.log("LandingPage.jsx: useEffect triggered, calling fetchEstablishments from store.");
    fetchEstablishments();
  }, [fetchEstablishments]);

  return (
    // Main container for the landing page
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      {/* Page Title */}
      <Intro />

      {/* Establishment Type Buttons */}
      <TypeSelection />

      {/* Message and Error Display */}
      {message && (
        <p className={`text-center text-lg mb-4 ${error ? "text-red-600" : "text-green-600"}`}>
          {message}
        </p>
      )}
      {error && <p className="text-center text-lg text-red-600 mb-4">Error: {error}</p>}

      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
        All Establishments
      </h2>

      {/* Loading State */}
      {loading ? (
        <p className="text-center text-gray-600 text-xl">Loading establishments...</p>
      ) : establishments.length === 0 ? (
        <p className="text-center text-gray-600 text-xl">No establishments available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {establishments.map((establishment) => (
            <div
              key={establishment.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Image */}
              {establishment.imageUrl && (
                <img
                  src={establishment.imageUrl}
                  alt={establishment.name}
                  className="w-full h-48 object-cover object-center"
                />
              )}
              {/* Content */}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 truncate">
                  {establishment.name}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  <strong className="font-medium text-gray-700">Type:</strong>{" "}
                  {establishment.type
                    ? establishment.type.charAt(0).toUpperCase() + establishment.type.slice(1)
                    : "N/A"}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong className="font-medium text-gray-700">Category:</strong>{" "}
                  {establishment.category}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong className="font-medium text-gray-700">Hours:</strong>{" "}
                  {establishment.tradingHours}
                </p>
                <p className="text-sm text-gray-600">
                  <strong className="font-medium text-gray-700">Rating:</strong>{" "}
                  {establishment.rating ? `${establishment.rating}/5` : "N/A"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LandingPage;
