// import React from "react";
// import mailImage from "../assets/Mail.svg";
// import clockImage from "../assets/Clock.svg";
// import contactImage from "../assets/Contact.svg";
// import locationImage from "../assets/Loacation.svg";
// import FacebookIcon from "../assets/facebook.svg";
// import InstagramIcon from "../assets/instagram.svg";
// import YoutubeIcon from "../assets/youtube.svg";
// import WhatsappIcon from "../assets/whatsapp.svg";
// import message from "../assets/message.svg";


// export default function Contact() {
//   return (
//     <section className="contact-section">
//       <div className="container-max">
//         {/* Header Section */}
//         <div className="contact-header">
//           <button className="contact-us-badge">CONTACT US</button>
//           <h1 className="contact-title">Get in Touch</h1>
//           <p className="contact-tagline">
//             We're here to answer your questions and help plan your perfect event.
//           </p>
//         </div>

//         {/* Main Content - Two Columns */}
//         <div className="contact-content-wrapper">
//           {/* Left Column - Contact Information */}
//           <div className="contact-info-column">
//             <h2 className="section-title">Contact Information</h2>

//             <div className="contact-info-item">
//               <div className="contact-icon clock-icon">
//                 <img src={contactImage} alt="Phone" className="contact-icon-img" />
//               </div>
//               <div className="contact-details">
//                 <a href="tel:+919866525102" className="contact-link">+91 9866525102</a>
//                 <a href="tel:+919390015302" className="contact-link">+91 9390015302</a>
//               </div>
//             </div>

//             <div className="contact-info-item">
//               <div className="contact-icon clock-icon">
//                 <img src={mailImage} alt="Email" className="contact-icon-img" />
//               </div>
//               <div className="contact-details">
                
//                 <a href="pujyasri1989cya@gmail.com" className="contact-link">pujyasri1989cya@gmail.com</a>
//               </div>
//             </div>

//             <div className="contact-info-item">
//               <div className="contact-icon clock-icon">
//                 <img src={locationImage} alt="Address" className="location-icon-img" />
//               </div>
//               <div className="contact-details">
//                 <p className="contact-text">
//               Padmavathi Nagar Bank Colony, Plot No 115, Vanasthalipuram Rd, Vanasthalipuram, Hyderabad, Telangana 500070
//                 </p>
//               </div>
//             </div>

//             <div className="contact-info-item">
//               <div className="contact-icon clock-icon">
//                 <img src={clockImage} alt="Working Hours" className="contact-icon-img" />
//               </div>
//               <div className="contact-details">
//                 <p className="contact-text">
//                   Monday - Saturday: 8:00 AM - 8:00 PM<br />
//                   Sunday: 9:00 AM - 6:00 PM
//                 </p>
//                 <p className="contact-note">Available 24/7 for bookings</p>
//               </div>
//             </div>

//             {/* Follow Us Section */}
//             <div className="follow-us-box">
//               <h3 className="follow-us-title">Follow Us</h3>
//               <p className="follow-us-text">
//                 Stay connected for updates, recipes, and special offers
//               </p>
//               <div className="social-icons">
//                 <a href="#" className="social-icon" aria-label="Facebook">
//                   <img src={FacebookIcon} alt="Facebook" />
//                 </a>

//                 <a href="#" className="social-icon" aria-label="Instagram">
//                   <img src={InstagramIcon} alt="Instagram" />
//                 </a>

//                 <a href="#" className="social-icon" aria-label="YouTube">
//                   <img src={YoutubeIcon} alt="YouTube" />
//                 </a>

//                 <a href="#" className="social-icon" aria-label="WhatsApp">
//                   <img src={WhatsappIcon} alt="WhatsApp" />
//                 </a>
//               </div>

//             </div>
//           </div>

//           {/* Right Column - Contact Form */}
//           <div className="contact-form-column">
//             <h2 className="section-title">Send Us a Message</h2>
//             <form className="contact-form">
//               <div className="form-group">
//                 <label htmlFor="name" className="form-label">
//                   Your Name <span className="required">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   className="form-input"
//                   placeholder="Enter your name"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="email" className="form-label">
//                   Email Address <span className="required">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="form-input"
//                   placeholder="your.email@example.com"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="phone" className="form-label">
//                   Phone Number <span className="required">*</span>
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   className="form-input"
//                   placeholder="+91 98765 43210"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="subject" className="form-label">
//                   Subject <span className="required">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   className="form-input"
//                   placeholder="How can we help you?"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="message" className="form-label">
//                   Message <span className="required">*</span>
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   className="form-textarea"
//                   rows="5"
//                   placeholder="Tell us about your requirements..."
//                   required
//                 ></textarea>
//               </div>

//               <button type="submit" className="submit-button">
//                 <img src={message} alt="Message"></img>
//                  <span className="submit-text">Send Message</span>
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Map Section */}
//         <div className="map-section">
//           <iframe
//             src="https://www.google.com/maps?q=17.320647,78.580989&z=17&output=embed"
//             width="100%"
//             height="450"
//             style={{ border: 0, borderRadius: "12px" }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             title="Location Map"
//           ></iframe>
//         </div>

