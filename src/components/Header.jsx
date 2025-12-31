// // src/components/Header.jsx
// import React, { useState } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import contactImage from "../assets/Contact.svg";

// export default function Header() {
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="site-header">
//       <div className="container-max">
//         <div className="flex items-center justify-between px-4 sm:px-6 py-4">

//           {/* ================= LOGO ================= */}
//           <Link to="/" className="flex items-center space-x-3">
//             <div className="om-logo">
//               <span className="om-symbol">ॐ</span>
//             </div>

//             <div>
//               <h1 className="text-lg sm:text-xl font-playfair font-bold text-[#7a0d14] tracking-tight">
//                 SRIVATSASA &amp; KOWNDINYA CATERERS
//               </h1>
//               <p className="text-xs text-gray-600 mt-0.5 font-inter">
//                 100% Pure Vegetarian
//               </p>
//             </div>
//           </Link>

//           {/* ================= DESKTOP NAV ================= */}
//           <nav className="hidden md:flex items-center space-x-6">
//             {["/", "/menu", "/about", "/reviews", "/contact"].map((path, i) => {
//               const labels = ["Home", "Menu", "About Us", "Reviews", "Contact"];
//               return (
//                 <NavLink
//                   key={path}
//                   to={path}
//                   end={path === "/"}
//                   className={({ isActive }) =>
//                     `text-sm font-medium pb-1 transition ${
//                       isActive
//                         ? "text-[#7a0d14] border-b-2 border-[#b97a20]"
//                         : "text-gray-700 hover:text-[#7a0d14]"
//                     }`
//                   }
//                 >
//                   {labels[i]}
//                 </NavLink>
//               );
//             })}
//           </nav>

//           {/* ================= DESKTOP CTA ================= */}
//           <div className="hidden md:block">
//             <button
//               className="header-book-btn"
//               onClick={() => navigate("/contact")}
//               aria-label="Enquire Now"
//             >
//               <span>Enquire Now</span>
//               <img
//                 src={contactImage}
//                 alt="Phone"
//                 style={{
//                   width: "16px",
//                   height: "16px",
//                   filter: "brightness(0) invert(1)",
//                   marginLeft: "4px",
//                 }}
//               />
//             </button>
//           </div>

//           {/* ================= MOBILE HAMBURGER ================= */}
//           <button
//             className="md:hidden hamburger-btn"
//             aria-label="Toggle Menu"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <span />
//             <span />
//             <span />
//           </button>
//         </div>

//         {/* ================= MOBILE MENU ================= */}
//         {menuOpen && (
//           <div className="mobile-menu md:hidden">
//             <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
//             <NavLink to="/menu" onClick={() => setMenuOpen(false)}>Menu</NavLink>
//             <NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink>
//             <NavLink to="/reviews" onClick={() => setMenuOpen(false)}>Reviews</NavLink>
//             <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>

//             <button
//               className="header-book-btn mt-2"
//               onClick={() => {
//                 setMenuOpen(false);
//                 navigate("/contact");
//               }}
//             >
//               Enquire Now
//             </button>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }
// src/components/Header.jsx
// import React, { useState } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import contactImage from "../assets/Contact.svg";

// export default function Header() {
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="site-header">
//       <div className="container-max relative"> {/* Relative added here to anchor the menu */}
//         <div className="flex items-center justify-between px-4 sm:px-6 py-4">

//           {/* ================= LOGO ================= */}
//           <Link to="/" className="flex items-center space-x-3">
//             <div className="om-logo">
//               <span className="om-symbol">ॐ</span>
//             </div>

//             <div>
//               <h1 className="text-lg sm:text-xl font-playfair font-bold text-[#7a0d14] tracking-tight">
//                 SRIVATSASA &amp; KOWNDINYA CATERERS
//               </h1>
//               <p className="text-xs text-gray-600 mt-0.5 font-inter">
//                 100% Pure Vegetarian
//               </p>
//             </div>
//           </Link>

