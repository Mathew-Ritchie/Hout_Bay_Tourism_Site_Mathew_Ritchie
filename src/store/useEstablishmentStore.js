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
  activeCategoryFilter: null,
  selectedEstablishmentDetails: null, // <-- NEW: State for individual establishment details
  singleEstablishmentLoading: false, // <-- NEW: Loading state for individual fetch
  singleEstablishmentError: null,
  establishmentCategories: [],
  // --- Actions ---

  // Action to set loading state
  setLoading: (isLoading) => set({ loading: isLoading }),

  // Action to set error state
  setError: (errorMessage) => set({ error: errorMessage, message: `Error: ${errorMessage}` }),

  // Action to set a general message
  setMessage: (msg) => set({ message: msg }),

  // Action to set the active type filter
  setActiveTypeFilter: (type) => set({ activeTypeFilter: type }),

  _updateCategoriesByFilter: () => {
    const { allEstablishments, activeTypeFilter } = get();
    // Get the establishments that match the current type filter
    const establishmentsForCategories = activeTypeFilter
      ? allEstablishments.filter((e) => e.type.toLowerCase() === activeTypeFilter.toLowerCase())
      : allEstablishments;

    // Extract unique categories from this filtered list
    const uniqueCategories = [
      ...new Set(establishmentsForCategories.flatMap((item) => item.category)),
    ]
      .filter((category) => category)
      .sort();

    set({ establishmentCategories: uniqueCategories });
    console.log(
      `Zustand Store: Categories updated for filter '${activeTypeFilter || "none"}':`,
      uniqueCategories
    );
  },

  // Internal helper function to apply filters to allEstablishments
  // This function is called internally by other actions, not directly by components
  _applyClientSideFilters: () => {
    const { allEstablishments, activeTypeFilter, activeCategoryFilter } = get(); // Get current state from the store

    let currentFiltered = allEstablishments;

    // Apply type filter if active
    if (activeTypeFilter) {
      currentFiltered = currentFiltered.filter(
        (e) => e.type.toLowerCase() === activeTypeFilter.toLowerCase()
      );
    }

    if (activeCategoryFilter) {
      currentFiltered = currentFiltered.filter(
        (e) => e.category && e.category.includes(activeCategoryFilter)
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
      const uniqueTypes = [...new Set(data.map((item) => item.type))].filter((type) => type);
      set({
        allEstablishments: data,
        establishmentTypes: uniqueTypes,

        message: `All establishments loaded.`,
        loading: false,
      });

      get()._applyClientSideFilters();
      get()._updateCategoriesByFilter();
    } catch (err) {
      console.error("Zustand Store: Error fetching initial establishments:", err);
      set({
        error: err.message,
        message: `Failed to fetch initial establishments: ${err.message}`,
        loading: false,
      });
    }
  },

  fetchIndividualEstablishment: async (id) => {
    set({
      singleEstablishmentLoading: true,
      singleEstablishmentError: null,
      selectedEstablishmentDetails: null,
    });
    try {
      const url = `http://localhost:5173/api/establishments/${id}`;
      console.log(`Zustand Store: Attempting to fetch individual establishment from: ${url}`);

      const response = await fetch(url);
      console.log("Zustand Store: Individual fetch response received.", response);

      if (!response.ok) {
        console.error("Zustand Store: Individual fetch response not OK. Status:", response.status);
        const errorData = await response
          .json()
          .catch(() => ({ message: "No detailed error message" }));
        throw new Error(`HTTP error! Status: ${response.status} - ${errorData.message}`);
      }
      const data = await response.json();
      console.log("Zustand Store: Individual data received:", data);

      set({
        selectedEstablishmentDetails: data,
        singleEstablishmentLoading: false,
        singleEstablishmentError: null,
      });
    } catch (err) {
      console.error("Zustand Store: Error fetching individual establishment:", err);
      set({
        selectedEstablishmentDetails: null,
        singleEstablishmentLoading: false,
        singleEstablishmentError: err.message,
      });
    }
  },

  applyTypeFilter: (type) => {
    set({ activeTypeFilter: type, activeCategoryFilter: null }); // <-- UPDATED: Reset category filter
    // Now, instead of re-fetching, we apply the filter to the already loaded data
    get()._applyClientSideFilters();
    get()._updateCategoriesByFilter();
  },

  // NEW: Action to apply a category filter
  applyCategoryFilter: (category) => {
    set({ activeCategoryFilter: category });
    get()._applyClientSideFilters();
  },
}));
