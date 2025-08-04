import React from "react";

// Import all your images from the assets folder
// For this example, I am using a few placeholder image imports.
// You should replace these with your actual image paths.
import galleryImg1 from "../assets/harbourmarket.png";
import galleryImg2 from "../assets/harbour02.jpg";
import galleryImg3 from "../assets/harbour03.jpg";
import galleryImg4 from "../assets/leapard01.jpg";
import galleryImg5 from "../assets/leapard02.jpg";
import galleryImg6 from "../assets/sealisland.jpg";

export default function Gallery() {
  // Create an array to hold all the imported images
  const images = [
    { src: galleryImg1, alt: "Tourist market in Hout Bay Harbour" },
    { src: galleryImg2, alt: "Fishing boats in Hout Bay harbour" },
    { src: galleryImg3, alt: "Hout Bay harbour" },
    { src: galleryImg4, alt: "Leapard statue" },
    { src: galleryImg5, alt: "Leapard statue" },
    { src: galleryImg6, alt: "Seal Island" },
  ];

  return (
    <div className="pb-5 px-4 md:px-10 lg:px-20 bg-gray-100 md:pb-10">
      <h2 className="landing-sub-title text-3xl font-extrabold text-center text-gray-900 mb-5">
        Hout Bay in Pictures
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl"
          >
            <a href={image.src} target="_blank">
              <img src={image.src} alt={image.alt} className="w-full h-auto object-full" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
