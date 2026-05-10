import React, { useState } from 'react';

export default function LeadCapture() {
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', whatsapp: '' });
    }, 4000);
  };

  return (
    <section id="join" className="section-padding lead-section">
      <div className="container">
        <div className="form-card-v2 glass-card-mesh">
          <div className="form-card-left">
            <span className="section-label text-white">Get Early Access</span>
            <h2 className="form-heading">Be Part of the Pack 🐺</h2>
            <p className="form-subtext">
              Early access, trip drops, and first seat priority.<br />
              No spam. Just adventures.
            </p>
            <ul className="form-perks">
              <li>🎫 First seat priority on all new trips</li>
              <li>💬 Exclusive WhatsApp tribe community</li>
              <li>🏷️ Early-bird pricing every time</li>
            </ul>
          </div>

          <div className="form-card-right glass-form-container">
            {submitted ? (
              <div className="form-success">
                <div className="success-emoji">🐺🎉</div>
                <h3>Welcome to the Pack!</h3>
                <p>We'll reach out soon with everything you need to know.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="signup-form-v2">
                <div className="input-wrap modern-input">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                  <label className={formData.name ? 'active' : ''}>Your Name</label>
                </div>
                <div className="input-wrap modern-input">
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                  <label className={formData.email ? 'active' : ''}>Email Address</label>
                </div>
                <div className="input-wrap modern-input">
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                  />
                  <label className={formData.whatsapp ? 'active' : ''}>WhatsApp Number</label>
                </div>
                <button type="submit" className="btn-submit-v2 glow-btn">
                  🐾 Be First to Join Our Trips
                </button>
                <p className="form-privacy">Your info is safe. We hate spam too.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
