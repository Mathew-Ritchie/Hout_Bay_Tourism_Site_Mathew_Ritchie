// src/store/useCurrencyStore.js
import { create } from "zustand";

export const useCurrencyStore = create((set) => ({
  // --- State ---
  currencyData: null, // Stores the fetched currency conversion data (USD to ZAR, EUR to ZAR, GBP to ZAR)
  currencyLoading: false, // Indicates if currency data is currently being fetched
  currencyError: null, // Stores any currency error messages

  // --- Actions ---

  /**
   * Fetches latest currency conversions from FreecurrencyAPI.
   * Converts ZAR to USD, EUR, and GBP, then inverts to show USD/EUR/GBP to ZAR.
   */
  fetchCurrencyConversions: async () => {
    set({ currencyLoading: true, currencyError: null, currencyData: null }); // Reset state before fetching
    try {
      const FREECURRENCY_API_KEY = import.meta.env.VITE_CURRENCY_API_KEY;

      const currencyApiUrl = `https://api.freecurrencyapi.com/v1/latest?apikey=${FREECURRENCY_API_KEY}&base_currency=ZAR&currencies=USD%2CEUR%2CGBP`;

      console.log("Fetching currency from:", currencyApiUrl);

      const response = await fetch(currencyApiUrl);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: "Unknown error" }));
        throw new Error(
          `HTTP error! Status: ${response.status}, Details: ${
            errorData.message || response.statusText
          }`
        );
      }

      const data = await response.json();
      console.log("Raw currency data received:", data);

      // Invert the rates to show how many ZAR per USD, EUR, and GBP
      const invertedCurrencyData = {
        USD: data.data.USD ? (1 / data.data.USD).toFixed(2) : null,
        EUR: data.data.EUR ? (1 / data.data.EUR).toFixed(2) : null,
        GBP: data.data.GBP ? (1 / data.data.GBP).toFixed(2) : null,
      };
      console.log("Inverted currency data:", invertedCurrencyData);

      set({
        currencyData: invertedCurrencyData,
        currencyLoading: false,
        currencyError: null,
      });
    } catch (err) {
      console.error("Error fetching currency conversions:", err);
      set({
        currencyData: null,
        currencyLoading: false,
        currencyError: err.message,
      });
    }
  },
}));
