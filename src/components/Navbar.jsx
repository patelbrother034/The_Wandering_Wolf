import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cleanLogo, setCleanLogo] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Remove white background from logo
  useEffect(() => {
    const processImage = () => {
      const img = new Image();
      img.src = logoImg;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i+1];
          const b = data[i+2];
          // If color is close to white/light-gray (threshold 180), make it transparent
          if (r > 180 && g > 180 && b > 180) {
            data[i + 3] = 0;
          }
        }
        
        ctx.putImageData(imageData, 0, 0);
        setCleanLogo(canvas.toDataURL());
      };
    };
    processImage();
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="logo-container">
          <img src={cleanLogo || logoImg} alt="The Wandering Wolf" className="nav-logo" />
        </div>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#trips" onClick={() => setMenuOpen(false)}>Trips</a>
          <a href="#videos" onClick={() => setMenuOpen(false)}>Videos</a>
          <a href="#why-us" onClick={() => setMenuOpen(false)}>Why Us</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Our Story</a>
          <a href="#join" className="btn-small" onClick={() => setMenuOpen(false)}>Join the Tribe</a>
        </div>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
