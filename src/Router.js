import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lookup from "./pages/lookup/Lookup";
import Home from "./pages/main/Home";
import Hospital from "./pages/reservation/Hospital";
import MainSubject from "./pages/reservation/MainSubject";
import Reservation from "./pages/reservation/Reservation";

const Router = () => {
  return (
    <BrowserRouter basename="pre-onboarding-lulu-lab">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/registration" element={<MainSubject />} />
        <Route path="/registration:id" element={<Hospital />} />
        <Route path="/lookup" element={<Lookup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
