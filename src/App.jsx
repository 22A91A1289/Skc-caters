// import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast"; // ✅ ADD THIS

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import Heritage from "./components/Heritage";
import Contact from "./components/Contact";
import Menu from "./components/Menu";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<Heritage />} />
        <Route path="/heritage" element={<Heritage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}
