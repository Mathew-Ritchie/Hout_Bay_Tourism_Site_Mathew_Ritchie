import React from "react";

import houtbay01 from "../assets/houtbay01.jpeg";

export default function Intro() {
  return (
    <div className="pb-10">
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
          className="w-full max-w-lg h-auto rounded-lg shadow-lg"
        />{" "}
        {/* <--- Added alt and Tailwind classes */}
      </div>
      <h2 className="text-xl sm:text-2xl font-extrabold text-center text-gray-900 my-2 md:my-4">
        Welcome to the village
      </h2>
      <hr></hr>
      <p className="py-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta obcaecati similique corporis
        nisi harum repudiandae recusandae consequatur perspiciatis, non amet laboriosam eaque veniam
        facere eum ex natus incidunt. Error, fugit.
        <br></br> <br></br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex animi veritatis, dolorum ipsam
        vel nihil. Repellat sapiente, quisquam libero eius ipsa cupiditate officia, id voluptas
        pariatur, exercitationem velit debitis fuga!
      </p>
      <hr></hr>
    </div>
  );
}
