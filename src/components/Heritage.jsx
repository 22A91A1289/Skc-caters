// // import React from "react";
// // import founderImage from "../assets/founder.jpg";
// // import "./Heritage.css";

// // export default function Heritage() {
// //   return (
// //     <section className="heritage-section">
// //       <div className="container-max">

// //         {/* ===== Header ===== */}
// //         <div className="heritage-header">
// //           <p className="heritage-subtitle">Our Foundation</p>
// //           <h2 className="heritage-title">Heritage & Values</h2>
// //         </div>

// //         {/* ===== Values ===== */}
// //         <div className="values-grid">
// //           <div className="value-card devotion-card">
// //             <div className="value-icon">🙏</div>
// //             <h3>Devotion</h3>
// //             <p>
// //               Every meal is prepared with sacred rituals and prayers,
// //               honoring ancient Vedic traditions.
// //             </p>
// //           </div>

// //           <div className="value-card authenticity-card">
// //             <div className="value-icon">📜</div>
// //             <h3>Authenticity</h3>
// //             <p>
// //               Traditional recipes preserved through generations,
// //               maintaining Telugu Brahmin purity.
// //             </p>
// //           </div>

// //           <div className="value-card love-card">
// //             <div className="value-icon">❤️</div>
// //             <h3>Love</h3>
// //             <p>
// //               Each dish is cooked with care and warmth,
// //               just like food made for family.
// //             </p>
// //           </div>
// //         </div>

// //         {/* ===== Founder Section ===== */}
// //         <div className="founder-section">

// //           {/* === PHOTO STACK (2 CARDS) === */}
// //           <div className="founder-image-area">
// //             <div className="photo-back-card"></div>

// //             <div className="photo-front-card">
// //               <img
// //                 src={founderImage}
// //                 alt="Pandit Venkateshwara Sharma"
// //                 className="founder-image"
// //               />
// //             </div>
// //           </div>

// //           {/* ===== Content ===== */}
// //           <div className="founder-content">
// //             <h2>Pandit Venkateshwara Sharma</h2>
// //             <p>
// //               Founded in 1973, our journey began as a sacred service rooted
// //               in devotion and tradition. Located in Vanasthalipuram,
// //               Hyderabad, Srivatsasa & Kowndinya Caterers is trusted for
// //               ritual-based Telugu Brahmin cuisine.
// //             </p>

// //             <ul className="features-list">
// //               <li>✔ Sattvic Preparations</li>
// //               <li>✔ Pure Ingredients</li>
// //               <li>✔ Vedic Rituals</li>
// //               <li>✔ Traditional Methods</li>
// //             </ul>
// //           </div>
// //         </div>

// //         {/* ===== Stats ===== */}
// //         <div className="stats-section">
// //           <div>
// //             <h3>10+</h3>
// //             <span>Years Experience</span>
// //           </div>
// //           <div>
// //             <h3>50+</h3>
// //             <span>Events Catered</span>
// //           </div>
// //           <div>
// //             <h3>100%</h3>
// //             <span>Authentic Recipes</span>
// //           </div>
// //         </div>

// //         {/* ===== Branding ===== */}
// //         <div className="branding-box">
// //           Taste of Tradition
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }

// import React from "react";
// import founderImage from "../assets/founder.jpg";
// import devotionalIcon from "../assets/Devotional.jpg";
// import authenticityIcon from "../assets/Authenticity.jpg";
// import loveIcon from "../assets/Love.jpg";
// import "./Heritage.css";

// export default function Heritage() {
//   return (
//     <section className="heritage-section">
//       <div className="container-max">

//         {/* ===== Header ===== */}
//         <div className="heritage-header">
//           <p className="heritage-subtitle">Our Foundation</p>
//           <h2 className="heritage-title">Heritage & Values</h2>
//         </div>

//         {/* ===== Values ===== */}
//         <div className="values-grid">
//           <div className="value-card">
//             <div className="value-icon">
//               <img src={devotionalIcon} alt="Devotion" />
//             </div>
//             <h3>Devotion</h3>
//             <p>
//               Every meal is prepared with sacred rituals and prayers,
//               honoring ancient Vedic traditions passed down through generations.
//             </p>
//           </div>

//           <div className="value-card">
//             <div className="value-icon">
//               <img src={authenticityIcon} alt="Authenticity" />
//             </div>
//             <h3>Authenticity</h3>
//             <p>
//               We use only traditional recipes documented in ancient scriptures,
//               maintaining purity of Telugu Brahmin cuisine.
//             </p>
//           </div>

//           <div className="value-card">
//             <div className="value-icon">
//               <img src={loveIcon} alt="Love" />
//             </div>
//             <h3>Love</h3>
//             <p>
//               Each dish is crafted with the same love and care as cooking
//               for our own family.
//             </p>
//           </div>
//         </div>

//         {/* ===== Founder BIG CARD ===== */}
//         <div className="founder-section">

//           {/* Top: Photo + Content */}
//           <div className="founder-top">

