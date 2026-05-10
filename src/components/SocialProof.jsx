import React from 'react';
import reel1 from '../assets/reel-1.png';
import reel2 from '../assets/reel-2.png';
import reel3 from '../assets/reel-3.png';

const REELS = [
  { img: reel1, label: 'Road Trip Diaries' },
  { img: reel2, label: 'Mountain Sunrise' },
  { img: reel3, label: 'Bonfire Night' },
];

export default function SocialProof() {
  return (
    <section id="videos" className="section-padding social-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">Find Us Online</span>
          <h2 className="section-title">Follow Our Journey</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Daily travel inspiration, trip updates, and behind-the-scenes moments.
          </p>
        </div>

        {/* Social badges */}
        <div className="social-badges">
          <a href="https://www.youtube.com/@wandering_with_jay" target="_blank" rel="noopener noreferrer" className="social-badge youtube glow-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.8 8s-.195-1.377-.795-1.984c-.76-.797-1.613-.8-2.004-.847C16.203 5 12.004 5 12.004 5s-4.2 0-6.997.169c-.39.047-1.243.05-2.004.847C2.404 6.623 2.2 8 2.2 8S2 9.62 2 11.24v1.517c0 1.618.2 3.236.2 3.236s.195 1.377.795 1.983c.76.797 1.76.772 2.205.855C6.8 18.969 12 19 12 19s4.203-.007 7.001-.176c.39-.047 1.243-.05 2.004-.847.6-.606.795-1.983.795-1.983S22 14.375 22 12.757v-1.517C22 9.62 21.8 8 21.8 8zM9.75 14.854V9.1l5.406 2.88-5.406 2.874z"/>
            </svg>
            <div>
              <strong>YouTube</strong>
              <span>350+ tribe members</span>
            </div>
          </a>
          <a href="https://www.instagram.com/jayyy_patel__" target="_blank" rel="noopener noreferrer" className="social-badge instagram glow-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <div>
              <strong>Instagram</strong>
              <span>2.1k+ explorers</span>
            </div>
          </a>
        </div>

        {/* Reel thumbnails */}
        <div className="reels-row">
          {REELS.map((r, i) => (
            <div key={i} className="reel-card premium-reel" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="reel-thumb">
                <img src={r.img} alt={r.label} />
                <div className="reel-play glow-play">▶</div>
              </div>
              <p className="reel-label">{r.label}</p>
            </div>
          ))}
        </div>

        {/* YouTube videos */}
        <div className="yt-section glass-yt-section">
          <h3 className="yt-heading">Watch Our Latest Videos</h3>
          <div className="video-grid">
            {[
              "YLxZVycPB_w?si=DbLRNMreVZkpFbc3",
              "5RbSnjCvcLQ?si=OiLznwpFEXbeLHtK",
              "yBd3yGPuiRg?si=U2Fufz9XSwiGOuVs",
              "3SuLFrlQpW0?si=fJAaj3JsVAhkuNqT"
            ].map((id, i) => (
              <div key={i} className="video-wrapper premium-video">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`Wandering Wolf Video ${i + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
