import React from 'react';
import riyaImg from '../assets/portrait-riya.png';
import harshImg from '../assets/portrait-harsh.png';
import emmaImg from '../assets/portrait-emma.png';

const TESTIMONIALS = [
  {
    img: riyaImg,
    name: 'Riya',
    city: 'Ahmedabad',
    quote: 'Came alone. Left with friends I still talk to every week. This community is real.',
    emoji: '🏔️',
  },
  {
    img: harshImg,
    name: 'Harsh',
    city: 'Surat',
    quote: "The best part wasn't the place. It was the people I met along the way.",
    emoji: '🌄',
  },
  {
    img: emmaImg,
    name: 'Emma',
    city: 'Singapore',
    quote: 'I joined for the trip. I stayed for the community. Best decision I made.',
    emoji: '🌏',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding testimonials-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">From the Tribe</span>
          <h2 className="section-title">Voices from the Pack</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Real travelers, real stories. No filters.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testimonial-card glass-card-dark" style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="testimonial-quote-icon">“</div>
              <p className="testimonial-text">{t.quote}</p>
              <div className="testimonial-author">
                <img src={t.img} alt={t.name} className="testimonial-avatar" />
                <div>
                  <strong className="testimonial-name">{t.name}</strong>
                  <span className="testimonial-city">{t.city} {t.emoji}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
