import React, { useState, useEffect, useRef, useCallback } from 'react';
import './GlobeExpressHero.css';

import geAlps     from '../assets/ge-alps.png';
import geJapan    from '../assets/ge-japan.png';
import geMorocco  from '../assets/ge-morocco.png';
import geYosemite from '../assets/ge-yosemite.png';
import geSpain    from '../assets/ge-spain.png';

/* ─── Slide Data ─────────────────────────────────────────── */
const SLIDES = [
  {
    img:      geAlps,
    location: 'Switzerland Alps',
    title:    'SAINT\nANTÖNIEN',
    sub:      'Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula.',
    subLoc:   'Saint Antönien',
  },
  {
    img:      geJapan,
    location: 'Japan Alps',
    title:    'NAGANO\nPREFECTURE',
    sub:      'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
    subLoc:   'Nagano Prefecture',
  },
  {
    img:      geMorocco,
    location: 'Sahara Desert — Morocco',
    title:    'MARRAKECH\nMERZOUGA',
    sub:      'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat.',
    subLoc:   'Marrakech Merzouga',
  },
  {
    img:      geYosemite,
    location: 'Sierra Nevada — United States',
    title:    'YOSEMITE\nNATIONAL PARK',
    sub:      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
    subLoc:   'Yosemite National Park',
  },
  {
    img:      geSpain,
    location: 'Tarifa — Spain',
    title:    'LOS LANCES\nBEACH',
    sub:      'Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus.',
    subLoc:   'Los Lances Beach',
  },
];

const TOTAL      = SLIDES.length;
const AUTO_DELAY = 5000;

/* ─── SVGs ───────────────────────────────────────────────── */
const IconArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 6 15 12 9 18" />
  </svg>
);
const IconArrowLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

/* Layout A icon — vertical stack of rectangles */
const IconLayoutA = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="9" height="14" rx="2" strokeWidth="1.6" stroke="currentColor"/>
    <rect x="13" y="3" width="5" height="4" rx="1.2" strokeWidth="1.4" stroke="currentColor"/>
    <rect x="13" y="8" width="5" height="4" rx="1.2" strokeWidth="1.4" stroke="currentColor"/>
    <rect x="13" y="13" width="5" height="4" rx="1.2" strokeWidth="1.4" stroke="currentColor"/>
  </svg>
);

/* Layout B icon — horizontal filmstrip */
const IconLayoutB = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2"  y="2" width="16" height="10" rx="2" strokeWidth="1.6" stroke="currentColor"/>
    <rect x="2"  y="14" width="3.5" height="4" rx="1" strokeWidth="1.4" stroke="currentColor"/>
    <rect x="6.5" y="14" width="3.5" height="4" rx="1" strokeWidth="1.4" stroke="currentColor"/>
    <rect x="11" y="14" width="3.5" height="4" rx="1" strokeWidth="1.4" stroke="currentColor"/>
    <rect x="15.5" y="14" width="2.5" height="4" rx="1" strokeWidth="1.4" stroke="currentColor"/>
  </svg>
);

/* ─── Odometer ───────────────────────────────────────────── */
function Odometer({ value, total, compact = false }) {
  const digits = Array.from({ length: total }, (_, i) =>
    String(i + 1).padStart(2, '0')
  );
  const lineH = compact ? 38 : 52;

  return (
    <div className="ge-counter">
      <div className="ge-odometer" style={{ height: lineH }}>
        <div
          className="ge-odometer-inner"
          style={{ transform: `translateY(-${value * lineH}px)` }}
        >
          {digits.map((d) => (
            <span
              key={d}
              className="ge-odometer-digit"
              style={{ lineHeight: `${lineH}px`, fontSize: compact ? '2rem' : '3rem' }}
            >
              {d}
            </span>
          ))}
        </div>
      </div>
      <span className="ge-total">/ {String(total).padStart(2, '0')}</span>
    </div>
  );
}

/* ─── Progress Bar ───────────────────────────────────────── */
function ProgressBar({ current, total }) {
  return (
    <div className="ge-progress" role="progressbar" aria-valuenow={current + 1} aria-valuemax={total}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`ge-progress-seg ${i === current ? 'active' : i < current ? 'past' : ''}`}
        />
      ))}
    </div>
  );
}

