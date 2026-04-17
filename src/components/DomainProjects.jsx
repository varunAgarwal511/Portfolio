import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, TrendingUp, Target, Zap, CheckCircle2, Shield } from 'lucide-react';

export default function DomainProjects({ domain, onBack }) {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Scroll to top of section when project changes
    const element = document.getElementById('domains');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedProject]);

  if (!domain) return null;

  if (selectedProject) {
    return (
      <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
        <button 
          onClick={() => setSelectedProject(null)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            marginBottom: '3rem',
            fontSize: '0.9rem',
            fontWeight: '700',
            padding: '0.75rem 1.5rem',
            borderRadius: '50px',
            transition: 'all 0.3s ease',
            boxShadow: 'var(--shadow-sm)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--bg-primary)';
            e.currentTarget.style.transform = 'translateX(-5px)';
            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)';
            e.currentTarget.style.transform = 'translateX(0)';
            e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
          }}
        >
          <ArrowLeft size={18} /> Back to {domain.title} Projects
        </button>

        {/* Hero Section */}
        <div style={{
          position: 'relative',
          height: '400px',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          marginBottom: '4rem',
          boxShadow: 'var(--shadow-xl)'
        }}>
          <img 
            src={selectedProject.fullImage} 
            alt={selectedProject.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 50%, transparent 100%)',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '4rem'
          }}>
            <div>
              <span style={{
                color: 'var(--accent-primary)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                padding: '0.5rem 1.25rem',
                borderRadius: '50px',
                fontSize: '0.85rem',
                fontWeight: '800',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1.5rem',
                display: 'inline-block'
              }}>
                Case Study
              </span>
              <h2 style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                color: 'white', 
                fontWeight: '900', 
                letterSpacing: '-0.03em',
                lineHeight: '1.1'
              }}>
                {selectedProject.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="mobile-slider-container" style={{ marginBottom: '5rem' }}>
          {selectedProject.impact.map((metric, i) => (
            <div key={i} className="mobile-slider-item full-width-slide" style={{
              backgroundColor: 'var(--bg-secondary)',
              padding: '2.5rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'var(--accent-light)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)',
                marginBottom: '0.5rem'
              }}>
                {i === 0 ? <TrendingUp size={24} /> : i === 1 ? <Target size={24} /> : <Zap size={24} />}
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                {metric.value}
              </div>
              <div>
                <div style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>{metric.label}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{metric.detail}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '3rem' 
        }}>
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '8px', height: '32px', backgroundColor: 'var(--accent-primary)', borderRadius: '4px' }}></div>
              Project Background
            </h3>
            <p style={{ 
              fontSize: '1.2rem', 
              lineHeight: '1.8', 
              color: 'var(--text-secondary)',
              marginBottom: '2rem'
            }}>
              {selectedProject.background}
            </p>
            <div style={{
              padding: '2rem',
              backgroundColor: 'var(--bg-tertiary)',
              borderRadius: 'var(--radius-lg)',
              borderLeft: '4px solid var(--accent-primary)'
            }}>
              <p style={{ fontStyle: 'italic', color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                "The core objective was to bridge the gap between raw data streams and actionable executive insights."
              </p>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '8px', height: '32px', backgroundColor: 'var(--accent-primary)', borderRadius: '4px' }}></div>
              Key Features
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {selectedProject.keyFeatures.map((feature, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  gap: '1.25rem', 
                  alignItems: 'flex-start',
                  padding: '1.25rem',
                  backgroundColor: 'var(--bg-primary)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <div style={{ color: 'var(--accent-primary)', marginTop: '0.1rem' }}>
                    <CheckCircle2 size={22} />
                  </div>
                  <span style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)' }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <button 
        onClick={onBack}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'none',
          border: 'none',
          color: 'var(--text-secondary)',
          cursor: 'pointer',
          marginBottom: '3rem',
          fontSize: '0.95rem',
          fontWeight: '700',
          padding: '0.5rem 0',
          transition: 'all 0.3s ease',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.color = 'var(--accent-primary)';
          e.currentTarget.style.transform = 'translateX(-5px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.color = 'var(--text-secondary)';
          e.currentTarget.style.transform = 'translateX(0)';
        }}
      >
        <ArrowLeft size={18} /> Back to Industry Solutions
      </button>
      
      <div style={{ marginBottom: '4rem', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{
            backgroundColor: 'var(--bg-primary)',
            padding: '1.5rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)',
            display: 'flex',
            boxShadow: 'var(--shadow-md)'
        }}>
          {domain.icon}
        </div>
        <div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: '900', marginBottom: '0.5rem', color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
            {domain.title} <span style={{ color: 'var(--accent-primary)' }}>Projects</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '800px', lineHeight: '1.7' }}>
            {domain.description}
          </p>
        </div>
      </div>

      <div className="mobile-slider-container">
        {domain.projects.map((project, idx) => (
          <div key={project.id} className="project-card mobile-slider-item full-width-slide" style={{
            backgroundColor: 'var(--bg-primary)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-sm)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              e.currentTarget.style.borderColor = 'rgba(79, 70, 229, 0.2)';
              const arrow = e.currentTarget.querySelector('.project-arrow');
              if (arrow) arrow.style.transform = 'translateX(5px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              e.currentTarget.style.borderColor = 'var(--border-color)';
              const arrow = e.currentTarget.querySelector('.project-arrow');
              if (arrow) arrow.style.transform = 'translateX(0)';
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '5px',
              backgroundColor: 'var(--accent-primary)',
              opacity: 0.9
            }}></div>
            <div style={{
              color: 'var(--accent-primary)',
              fontSize: '0.85rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1.25rem'
            }}>
              Module 0{idx + 1}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              {project.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem', flexGrow: 1, marginBottom: '2.5rem' }}>
              {project.description}
            </p>
            
            <div 
              onClick={() => setSelectedProject(project)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginTop: 'auto',
                borderTop: '1px solid var(--border-color)',
                paddingTop: '1.5rem',
                cursor: 'pointer'
              }}
            >
              <span style={{
                color: 'var(--accent-primary)',
                fontWeight: '700',
                fontSize: '1rem'
              }}>
                Project Overview
              </span>
              <div className="project-arrow" style={{
                transition: 'transform 0.3s ease',
                display: 'flex',
                alignItems: 'center'
              }}>
                <ArrowRight size={20} color="var(--accent-primary)" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
