import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import Heritage from "./components/Heritage";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Shows on all pages */}
      <Header />

      <Toaster position="top-right" reverseOrder={false} />

      {/* Routes */}
      <Routes>
        {/* Home Page - Shows all sections (Hero, Menu, Reviews, Heritage, Contact) */}
        <Route path="/" element={<HomePage />} />
        
        {/* Individual pages - for direct navigation */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<Heritage />} />
        <Route path="/heritage" element={<Heritage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer - Shows on all pages */}
      <Footer />
    </div>
  );
}
