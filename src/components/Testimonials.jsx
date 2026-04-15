import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
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

export default function Testimonials() {
  return (
    <section>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }} className="animate-fade-in">
          <span style={{
            color: 'var(--accent-primary)',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontSize: '0.8rem',
            marginBottom: '1rem',
            display: 'inline-block'
          }}>
            Success Stories
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1.5rem', fontWeight: '900', letterSpacing: '-0.03em' }}>
            Trusted by Industry Experts.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '650px', margin: '0 auto', lineHeight: '1.7' }}>
            Real results from professionals who transformed their operations through our analytics training.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '3rem'
        }}>
          {testimonials.map((t, index) => (
            <div key={index} style={{
              backgroundColor: 'var(--bg-primary)',
              padding: '3rem',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border-color)',
              position: 'relative',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'default',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-sm)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              e.currentTarget.style.borderColor = 'rgba(79, 70, 229, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              e.currentTarget.style.borderColor = 'var(--border-color)';
            }}>
              <Quote size={32} color="var(--accent-primary)" style={{ opacity: 0.15, marginBottom: '1.5rem' }} />
              <p style={{ 
                fontSize: '1.1rem', 
                color: 'var(--text-primary)', 
                lineHeight: '1.8',
                marginBottom: '2.5rem',
                fontStyle: 'normal',
                flexGrow: 1,
                fontWeight: '500'
              }}>
                "{t.text}"
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginTop: 'auto', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
                <img 
                  src={t.image} 
                  alt={t.name}
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid white',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                  }}
                />
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', color: 'var(--text-primary)', fontWeight: '800' }}>{t.name}</h4>
                  <span style={{ color: 'var(--text-light)', fontSize: '0.875rem', fontWeight: '600' }}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
