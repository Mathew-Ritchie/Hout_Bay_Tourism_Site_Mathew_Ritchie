import React from "react";
import { NavLink } from "react-router-dom";
import OpenTime from "../SVGs/OpenTime";
import RatingSVG from "../SVGs/RatingSVG";

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
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl"
            >
              {/* UPDATED: NavLink now points to the correct details page URL and has a better class */}
              <NavLink to={`/${establishment.id}`}>
                {/* Image */}

                {establishment.imageUrl && (
                  <img
                    src={
                      establishment.imageUrl.startsWith("http")
                        ? establishment.imageUrl
                        : `https://houtbay-establishments-api.onrender.com/images/${establishment.imageUrl}`
                    }
                    alt={establishment.name}
                    className="w-full h-64 object-cover object-center rounded-lg mb-6"
                    onError={(e) => {
                      // Optional: fallback if the image fails to load
                      e.target.src = "/fallback-image.jpg"; // put a local fallback in /public if you want
                    }}
                  />
                )}

                {/* Title */}
                <div className="p-4 inline-flex flex-col justify-between items-start h-54 w-full">
                  <div className="w-full">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 truncate">
                      {establishment.name}
                    </h3>

                    {/* Categories */}
                    {establishment.category && (
                      <div className="inline-flex flex-wrap gap-1 mb-2">
                        {establishment.category.map((item, index) => (
                          <p key={index} className="text-sm text-gray-600 mb-1">
                            | {item}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="inline-flex flex-col justify-center items-start">
                    {/* Trading hours */}
                    <p className="text-sm text-gray-600 mb-2 inline-flex gap-2 items-center justify-center">
                      <span>
                        <OpenTime />
                      </span>
                      {establishment.tradingHours}
                    </p>

                    {/* Rating */}
                    <p className="text-sm text-gray-600 inline-flex gap-2 items-center justify-center">
                      <RatingSVG />
                      {establishment.rating ? `${establishment.rating}/5` : "N/A"}
                    </p>
                  </div>
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
