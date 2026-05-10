import React from 'react';
import bonfireImg from '../assets/why-bonfire.png';

const FEATURES = [
  {
    icon: '🤝',
    title: 'Meet People Who Become Friends',
    desc: 'Travel solo, never feel alone. Every trip is a chance to find your tribe.',
  },
  {
    icon: '🗺️',
    title: 'Curated Group Experiences',
    desc: 'A balanced mix of freedom, adventure, and genuine human connection.',
  },
  {
    icon: '💸',
    title: 'Budget-Friendly Travel',
    desc: 'Smartly planned for young explorers who want more without spending more.',
  },
  {
    icon: '🛡️',
    title: 'Safe and Comfortable',
    desc: 'Trusted stays, smooth planning, and clear communication every step of the way.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding why-us-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">Why Travel With Us</span>
          <h2 className="section-title">Because the best trips aren't just about the destination</h2>
        </div>

        <div className="why-grid reveal-stagger">

          {FEATURES.map((f, i) => (
            <div key={i} className="why-card glass-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="why-icon-wrap">
                <span className="why-icon">{f.icon}</span>
              </div>
              <h3 className="why-title">{f.title}</h3>
              <p className="why-desc">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="bonfire-img-wrap glow-wrap">
          <img src={bonfireImg} alt="Young travelers around a bonfire in the mountains" className="bonfire-img" />
          <div className="bonfire-caption glass-caption">Every night around the fire is a story you'll tell for years.</div>
        </div>
      </div>
    </section>
  );
}
