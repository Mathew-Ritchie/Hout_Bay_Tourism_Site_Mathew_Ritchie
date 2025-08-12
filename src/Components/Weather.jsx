import React, { useEffect } from "react";
import { useWeatherStore } from "../store/useWeatherStore";

export default function Weather() {
  const weatherData = useWeatherStore((state) => state.weatherData);
  const loading = useWeatherStore((state) => state.loading);
  const error = useWeatherStore((state) => state.error);
  const fetchWeather = useWeatherStore((state) => state.fetchWeather); // Get the fetch action

  // Fetch weather data when the component mounts
  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]); // Ensure fetchWeather is in the dependency array

  if (loading) {
    return (
      <div className="text-center text-gray-600 p-4">
        <p>Loading weather...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        <p>Error: {error}</p>
        <p>Please ensure you have set your OpenWeatherMap API key in useWeatherStore.js</p>
      </div>
    );
  }

  // Check if weatherData and its necessary properties exist before trying to access them
  if (
    !weatherData ||
    !weatherData.main ||
    !weatherData.weather ||
    weatherData.weather.length === 0
  ) {
    return (
      <div className="text-center text-gray-600 p-4">
        <p>No weather data available.</p>
      </div>
    );
  }

  // Extract temperature and icon code
  const temperature = weatherData.main.temp;
  const weatherIconCode = weatherData.weather[0].icon;
  const weatherDescription = weatherData.weather[0].description;

  // Construct the icon URL
  const iconUrl = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;

  return (
    <div className="flex flex-col items-end justify-cente">
      <div className="flex items-center gap-2 bg-gray-300 px-4 rounded-2xl mt-2 shadow-lg mr-2">
        <img src={iconUrl} alt={weatherDescription} className="w-14 h-14" />
        <p className="text-3xl font-bold  text-gray-800  ">{Math.round(temperature)}°C</p>
      </div>
    </div>
  );
}
