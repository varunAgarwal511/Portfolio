import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Hero from "./components/Hero";
import Domains from "./components/Domains";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import bsquareLogo from "./assets/bsquare-01.png";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close menu on nav link click
  const handleNavLinkClick = () => setIsMenuOpen(false);

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <header style={{
        padding: '0.4rem 0',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        zIndex: 200,
        transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <img 
              src={bsquareLogo} 
              alt="Bsquare Software Service" 
              style={{
                height: '45px',
                width: 'auto',
                objectFit: 'contain',
                transform: 'scale(3.4)',
                transformOrigin: 'left center'
              }} 
            />
          </div>

          {/* Desktop Nav */}
          <nav className="nav-links" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            {['Domains', 'Benefits', 'Testimonials'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: 'var(--text-secondary)',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  position: 'relative',
                  padding: '0.2rem 0'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = 'var(--text-primary)';
                  const underline = e.currentTarget.querySelector('.nav-underline');
                  if (underline) underline.style.width = '100%';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  const underline = e.currentTarget.querySelector('.nav-underline');
                  if (underline) underline.style.width = '0%';
                }}
              >
                {item}
                <div
                  className="nav-underline"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '0%',
                    height: '2px',
                    backgroundColor: 'var(--accent-primary)',
                    transition: 'width 0.3s ease',
                    borderRadius: '2px'
                  }}
                />
              </a>
            ))}
            <a href="#contact" style={{
              backgroundColor: 'var(--accent-primary)',
              color: 'white',
              padding: '0.75rem 1.6rem',
              borderRadius: '14px',
              fontWeight: '800',
              fontSize: '0.95rem',
              boxShadow: '0 10px 20px -5px rgba(79,70,229,0.4)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              border: 'none',
              marginLeft: '0.5rem'
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 15px 30px -5px rgba(79,70,229,0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 20px -5px rgba(79,70,229,0.4)';
              }}>
              Get Started
            </a>
          </nav>

          {/* Hamburger Button (mobile only) */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            style={{
              background: 'var(--accent-light)',
              border: 'none',
              borderRadius: '8px',
              padding: '0.5rem',
              cursor: 'pointer',
              color: 'var(--accent-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 6px rgba(79, 70, 229, 0.1)'
            }}
          >
            {isMenuOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-Down Menu */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
        <div style={{
          borderBottom: '1px solid rgba(0,0,0,0.06)',
          paddingBottom: '1.5rem',
          marginBottom: '0.5rem'
        }}>
          <div style={{ fontWeight: '800', fontSize: '1.3rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Navigation</div>
        </div>
        <a href="#domains" onClick={handleNavLinkClick} style={{
          fontSize: '1.6rem',
          fontWeight: '800',
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          textDecoration: 'none',
          transition: 'color 0.2s ease'
        }}>Solutions</a>
        <a href="#benefits" onClick={handleNavLinkClick} style={{
          fontSize: '1.6rem',
          fontWeight: '800',
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          textDecoration: 'none',
          transition: 'color 0.2s ease'
        }}>Benefits</a>
        <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <a href="#contact" onClick={handleNavLinkClick} style={{
            display: 'block',
            textAlign: 'center',
            backgroundColor: 'var(--accent-primary)',
            color: 'white',
            padding: '1.1rem 2rem',
            borderRadius: 'var(--radius-md)',
            fontWeight: '700',
            fontSize: '1.1rem',
            boxShadow: '0 8px 24px rgba(79,70,229,0.3)',
            textDecoration: 'none'
          }}>Get Started →</a>
        </div>
      </div>

      <main>
        <Hero />
        <div className="reveal"><Domains /></div>
        <div id="benefits" className="reveal"><Benefits /></div>
        <div className="reveal"><Testimonials /></div>
      </main>

      <Contact />
    </div>
  );
}