//       </div>
//     </section>
//   );
// }
// import React from "react";
// import mailImage from "../assets/Mail.svg";
// import clockImage from "../assets/Clock.svg";
// import contactImage from "../assets/Contact.svg";
// import locationImage from "../assets/Loacation.svg";
// import FacebookIcon from "../assets/facebook.svg";
// import InstagramIcon from "../assets/instagram.svg";
// import YoutubeIcon from "../assets/youtube.svg";
// import WhatsappIcon from "../assets/whatsapp.svg";
// import message from "../assets/message.svg";

// export default function Contact() {
//   return (
//     <section className="contact-section">
//       <div className="container-max">
//         {/* Header Section */}
//         <div className="contact-header">
//           <button className="contact-us-badge">CONTACT US</button>
//           <h1 className="contact-title">Get in Touch</h1>
//           <p className="contact-tagline">
//             We're here to answer your questions and help plan your perfect event.
//           </p>
//         </div>

//         {/* Main Content - Two Columns */}
//         <div className="contact-content-wrapper">
          
//           {/* Left Column - Contact Information */}
//           <div className="contact-info-column">
//             <h2 className="section-title">Contact Information</h2>

//             <div className="contact-info-item">
//               <div className="contact-icon clock-icon">
//                 <img src={contactImage} alt="Phone" className="contact-icon-img" />
//               </div>
//               <div className="contact-details">
//                 <h4 className="contact-item-heading">Phone Number</h4>
//                 <a href="tel:+919866525102" className="contact-link">+91 9866525102</a>
//                 <a href="tel:+919390015302" className="contact-link">+91 9390015302</a>
//               </div>
//             </div>

//             <div className="contact-info-item">
//               <div className="contact-icon clock-icon">
//                 <img src={mailImage} alt="Email" className="contact-icon-img" />
//               </div>
//               <div className="contact-details">
//                 <h4 className="contact-item-heading">Email Address</h4>
//                 <a href="mailto:pujyasri1989cya@gmail.com" className="contact-link">pujyasri1989cya@gmail.com</a>
//               </div>
//             </div>

//             <div className="contact-info-item">
//               <div className="contact-icon clock-icon">
//                 <img src={locationImage} alt="Address" className="location-icon-img" />
//               </div>
//               <div className="contact-details">
//                 <h4 className="contact-item-heading">Office Address</h4>
//                 <p className="contact-text">
//                   Padmavathi Nagar Bank Colony, Plot No 115, Vanasthalipuram Rd, Vanasthalipuram, Hyderabad, Telangana 500070
//                 </p>
//               </div>
//             </div>

//             <div className="contact-info-item">
//               <div className="contact-icon clock-icon">
//                 <img src={clockImage} alt="Working Hours" className="contact-icon-img" />
//               </div>
//               <div className="contact-details">
//                 <h4 className="contact-item-heading">Working Hours</h4>
//                 <p className="contact-text">
//                   Monday - Saturday: 8:00 AM - 8:00 PM<br />
//                   Sunday: 9:00 AM - 6:00 PM
//                 </p>
//                 <p className="contact-note">Available 24/7 for bookings</p>
//               </div>
//             </div>

//             {/* Follow Us Section */}
//             <div className="follow-us-box">
//               <h3 className="follow-us-title">Follow Us</h3>
//               <p className="follow-us-text">
//                 Stay connected for updates, recipes, and special offers
//               </p>
//               <div className="social-icons">
//                 <a 
//                   href="https://www.facebook.com/share/17aTz1EQY4/" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="social-icon" 
//                   aria-label="Facebook"
//                 >
//                   <img src={FacebookIcon} alt="Facebook" />
//                 </a>

//                 <a 
//                   href="https://www.instagram.com/srivatsasakoundinyacaterers?igsh=ZG11MnFlYWlpYjNk" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="social-icon" 
//                   aria-label="Instagram"
//                 >
//                   <img src={InstagramIcon} alt="Instagram" />
//                 </a>

//                 <a 
//                   href="https://youtube.com/@rajendraprasadtelidevara8770?si=Yj4j68y3xfDfD7kq" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="social-icon" 
//                   aria-label="YouTube"
//                 >
//                   <img src={YoutubeIcon} alt="YouTube" />
//                 </a>

//                 <a href="#" className="social-icon" aria-label="WhatsApp">
//                   <img src={WhatsappIcon} alt="WhatsApp" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Contact Form */}
//           <div className="contact-form-column">
//             <h2 className="section-title">Send Us a Message</h2>
//             <form className="contact-form">
//               <div className="form-group">
//                 <label htmlFor="name" className="form-label">
//                   Your Name <span className="required">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   className="form-input"
//                   placeholder="Enter your name"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="email" className="form-label">
//                   Email Address <span className="required">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="form-input"
//                   placeholder="your.email@example.com"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="phone" className="form-label">
//                   Phone Number <span className="required">*</span>
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   className="form-input"
//                   placeholder="+91 98765 43210"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="subject" className="form-label">
//                   Subject <span className="required">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   className="form-input"
//                   placeholder="How can we help you?"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="message" className="form-label">
//                   Message <span className="required">*</span>
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   className="form-textarea"
//                   rows="5"
//                   placeholder="Tell us about your requirements..."
//                   required
//                 ></textarea>
//               </div>

