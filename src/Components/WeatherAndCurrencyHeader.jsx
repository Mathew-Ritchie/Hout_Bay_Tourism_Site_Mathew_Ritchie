import React from "react";
import Weather from "./Weather";
import Currencies from "./Currencies";

export default function WeatherAndCurrencyHeader() {
  return (
    <div className="w-screen flex justify-end items-center gap-2 pr-10 pt-0 pb-5 ">
      <Currencies />
      <Weather />
    </div>
  );
}
