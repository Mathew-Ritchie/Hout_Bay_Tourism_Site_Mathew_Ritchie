// src/store/useEstablishmentStore.js
import { create } from "zustand";

// Define your store
export const useEstablishmentStore = create((set, get) => ({
  // --- State ---
  allEstablishments: [], // <-- NEW: Stores the full, unfiltered list
  filteredEstablishments: [], // <-- NEW: Stores the list to be displayed (after filtering)
  loading: false,
  error: null,
  message: "",
  establishmentTypes: [], // Derived from allEstablishments
  activeTypeFilter: null, // State to store the currently active type filter

  // --- Actions ---

  // Action to set loading state
  setLoading: (isLoading) => set({ loading: isLoading }),

  // Action to set error state
  setError: (errorMessage) => set({ error: errorMessage, message: `Error: ${errorMessage}` }),

  // Action to set a general message
  setMessage: (msg) => set({ message: msg }),

  // Action to set the active type filter
  setActiveTypeFilter: (type) => set({ activeTypeFilter: type }),

  // Internal helper function to apply filters to allEstablishments
  // This function is called internally by other actions, not directly by components
  _applyClientSideFilters: () => {
    const { allEstablishments, activeTypeFilter } = get(); // Get current state from the store

    let currentFiltered = allEstablishments;

    // Apply type filter if active
    if (activeTypeFilter) {
      currentFiltered = currentFiltered.filter(
        (e) => e.type.toLowerCase() === activeTypeFilter.toLowerCase()
      );
    }
    // Add sorting here if needed (e.g., by name)
    currentFiltered.sort((a, b) => a.name.localeCompare(b.name));

    set({ filteredEstablishments: currentFiltered });
    console.log(
      `Zustand Store: Applied client-side filter. Active type: ${
        activeTypeFilter || "none"
      }. Displaying ${currentFiltered.length} establishments.`
    );
  },

  // Async action to initially fetch ALL establishments and populate types
  // This should ideally be called once on app load (e.g., in LandingPage)
  fetchInitialEstablishments: async () => {
    set({ loading: true, error: null, message: "Fetching all establishments..." });
    try {
      const url = `http://localhost:5173/api/establishments`;
      console.log(`Zustand Store: Attempting to fetch ALL establishments from: ${url}`);

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
      console.log("Zustand Store: All data received:", data);

      // Extract unique types from the FULL dataset (for the type buttons)
      const uniqueTypes = [...new Set(data.map((item) => item.type))]
        .filter((type) => type) // Filter out any undefined/null types
        .sort(); // Optional: sort alphabetically

      set({
        allEstablishments: data, // Store the full list
        establishmentTypes: uniqueTypes, // Populate types from the full list
        message: `All establishments loaded.`,
        loading: false,
      });

      // After fetching all data, apply initial filter (if any)
      get()._applyClientSideFilters();
    } catch (err) {
      console.error("Zustand Store: Error fetching initial establishments:", err);
      set({
        error: err.message,
        message: `Failed to fetch initial establishments: ${err.message}`,
        loading: false,
      });
    }
  },

  // Action to apply a type filter and trigger client-side filtering
  // This is called by components (e.g., from NavLink clicks)
  applyTypeFilter: (type) => {
    set({ activeTypeFilter: type });
    // Now, instead of re-fetching, we apply the filter to the already loaded data
    get()._applyClientSideFilters();
  },
}));
