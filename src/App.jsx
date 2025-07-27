import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./LandingPage";
import EstablishmentsListPage from "./EstablishmentsListPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/establishments/:type" element={<EstablishmentsListPage />} />
      </Routes>
    </BrowserRouter>
  );
}
