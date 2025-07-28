import React from "react";

import houtbay01 from "../assets/houtbay01.jpeg";

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
        {" "}
        {/* <--- Added div for centering image */}
        <img
          src={houtbay01}
          alt="Hout Bay Landscape"
          className="w-full max-w-5xl h-auto rounded-lg shadow-lg"
        />{" "}
        {/* <--- Added alt and Tailwind classes */}
      </div>
      <h2 className="landing-sub-title text-xl sm:text-2xl font-extrabold text-center text-gray-900 my-2 md:my-4 ">
        Welcome to the village
      </h2>
      <hr></hr>
      <p className="py-5 text-justify">
        Hout Bay, affectionately known as "Republic of Hout Bay" by its residents, is a picturesque
        coastal village nestled on the Atlantic seaboard of Cape Town, South Africa. <br></br>{" "}
        <br></br>
        Framed by towering mountains on three sides and the glistening ocean on the fourth, it
        offers a breathtaking blend of natural beauty and vibrant community life. Historically a
        fishing village, Hout Bay has retained much of its charming maritime character, evident in
        its bustling harbour where colourful fishing boats bob gently and seals playfully vie for
        attention.
        <br></br> <br></br>
        Beyond its scenic allure, the village boasts a rich tapestry of art, culture, and outdoor
        activities, from exploring the lively markets and galleries to enjoying water sports or
        hiking the numerous trails that wind through its dramatic landscape. Hout Bay truly offers a
        unique escape, feeling a world away while remaining conveniently close to the heart of Cape
        Town.
        <br></br> <br></br>
      </p>
      <hr></hr>
    </div>
  );
}
