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

      <Toaster 
        position="top-right" 
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: '#fff',
            color: '#333',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
            padding: '16px 20px',
            fontSize: '15px',
            fontFamily: "'Inter', sans-serif",
            border: '1px solid rgba(0, 0, 0, 0.08)',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
            style: {
              background: '#f0fdf4',
              color: '#166534',
              border: '1px solid #86efac',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
            style: {
              background: '#fef2f2',
              color: '#991b1b',
              border: '1px solid #fca5a5',
            },
          },
        }}
      />

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
