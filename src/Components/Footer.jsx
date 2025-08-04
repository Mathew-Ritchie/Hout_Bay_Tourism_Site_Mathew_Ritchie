import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-700 w-screen inline-flex flex-col justify-center items-center py-8 text-gray-50  ">
      <p className="pb-1 text-sm sm:text-lg">
        This site was designed and built by Mathew.J.Ritchie
      </p>
      <p className="pb-1 text-sm sm:text-lg">
        It is a non-profit site for use as a portfolio piece
      </p>
      <p className="text-sm sm:text-lg">
        For more Please visit
        <a className="footer-link pl-2" href="https://mathewritchie.netlify.app/" target="_blank">
          mathewritchie.netlify.app
        </a>
      </p>
    </div>
  );
}
