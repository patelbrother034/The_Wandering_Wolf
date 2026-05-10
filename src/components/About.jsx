import React from 'react';
import communityImg from '../assets/community.png';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">Wandering With Jay</h2>
            <p>
              Hi, I'm Jay. I started <strong>Wandering With Jay</strong> and{' '}
              <strong>The Wandering Wolf</strong> because I was tired of "tourist" packages.
              I wanted something real — the kind of trips where you sit around a bonfire with
              people you just met, and realize you've found your tribe.
            </p>
            <p>
              We aren't just a travel company. We're a community of soul-searchers and
              adventure-seekers building a family, one destination at a time.
            </p>
            <a href="#join" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
              Join Us →
            </a>
          </div>
          <div className="about-image">
            <img src={communityImg} alt="Jay and the Wandering Wolf community around a bonfire" className="floating-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
