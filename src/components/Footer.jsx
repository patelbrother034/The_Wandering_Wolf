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
              <a href="https://www.instagram.com/jayyy_patel__" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://www.youtube.com/@wandering_with_jay" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
                </svg>
              </a>
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
