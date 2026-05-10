import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-v2">
      <div className="container">
        <div className="footer-grid">
          
          {/* Box 1: Brand / About */}
          <div className="footer-box brand-box">
            <h3 className="footer-logo">The Wandering Wolf 🐺</h3>
            <p className="footer-desc">
              More than just a travel company. We are a community of explorers seeking genuine connections, unfiltered moments, and unforgettable journeys across the globe.
            </p>
          </div>

          {/* Box 2: Quick Links */}
          <div className="footer-box links-box">
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#trips">Upcoming Trips</a></li>
              <li><a href="#why-us">Why Us</a></li>
              <li><a href="#videos">Tribe Moments</a></li>
            </ul>
          </div>

          {/* Box 3: Contact Info */}
          <div className="footer-box contact-box">
            <h4 className="footer-heading">Reach Out</h4>
            <ul className="footer-links">
              <li>📍 Ahmedabad, Gujarat</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ hello@wanderingwolf.in</li>
              <li>💬 Available 24/7 on WhatsApp</li>
            </ul>
          </div>

          {/* Box 4: Socials & Newsletter */}
          <div className="footer-box social-box">
            <h4 className="footer-heading">Join the Pack</h4>
            <p className="footer-desc mb-4">
              Get early access to our new trip drops.
            </p>
            <div className="footer-subscribe">
              <input type="email" placeholder="Email address" className="footer-input" />
              <button className="footer-btn">➔</button>
            </div>
            <div className="footer-socials">
              <a href="#" className="social-icon">IG</a>
              <a href="#" className="social-icon">YT</a>
              <a href="#" className="social-icon">FB</a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 The Wandering Wolf. All rights reserved.</p>
          <p>Made with ❤️ by <strong>Nik Patel</strong></p>
        </div>
      </div>
    </footer>
  );
}
