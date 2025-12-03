import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import EstablishmentsListPage from "./pages/EstablishmentsListPage";
import IndividualEstablishmentPage from "./pages/IndividualEstablishmentPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/establishments/:type" element={<EstablishmentsListPage />} />
        <Route path="/:id" element={<IndividualEstablishmentPage />} />
      </Routes>
    </BrowserRouter>
  );
}
