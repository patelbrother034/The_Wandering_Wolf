import React, { useState, useEffect, useRef } from 'react';
import { Users, Map, Globe, Heart } from 'lucide-react';

const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.5 });
    
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
};

export default function CommunityBanner() {
  const stats = [
    { icon: <Users size={32} />, value: 500, suffix: "+", label: "Wolves in the Tribe", color: "#4ade80" },
    { icon: <Map size={32} />, value: 12, suffix: "+", label: "Trips Completed", color: "#60a5fa" },
    { icon: <Globe size={32} />, value: 6, suffix: "", label: "Countries Explored", color: "#fbbf24" },
    { icon: <Heart size={32} />, value: 100, suffix: "%", label: "Real Experiences", color: "#f87171" }
  ];

  return (
    <section className="community-banner-v2 premium-banner">
      <div className="banner-bg-decoration">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="section-header text-center light">
          <h2 className="section-title text-white banner-title">More than just a trip.</h2>
          <p className="section-subtitle text-white opacity-80 banner-subtitle">
            Late-night talks, shared maggi in the mountains, friendships that last a lifetime.<br/>
            Come be part of something real.
          </p>
        </div>

        <div className="stats-grid-creative">
          {stats.map((s, i) => (
            <div key={i} className="stat-card-v2 glass-stat-card" style={{ "--accent": s.color, animationDelay: `${i * 0.15}s` }}>
              <div className="stat-icon-wrap glow-icon">
                {s.icon}
              </div>
              <div className="stat-info">
                <h3 className="stat-number-v2 text-white text-shadow-glow">
                  <Counter end={s.value} suffix={s.suffix} />
                </h3>
                <p className="stat-label-v2 text-white opacity-90">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
