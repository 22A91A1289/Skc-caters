// import React, { useState, useEffect } from "react";
// // Assuming you have these avatar files in your assets folder
// import maleAvatar from "../assets/male.jpg";
// import femaleAvatar from "../assets/female.jpg";

// // Testimonial Data (unchanged)
// const testimonials = [
//   // ... (Testimonial data remains the same)
//   {
//     name: "Lakshmi Devi",
//     role: "Wedding Host, Vijayawada",
//     quote:
//       "The food reminded me of my grandmother's cooking! Every dish was prepared with such devotion and authenticity. Our guests couldn't stop praising the Pulihora and Bobbatlu. Thank you for making our daughter's wedding so memorable!",
//     date: "June 2024",
//     avatar: femaleAvatar,
//     accent: "#bd9a52",
//     tilt: "right",
//   },
//   {
//     name: "Rama Krishna Murthy",
//     role: "Upanayanam Host, Guntur",
//     quote:
//       "Exceptional service and truly authentic preparations! The team maintained all ritual purity standards for my son's Upanayanam. The Prasadam was divine, and the main feast was outstanding. Highly recommended for traditional ceremonies.",
//     date: "April 2024",
//     avatar: maleAvatar,
//     accent: "#bd9a52",
//     tilt: "left",
//   },
//   {
//     name: "Saraswati Sharma",
//     role: "Festool Host, Hyderabad",
//     quote:
//       "We hired them for our Sathyanarayana Vratham and community Ugadi celebration. The variety of dishes, authentic taste, and professional service exceeded all expectations. The Gongura Pachadi was the best I've ever had!",
//     date: "March 2024",
//     avatar: femaleAvatar,
//     accent: "#d1775b",
//     tilt: "right",
//   },
//   {
//     name: "Venkata Subramanyam",
//     role: "Temple Trustee, Tirupati",
//     quote:
//       "For our temple's annual Brahmotsavam, we needed pure satvik fare that understood the sanctity of temple food. This team delivered perfectly! The Prasadam quality and taste were divine. Will definitely engage them again.",
//     date: "February 2024",
//     avatar: maleAvatar,
//     accent: "#e1c168",
//     tilt: "left",
//   },
//   {
//     name: "Padmavathi Devi",
//     role: "Shastipoorthi Host, Kakinada",
//     quote:
//       "My husband's 60th birthday celebration was made special by this wonderful catering service. The traditional menu, flavors, and taste transported us back to our childhood. Every guest asked for their contact!",
//     date: "January 2024",
//     avatar: femaleAvatar,
//     accent: "#c74c3c",
//     tilt: "right",
//   },
//   {
//     name: "Srinivasa Rao",
//     role: "Corporate Event, Visakhapatnam",
//     quote:
//       "We wanted to showcase authentic Telugu cuisine at our company's cultural day. The team not only provided excellent food but also explained the significance of each dish. It was educational and delicious!",
//     date: "December 2023",
//     avatar: maleAvatar,
//     accent: "#bd9a52",
//     tilt: "left",
//   },
// ];

// const StarRow = () => (
//   <div className="flex items-center gap-1 text-amber-500" aria-label="5 star rating">
//     {Array.from({ length: 5 }).map((_, idx) => (
//       <svg
//         key={idx}
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         className="w-5 h-5 fill-current drop-shadow-sm"
//       >
//         <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//       </svg>
//     ))}
//   </div>
// );

// export default function Reviews() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isMobileRange, setIsMobileRange] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       const width = window.innerWidth;
//       setIsMobileRange(width >= 320 && width <= 425);
//     };
    
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // Auto-scroll for mobile range only
//   useEffect(() => {
//     if (!isMobileRange) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     }, 4000); // Change slide every 4 seconds

//     return () => clearInterval(interval);
//   }, [isMobileRange]);

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <main id="reviews" className="reviews-page py-16 px-4" style={{ backgroundColor: '#fdf7f0' }}>
//       <div className="max-w-7xl mx-auto reviews-container">
//         <div className="text-center mb-10">
//           <p className="what-families-say">
//             What Families Say
//           </p>
//           <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#6c3b22] font-bold mt-2">
//             Heartfelt Testimonials
//           </h1>
//           {/* brahmin-cuisine-line class applied here */}
//         <p className="appreciation-text brahmin-cuisine-line">
//             Words of appreciation from families who experienced our authentic Food
//           </p>
//         </div>

//         {/* Desktop Grid / Mobile Slider */}
//         <div className="reviews-wrapper">
//           <div 
//             className="reviews-slider-container"
//             style={isMobileRange ? {
//               transform: `translateX(calc(-${currentIndex} * 100% / ${testimonials.length}))`,
//               width: `${testimonials.length * 100}%`
//             } : {
//               width: '100%'
//             }}
//           >
//             {testimonials.map((item, idx) => (
//               <article
//                 key={item.name + idx}
//                 style={{ '--accent': item.accent }}
//                 className="review-card"
//                 data-tilt={item.tilt}
//               >
//                 {/* Inner div wrapper is used to manage the border/padding look */}
//                 <div className="review-content-wrapper">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="avatar-ring">
//                       <img
//                         src={item.avatar}
//                         alt={item.name}
//                         className="w-12 h-12 rounded-full object-cover"
//                         loading="lazy"
//                       />
//                     </div>
//                     <div>
//                       <h3 className="text-base font-semibold text-[#603215] leading-tight">
//                         {item.name}
//                       </h3>
//                       <p className="text-xs text-gray-500">{item.role}</p>
//                     </div>
//                   </div>

