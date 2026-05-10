import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import hero1 from '../assets/hero-v2.png';
import hero2 from '../assets/hero-2.png';
import hero3 from '../assets/hero-3.png';
import bonfireImg from '../assets/why-bonfire.png';
import trip1 from '../assets/trip-saputara.png';
import trip2 from '../assets/trip-himachal.png';
import trip3 from '../assets/trip-kashmir.png';
import trip4 from '../assets/trip-bali.png';

const GALLERY = [hero1, trip1, bonfireImg, trip2, hero2, trip3, trip4, hero3];

export default function PhotoReel() {
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  
  // Speed of the automatic marquee
  const baseSpeed = -1.5; 
  
  useAnimationFrame(() => {
    // Automatic scroll
    x.set(x.get() + baseSpeed);
    
    // Infinite wrap logic
    if (trackRef.current) {
      // Total images = GALLERY.length * 4
      // One unit = GALLERY.length * (item width + gap)
      // For simplicity, we calculate it from the actual track width
      const unitWidth = trackRef.current.offsetWidth / 4;
      
      // Wrap when we've scrolled past 2 units to stay in the middle 2 units
      if (x.get() <= -unitWidth * 2) {
        x.set(x.get() + unitWidth);
      } else if (x.get() >= -unitWidth) {
        x.set(x.get() - unitWidth);
      }
    }
  });

  return (
    <section className="photo-reel-section bg-light" ref={containerRef}>
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">Real Moments</span>
          <h2 className="section-title">Moments from the Tribe</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 0' }}>
            Candid, unfiltered, unforgettable.
          </p>
        </div>
      </div>

      <div className="reel-track-wrap reel-3d-wrap" style={{ overflow: 'hidden' }}>
        <motion.div 
          ref={trackRef}
          className="reel-track"
          style={{ 
            x,
            cursor: 'grab'
          }}
          drag="x"
          onDrag={(e, info) => {
            // The MotionValue 'x' is updated automatically by drag
          }}
          whileTap={{ cursor: 'grabbing' }}
        >
          {[...GALLERY, ...GALLERY, ...GALLERY, ...GALLERY].map((img, i) => (
            <div key={i} className="reel-item">
              <img src={img} alt={`Trip moment ${i + 1}`} />
              <div className="reel-overlay"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
