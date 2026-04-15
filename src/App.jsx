import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Domains from "./components/Domains";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <header style={{
        padding: '1.25rem 0',
        borderBottom: '1px solid var(--border-color)',
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(12px)',
        zIndex: 50,
        transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ 
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: '800', 
            fontSize: '1.5rem', 
            color: 'var(--text-primary)', 
            letterSpacing: '-0.03em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ color: 'var(--accent-primary)' }}>Data</span>BI.
          </div>
          <nav style={{ display: 'flex', gap: '2.5rem' }}>
            <a href="#domains" style={{ color: 'var(--text-secondary)', fontWeight: '600', fontSize: '0.95rem' }}>Solutions</a>
            <a href="#benefits" style={{ color: 'var(--text-secondary)', fontWeight: '600', fontSize: '0.95rem' }}>Benefits</a>
            <a href="#contact" style={{ 
              backgroundColor: 'var(--accent-primary)', 
              color: 'white', 
              padding: '0.5rem 1.25rem', 
              borderRadius: 'var(--radius-md)',
              fontWeight: '600',
              fontSize: '0.9rem'
            }}>Get Started</a>
          </nav>
        </div>
      </header>

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
