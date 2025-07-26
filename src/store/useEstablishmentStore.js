// src/store/useEstablishmentStore.js
import { create } from "zustand";

// Define your store
export const useEstablishmentStore = create((set) => ({
  // --- State ---
  establishments: [],
  loading: false,
  error: null,
  message: "",
  establishmentTypes: [],

  // --- Actions ---

  // Action to set establishments data
  setEstablishments: (data) =>
    set({ establishments: data, error: null, message: "Establishments loaded." }),

  // Action to set loading state
  setLoading: (isLoading) => set({ loading: isLoading }),

  // Action to set error state
  setError: (errorMessage) => set({ error: errorMessage, message: `Error: ${errorMessage}` }),

  // Action to set a general message
  setMessage: (msg) => set({ message: msg }),

  // Async action to fetch establishments
  fetchEstablishments: async () => {
    set({ loading: true, error: null, message: "Fetching establishments..." });
    try {
      const url = `http://localhost:5173/api/establishments`;
      console.log(`Zustand Store: Attempting to fetch from: ${url}`);

      const response = await fetch(url);
      console.log("Zustand Store: Fetch response received.", response);

      if (!response.ok) {
        console.error("Zustand Store: Fetch response not OK. Status:", response.status);
        const errorData = await response
          .json()
          .catch(() => ({ message: "No detailed error message" }));
        throw new Error(`HTTP error! Status: ${response.status} - ${errorData.message}`);
      }
      const data = await response.json();
      console.log("Zustand Store: Data received:", data);

      const uniqueTypes = [...new Set(data.map((item) => item.type))]
        .filter((type) => type) // Filter out any undefined/null types
        .sort(); // Optional: sort alphabetically

      set({
        establishments: data,
        establishmentTypes: uniqueTypes,
        message: `All establishments fetched successfully! (${data.length} found)`,
        loading: false,
      });
    } catch (err) {
      console.error("Zustand Store: Error fetching establishments:", err);
      set({
        error: err.message,
        message: `Failed to fetch establishments: ${err.message}`,
        loading: false,
      });
    }
  },

  // You could also add actions for filtering here if you re-introduce them later
  // For example:
  // fetchRestaurants: async () => { /* ... fetch('/api/establishments?type=restaurant') ... */ },
}));
