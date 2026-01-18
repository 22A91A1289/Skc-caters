import React from "react";
import { Link } from "react-router-dom";
import mailImage from "../assets/Mail.svg";
import contactImage from "../assets/Contact.svg";
import locationImage from "../assets/Loacation.svg";
import FacebookIcon from "../assets/facebook.svg";
import InstagramIcon from "../assets/instagram.svg";
import YoutubeIcon from "../assets/youtube.svg";
import WhatsappIcon from "../assets/whatsapp.svg";

export default function Footer() {
  return (
    <footer className="contact-footer">
      <div className="footer-content">
        {/* Company Info Column */}
        <div className="footer-column company-info">
          <div className="footer-logo-section">
            <div className="footer-om-logo">
              <span className="om-symbol">ॐ</span>
            </div>
            <div>
              <h3 className="footer-company-name">SRIVATSASA & KOUNDINYA CATERERS</h3>
              <p className="footer-tagline">100% Pure Vegetarian</p>
            </div>
          </div>
          
          {/* Follow Us Section - Mobile */}
          <div className="footer-follow-section">
            <h4 className="footer-follow-title">Follow Us</h4>
            <p className="footer-follow-description">
              Stay connected for updates, recipes, and special offers
            </p>
          </div>
          
          <div className="footer-social-icons">
            <a 
              href="https://www.facebook.com/share/17aTz1EQY4/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-icon" 
              aria-label="Facebook"
            >
              <img src={FacebookIcon} alt="Facebook" />
            </a>

            <a 
              href="https://www.instagram.com/srivatsasakoundinyacaterers?igsh=ZG11MnFlYWlpYjNk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-icon" 
              aria-label="Instagram"
            >
              <img src={InstagramIcon} alt="Instagram" />
            </a>

            <a 
              href="https://youtube.com/@rajendraprasadtelidevara8770?si=Yj4j68y3xfDfD7kq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-icon" 
              aria-label="YouTube"
            >
              <img src={YoutubeIcon} alt="YouTube" />
            </a>

            <a href="#" className="footer-social-icon" aria-label="WhatsApp">
              <img src={WhatsappIcon} alt="WhatsApp" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-column">
          <h4 className="footer-column-title">QuickLinks</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/menu">Our Menu</Link></li>
            <li><Link to="/reviews">Testimonials</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Our Services Column */}
        <div className="footer-column">
          <h4 className="footer-column-title">Our Services</h4>
          <ul className="footer-services">
            <li><span className="service-checkmark">✓</span> Wedding Catering</li>
            <li><span className="service-checkmark">✓</span> Religious Ceremonies</li>
            <li><span className="service-checkmark">✓</span> Housewarming Events</li>
            <li><span className="service-checkmark">✓</span> Corporate Events</li>
            <li><span className="service-checkmark">✓</span> Custom Menu Planning</li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="footer-contact-info">
          <p className="contact-item">
            <img src={locationImage} alt="Location" />
            <a 
              href="https://www.google.com/maps?q=17.3201111,78.5798334"
              target="_blank"
              rel="noopener noreferrer"
              className="location-link"
            >
              Padmavathi Nagar Bank Colony, Plot No 115, Vanasthalipuram Rd, Vanasthalipuram, Hyderabad, Telangana 500070
            </a>
          </p>

          <p className="contact-item">
            <img src={contactImage} alt="Phone" />
            <a href="tel:+919866525102">+91 9866525102</a>
          </p>

          <p className="contact-item">
            <img src={mailImage} alt="Email" />
            <a href="mailto:pujyasri1989cya@gmail.com">pujyasri1989cya@gmail.com</a>
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">© 2024 Shubham Catering. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

