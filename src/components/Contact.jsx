import { Mail, Briefcase, MapPin, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', padding: '8rem 0 4rem 0' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(300px, 1.2fr) 1fr',
          gap: '6rem',
          marginBottom: '6rem',
          borderBottom: '1px solid var(--border-color)',
          paddingBottom: '6rem',
          alignItems: 'center'
        }}>
          <div className="animate-fade-in">
            <span style={{
              color: 'var(--accent-primary)',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: '0.8rem',
              marginBottom: '1rem',
              display: 'inline-block'
            }}>
              Contact Us
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)', marginBottom: '1.5rem', fontWeight: '900', letterSpacing: '-0.03em' }}>
              Let's Architect Your <br />
              <span style={{ color: 'var(--accent-primary)' }}>Data Future.</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: '1.8', maxWidth: '500px' }}>
              Ready to unearth the value hidden in your datasets? Reach out to discuss how our custom BI strategies can elevate your business.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }} className="animate-fade-in">
            {[
              { icon: <Mail size={22} />, label: 'hello@databi.solutions', href: 'mailto:hello@databi.solutions' },
              { icon: <Briefcase size={22} />, label: 'Connect on LinkedIn', href: '#' },
              { icon: <MapPin size={22} />, label: 'Global Operations HQ', sub: 'San Francisco, CA' }
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
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateX(10px)';
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}>
                <div style={{ 
                  padding: '1rem', 
                  backgroundColor: 'var(--accent-light)', 
                  borderRadius: '12px',
                  color: 'var(--accent-primary)',
                  display: 'flex'
                }}>
                  {item.icon}
                </div>
                <div>
                  {item.href ? (
                    <a href={item.href} style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: '700', letterSpacing: '-0.01em' }}>
                      {item.label}
                    </a>
                  ) : (
                    <div style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: '700', letterSpacing: '-0.01em' }}>{item.label}</div>
                  )}
                  {item.sub && <div style={{ color: 'var(--text-light)', fontSize: '0.9rem', fontWeight: '500', marginTop: '0.2rem' }}>{item.sub}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-light)', fontSize: '0.95rem', fontWeight: '600' }}>
          <span>© 2026 DataBI Solutions. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" style={{ color: 'inherit' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'inherit' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  );
}
