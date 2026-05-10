import React, { useEffect, useRef } from 'react';

export default function ScrollReveal({ children, stagger = false, threshold = 0.15 }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  return (
    <div 
      ref={elementRef} 
      className={stagger ? 'reveal-stagger' : 'reveal'}
    >
      {children}
    </div>
  );
}
