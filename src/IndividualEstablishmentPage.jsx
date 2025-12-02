// src/pages/IndividualEstablishmentPage.jsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // Import useParams and Link
import { useEstablishmentStore } from "./store/useEstablishmentStore"; // Adjust path to your store
import "./App.css"; // Keep your global styles
import IndividualEstablishmentCard from "./Components/individual-establishments-page-components/IndividualEstablishmentsCard";

export default function IndividualEstablishmentPage() {
  const { id } = useParams();
  const {
    selectedEstablishmentDetails,
    singleEstablishmentError,
    singleEstablishmentLoading,
    fetchIndividualEstablishment,
  } = useEstablishmentStore();

  useEffect(() => {
    if (id) {
      console.log(`IndividualEstablishmentPage.jsx: Fetching details for ID: ${id}`);
      fetchIndividualEstablishment(id);
    }
  }, [id, fetchIndividualEstablishment]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center pt-0">
      {selectedEstablishmentDetails && (
        <div className="w-screen mb-4 flex justify-start pl-4 sm:pl-6 lg:pl-8">
          <Link
            to={`/establishments/${selectedEstablishmentDetails.type}`}
            className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200"
          >
            Back to{" "}
            {selectedEstablishmentDetails.type
              ? selectedEstablishmentDetails.type.charAt(0).toUpperCase() +
                selectedEstablishmentDetails.type.slice(1)
              : "All"}{" "}
            Establishments
          </Link>
        </div>
      )}
      {/* Loading */}
      {singleEstablishmentLoading && (
        <p className="text-center text-gray-600 text-xl">Loading details...</p>
      )}
      {/* error */}
      {singleEstablishmentError && (
        <p className="text-center text-red-600 text-xl">Error: {singleEstablishmentError}</p>
      )}

      {/* Main content */}
      {selectedEstablishmentDetails && !singleEstablishmentLoading && !singleEstablishmentError && (
        <IndividualEstablishmentCard details={selectedEstablishmentDetails} />
      )}
    </div>
  );
}
