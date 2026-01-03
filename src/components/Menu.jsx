// import React, { useState } from "react";
// import CheckIcon from "../assets/check.png";
// import StarIcon from "../assets/Star.svg";

// // Import category images
// import SweetsStartersImg from "../assets/Sweets&Staters.jpg";
// import SnacksImg from "../assets/Snacks.jpg";
// import BreakfastImg from "../assets/Breakfast.jpg";
// import SouthIndianCurryImg from "../assets/Southindiancurries.jpg";
// import NorthIndianDishesImg from "../assets/NorthIndiandishes.jpg";
// import SareeImg from "../assets/Saree.jpg";
// import FlavoredRiceImg from "../assets/Flavouredrice.jpg";
// import DalHotItemsImg from "../assets/Dal&hotitems.jpg";
// import DalDryItemsImg from "../assets/Dal&dryitems.jpg";
// import SweetsImg from "../assets/Sweets.jpg";


// export default function Menu() {
//   const [activeMenu, setActiveMenu] = useState("standard");

//   // Menu data based on the images provided
//   const menuData = {
//     economic: {
//       price: "365₹",
//       categories: [
//         {
//           title: "Dal & Hot Items",
//           items: [
//             "Tomato Pappu",
//             "Thotakura Pappu",
//             "Mudda Pappu",
//             "Aratikaya Bajji",
//             "Mirchi Bajji and more..."
//           ]
//         },
//         {
//           title: "Snacks",
//           items: [
//             "Mixture",
//             "Kaara Bundhi",
//             "Janthikalu",
//             "Murukulu and more..."
//           ]
//         },
//         {
//           title: "Breakfast",
//           items: [
//             "Regular Idli",
//             "Sambar Wada",
//             "Onion Dosa",
//             "Upma",
//             "Mysore Bajji and more..."
//           ]
//         },
//         {
//           title: "South Indian Curry",
//           items: [
//             "Gutthi Vankaaya Curry",
//             "Aalu Tomato Curry",
//             "Chikkudukaaya Tomato Curry",
//             "Beerakaaya Sanagapappu Curry",
//             "Tomato Mulakkaaya Curry and more..."
//           ]
//         },
//         {
//           title: "North Indian Dishes",
//           items: [
//             "Paneer Butter Masala",
//             "Aalu Mutter",
//             "Tomato Kaju Kurma",
//             "Mixed Veg. Kurma",
//             "Baby Corn Masala and more..."
//           ]
//         },
//         {
//           title: "Sarce",
//           items: [
//             "Sunnundalu",
//             "Laddu",
//             "Kajjikaayalu",
//             "Ariselu",
//             "Mysorepak and more..."
//           ]
//         }
//       ],
//       complementary: "Served with complementary Sweets, Rotis, Flavor Rice, Vegetable Fry, Sambar/Rasam, Pickles, Chutneys, Powders, White Rice Staples, Ice Cream, and Pan.",
//       buttonText: "View Full Economic Menu"
//     },
//     traditional: {
//       price: "365₹",
//       categories: [
//         {
//           title: "Flavored Rice",
//           items: [
//             "Veg Biryani",
//             "Pulihora",
//             "Coconut Rice",
//             "Tomato Rice",
//             "Jeera Rice and more..."
//           ]
//         },
//         {
//           title: "Snacks",
//           items: [
//             "Mixture",
//             "Kaara Bundhi",
//             "Janthikalu",
//             "Murukulu and more..."
//           ]
//         },
//         {
//           title: "Breakfast",
//           items: [
//             "Regular Idli",
//             "Sambar Wada",
//             "Onion Dosa",
//             "Upma",
//             "Mysore Bajji and more..."
//           ]
//         },
//         {
//           title: "Sweets",
//           items: [
//             "Kaju Burfee",
//             "Bobbatlu",
//             "Kakinada Khaja",
//             "Poornam Burelu",
//             "Semiya Payasam and more..."
//           ]
//         },
//         {
//           title: "Dal & Fry Items",
//           items: [
//             "Tomato Pappu",
//             "Thotakura Pappu",
//             "Mudda Pappu",
//             "Aalu Fry",
//             "Vankaaya Pakoda and more..."
//           ]
//         },
//         {
//           title: "Saree",
//           items: [
//             "Sunnundalu",
//             "Laddu",
//             "Kajjikaayalu",
//             "Ariselu",
//             "Mysorepak and more..."
//           ]
//         }
//       ],
//       complementary: "Served with complementary Hot Items (Bajji/Wada), Vegetable Curries, Sambar/Rasam, Pickles, Chutneys, Powders, White Rice, Curd & Ghee, and Ice Cream",
//       buttonText: "View Full Traditional Menu"
//     },
//     standard: {
//       price: "465₹",
//       categories: [
//         {
//           title: "Sweets & Starters",
//           items: [
//             "Kaju Burfee",
//             "Bobbatlu",
//             "Kakinada Khaja",
//             "Veg. Manchuria",
//             "Spring Roll and more..."
//           ]
//         },
//         {
//           title: "Snacks",
//           items: [
//             "Mixture",
//             "Kaara Bundhi",
//             "Janthikalu",
//             "Murukulu and more..."
//           ]
//         },
//         {
//           title: "Breakfast",
//           items: [
//             "Regular Idli",
//             "Sambar Wada",
//             "Onion Dosa",
//             "Upma",
//             "Mysore Bajji and more..."
//           ]
//         },
//         {
//           title: "South Indian Curry",
//           items: [
//             "Gutthi Vankaaya Curry",
//             "Aalu Tomato Curry",
//             "Chikkudukaaya Tomato Curry",
//             "Beerakaaya Sanagapappu Curry",
//             "Tomato Mulakkaaya Curry and more..."
//           ]
//         },
//         {
//           title: "North Indian Dishes",
//           items: [
//             "Paneer Butter Masala",
//             "Aalu Mutter",
//             "Tomato Kaju Kurma",
//             "Mixed Veg. Kurma",
//             "Baby Corn Masala and more..."
//           ]
//         },
//         {
//           title: "Saree",
//           items: [
//             "Sunnundalu",
//             "Laddu",
//             "Kajjikaayalu",
//             "Ariselu",
//             "Mysorepak and more..."
//           ]
//         }
//       ],
//       complementary: "Served with complementary Welcome Drinks, Soups, Rotis, Flavor Rice, Dal, Sambar/Rasam, Pickles, and Dessert",
//       buttonText: "View Full Standard Menu"
//     }
//   };