//               <button type="submit" className="submit-button">
//                 <img src={message} alt="Message"></img>
//                 <span className="submit-text">Send Message</span>
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Map Section */}
//         <div className="map-section">
//           <iframe
//             src="https://www.google.com/maps?q=17.320647,78.580989&z=17&output=embed"
//             width="100%"
//             height="450"
//             style={{ border: 0, borderRadius: "12px" }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             title="Location Map"
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useState } from "react";
import toast from "react-hot-toast";

import mailImage from "../assets/Mail.svg";
import clockImage from "../assets/Clock.svg";
import contactImage from "../assets/Contact.svg";
import locationImage from "../assets/Loacation.svg";
import FacebookIcon from "../assets/facebook.svg";
import InstagramIcon from "../assets/instagram.svg";
import YoutubeIcon from "../assets/youtube.svg";
import WhatsappIcon from "../assets/whatsapp.svg";
import message from "../assets/Message.svg";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://skc-backend-1ax0.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Something went wrong");
        setLoading(false);
        return;
      }

      toast.success("Message sent successfully 📩");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });

    } catch (err) {
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="container-max">

        {/* Header Section */}
        <div className="contact-header">
          <button className="contact-us-badge">CONTACT US</button>
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-tagline">
            We're here to answer your questions and help plan your perfect event.
          </p>
        </div>

        <div className="contact-content-wrapper">

          {/* Left Column */}
          <div className="contact-info-column">
            <h2 className="section-title">Contact Information</h2>

            <div className="contact-info-item">
              <div className="contact-icon clock-icon">
                <img src={contactImage} alt="Phone" className="contact-icon-img" />
              </div>
              <div className="contact-details">
                <h4 className="contact-item-heading">Phone Number</h4>
                <a href="tel:+919866525102" className="contact-link">+91 9866525102</a>
                <a href="tel:+919390015302" className="contact-link">+91 9390015302</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon clock-icon">
                <img src={mailImage} alt="Email" className="contact-icon-img" />
              </div>
              <div className="contact-details">
                <h4 className="contact-item-heading">Email Address</h4>
                <a href="mailto:pujyasri1989cya@gmail.com" className="contact-link">
                  pujyasri1989cya@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon clock-icon">
                <img src={locationImage} alt="Address" className="location-icon-img" />
              </div>
              <div className="contact-details">
                <h4 className="contact-item-heading">Office Address</h4>
                <p className="contact-text">
                  Padmavathi Nagar Bank Colony, Plot No 115,
                  Vanasthalipuram Rd, Hyderabad, Telangana 500070
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon clock-icon">
                <img src={clockImage} alt="Working Hours" className="contact-icon-img" />
              </div>
              <div className="contact-details">
                <h4 className="contact-item-heading">Working Hours</h4>
                <p className="contact-text">
                  Monday - Saturday: 8:00 AM - 8:00 PM<br />
                  Sunday: 9:00 AM - 6:00 PM
                </p>
                <p className="contact-note">Available 24/7 for bookings</p>
              </div>
            </div>

            <div className="follow-us-box">
              <h3 className="follow-us-title">Follow Us</h3>
              <p className="follow-us-text">
                Stay connected for updates, recipes, and special offers
              </p>
              <div className="social-icons">
                <a 
                  href="https://www.facebook.com/share/17aTz1EQY4/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon" 
                  aria-label="Facebook"
                >
                  <img src={FacebookIcon} alt="Facebook" />
                </a>
                <a 
                  href="https://www.instagram.com/srivatsasakoundinyacaterers?igsh=ZG11MnFlYWlpYjNk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon" 
                  aria-label="Instagram"
                >
                  <img src={InstagramIcon} alt="Instagram" />
                </a>
                <a 
                  href="https://youtube.com/@rajendraprasadtelidevara8770?si=Yj4j68y3xfDfD7kq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon" 
                  aria-label="YouTube"
                >
                  <img src={YoutubeIcon} alt="YouTube" />
                </a>
                <a 
                  href="#" 
                  className="social-icon" 
                  aria-label="WhatsApp"
                >
                  <img src={WhatsappIcon} alt="WhatsApp" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column – FORM */}
          <div className="contact-form-column">
            <h2 className="section-title">Send Us a Message</h2>

            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="form-group">
                <label className="form-label">
                  Your Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Phone <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Subject <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  className="form-input"
                  placeholder="How can we help you?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  name="message"
                  className="form-textarea"
                  rows="5"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="submit-button" disabled={loading}>
                <img src={message} alt="Message" />
                <span className="submit-text">
                  {loading ? "Sending..." : "Send Message"}
                </span>
              </button>

            </form>
          </div>
        </div>

        {/* Map */}
        <div className="map-section">
          <iframe
            src="https://www.google.com/maps?q=17.320647,78.580989&z=17&output=embed"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: "12px" }}
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
