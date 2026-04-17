import { Mail, Briefcase, MapPin, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', padding: '2rem 0 2rem 0' }}>
      <div className="container">
        <div className="contact-grid">
          <div className="animate-fade-in">
            <span style={{
              color: 'var(--accent-primary)',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: '0.8rem',
              marginBottom: '1rem',
              display: 'inline-block',
              padding: '0.4rem 1rem',
              backgroundColor: 'var(--accent-light)',
              borderRadius: '50px'
            }}>
              Contact Us
            </span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'var(--text-primary)', marginBottom: '1.5rem', fontWeight: '900', letterSpacing: '-0.03em', lineHeight: '1.1' }}>
              Let's Architect Your <br />
              <span style={{ 
                color: 'var(--accent-primary)',
                background: 'linear-gradient(90deg, var(--accent-primary) 0%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>Data Future.</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: '1.8', maxWidth: '540px' }}>
              Ready to unearth the value hidden in your datasets? Reach out to discuss how our custom BI strategies can elevate your business.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }} className="animate-fade-in">
            {[
              { icon: <Mail size={22} />, label: 'contact@bsquare.service', sub: 'Project Inquiries', href: 'mailto:contact@bsquare.service' },
              { icon: <Briefcase size={22} />, label: 'Bsquare LinkedIn', sub: 'Corporate Networking', href: '#' },
              { icon: <MapPin size={22} />, label: 'Tech Hub, CA', sub: 'Global Operations HQ' }
            ].map((item, i) => (
              <div key={i} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1.5rem', 
                padding: '1.5rem', 
                backgroundColor: 'white', 
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateX(10px)';
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}>
                <div style={{ 
                  padding: '1.1rem', 
                  backgroundColor: 'var(--accent-light)', 
                  borderRadius: '16px',
                  color: 'var(--accent-primary)',
                  display: 'flex'
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ color: 'var(--text-light)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>
                    {item.sub}
                  </div>
                  {item.href ? (
                    <a href={item.href} style={{ color: 'var(--text-primary)', fontSize: '1.15rem', fontWeight: '800', letterSpacing: '-0.01em' }}>
                      {item.label}
                    </a>
                  ) : (
                    <div style={{ color: 'var(--text-primary)', fontSize: '1.15rem', fontWeight: '800', letterSpacing: '-0.01em' }}>{item.label}</div>
                  )}
                </div>
                <div style={{ marginLeft: 'auto', color: 'var(--text-light)', opacity: 0.3 }}>
                   <ExternalLink size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="footer-bottom" style={{ color: 'var(--text-light)', fontSize: '0.95rem', fontWeight: '600' }}>
          <span>© 2026 Bsquare software service. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" style={{ color: 'inherit', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--accent-primary)'} onMouseOut={e => e.target.style.color = 'inherit'}>Privacy Policy</a>
            <a href="#" style={{ color: 'inherit', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--accent-primary)'} onMouseOut={e => e.target.style.color = 'inherit'}>Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  );
}