//   const currentMenu = menuData[activeMenu];

//   // Function to get image for category
//   const getCategoryImage = (categoryTitle) => {
//     const imageMap = {
//       "Sweets & Starters": SweetsStartersImg,
//       "Snacks": SnacksImg,
//       "Breakfast": BreakfastImg,
//       "South Indian Curry": SouthIndianCurryImg,
//       "North Indian Dishes": NorthIndianDishesImg,
//       "Saree": SareeImg,
//       "Flavored Rice": FlavoredRiceImg,
//       "Dal & Hot Items": DalHotItemsImg,
//       "Dal & Fry Items": DalDryItemsImg,
//       "Sweets": SweetsImg
//     };
//     return imageMap[categoryTitle] || SweetsImg; // Default fallback
//   };

//   return (
//     <section id="menu" className="menu-section">
//       <div className="container-max">
//         <div className="menu-header">
//           <span className="menu-badge">OUR OFFERINGS</span>
//           <h2 className="menu-title">Our Curated Menu Offerings</h2>
//           <p className="menu-description">
//             Choose from our carefully crafted menu packages, each designed to bring authentic flavors to your celebration.
//           </p>

//           {/* Menu Type Buttons */}
//           <div className="menu-buttons-wrapper">
//             <div className="menu-buttons">
//               <button
//                 className={`menu-btn ${activeMenu === "standard" ? "active" : ""}`}
//                 onClick={() => setActiveMenu("standard")}
//               >
//                 Standard Menu
//               </button>
//               <button
//                 className={`menu-btn traditional-btn ${activeMenu === "traditional" ? "active" : ""}`}
//                 onClick={() => setActiveMenu("traditional")}
//               >
//                 Traditional Menu
//               </button>

