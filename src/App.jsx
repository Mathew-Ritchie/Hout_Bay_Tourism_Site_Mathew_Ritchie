import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderLayout from "./pages/HeaderLayout";
import LandingPage from "./pages/LandingPage";
import EstablishmentsListPage from "./pages/EstablishmentsListPage";
import IndividualEstablishmentPage from "./pages/IndividualEstablishmentPage";
import ScrollToHash from "./Utility/ScrollToHash";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/establishments/:type" element={<EstablishmentsListPage />} />
          <Route path="/:id" element={<IndividualEstablishmentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
