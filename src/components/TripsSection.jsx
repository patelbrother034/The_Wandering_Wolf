import React, { useState } from 'react';
import saputaraImg from '../assets/trip-saputara.png';
import himachalImg from '../assets/trip-himachal.png';
import kashmirImg from '../assets/trip-kashmir.png';
import baliImg from '../assets/trip-bali.png';
import thailandImg from '../assets/trip-thailand.png';
import dubaiImg from '../assets/trip-dubai.png';

const FILTERS = ['All', 'Indian', 'International'];

const TRIPS = [
  {
    img: saputaraImg,
    tag: 'Indian',
    filters: ['Indian'],
    title: 'Saputara Weekend Escape',
    desc: 'Forest trails, lake views, sunsets, bonfire nights, and easy conversations.',
    price: '₹4,999',
    duration: '2D / 1N',
    date: '18–19 Jul',
    seats: 8,
  },
  {
    img: himachalImg,
    tag: 'Indian',
    filters: ['Indian'],
    title: 'Himachal Mountain Tribe',
    desc: 'Hidden valleys, road-trip vibes, mountain cafés, cold air, and unforgettable people.',
    price: '₹11,999',
    duration: '5D / 4N',
    date: '10–14 Aug',
    seats: 6,
  },
  {
    img: kashmirImg,
    tag: 'Indian',
    filters: ['Indian'],
    title: 'Kashmir Escape',
    desc: 'Lakes, pine forests, houseboats, and moments that feel unreal.',
    price: '₹14,999',
    duration: '6D / 5N',
    date: '22–27 Sep',
    seats: 5,
  },
  {
    img: baliImg,
    tag: 'International',
    filters: ['International'],
    title: 'Bali Island Tribe',
    desc: 'Waterfalls, cafés, beach sunsets, scooters, and tropical shared memories.',
    price: '₹24,999',
    duration: '5D / 4N',
    date: '12–16 Oct',
    seats: 7,
  },
  {
    img: thailandImg,
    tag: 'International',
    filters: ['International'],
    title: 'Thailand Escape',
    desc: 'Island hopping, street food, temples, and spontaneous adventures.',
    price: '₹21,999',
    duration: '5D / 4N',
    date: '5–9 Nov',
    seats: 6,
  },
  {
    img: dubaiImg,
    tag: 'International',
    filters: ['International'],
    title: 'Dubai Weekend Break',
    desc: 'Desert sunsets, city lights, skyline views, and new friendships.',
    price: '₹18,999',
    duration: '3D / 2N',
    date: '20–22 Nov',
    seats: 8,
  },
];

export default function TripsSection() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? TRIPS
    : TRIPS.filter(t => t.filters.includes(active));

  return (
    <section id="trips" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Adventure Awaits</span>
          <h2 className="section-title">Upcoming Trips</h2>
          <p className="section-subtitle">Pick your next escape. Limited seats, unlimited memories.</p>
        </div>

        {/* Filter chips */}
        <div className="filter-chips">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-chip ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Trip grid */}
        <div className="trips-grid reveal-stagger">


          {filtered.map((trip, idx) => (
            <div key={trip.title} className="trip-card-v2" style={{ animationDelay: `${idx * 0.08}s` }}>
              <div className="trip-img-wrap">
                <img src={trip.img} alt={trip.title} />
                <span className={`trip-region-tag ${trip.tag === 'International' ? 'intl' : 'indian'}`}>
                  {trip.tag}
                </span>
              </div>
              <div className="trip-body">
                <h3 className="trip-title">{trip.title}</h3>
                <p className="trip-desc">{trip.desc}</p>
                <div className="trip-meta">
                  <span className="trip-price">{trip.price}</span>
                  <span className="trip-meta-item">📅 {trip.date}</span>
                  <span className="trip-meta-item">⏱ {trip.duration}</span>
                </div>
                <div className="trip-footer">
                  <span className="seats-left">
                    <span className="seats-dot" />
                    {trip.seats} seats left
                  </span>
                  <a href="#join" className="btn-trip">Book Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