//               <button
//                 className={`menu-btn ${activeMenu === "economic" ? "active" : ""}`}
//                 onClick={() => setActiveMenu("economic")}
//               >
//                 Economic Menu
//               </button>
//             </div>
//           </div>

//           <span className="menu-price-badge">
//             {activeMenu === "standard" ? "Standard" : activeMenu === "traditional" ? "Traditional" : "Economic"} Menu Starts at {currentMenu.price}
//           </span>
//         </div>

//         {/* Menu Categories Grid */}
//         <div className="menu-categories-grid">
//           {currentMenu.categories.map((category, index) => (
//             <div key={index} className="menu-category-card">
//               <div className="category-image">
//                 <img 
//                   src={getCategoryImage(category.title)} 
//                   alt={category.title}
//                   className="category-image-placeholder"
//                 />
//               </div>
//               <h3 className="category-title">{category.title}</h3>
//               <ul className="category-items">
//                 {category.items.map((item, itemIndex) => (
//                   <li key={itemIndex} className="category-item">
//                     <img src={CheckIcon} alt="" className="check-icon" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//               <button className="view-details-btn">View Details &gt;</button>
//             </div>
//           ))}
//         </div>

//         {/* Complementary Items Section */}
//         <div className="menu-complementary">
//           <div className="complementary-content">
//             <p className="complementary-text">
//               <img src={StarIcon} alt="" className="star-icon" />
//               {currentMenu.complementary}
//             </p>
//             <p className="complementary-text">
//               <img src={StarIcon} alt="" className="star-icon" />
//               This package is best suited for Weddings, Receptions, and Grand Celebrations.
//             </p>
//             <button className="view-full-menu-btn">
//               <span className="view-full-menu-text">
//               {currentMenu.buttonText}
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useState } from "react";
import CheckIcon from "../assets/check.png";
import StarIcon from "../assets/Star.svg";