//             {/* Photo */}
//             <div className="founder-image-area">
//               <div className="photo-back-card"></div>
//               <div className="photo-front-card">
//                 <img
//                   src={founderImage}
//                   alt="Pandit Venkateshwara Sharma"
//                   className="founder-image"
//                 />
//               </div>
//             </div>

//             {/* Content */}
//             <div className="founder-content">
//               <h2>Telidevara Rajendra Prasad 
//                  <span className="founder-degree">M.A</span>
//               </h2>

//               <p>
//                 Since 1989, Srivatsasa & Koundinya Caterers has specialized in authentic South Indian pure vegetarian cuisine in Vanasthalipuram, Hyderabad. Trusted by 10,000+ clients, we cater weddings and corporate events, delivering traditional taste, ritual purity, and professional service.
//               </p>

//               <ul className="features-list">
//                 <li> Wedding</li>
//                 <li> Birthday Party</li>
//                 <li> Get togethers,Privite Parties etc..</li>
//                 <li> Any Occasions</li>
//               </ul>
//             </div>
//           </div>

//           {/* Bottom: Stats */}
//           <div className="stats-section">
//             <div className="stat">
//               <h3>10+</h3>
//               <span>Years Experience</span>
//             </div>
//             <div className="stat">
//               <h3>50+</h3>
//               <span>Events Catered</span>
//             </div>
//             <div className="stat">
//               <h3>100%</h3>
//               <span>Authentic Recipes</span>
//             </div>
//           </div>

//           {/* Taste of Tradition (inside same div) */}
//           <div className="branding-box">
//             ❝ Taste of Tradition
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import founderImage from "../assets/founder.jpg";
import devotionalIcon from "../assets/Devotional.png";
import authenticityIcon from "../assets/Authenticity.svg";
import loveIcon from "../assets/Love.svg";
import QuoteIcon from "../assets/quote.png"; // or .png
import CheckIcon from "../assets/check.png";


export default function Heritage() {
  return (
    <section id="about" className="heritage-section">
      <div className="container-max">

        {/* ===== Header ===== */}
        <div className="heritage-header">
          <p className="heritage-subtitle">Our Foundation</p>
          <h2 className="heritage-title">Heritage & Values</h2>
        </div>

        {/* ===== Values ===== */}
        <div className="values-grid">
          <div className="value-card devotion-card">
            <div className="value-icon">
              <img src={devotionalIcon} alt="Devotion" />
            </div>
            <h3>Devotion</h3>
            <p>
              Every meal is prepared with sacred rituals and prayers,
              honoring ancient Vedic traditions passed down through generations.
            </p>
          </div>

          <div className="value-card authenticity-card">
            <div className="value-icon">
              <img src={authenticityIcon} alt="Authenticity" />
            </div>
            <h3>Authenticity</h3>
            <p>
              We use only traditional recipes documented in ancient scriptures,
              maintaining purity of Food.
            </p>
          </div>

          <div className="value-card love-card">
            <div className="value-icon">
              <img src={loveIcon} alt="Love" />
            </div>
            <h3>Love</h3>
            <p>
              Each dish is crafted with the same love and care as cooking
              for our own family.
            </p>
          </div>
        </div>

        {/* ===== Founder Section ===== */}
        <div className="founder-section">

          <div className="founder-top">

            {/* Photo */}
            <div className="founder-image-area">
              <div className="photo-back-card"></div>
              <div className="photo-front-card">
                <img
                  src={founderImage}
                  alt="Telidevara Rajendra Prasad"
                  className="founder-image"
                />
              </div>
            </div>

            {/* Content */}
            <div className="founder-content">
              <div className="founder-name">
                Telidevara Rajendra Prasad
              </div>

              <p>
                Since 1989, Srivatsasa & Koundinya Caterers has specialized in authentic
                South Indian pure vegetarian cuisine in Vanasthalipuram, Hyderabad.
                Trusted by 10,000+ clients, we cater weddings and corporate events,
                delivering traditional taste, ritual purity, and professional service.
              </p>

              <ul className="features-list">
                <li>
                  <img src={CheckIcon} alt="" className="check-icon" />
                  Wedding..
                </li>
                <li>
                  <img src={CheckIcon} alt="" className="check-icon" />
                  Birthday Party..
                </li>
                <li>
                  <img src={CheckIcon} alt="" className="check-icon" />
                  Get togethers..
                </li>
                <li>
                  <img src={CheckIcon} alt="" className="check-icon" />
                  Corporate events..
                </li>
              </ul>
            </div>

          </div>

          {/* Stats */}
          <div className="stats-section">
            <div className="stat">
              <h3>38+</h3>
              <span>Years Experience</span>
            </div>
            <div className="stat">
              <h3>10k+</h3>
              <span>Events Catered</span>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <span>Authentic Recipes</span>
            </div>
          </div>

          {/* Branding */}
          <div className="branding-box">
            <img src={QuoteIcon} alt="quote" className="branding-quote" />
            <span className="branding-text">Taste of Tradition</span>
          </div>


        </div>
      </div>
    </section>
  );
}
