import { ArrowRight, BookOpen, BarChart3, TrendingUp, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        
        {/* Hero Text Content */}
        <div className="animate-fade-in">
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.5rem 1rem',
            backgroundColor: 'var(--accent-light)',
            color: 'var(--accent-primary)',
            borderRadius: '50px',
            fontWeight: '700',
            fontSize: '0.85rem',
            marginBottom: '2.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            <BookOpen size={16} /> <span>Global Learning Leader</span>
          </div>
          
          <h1 className="hero-title-responsive">
            Master the Art of <br />
            <span style={{ 
              color: 'var(--accent-primary)',
              background: 'linear-gradient(90deg, var(--accent-primary) 0%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              Interactive
            </span> <br />
            Data Intelligence.
          </h1>
          
          <p className="hero-subtitle-responsive">
            We bridge the gap between static charts and strategic foresight. Join our elite corporate bootcamp and turn raw numbers into competitive advantages.
          </p>
          
          <div className="hero-actions">
            <a href="#domains" className="btn-primary" style={{ padding: '1.1rem 2.8rem', fontSize: '1.15rem' }}>
               Explore curriculum <ArrowRight size={22} />
            </a>
          </div>

          <div className="hero-features">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
               <ShieldCheck size={20} color="var(--accent-primary)" /> Verified Curriculum
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
               <TrendingUp size={20} color="var(--accent-primary)" /> Industry standard
            </div>
          </div>
        </div>

        {/* Floating Visual Elements - Hidden on Mobile */}
        <div className="hero-floating-wrapper">
          
          {/* Main Floating Card */}
          <div style={{
            width: '320px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(16px)',
            borderRadius: 'var(--radius-xl)',
            padding: '2rem',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            zIndex: 5,
            position: 'absolute',
            top: '5%',
            right: '0'
          }} className="animate-float">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div style={{ backgroundColor: 'var(--accent-light)', padding: '0.5rem', borderRadius: '10px' }}>
                <BarChart3 color="var(--accent-primary)" size={24} />
              </div>
              <div style={{ color: '#10b981', fontWeight: '800', fontSize: '1.1rem' }}>+24% ROI</div>
            </div>
            <div style={{ fontWeight: '800', fontSize: '1.5rem', marginBottom: '0.25rem' }}>Business Growth</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Efficiency analytics enabled</div>
            <div style={{ marginTop: '1.5rem', height: '40px', display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
              {[15, 30, 20, 45, 25, 60, 40].map((h, i) => (
                <div key={i} style={{ height: `${h}%`, flexGrow: 1, backgroundColor: 'var(--accent-primary)', opacity: 0.2 + (i * 0.1), borderRadius: '2px' }}></div>
              ))}
            </div>
          </div>

          {/* Secondary Floating Card */}
          <div style={{
            width: '260px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            zIndex: 4,
            position: 'absolute',
            bottom: '5%',
            left: '0',
            animationDelay: '1s'
          }} className="animate-float">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#6366f1' }}></div>
              <div style={{ fontWeight: '800', color: 'var(--text-primary)' }}>Live Interaction</div>
            </div>
            <div style={{ marginTop: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              Real-time synchronization for operational dashboards.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
