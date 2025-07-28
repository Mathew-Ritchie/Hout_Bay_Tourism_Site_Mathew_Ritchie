// src/pages/IndividualEstablishmentPage.jsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // Import useParams and Link
import { useEstablishmentStore } from "./store/useEstablishmentStore"; // Adjust path to your store
import "./App.css"; // Keep your global styles

export default function IndividualEstablishmentPage() {
  const { id } = useParams(); // Get the establishment ID from the URL

  // Select the individual establishment's state and action from the store
  const selectedEstablishmentDetails = useEstablishmentStore(
    (state) => state.selectedEstablishmentDetails
  );
  const singleEstablishmentLoading = useEstablishmentStore(
    (state) => state.singleEstablishmentLoading
  );
  const singleEstablishmentError = useEstablishmentStore((state) => state.singleEstablishmentError);
  const fetchIndividualEstablishment = useEstablishmentStore(
    (state) => state.fetchIndividualEstablishment
  );

  useEffect(() => {
    if (id) {
      // Only fetch if an ID is present in the URL
      console.log(`IndividualEstablishmentPage.jsx: Fetching details for ID: ${id}`);
      fetchIndividualEstablishment(id);
    }
  }, [id, fetchIndividualEstablishment]); // Re-fetch if ID changes

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-8 md:mb-12">
        Establishment Details
      </h1>

      {singleEstablishmentLoading && (
        <p className="text-center text-gray-600 text-xl">Loading details...</p>
      )}

      {singleEstablishmentError && (
        <p className="text-center text-red-600 text-xl">Error: {singleEstablishmentError}</p>
      )}

      {selectedEstablishmentDetails && !singleEstablishmentLoading && !singleEstablishmentError ? (
        <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 max-w-2xl w-full">
          {selectedEstablishmentDetails.imageUrl && (
            <img
              src={selectedEstablishmentDetails.imageUrl}
              alt={selectedEstablishmentDetails.name}
              className="w-full h-64 object-cover object-center rounded-lg mb-6"
            />
          )}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {selectedEstablishmentDetails.name}
          </h2>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Type:</strong>{" "}
            {selectedEstablishmentDetails.type
              ? selectedEstablishmentDetails.type.charAt(0).toUpperCase() +
                selectedEstablishmentDetails.type.slice(1)
              : "N/A"}
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Category:</strong> {selectedEstablishmentDetails.category}
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Hours:</strong> {selectedEstablishmentDetails.tradingHours}
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Address:</strong> {selectedEstablishmentDetails.address}
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Phone:</strong> {selectedEstablishmentDetails.phoneNumber}
          </p>
          {selectedEstablishmentDetails.website && (
            <p className="text-lg text-gray-700 mb-2">
              <strong>Website:</strong>{" "}
              <a
                href={selectedEstablishmentDetails.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {selectedEstablishmentDetails.website}
              </a>
            </p>
          )}
          <p className="text-lg text-gray-700 mb-4">
            <strong>Rating:</strong>{" "}
            {selectedEstablishmentDetails.rating
              ? `${selectedEstablishmentDetails.rating}/5`
              : "N/A"}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Location:</strong>{" "}
            <a
              href={`https://www.google.com/maps/search/${selectedEstablishmentDetails.name}`}
              target="blank"
            >
              Google Maps
            </a>
          </p>
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
      ) : (
        !singleEstablishmentLoading &&
        !singleEstablishmentError && (
          <p className="text-center text-gray-600 text-xl">No establishment details found.</p>
        )
      )}
    </div>
  );
}
