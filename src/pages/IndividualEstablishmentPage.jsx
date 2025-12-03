// src/pages/IndividualEstablishmentPage.jsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams and Link
import { useEstablishmentStore } from "../store/useEstablishmentStore"; // Adjust path to your store
import "../App.css"; // Keep your global styles
import IndividualEstablishmentCard from "../Components/individual-establishments-page-components/IndividualEstablishmentsCard";
import BackToCategoryButton from "../Components/individual-establishments-page-components/BackToCategoryButton";

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
      {/* Link back button */}
      {selectedEstablishmentDetails && (
        <BackToCategoryButton type={selectedEstablishmentDetails.type} />
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
