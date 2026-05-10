import React, { useState, useEffect, useRef } from 'react';
import hero1 from '../assets/hero-v2.png';
import hero2 from '../assets/hero-2.png';
import hero3 from '../assets/hero-3.png';

const slides = [
  { img: hero1, label: 'Mountain Sunrise' },
  { img: hero2, label: 'Road Trip Vibes' },
  { img: hero3, label: 'Into the Wild' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5500);
    return () => { clearTimeout(t); clearInterval(timerRef.current); };
  }, []);

  return (
    <header className="hero">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`hero-slide ${i === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${s.img})` }}
        />
      ))}
      <div className="hero-overlay" />

      {/* Content Container */}
      <div className="container hero-container">
        <div className={`hero-content ${visible ? 'visible' : ''}`}>
          <h1 className="hero-title">
            Stop Searching.<br />
            <span className="text-gradient">Start Wandering.</span>
          </h1>
          <p className="hero-sub">Travel with strangers, leave as family.</p>
          <div className="hero-actions">
            <a href="#join" className="btn-primary hero-cta">Join the Tribe</a>
            <a href="#trips" className="btn-ghost hero-cta-2">View 2026 Calendar</a>
          </div>
          
          <div className="hero-social-proof">
            <div className="avatar-group">
              <img src={hero1} alt="User" />
              <img src={hero2} alt="User" />
              <img src={hero3} alt="User" />
              <div className="avatar-more">+500</div>
            </div>
            <p>Join <strong>500+ wolves</strong> exploring the world together</p>
          </div>
        </div>

        {/* Floating Moment Cards */}
        <div className="hero-moments-wrap">
          <div className="moment-card card-1">
            <div className="moment-img" style={{ backgroundImage: `url(${hero2})` }} />
            <div className="moment-info">
              <strong>Spiti Valley</strong>
              <span>"Best roadtrip ever!"</span>
            </div>
          </div>
          <div className="moment-card card-2">
            <div className="moment-img" style={{ backgroundImage: `url(${hero3})` }} />
            <div className="moment-info">
              <strong>Bali Tribe</strong>
              <span>12 new friends made</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => { setCurrent(i); clearInterval(timerRef.current); }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
      </div>
    </header>
  );
}
