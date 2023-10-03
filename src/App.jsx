import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// page import
import Header from "./containers/Header";
import CarListing from "./containers/CarListing";
import CarDetails from "./containers/CarDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CarListing />} />
        <Route path="/car/:carId" element={<CarDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
