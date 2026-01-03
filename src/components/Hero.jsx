// // src/components/Hero.jsx
// import React, { useState } from "react";
// import heroBackground from "../assets/hero-background.jpg";

// /**
//  * Hero component: pixel-matched to reference.
//  * - Uses layered overlays: red base (8F1F3A), white fog, vignette, soft tint.
//  * - Outer white rounded frame (.hero-frame) matches reference rounded border.
//  * - Includes premium badge and two CTAs (primary amber, secondary glass).
//  */
// export default function Hero() {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="hero-frame px-4">
//       <section
//         className="hero-section"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         aria-label="Hero - Traditional Telugu Brahmin Catering"
//       >
//         {/* BACKGROUND LAYERS: image -> red base -> white fog -> vignette -> tint */}
//         <div
//           className="hero-background"
//           style={{ transform: isHovered ? "scale(1.035)" : "scale(1)" }}
//         >
//           <img
//             src={heroBackground}
//             alt="Traditional satvik cuisine on banana leaf"
//             className="object-cover"
//             loading="eager"
//           />

//           {/* 1) Red base gradient (pixel-match #8F1F3A) */}
//           <div className="hero-red-base" aria-hidden="true" />

//           {/* 2) White fog (soft creamy top fade) */}
//           <div className="hero-white-fog" aria-hidden="true" />

//           {/* 3) Vignette (center focus) */}
//           <div className="vignette" aria-hidden="true" />

//           {/* 4) Soft overlay tint (keeps subtle blend) */}
//           <div className="hero-overlay" aria-hidden="true" />
//         </div>

//         {/* CONTENT */}
//         <div className="container-max relative z-[60] px-4 text-center">
//           <div className="pt-20 pb-24">
//             {/* Premium badge */}
//             <div className="mb-6">
//               <span className="premium-badge">PREMIUM CATERING SERVICES</span>
//             </div>

//             {/* Title */}
//             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-extrabold hero-title leading-tight">
//               Traditional South & North Indian
//               <br />
//               Catering
//             </h1>

//             {/* Subheading */}
//             <p className="hero-tagline">

//               Pure, Authentic, &amp; Divine.
//             </p>

//             {/* Description */}
//             <p className="hero-description">

//               Serving 100% Pure Vegetarian, Authentic  Satvik Cuisine for Your Auspicious Occasions.
//             </p>

//             {/* CTAs */}
//             <div className="flex justify-center gap-6 mt-8 items-center flex-wrap">
//               <button
//                 className="hero-cta-primary"
//                 onClick={() => {
//                   // action: scroll/open booking — replace with your handler
//                   const el = document.querySelector("#contact");
//                   if (el) el.scrollIntoView({ behavior: "smooth" });
//                 }}
//                 aria-label="Book Now"
//               >
//                 Book Now
//               </button>

//               <button
//                 className="hero-cta-secondary"
//                 onClick={() => {
//                   const el = document.querySelector("#menu");
//                   if (el) el.scrollIntoView({ behavior: "smooth" });
//                 }}
//                 aria-label="View Menu"
//               >
//                 View Menu
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
// src/components/Hero.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroBackground from "../assets/hero-background.jpg";
import contactImage from "../assets/Contact.svg";

/**
 * Hero component – Figma pixel matched
 * Layers:
 * 1) Image (soft-light)
 * 2) Figma ivory gradient wash (FDFBF5)
 * 3) Soft vignette
 * 4) Content
 */
export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="hero-frame px-4">
      <section
        className="hero-section"
        aria-label="Hero - Traditional Telugu Brahmin Catering"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* ================= BACKGROUND ================= */}
        <div
          className="hero-background"
          style={{
            transform: isHovered ? "scale(1.03)" : "scale(1)",
            transition: "transform 1.5s ease"
          }}
        >
          {/* Image */}
          <img
            src={heroBackground}
            alt="Traditional satvik cuisine on banana leaf"
            className="object-cover"
            loading="eager"
          />

          {/* ✅ FIGMA IVORY WASH (EXACT MATCH) */}
          <div className="hero-figma-wash" aria-hidden="true" />

          {/* Soft vignette */}
          <div className="vignette" aria-hidden="true" />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="container-max relative z-[20] text-center">
          <div className="pt-20 pb-24">
            {/* Premium badge */}
            <div className="mb-6">
              <span className="premium-badge">
                PREMIUM CATERING SERVICES
              </span>
            </div>

            {/* Title */}
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-extrabold">
              Traditional South &amp; North Indian
              <br />
              Catering
            </h1>

            {/* Tagline */}
            <p className="hero-tagline">
              Pure, Authentic, &amp; Divine.
            </p>

            {/* Description */}
            <p className="hero-description">
              Serving 100% Pure Vegetarian, Authentic Satvik Cuisine for Your
              Auspicious Occasions.
            </p>

            {/* CTAs */}
            <div className="flex justify-center gap-6 mt-10 flex-wrap">
              <button
                className="hero-cta-primary"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  } else {
                    navigate("/contact");
                  }
                }}
              >
                <span>Enquire Now</span>
                <img src={contactImage} alt="Phone" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
              </button>

              <button
                className="hero-cta-secondary"
                onClick={() => {
                  const element = document.getElementById("menu");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  } else {
                    navigate("/menu");
                  }
                }}
              >
                View Menu
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
