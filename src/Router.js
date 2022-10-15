import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lookup from "./pages/lookup/Lookup";
import Home from "./pages/main/Home";
import Registration from "./pages/reservation/Registration";
import Reservation from "./pages/reservation/Reservation";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/lookup" element={<Lookup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