//                   <StarRow />

//                   <p className="mt-4 text-gray-600 quote-text">
//                     "{item.quote}"
//                   </p>

//                   <p className="mt-4 text-xs review-date">— {item.date}</p>

//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>

//         {/* Slider Dots - Only for mobile range */}
//         {isMobileRange && (
//           <div className="slider-dots-container">
//             {testimonials.map((_, idx) => (
//               <button
//                 key={idx}
//                 className={`slider-dot ${currentIndex === idx ? 'active' : ''}`}
//                 onClick={() => goToSlide(idx)}
//                 aria-label={`Go to slide ${idx + 1}`}
//               />
//             ))}
//           </div>
//         )}

//         {/* Average Rating Pill */}
//         <div className="flex justify-center mt-20">
//           <div className="rating-pill p-4 flex items-center gap-3 rounded-full" style={{ backgroundColor: '#9b6d41', boxShadow: '0 8px 16px rgba(155, 109, 65, 0.4)' }}>
//             <div className="rating-pill__icon text-yellow-400">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current">
//                 <path
//                   d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
//                 />
//               </svg>
//             </div>
//             <div className="rating-pill__text">
//               <div className="rating-title">
//                 4.9 / 5.0 Average Rating
//               </div>
//               <div className="rating-subtitle">
//                 Based on 500+ reviews
//               </div>
//             </div>

//           </div>
//         </div>

//       </div>
//     </main>
//   );
// }
import React, { useState, useEffect } from "react";
import maleAvatar from "../assets/male.jpg";
import femaleAvatar from "../assets/female.jpg";

/* 🔒 FIXED DISPLAY ORDER — DO NOT CHANGE */
const REVIEW_ORDER = [
  "Lakshmi Devi",
  "Rama Krishna Murthy",
  "Saraswati Sharma",
  "Venkata Subramanyam",
  "Padmavathi Devi",
  "Srinivasa Rao"
];

/* ⭐ SAME STAR COMPONENT — UNCHANGED */
const StarRow = () => (
  <div className="flex items-center gap-1 text-amber-500" aria-label="5 star rating">
    {Array.from({ length: 5 }).map((_, idx) => (
      <svg
        key={idx}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-current drop-shadow-sm"
      >
        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

export default function Reviews() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileRange, setIsMobileRange] = useState(false);

  /* 📱 MOBILE CHECK — UNCHANGED */
  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobileRange(width >= 320 && width <= 425);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* 🔥 FETCH FROM BACKEND + ORDER FIX */
  useEffect(() => {
    fetch("https://skc-backend-1ax0.onrender.com/api/reviews")
      .then(res => res.json())
      .then(data => {
        const formatted = data
          .filter(
            r =>
              r.approved === true &&
              REVIEW_ORDER.includes(r.name)
          )
          .sort(
            (a, b) =>
              REVIEW_ORDER.indexOf(a.name) -
              REVIEW_ORDER.indexOf(b.name)
          )
          .map((r, index) => ({
            name: r.name,
            role: r.role,
            quote: r.quote,
            date: r.eventDate,
            avatar: r.gender === "female" ? femaleAvatar : maleAvatar,
            accent: ["#bd9a52", "#d1775b", "#e1c168", "#c74c3c"][index % 4],
            tilt: index % 2 === 0 ? "right" : "left"
          }));

        setTestimonials(formatted);
      });
  }, []);

  /* 🔁 AUTO SCROLL — UNCHANGED */
  useEffect(() => {
    if (!isMobileRange || testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobileRange, testimonials]);

  const goToSlide = index => setCurrentIndex(index);

  return (
    <main
      id="reviews"
      className="reviews-page py-16 px-4"
      style={{ backgroundColor: "#fdf7f0" }}
    >
      <div className="max-w-7xl mx-auto reviews-container">

        {/* HEADER — UNCHANGED */}
        <div className="text-center mb-10">
          <p className="what-families-say">What Families Say</p>
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#6c3b22] font-bold mt-2">
            Heartfelt Testimonials
          </h1>
          <p className="appreciation-text brahmin-cuisine-line">
            Words of appreciation from families who experienced our authentic Food
          </p>
        </div>

        {/* REVIEWS */}
        <div className="reviews-wrapper">
          <div
            className="reviews-slider-container"
            style={
              isMobileRange
                ? {
                    transform: `translateX(calc(-${currentIndex} * 100% / ${testimonials.length}))`,
                    width: `${testimonials.length * 100}%`
                  }
                : { width: "100%" }
            }
          >
            {testimonials.map((item, idx) => (
              <article
                key={item.name + idx}
                style={{ "--accent": item.accent }}
                className="review-card"
                data-tilt={item.tilt}
              >
                <div className="review-content-wrapper">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="avatar-ring">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#603215] leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500">{item.role}</p>
                    </div>
                  </div>

                  <StarRow />

                  <p className="mt-4 text-gray-600 quote-text">
                    "{item.quote}"
                  </p>

                  <p className="mt-4 text-xs review-date">
                    — {item.date}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* DOTS — UNCHANGED */}
        {isMobileRange && (
          <div className="slider-dots-container">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`slider-dot ${
                  currentIndex === idx ? "active" : ""
                }`}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
