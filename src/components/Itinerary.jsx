import React from 'react';

const DAYS = [
  {
    day: 'Day 1',
    emoji: '🚌',
    title: 'Travel & First Connections',
    desc: 'Travel, meet the group, first chai, first stories. The awkward smiles that turn into inside jokes.',
  },
  {
    day: 'Day 2',
    emoji: '🏔️',
    title: 'Explore Together',
    desc: 'Local food, viewpoints, shared laughter. The day you realize these strangers get you.',
  },
  {
    day: 'Day 3',
    emoji: '🌅',
    title: 'Last Sunrise, New Tribe',
    desc: 'Sunrise, last photos, exchanges happening everywhere. You leave with new people in your life.',
  },
];

export default function Itinerary() {
  return (
    <section className="section-padding bg-warm itinerary-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">The Experience</span>
          <h2 className="section-title">What a Trip Feels Like</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Every day is different. Every day matters.
          </p>
        </div>

        <div className="itinerary-timeline">
          <div className="timeline-progress"></div>
          {DAYS.map((d, i) => (
            <div key={i} className="itinerary-step animate-reveal" style={{ animationDelay: `${i * 0.2}s` }}>
              <div className="itinerary-node">
                <div className="itinerary-circle pulse-circle">{d.emoji}</div>
              </div>
              <div className="itinerary-content glass-card-light">
                <span className="itinerary-day">{d.day}</span>
                <h3 className="itinerary-title">{d.title}</h3>
                <p className="itinerary-desc">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
