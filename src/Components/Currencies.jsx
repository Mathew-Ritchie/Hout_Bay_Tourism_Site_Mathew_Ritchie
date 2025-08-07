import React, { useEffect, useRef } from "react";
import { useCurrencyStore } from "../store/useCurrencyStore";

export default function Currencies() {
  const currencyData = useCurrencyStore((state) => state.currencyData);
  const currencyLoading = useCurrencyStore((state) => state.currencyLoading);
  const currencyError = useCurrencyStore((state) => state.currencyError);
  const fetchCurrencyConversions = useCurrencyStore((state) => state.fetchCurrencyConversions);

  // Create refs to access the span elements directly
  const usdRef = useRef(null);
  const eurRef = useRef(null);
  const gbpRef = useRef(null);

  // Fetch currency data when the component mounts
  useEffect(() => {
    fetchCurrencyConversions();
  }, [fetchCurrencyConversions]);

  // Handle the count-to animation
  useEffect(() => {
    if (currencyData) {
      const animateCount = (ref, targetValue) => {
        if (!ref.current) return;
        const startValue = 0;
        const duration = 1500; // Animation duration in milliseconds
        const startTime = performance.now();

        const updateCount = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          const currentValue = startValue + progress * (targetValue - startValue);

          ref.current.textContent = currentValue.toFixed(2);

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          }
        };

        requestAnimationFrame(updateCount);
      };

      animateCount(usdRef, parseFloat(currencyData.USD));
      animateCount(eurRef, parseFloat(currencyData.EUR));
      animateCount(gbpRef, parseFloat(currencyData.GBP));
    }
  }, [currencyData]); // Re-run effect when currencyData changes

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
        <p>Error: {currencyError}</p>
        <p>Please ensure you have set your Freecurrency API key in useCurrencyStore.js</p>
      </div>
    );
  }

  if (!currencyData || !currencyData.EUR || !currencyData.GBP || !currencyData.USD) {
    return (
      <div className="text-center text-gray-600 p-4">
        <p>No currency data available.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-row items-end justify-center flex-wrap gap-2 pb-5 ">
      <div className="flex items-center gap-2 bg-gray-300 px-5 py-2 rounded-xl mt-2 shadow-lg ">
        <p className="text-xl  text-gray-800">
          USD = R<span ref={usdRef}>0.00</span>
        </p>
      </div>
      <div className="flex items-center gap-2 bg-gray-300 px-5 py-2 rounded-xl mt-2 shadow-lg ">
        <p className="text-xl text-gray-800">
          EUR = R<span ref={eurRef}>0.00</span>
        </p>
      </div>
      <div className="flex items-center gap-2 bg-gray-300 px-5 py-2 rounded-xl mt-2 shadow-lg ">
        <p className="text-xl  text-gray-800">
          GBP = R<span ref={gbpRef}>0.00</span>
        </p>
      </div>
    </div>
  );
}