export default function Menu() {
  const [activeMenu, setActiveMenu] = useState("standard");
  const [menu, setMenu] = useState([]);

  /* ===============================
     MENU META (PRICE + FOOTER TEXT)
     =============================== */
  const MENU_META = {
    standard: {
      price: "450₹",
      footer:
        "Served with complementary Welcome Drinks, Soups, Rotis, Flavor Rice, Dal, Sambar/Rasam, Pickles, and Dessert",
      buttonText: "View Full Standard Menu",
    },
    traditional: {
      price: "350₹",
      footer:
        "Served with complementary Hot Items (Bajji/Wada), Vegetable Curries, Sambar/Rasam, Pickles, Chutneys, Powders, White Rice, Curd & Ghee, and Ice Cream",
      buttonText: "View Full Traditional Menu",
    },
    economic: {
      price: "350₹",
      footer:
        "Served with complementary Sweets, Rotis, Flavor Rice, Vegetable Fry, Sambar/Rasam, Pickles, Chutneys, Powders, White Rice Staples, Ice Cream, and Pan",
      buttonText: "View Full Economic Menu",
    },
  };

  /* ===============================
     CATEGORY ORDER (MENU-WISE)
     =============================== */
  const CATEGORY_ORDER = {
    standard: [
      "Sweets & Starters",
      "Snacks",
      "Breakfast",
      "South Indian Curry",
      "North Indian Dishes",
      "Saree",
    ],
    traditional: [
      "Flavored Rice",
      "Snacks",
      "Breakfast",
      "Sweets",
      "Dal & Fry Items",
      "Saree",
    ],
    economic: [
      "Dal & Hot Items",
      "Snacks",
      "Breakfast",
      "South Indian Curry",
      "North Indian Dishes",
      "Saree",
    ],
  };

  /* ===============================
     DISPLAY LIMITS (DESIGN CONTROL)
     =============================== */
  const DISPLAY_LIMITS = {
    standard: {
      "Sweets & Starters": 5,
      Snacks: 4,
      Breakfast: 4,
      "South Indian Curry": 5,
      "North Indian Dishes": 4,
      Saree: 4,
    },
    traditional: {
      "Flavored Rice": 4,
      Snacks: 4,
      Breakfast: 4,
      Sweets: 4,
      "Dal & Fry Items": 5,
      Saree: 4,
    },
    economic: {
      "Dal & Hot Items": 5,
      Snacks: 4,
      Breakfast: 4,
      "South Indian Curry": 5,
      "North Indian Dishes": 4,
      Saree: 4,
    },
  };

  /* ===============================
     FETCH MENU FROM BACKEND
     =============================== */
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch("https://skc-backend-1ax0.onrender.com/api/menu");
        const data = await res.json();
        setMenu(data);
      } catch (err) {
        console.error("Menu fetch failed", err);
      }
    };
    fetchMenu();
  }, []);

  /* ===============================
     PDF DOWNLOAD (WORKING)
     =============================== */
  const downloadMenuPdf = async () => {
    try {
      const res = await fetch(
        `https://skc-backend-1ax0.onrender.com/api/menu/pdf/${activeMenu}`
      );
      const data = await res.json();
      if (data?.pdfUrl) {
        window.open(data.pdfUrl, "_blank");
      } else {
        alert("Menu PDF not available");
      }
    } catch (err) {
      console.error("PDF download failed", err);
    }
  };

  const meta = MENU_META[activeMenu];

  return (
    <section id="menu" className="menu-section">
      <div className="container-max">

        {/* ================= HEADER ================= */}
        <div className="menu-header">
          <span className="menu-badge">OUR OFFERINGS</span>

          <h2 className="menu-title">Our Curated Menu Offerings</h2>

          <p className="menu-description">
            Choose from our carefully crafted menu packages, each designed to
            bring authentic Telugu Brahmin flavors to your celebration
          </p>

          {/* MENU SWITCH */}
          <div className="menu-buttons-wrapper">
            <div className="menu-buttons">
              {["standard", "traditional", "economic"].map((type) => (
                <button
                  key={type}
                  className={`menu-btn ${
                    type === "traditional" ? "traditional-btn" : ""
                  } ${activeMenu === type ? "active" : ""}`}
                  onClick={() => setActiveMenu(type)}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)} Menu
                </button>
              ))}
            </div>
          </div>

          <span className="menu-price-badge">
            {activeMenu.charAt(0).toUpperCase() + activeMenu.slice(1)} Menu
            Starts at {meta.price}
          </span>
        </div>

        {/* ================= CATEGORIES GRID ================= */}
        <div key={activeMenu} className="menu-categories-grid">
          {CATEGORY_ORDER[activeMenu].map((catName) => {
            const category = menu.find((c) => c.name === catName);
            if (!category) return null;

            const limit = DISPLAY_LIMITS[activeMenu]?.[category.name];
            if (!limit) return null;

            return (
              <div key={category._id} className="menu-category-card">
                <div className="category-image">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="category-image-placeholder"
                  />
                </div>

                <h3 className="category-title">{category.name}</h3>

                <ul className="category-items">
                  {category.items.slice(0, limit).map((item, index) => (
                    <li key={item._id} className="category-item">
                      <img src={CheckIcon} alt="" className="check-icon" />
                      {item.name}
                      {index === limit - 1 && category.name !== "South Indian Curry" && (
                        <span className="more-text"> and more...</span>
                      )}
                    </li>
                  ))}
                </ul>

                <button
                  className="view-details-btn"
                  onClick={downloadMenuPdf}
                >
                  View Details &gt;
                </button>
              </div>
            );
          })}
        </div>

        {/* ================= FOOTER ================= */}
        <div className="menu-complementary">
          <p className="complementary-text">
            <img src={StarIcon} alt="" className="star-icon" />
            {meta.footer}
          </p>

          <p className="complementary-text">
            <img src={StarIcon} alt="" className="star-icon" />
            This package is best suited for Weddings, Receptions, and Grand
            Celebrations.
          </p>

          <button
            className="view-full-menu-btn"
            onClick={downloadMenuPdf}
          >
            {meta.buttonText}
          </button>
        </div>

      </div>
    </section>
  );
}
