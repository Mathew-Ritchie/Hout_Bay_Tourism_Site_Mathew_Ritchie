// src/store/useEstablishmentStore.js
import { create } from "zustand";
//import { mockEstablishments } from "../Establishment Data/establishmentData"; // Import the data

// API
const API_BASE_URL = "https://houtbay-api.onrender.com/api/establishments";

// Define your store
export const useEstablishmentStore = create((set, get) => ({
  // --- State ---
  allEstablishments: [],
  filteredEstablishments: [],
  loading: false,
  error: null,
  message: "",
  establishmentTypes: [],
  activeTypeFilter: null,
  activeCategoryFilter: null,
  selectedEstablishmentDetails: null,
  singleEstablishmentLoading: false,
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

  _applyClientSideFilters: () => {
    const { allEstablishments, activeTypeFilter, activeCategoryFilter } = get();
    let currentFiltered = allEstablishments;

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

    currentFiltered.sort((a, b) => a.name.localeCompare(b.name));

    set({ filteredEstablishments: currentFiltered });
    console.log(
      `Zustand Store: Applied client-side filters. Active type: ${
        activeTypeFilter || "none"
      }, Active category: ${activeCategoryFilter || "none"}. Displaying ${
        currentFiltered.length
      } establishments.`
    );
  },

  // Fetch initial establishments from the API
  fetchInitialEstablishments: async () => {
    set({ loading: true, error: null, message: "Fetching establishments from API..." });
    try {
      const response = await fetch(API_BASE_URL);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();

      const uniqueTypes = [...new Set(data.map((item) => item.type))].filter((type) => type).sort();

      set({
        allEstablishments: data,
        establishmentTypes: uniqueTypes,
        message: `All establishments loaded from API.`,
        loading: false,
      });

      get()._applyClientSideFilters();
      get()._updateCategoriesByFilter();
    } catch (err) {
      console.error("Zustand Store: Error fetching from API:", err);
      set({
        error: "Failed to fetch establishments from API.",
        message: `Failed to fetch: ${err.message}`,
        loading: false,
      });
    }
  },

  // Fetch individual establishment details by ID

  fetchIndividualEstablishment: async (id) => {
    set({
      singleEstablishmentLoading: true,
      singleEstablishmentError: null,
      selectedEstablishmentDetails: null,
    });
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const establishment = await response.json();

      set({
        selectedEstablishmentDetails: establishment,
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
    set({ activeTypeFilter: type, activeCategoryFilter: null });
    get()._applyClientSideFilters();
    get()._updateCategoriesByFilter();
  },

  applyCategoryFilter: (category) => {
    set({ activeCategoryFilter: category });
    get()._applyClientSideFilters();
  },
}));