/* ─── Mode A: Vertical Cards (right panel) ───────────────── */
function VerticalCards({ current }) {
  const cardIndices = [1, 2, 3].map((offset) => (current + offset) % TOTAL);
  return (
    <div className="ge-cards-panel">
      {cardIndices.map((idx, pos) => (
        <div
          key={`${current}-${pos}`}
          className="ge-card entering"
          style={{ animationDelay: `${pos * 0.08}s` }}
        >
          <div className="ge-card-img" style={{ backgroundImage: `url(${SLIDES[idx].img})` }} />
          <span className="ge-card-label">{SLIDES[idx].location}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── Mode B: Horizontal Filmstrip (bottom) ─────────────── */
function FilmstripCards({ current, onCardClick }) {
  return (
    <div className="ge-filmstrip">
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={`ge-film-card ${i === current ? 'ge-film-card--active' : ''}`}
          onClick={() => onCardClick(i)}
          role="button"
          tabIndex={0}
          aria-label={`Go to ${s.location}`}
          onKeyDown={(e) => e.key === 'Enter' && onCardClick(i)}
          style={{ animationDelay: `${i * 0.06}s` }}
        >
          <div
            className="ge-film-card-img"
            style={{ backgroundImage: `url(${s.img})` }}
          />
          <div className="ge-film-card-overlay">
            <span className="ge-film-card-loc">{s.location}</span>
            <span className="ge-film-card-title">{s.subLoc}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Main Hero ──────────────────────────────────────────── */
export default function GlobeExpressHero() {
  const [current,     setCurrent]     = useState(0);
  const [direction,   setDirection]   = useState('next');
  const [textState,   setTextState]   = useState('in');
  const [isAnimating, setIsAnimating] = useState(false);
  const [layoutMode,  setLayoutMode]  = useState('A'); // 'A' | 'B'
  const [modeTransit, setModeTransit] = useState(false);
  const [toggleHover, setToggleHover] = useState(false);

  const timerRef = useRef(null);

  /* Auto-advance */
  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => goToNext(), AUTO_DELAY);
  }, []); // eslint-disable-line

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const navigate = useCallback((dir) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(dir);
    setTextState('out');

    setTimeout(() => {
      setCurrent((c) =>
        dir === 'next' ? (c + 1) % TOTAL : (c - 1 + TOTAL) % TOTAL
      );
      setTextState('in');
      setTimeout(() => setIsAnimating(false), 600);
    }, 320);
  }, [isAnimating]);

  const goToNext = useCallback(() => navigate('next'), [navigate]);
  const goToPrev = useCallback(() => navigate('prev'), [navigate]);

  /* Jump to specific slide (filmstrip click) */
  const jumpTo = useCallback((idx) => {
    if (isAnimating || idx === current) return;
    setIsAnimating(true);
    setDirection(idx > current ? 'next' : 'prev');
    setTextState('out');
    setTimeout(() => {
      setCurrent(idx);
      setTextState('in');
      setTimeout(() => setIsAnimating(false), 600);
    }, 320);
    startTimer();
  }, [isAnimating, current, startTimer]);

  /* Keyboard nav */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') { goToNext(); startTimer(); }
      if (e.key === 'ArrowLeft')  { goToPrev(); startTimer(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goToNext, goToPrev, startTimer]);

  /* Layout toggle */
  const handleToggle = useCallback(() => {
    setModeTransit(true);
    setTimeout(() => {
      setLayoutMode((m) => (m === 'A' ? 'B' : 'A'));
      setTimeout(() => setModeTransit(false), 50);
    }, 300);
  }, []);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const slide = SLIDES[current];


  /* Text animation classes */
  const locClass = `ge-location ${textState === 'in' ? 'ge-text-in' : 'ge-text-out'}`;
  const titleClass = `ge-title ${
    textState === 'in'
      ? 'ge-text-in'
      : direction === 'next' ? 'ge-text-out-left' : 'ge-text-out-right'
  }`;
  const subClass = `ge-sub ${textState === 'in' ? 'ge-text-in' : 'ge-text-out'}`;
  const ctaClass = `ge-cta ${textState === 'in' ? 'ge-text-in' : 'ge-text-out'}`;

  const isA = layoutMode === 'A';

  return (
    <section
      className={`ge-hero ${isA ? 'ge-mode-a' : 'ge-mode-b'} ${modeTransit ? 'ge-mode-transitioning' : ''}`}
      aria-label="Globe Express Hero Banner"
    >
      {/* ── Backgrounds ── */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={`ge-bg-layer ${i === current ? 'ge-active' : ''}`}
          style={{ 
            backgroundImage: `url(${s.img})`,
            transition: !mounted ? 'none' : undefined,
            opacity: !mounted && i === current ? 1 : undefined
          }}
          aria-hidden="true"
        />

      ))}
      <div className={`ge-overlay ${isA ? '' : 'ge-overlay--b'}`} aria-hidden="true" />

      {/* ══════════════════════════ MODE A LAYOUT ══════════════════════════ */}
      {isA && (
        <div className="ge-layout">
          {/* Left Content */}
          <div className="ge-content">
            <div className="ge-location-wrap" aria-live="polite">
              <p className={locClass}>{slide.location}</p>
            </div>
            <div className="ge-title-wrap">
              <h1 className={titleClass} style={{ whiteSpace: 'pre-line' }} aria-live="polite">
                {slide.title}
              </h1>
            </div>
            <div className="ge-sub-wrap">
              <p className={subClass}>{slide.sub}</p>
            </div>
            <div className="ge-cta-wrap">
              <button className={ctaClass} aria-label="Discover Location">
                <span className="ge-cta-circle" aria-hidden="true">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2.2"
                      strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </span>
                <span className="ge-cta-label">Discover Location</span>
              </button>
            </div>
          </div>

          {/* Right Cards */}
          <VerticalCards key={current} current={current} />

          {/* Bottom Bar */}
          <div className="ge-bottom-bar">
            <div className="ge-nav-btns">
              <button className="ge-nav-btn" onClick={() => { goToPrev(); startTimer(); }} aria-label="Previous slide" id="ge-prev-btn">
                <IconArrowLeft />
              </button>

              {/* Hidden Layout Toggle */}
              <button
                className={`ge-layout-toggle ${toggleHover ? 'ge-toggle-reveal' : ''}`}
                onClick={handleToggle}
                onMouseEnter={() => setToggleHover(true)}
                onMouseLeave={() => setToggleHover(false)}
                aria-label="Switch layout"
                title="Switch to filmstrip layout"
                id="ge-layout-toggle"
              >
                <IconLayoutB />
              </button>

              <button className="ge-nav-btn" onClick={() => { goToNext(); startTimer(); }} aria-label="Next slide" id="ge-next-btn">
                <IconArrowRight />
              </button>
            </div>

            <div className="ge-counter-wrap">
              <Odometer value={current} total={TOTAL} />
              <ProgressBar current={current} total={TOTAL} />
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════ MODE B LAYOUT ══════════════════════════ */}
      {!isA && (
        <div className="ge-layout-b">
          {/* Center content block */}
          <div className="ge-b-content">
            <div className="ge-location-wrap" aria-live="polite">
              <p className={locClass} style={{ fontSize: '0.85rem', letterSpacing: '4px' }}>
                {slide.location}
              </p>
            </div>
            <div className="ge-title-wrap">
              <h1
                className={titleClass}
                style={{ whiteSpace: 'pre-line', fontSize: 'clamp(52px, 7vw, 100px)' }}
                aria-live="polite"
              >
                {slide.title}
              </h1>
            </div>
            <div className="ge-sub-wrap">
              <p className={subClass} style={{ maxWidth: '520px', fontSize: '0.9rem' }}>
                {slide.sub}
              </p>
            </div>
            <div className="ge-cta-wrap">
              <button className={ctaClass} aria-label="Discover Location">
                <span className="ge-cta-circle" aria-hidden="true">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2.2"
                      strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </span>
                <span className="ge-cta-label">Discover Location</span>
              </button>
            </div>
          </div>

          {/* Filmstrip cards row */}
          <FilmstripCards key={`film-${current}`} current={current} onCardClick={jumpTo} />

          {/* Bottom bar */}
          <div className="ge-bottom-bar ge-bottom-bar--b">
            <div className="ge-nav-btns">
              <button className="ge-nav-btn" onClick={() => { goToPrev(); startTimer(); }} aria-label="Previous slide" id="ge-prev-btn-b">
                <IconArrowLeft />
              </button>

              {/* Hidden Layout Toggle — mode B side */}
              <button
                className={`ge-layout-toggle ge-toggle-active ${toggleHover ? 'ge-toggle-reveal' : ''}`}
                onClick={handleToggle}
                onMouseEnter={() => setToggleHover(true)}
                onMouseLeave={() => setToggleHover(false)}
                aria-label="Switch layout"
                title="Switch to card layout"
                id="ge-layout-toggle-b"
              >
                <IconLayoutA />
              </button>

              <button className="ge-nav-btn" onClick={() => { goToNext(); startTimer(); }} aria-label="Next slide" id="ge-next-btn-b">
                <IconArrowRight />
              </button>
            </div>

            {/* Progress line across bottom */}
            <div className="ge-b-progress-line">
              <ProgressBar current={current} total={TOTAL} />
            </div>

            <div className="ge-counter-wrap">
              <Odometer value={current} total={TOTAL} compact />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
