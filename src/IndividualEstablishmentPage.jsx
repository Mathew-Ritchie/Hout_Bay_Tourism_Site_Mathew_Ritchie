// src/pages/IndividualEstablishmentPage.jsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // Import useParams and Link
import { useEstablishmentStore } from "./store/useEstablishmentStore"; // Adjust path to your store
import "./App.css"; // Keep your global styles
import MapSVG from "./SVGs/map";
import EmailSVG from "./SVGs/email";
import WebSVG from "./SVGs/WebSVG";
import OpenTime from "./SVGs/OpenTime";
import LocationSVG from "./SVGs/LocationSVG";
import PhoneSVG from "./SVGs/PhoneSVG";
import RatingSVG from "./SVGs/RatingSVG";

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center pt-0">
      {selectedEstablishmentDetails && ( // <-- NEW: Conditional rendering for the link
        <div className="w-screen mb-4 flex justify-start pl-4 sm:pl-6 lg:pl-8">
          {" "}
          {/* Added flex and justify-start for alignment */}
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

      {singleEstablishmentLoading && (
        <p className="text-center text-gray-600 text-xl">Loading details...</p>
      )}

      {singleEstablishmentError && (
        <p className="text-center text-red-600 text-xl">Error: {singleEstablishmentError}</p>
      )}

      {selectedEstablishmentDetails && !singleEstablishmentLoading && !singleEstablishmentError ? (
        <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 max-w-2xl w-full inline-flex flex-col justify-center items-start">
          {selectedEstablishmentDetails.imageUrl && (
            <img
              src={
                selectedEstablishmentDetails.imageUrl.startsWith("http")
                  ? selectedEstablishmentDetails.imageUrl
                  : `https://houtbay-establishments-api.onrender.com/images/${selectedEstablishmentDetails.imageUrl}`
              }
              alt={selectedEstablishmentDetails.name}
              className="w-full h-64 object-cover object-center rounded-lg mb-6"
              //onError={(e) => {
              // Optional: fallback if the image fails to load
              //  e.target.src = "/fallback-image.jpg"; // put a local fallback in /public if you want
              // }}
            />
          )}

          <h2 className="text-center text-3xl font-bold text-gray-900 mb-4">
            {selectedEstablishmentDetails.name}
          </h2>

          {selectedEstablishmentDetails.category && (
            <div className="inline-flex gap-3">
              {selectedEstablishmentDetails.category.map((item, index) => (
                <p key={index} className="text-xl text-gray-500 mb-2 italic font-semibold">
                  {item}
                </p>
              ))}
            </div>
          )}

          {/* Operating hours  */}
          <p className="text-lg text-gray-700 mb-2 inline-flex justify-center items-center gap-2 ">
            <span className="w-6 h-6">
              <OpenTime />
            </span>
            {selectedEstablishmentDetails.tradingHours}
          </p>

          {selectedEstablishmentDetails.description &&
            selectedEstablishmentDetails.description.map((item, index) => (
              <p className="text-justify pb-5" key={index}>
                {item}
              </p>
            ))}

          {/* Address  */}
          <p className="inline-flex justify-center items-center gap-2">
            <span className="h-6 w-6">
              <LocationSVG />{" "}
            </span>
            {selectedEstablishmentDetails.address}
          </p>
          <p className="inline-flex justify-center items-center gap-2">
            <PhoneSVG /> {selectedEstablishmentDetails.phoneNumber}
          </p>

          <p className="inline-flex justify-center items-center gap-2">
            <RatingSVG />
            {selectedEstablishmentDetails.rating
              ? `${selectedEstablishmentDetails.rating}/5`
              : "N/A"}
          </p>

          <div className="inline-flex justify-center items-center gap-2 pt-5">
            {selectedEstablishmentDetails.website && (
              <p className="w-fit px-4 py-2 rounded-full text-sm font-medium shadow-md transition-colors duration-200 bg-gray-300 text-gray-800 hover:bg-gray-400">
                {/* <strong>Website:</strong>{" "} */}
                <a
                  href={selectedEstablishmentDetails.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2"
                >
                  <WebSVG />
                  Website
                </a>
              </p>
            )}

            {selectedEstablishmentDetails.email && (
              <p className="w-fit px-4 py-2 rounded-full text-sm font-medium shadow-md transition-colors duration-200 bg-gray-300 text-gray-800 hover:bg-gray-400">
                {/* <strong>email:</strong>{" "} */}
                <a
                  href={`mailto:${selectedEstablishmentDetails.email}`}
                  target="_blank"
                  rel=""
                  className="inline-flex justify-center items-center gap-2"
                >
                  <EmailSVG /> {selectedEstablishmentDetails.email}
                </a>
              </p>
            )}

            <p className="w-fit px-4 py-2 rounded-full text-sm font-medium shadow-md transition-colors duration-200 bg-gray-300 text-gray-800 hover:bg-gray-400">
              {/* <strong>Location:</strong>{" "} */}
              <a
                href={`https://www.google.com/maps/search/${selectedEstablishmentDetails.name}`}
                target="blank"
                className="inline-flex justify-center items-center gap-2"
              >
                <MapSVG />
                Google
              </a>
            </p>
          </div>
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
