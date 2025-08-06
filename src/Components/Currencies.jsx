import React, { useEffect } from "react";
import { useCurrencyStore } from "../store/useCurrencyStore";

export default function Currencies() {
  const currencyData = useCurrencyStore((state) => state.currencyData);
  const currencyLoading = useCurrencyStore((state) => state.currencyLoading);
  const currencyError = useCurrencyStore((state) => state.currencyError);
  const fetchCurrencyConversions = useCurrencyStore((state) => state.fetchCurrencyConversions); // Get the fetch action

  // Fetch weather data when the component mounts
  useEffect(() => {
    fetchCurrencyConversions();
  }, [fetchCurrencyConversions]); // Ensure fetchWeather is in the dependency array

  if (currencyLoading) {
    return (
      <div className="text-center text-gray-600 p-4">
        <p>Loading currencies...</p>
      </div>
    );
  }

  if (currencyError) {
    return (
      <div className="text-center text-red-600 p-4">
        <p>Error: {error}</p>
        <p>Please ensure you have set your Freecurrency API key in</p>
      </div>
    );
  }

  // Check if currencyData and its necessary properties exist before trying to access them
  if (!currencyData || !currencyData.EUR || !currencyData.GBP || !currencyData.USD) {
    return (
      <div className="text-center text-gray-600 p-4">
        <p>No currency data available.</p>
      </div>
    );
  }

  // Extract temperature and icon code
  const usd = currencyData.USD;
  const eur = currencyData.EUR;
  const gbp = currencyData.GBP;

  return (
    <div className="flex flex-row items-end justify-cente gap-2">
      <div className="flex items-center gap-2 bg-gray-300 px-4 rounded-xl mt-2 shadow-lg ">
        <p className="text-xl  text-gray-800  ">USD = R{usd}</p>
      </div>
      <div className="flex items-center gap-2 bg-gray-300 px-4 rounded-xl mt-2 shadow-lg ">
        <p className="text-xl text-gray-800  ">EUR = R{eur}</p>
      </div>
      <div className="flex items-center gap-2 bg-gray-300 px-4 rounded-xl mt-2 shadow-lg ">
        <p className="text-xl  text-gray-800  ">GBP = R{gbp}</p>
      </div>
    </div>
  );
}
