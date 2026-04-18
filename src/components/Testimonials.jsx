import React, { useState, useRef, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: ' Varun Jenkins',
    role: 'Director of Operations, MedCorp',
    text: 'The Healthcare dashboard provided an unprecedented view into our operational bottlenecks. We reduced patient wait times by 22% in the first quarter alone.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'CEO, AutoTech Manufacturing',
    text: 'A game changer for our supply chain visibility. The automated reporting saved us countless hours of manual Excel work every week.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Elena Rodriguez',
    role: 'CFO, Global Retail',
    text: 'The sales forecasting models built in Power BI transformed how we allocate budgets. We immediately saw a 15% reduction in excess inventory costs.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    name: 'David O\'Connor',
    role: 'VP of Logistics, Prime Freight',
    text: 'Having real-time dashboards for our fleet tracking changed everything. We are now predicting maintenance needs before breakdowns occur.',
    image: 'https://randomuser.me/api/portraits/men/46.jpg'
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Data, FinServe',
    text: 'The interactive financial reports and DAX optimizations simplified our month-end close. What used to take days is now automated and reviewed in hours.',
    image: 'https://randomuser.me/api/portraits/women/33.jpg'
  },
  {
    name: 'Marcus Johnson',
    role: 'CSO, BuildRight Corp',
    text: 'Turning our fragmented project data into a centralized, easy-to-read narrative gave our stakeholders incredible confidence. A truly outstanding BI implementation.',
    image: 'https://randomuser.me/api/portraits/men/22.jpg'
  }
];

const StarRating = ({ rating = 5 }) => (
  <div style={{ display: 'flex', gap: '2px', marginBottom: '1rem' }}>
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} fill={i < rating ? "var(--accent-primary)" : "none"} color={i < rating ? "var(--accent-primary)" : "var(--text-light)"} strokeWidth={2} />
    ))}
  </div>
);

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollPosition = container.scrollLeft;
      const itemWidth = container.offsetWidth * 0.88; // matches the width in CSS
      const newIndex = Math.round(scrollPosition / itemWidth);
      if (newIndex !== activeIndex && newIndex < testimonials.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  const scrollTo = (index) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const itemWidth = container.offsetWidth * 0.88;
      container.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  const nextSlide = () => {
    if (activeIndex < testimonials.length - 1) {
      scrollTo(activeIndex + 1);
    } else {
      scrollTo(0);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      scrollTo(activeIndex - 1);
    } else {
      scrollTo(testimonials.length - 1);
    }
  };

  return (
    <section style={{ overflow: 'hidden', position: 'relative' }}>
      {/* Decorative Background Blobs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(79, 70, 229, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        zIndex: -1
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(79, 70, 229, 0.03) 0%, rgba(255, 255, 255, 0) 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        zIndex: -1
      }} />

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2rem', position: 'relative', zIndex: 1 }} className="reveal active">
          <span style={{
            color: 'var(--accent-primary)',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            fontSize: '0.75rem',
            marginBottom: '1.5rem',
            display: 'inline-block',
            backgroundColor: 'var(--accent-light)',
            padding: '0.6rem 1.5rem',
            borderRadius: '100px',
            border: '1px solid rgba(79, 70, 229, 0.1)'
          }}>
            Success Stories
          </span>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
            marginBottom: '1.5rem',
            fontWeight: '900',
            letterSpacing: '-0.04em',
            lineHeight: 1.1
          }}>
            Trusted by the <span style={{ color: 'var(--accent-primary)' }}>Best.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8', fontWeight: '400' }}>
            Discover how our data-driven approach has powered the growth of world-class organizations.
          </p>
        </div>

        <div style={{ position: 'relative', padding: '0 10px' }}>
          {/* Navigation Arrows (Desktop) */}
          <button className="slider-nav-btn prev" onClick={prevSlide} aria-label="Previous testimonial">
            <ChevronLeft size={24} />
          </button>
          <button className="slider-nav-btn next" onClick={nextSlide} aria-label="Next testimonial">
            <ChevronRight size={24} />
          </button>

          <div 
            ref={scrollRef} 
            onScroll={handleScroll}
            className="mobile-slider-container" 
            style={{
              position: 'relative',
              zIndex: 1
            }}
          >
            {testimonials.map((t, index) => (
              <div key={index} 
                className={`mobile-slider-item full-width-slide slider-card ${activeIndex === index ? 'active' : ''}`}
                style={{
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                padding: 'clamp(1.5rem, 5vw, 3.5rem) clamp(1.5rem, 5vw, 3rem) clamp(1.5rem, 5vw, 3rem)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                position: 'relative',
                transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                cursor: 'default',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
                overflow: 'hidden',
              }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px) scale(1.01)';
                  e.currentTarget.style.boxShadow = '0 30px 60px -15px rgba(0,0,0,0.12)';
                  e.currentTarget.style.borderColor = 'rgba(79, 70, 229, 0.3)';
                  const quote = e.currentTarget.querySelector('.quote-icon');
                  if (quote) quote.style.opacity = '0.3';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
                  const quote = e.currentTarget.querySelector('.quote-icon');
                  if (quote) quote.style.opacity = '0.1';
                }}>
                {/* Decorative Quote Icon */}
                <Quote
                  className="quote-icon"
                  size={80}
                  color="var(--accent-primary)"
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    opacity: 0.1,
                    transition: 'all 0.5s ease',
                    transform: 'rotate(10deg)'
                  }}
                />

                <StarRating />

                <p style={{
                  fontSize: 'clamp(0.95rem, 4vw, 1.15rem)',
                  color: 'var(--text-primary)',
                  lineHeight: '1.8',
                  marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)',
                  flexGrow: 1,
                  fontWeight: '500',
                  position: 'relative',
                  zIndex: 1
                }}>
                  "{t.text}"
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  marginTop: 'auto',
                  paddingTop: '2rem',
                  borderTop: '1px solid rgba(0,0,0,0.05)'
                }}>
                  <div style={{ position: 'relative' }}>
                    <img
                      src={t.image}
                      alt={t.name}
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '18px',
                        objectFit: 'cover',
                        border: '3px solid white',
                        boxShadow: 'var(--shadow-md)'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '-4px',
                      right: '-4px',
                      width: '20px',
                      height: '20px',
                      backgroundColor: '#10b981',
                      borderRadius: '50%',
                      border: '3px solid white'
                    }} title="Verified Professional" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', marginBottom: '0.2rem', color: 'var(--text-primary)', fontWeight: '800' }}>{t.name}</h4>
                    <span style={{
                      color: 'var(--accent-primary)',
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="slider-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot ${activeIndex === i ? 'active' : ''}`}
                onClick={() => scrollTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
