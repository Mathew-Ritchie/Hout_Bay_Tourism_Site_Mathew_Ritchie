import React from "react";
import { NavLink } from "react-router-dom";

export default function EstablishmentCards({ establishments, loading, error, message }) {
  return (
    <>
      {/* Message and Error Display */}
      {error && <p className="text-center text-lg text-red-600 mb-4">Error: {error}</p>}
      {/* Loading State */}
      {loading ? (
        <p className="text-center text-gray-600 text-xl">Loading establishments...</p>
      ) : establishments.length === 0 ? (
        <p className="text-center text-gray-600 text-xl">No establishments available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto">
          {establishments.map((establishment) => (
            <div
              key={establishment.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <NavLink to={`/${establishment.id}`}>
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
              </NavLink>
            </div>
          ))}
        </div>
      )}
      {message && (
        <p className={`text-center text-lg mb-4 ${error ? "text-red-600" : "text-green-600"}`}>
          {message}
        </p>
      )}
    </>
  );
}
