// src/components/CategorySelection.jsx
import React from "react";
import { useEstablishmentStore } from "../store/useEstablishmentStore";

export default function CategorySelection() {
  const establishmentCategories = useEstablishmentStore((state) => state.establishmentCategories);
  const applyCategoryFilter = useEstablishmentStore((state) => state.applyCategoryFilter);
  const activeCategoryFilter = useEstablishmentStore((state) => state.activeCategoryFilter);

  console.log("Categories from store:", establishmentCategories);

  const handleCategoryClick = (category) => {
    const newCategory = activeCategoryFilter === category ? null : category;
    applyCategoryFilter(newCategory);
  };

  return (
    <div className="pb-5">
      {establishmentCategories.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center">
          {establishmentCategories.map((item) => (
            <button
              key={item}
              onClick={() => handleCategoryClick(item)}
              className={`
                px-4 py-2 text-sm rounded-full shadow-md transition-all duration-200 ease-in-out
                ${
                  activeCategoryFilter === item
                    ? "bg-blue-600 text-white font-semibold"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
