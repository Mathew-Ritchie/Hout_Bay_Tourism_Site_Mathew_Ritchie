// src/store/useWeatherStore.js
import { create } from "zustand";

export const useWeatherStore = create((set) => ({
  // --- State ---
  weatherData: null, // Stores the fetched weather data
  loading: false, // Indicates if data is currently being fetched
  error: null, // Stores any error messages

  // --- Actions ---

  /**
   * Fetches current weather data for Hout Bay from the OpenWeatherMap API.
   * Updates loading, error, and weatherData states accordingly.
   */
  fetchWeather: async () => {
    set({ loading: true, error: null, weatherData: null }); // Reset state before fetching
    try {
      // Coordinates for Hout Bay, South Africa
      const latitude = -34.03;
      const longitude = 18.36;

      // OpenWeatherMap API URL for current weather
      // IMPORTANT: Replace 'YOUR_API_KEY_HERE' with your actual OpenWeatherMap API key
      const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
      const apiUrl = `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;

      console.log("Fetching weather from:", apiUrl);

      const response = await fetch(apiUrl);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: "Unknown error" }));
        throw new Error(
          `HTTP error! Status: ${response.status}, Details: ${
            errorData.message || response.statusText
          }`
        );
      }

      const data = await response.json();
      console.log("Weather data received:", data);

      set({
        weatherData: data, // Store the full response data from OpenWeatherMap
        loading: false,
        error: null,
      });
    } catch (err) {
      console.error("Error fetching weather:", err);
      set({
        weatherData: null,
        loading: false,
        error: err.message,
      });
    }
  },
}));