//           {/* ================= DESKTOP NAV ================= */}
//           <nav className="hidden md:flex items-center space-x-6">
//             {["/", "/menu", "/about", "/reviews", "/contact"].map((path, i) => {
//               const labels = ["Home", "Menu", "About Us", "Reviews", "Contact"];
//               return (
//                 <NavLink
//                   key={path}
//                   to={path}
//                   end={path === "/"}
//                   className={({ isActive }) =>
//                     `text-sm font-medium pb-1 transition ${
//                       isActive
//                         ? "text-[#7a0d14] border-b-2 border-[#b97a20]"
//                         : "text-gray-700 hover:text-[#7a0d14]"
//                     }`
//                   }
//                 >
//                   {labels[i]}
//                 </NavLink>
//               );
//             })}
//           </nav>

//           {/* ================= DESKTOP CTA ================= */}
//           <div className="hidden md:block">
//             <button
//               className="header-book-btn"
//               onClick={() => navigate("/contact")}
//               aria-label="Enquire Now"
//             >
//               <span>Enquire Now</span>
//               <img
//                 src={contactImage}
//                 alt="Phone"
//                 style={{
//                   width: "16px",
//                   height: "16px",
//                   filter: "brightness(0) invert(1)",
//                   marginLeft: "4px",
//                 }}
//               />
//             </button>
//           </div>

//           {/* ================= MOBILE HAMBURGER ================= */}
//           <button
//             className={`md:hidden hamburger-btn ${menuOpen ? 'active' : ''}`}
//             aria-label="Toggle Menu"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <span />
//             <span />
//             <span />
//           </button>
//         </div>

//         {/* ================= MOBILE MENU (Floating Box) ================= */}
//         {/* Is open toggle handling with absolute positioning in CSS */}
//         {menuOpen && (
//           <div className="mobile-menu md:hidden">
//             <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
//             <NavLink to="/menu" onClick={() => setMenuOpen(false)}>Menu</NavLink>
//             <NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink>
//             <NavLink to="/reviews" onClick={() => setMenuOpen(false)}>Reviews</NavLink>
//             <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>

           
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }
// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import contactImage from "../assets/Contact.svg";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Page marinappudu menu close avvali and top ki vellali
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container-max relative">
        <div className="flex items-center justify-between px-4 sm:px-6 py-4">

          {/* ================= LOGO ================= */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink min-w-0" onClick={handleNavClick}>
            <div className="om-logo flex-shrink-0">
              <span className="om-symbol">ॐ</span>
            </div>

            <div className="flex-shrink min-w-0">
              <h1 className="text-lg sm:text-xl font-playfair font-bold text-[#7a0d14] tracking-tight">
                SRIVATSASA &amp; KOUNDINYA CATERERS
              </h1>
              <p className="text-xs text-gray-600 mt-0.5 font-inter">
                100% Pure Vegetarian
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex items-center space-x-6">
            {["/", "/menu", "/about", "/reviews", "/contact"].map((path, i) => {
              const labels = ["Home", "Menu", "About Us", "Reviews", "Contact"];
              return (
                <NavLink
                  key={path}
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) =>
                    `text-sm font-medium pb-1 transition ${
                      isActive
                        ? "text-[#7a0d14] border-b-2 border-[#b97a20]"
                        : "text-gray-700 hover:text-[#7a0d14]"
                    }`
                  }
                >
                  {labels[i]}
                </NavLink>
              );
            })}
          </nav>

          {/* ================= DESKTOP CTA ================= */}
          <div className="hidden md:block">
            <button
              className="header-book-btn"
              onClick={() => navigate("/contact")}
            >
              <span>Enquire Now</span>
              <img
                src={contactImage}
                alt="Phone"
                style={{
                  width: "16px",
                  height: "16px",
                  filter: "brightness(0) invert(1)",
                  marginLeft: "4px",
                }}
              />
            </button>
          </div>

          {/* ================= MOBILE HAMBURGER ================= */}
          <button
            className={`md:hidden hamburger-btn flex-shrink-0 ${menuOpen ? 'active' : ''}`}
            aria-label="Toggle Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* ================= MOBILE MENU (Floating Box) ================= */}
        {menuOpen && (
          <div className="mobile-menu md:hidden">
            <NavLink to="/" onClick={handleNavClick}>Home</NavLink>
            <NavLink to="/menu" onClick={handleNavClick}>Menu</NavLink>
            <NavLink to="/about" onClick={handleNavClick}>About Us</NavLink>
            <NavLink to="/reviews" onClick={handleNavClick}>Reviews</NavLink>
            <NavLink to="/contact" onClick={handleNavClick}>Contact</NavLink>
          </div>
        )}
      </div>
    </header>
  );
}