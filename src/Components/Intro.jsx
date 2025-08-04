import React from "react";

// Assuming you have these images in your assets folder
import houtbay01 from "../assets/houtbay01.jpeg";
import harbour03 from "../assets/harbour03.jpg";
import sentinelsunset from "../assets/sentinelsunset.jpeg";

export default function Intro() {
  return (
    <div className="pb-10 px-2 sm:px-10  md:px-20 lg:px-20">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-2 md:mb-4">
        The Republic
      </h1>
      <h2 className="text-xl sm:text-2xl font-extrabold text-center text-gray-900 mb-2 md:mb-4">
        of Hout Bay
      </h2>
      <div className="flex justify-center mb-6">
        <img
          src={houtbay01}
          alt="Hout Bay Landscape"
          className="w-full max-w-5xl h-auto rounded-lg shadow-lg"
        />
      </div>
      <h2 className="landing-sub-title text-xl sm:text-2xl font-extrabold text-center text-gray-900 my-2 md:my-4 ">
        Welcome to the village
      </h2>
      <hr></hr>
      <p className="py-5 text-justify">
        <img
          src={harbour03}
          alt="Hout Bay Harbour"
          // Floating the image to the left with margin on larger screens
          className="rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3 sm:float-left sm:mr-4 mb-4 sm:mb-2"
        />
        Hout Bay, affectionately known as "Republic of Hout Bay" by its residents, is a picturesque
        coastal village nestled on the Atlantic seaboard of Cape Town, South Africa. Framed by
        towering mountains on three sides and the glistening ocean on the fourth, it offers a
        breathtaking blend of natural beauty and vibrant community life. Historically a fishing
        village, Hout Bay has retained much of its charming maritime character, evident in its
        bustling harbour where colourful fishing boats bob gently and seals playfully vie for
        attention.
      </p>
      <p className="py-5 text-justify">
        <img
          src={sentinelsunset}
          alt="Hout Bay market"
          // Floating the image to the right with margin on larger screens
          className="rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3 sm:float-right sm:ml-4 mb-4 sm:mb-2"
        />
        Beyond its scenic allure, the village boasts a rich tapestry of art, culture, and outdoor
        activities, from exploring the lively markets and galleries to enjoying water sports or
        hiking the numerous trails that wind through its dramatic landscape. Hout Bay truly offers a
        unique escape, feeling a world away while remaining conveniently close to the heart of Cape
        Town.
      </p>
      <p className="py-5 text-justify">
        Feel free to explore all the establishments Hout Bay has to offer. Whether you're looking
        for a restaurant, a shop, or a service, you'll find a wide variety of options to choose
        from.
      </p>
      <hr></hr>
    </div>
  );
}
