import { CheckCircle, Users } from 'lucide-react';

const benefitsList = [
  "Learn Advanced Data Modeling & DAX functions",
  "Build Clean, Interactive Dashboard UIs from scratch",
  "Master Real-time Data Integration & API Connections",
  "Hands-on practice with Actionable Business Scenarios",
  "Optimize performance for million-row datasets",
  "Interview prep and real-world project portfolios"
];

export default function Benefits() {
  return (
    <section id="benefits">
      <div className="container">
        <div className="benefits-grid">
          {/* Text Content */}
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
              Why Choose Us
            </span>
            <h2 className="hero-title-responsive" style={{ margin: '0 0 1.5rem 0' }}>
              Master BI with <br />
              <span style={{ color: 'var(--accent-primary)' }}>Practical Precision.</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
              We don't just teach tools; we build analysts. Our curriculum is forged in real-world corporate requirements, ensuring you're ready for the most demanding data environments.
            </p>

            <ul className="benefits-list">
              {benefitsList.map((benefit, index) => (
                <li key={index} className="benefit-item">
                  <div style={{ marginTop: '0.25rem' }}>
                    <CheckCircle color="var(--accent-primary)" size={20} strokeWidth={2.5} />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Element: Educational Image */}
          <div className="benefits-visual-wrapper animate-fade-in">
            {/* Background Accent */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              width: '100%',
              height: '100%',
              backgroundColor: 'var(--accent-light)',
              borderRadius: 'var(--radius-xl)',
              zIndex: 0
            }}></div>
            
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
              alt="Professional analytics team collaborating"
              style={{
                width: '100%',
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: 'var(--radius-xl)',
                position: 'relative',
                zIndex: 1,
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid var(--border-color)'
              }}
            />

            {/* Small Floating decorative element */}
            <div className="mentorship-card">
              <div style={{ backgroundColor: 'var(--accent-light)', padding: '0.75rem', borderRadius: '12px' }}>
                <Users color="var(--accent-primary)" size={24} />
              </div>
              <div>
                <div style={{ color: 'var(--text-primary)', fontWeight: '800', fontSize: '1.05rem', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Expert Mentorship</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '500' }}>Direct Industry Guidance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
