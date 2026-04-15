import React, { useState } from 'react';
import { Activity, Car, Utensils, ArrowRight, ArrowLeft } from 'lucide-react';
import healthcareImg from '../assets/domains/healthcare.png';
import restaurantImg from '../assets/domains/restaurant.png';
import automobileImg from '../assets/domains/automobile.png';
import DomainProjects from './DomainProjects';

const domains = [
  {
    id: 'healthcare',
    title: 'Healthcare Analytics',
    description: 'Patient outcome tracking, resource allocation, and clinical efficiency dashboards designed to improve care standards.',
    icon: <Activity size={24} color="var(--accent-primary)" />,
    image: healthcareImg,
    projects: [
      { 
        id: 'hc1', 
        title: 'Patient Waiting Time Tracking', 
        description: 'Monitors real-time average wait times across departments to optimize staff allocation and improve patient satisfaction.',
        fullImage: healthcareImg,
        background: 'The hospital network struggled with uneven patient distribution and unpredictable peak loads. Patients often waited over 2 hours for triage during shift changes, leading to decreased satisfaction and potential clinical risks.',
        impact: [
          { label: 'Avg Wait Reduction', value: '35%', detail: 'Improved triage flow' },
          { label: 'Staff Optimization', value: '22%', detail: 'Better resource use' },
          { label: 'Patient Rating', value: '4.8/5', detail: 'Increased satisfaction' }
        ],
        keyFeatures: [
          'Real-time departmental wait-time heatmaps',
          'Automated bottleneck detection alerts',
          'Predictive staffing based on historical volume',
          'Triage efficiency tracking by shift'
        ]
      },
      { 
        id: 'hc2', 
        title: 'Hospital Resource Management', 
        description: 'Tracks bed occupancy rates, medical equipment utilization, and inventory levels to ensure seamless hospital operations.',
        fullImage: healthcareImg,
        background: 'Manual tracking of bed capacity and medical equipment led to frequent coordination delays. Critical equipment was often misplaced or under-utilized, while patients waited in corridors for bed availability.',
        impact: [
          { label: 'Bed Turnover Rate', value: '18%', detail: 'Faster patient discharge' },
          { label: 'Asset Utilization', value: '40%', detail: 'Better equipment ROI' },
          { label: 'Operational Cost', value: '-12%', detail: 'Reduced manual labor' }
        ],
        keyFeatures: [
          'Dynamic bed status monitoring',
          'High-value asset RFID tracking integration',
          'Automated inventory replenishment orders',
          'Surgical suite scheduling optimization'
        ]
      },
      { 
        id: 'hc3', 
        title: 'Clinical Quality Metrics', 
        description: 'Visualizes readmission rates, infection control data, and overall clinical outcomes to support evidence-based decision making.',
        fullImage: healthcareImg,
        background: 'Quality assurance teams were buried in spreadsheets. Identifying patterns in hospital-acquired infections or readmission spikes took weeks of manual data cleaning and analysis.',
        impact: [
          { label: 'Readmission Rate', value: '-15%', detail: 'Better post-care follow-up' },
          { label: 'Compliance Score', value: '100%', detail: 'Met regulatory standards' },
          { label: 'Infection Control', value: '28%', detail: 'Fewer reported incidents' }
        ],
        keyFeatures: [
          'Automated readmission risk scoring',
          'Real-time infection trend monitoring',
          'Clinician performance benchmarking',
          'Regulatory reporting automation'
        ]
      }
    ]
  },
  {
    id: 'restaurant',
    title: 'Restaurant Operations',
    description: 'Sales forecasting, inventory management, and customer satisfaction metrics to optimize dining experiences.',
    icon: <Utensils size={24} color="var(--accent-primary)" />,
    image: restaurantImg,
    projects: [
      { 
        id: 'rest1', 
        title: 'Sales & Menu Performance', 
        description: 'Analyzes daily revenue, best-selling items, and peak dining hours to maximize profitability and menu engineering.',
        fullImage: restaurantImg,
        background: 'The restaurant group lacked visibility into which menu items were actually profitable versus just popular. Peak period staffing was based on intuition rather than data, leading to high labor costs.',
        impact: [
          { label: 'Net Profitability', value: '+12%', detail: 'Optimized menu pricing' },
          { label: 'Labor Cost', value: '-8%', detail: 'Accurate peak staffing' },
          { label: 'Average Ticket', value: '15%', detail: 'Successful upselling' }
        ],
        keyFeatures: [
          'Menu item contribution margin analysis',
          'Hourly labor dynamic scheduling',
          'Real-time sales target tracking',
          'Wastage analysis by dish type'
        ]
      },
      { 
        id: 'rest2', 
        title: 'Inventory & Waste Control', 
        description: 'Tracks raw material usage, identifies variance, and predicts restocking needs to minimize food waste and reduce food cost.',
        fullImage: restaurantImg,
        background: 'High food waste was eroding margins. Inaccurate inventory counts and over-ordering of perishables led to significant losses that were difficult to track to the source.',
        impact: [
          { label: 'Food Waste', value: '-24%', detail: 'Precision ordering' },
          { label: 'Inventory Cost', value: '-18%', detail: 'Reduced overstocking' },
          { label: 'Stock Accuracy', value: '98%', detail: 'Automated verification' }
        ],
        keyFeatures: [
          'Automated purchase order generation',
          'Real-time ingredient usage tracking',
          'Supplier performance and price benchmarking',
          'Expired stock early warning system'
        ]
      },
      { 
        id: 'rest3', 
        title: 'Customer Sentiment Dashboard', 
        description: 'Aggregates reviews and ratings from multiple platforms to provide actionable insights into customer satisfaction and service quality.',
        fullImage: restaurantImg,
        background: 'Customer feedback was scattered across Google, TripAdvisor, and social media. Managers were overwhelmed by the volume of reviews and missed critical complaints about service quality.',
        impact: [
          { label: 'Overall Rating', value: '4.6/5', detail: 'Consolidated feedback' },
          { label: 'Response Time', value: '2 hrs', detail: 'Faster management action' },
          { label: 'Customer Retention', value: '+30%', detail: 'Repeat visits increased' }
        ],
        keyFeatures: [
          'Multi-platform review aggregation',
          'AI-driven sentiment analysis',
          'Service-complaint classification',
          'Direct customer interaction tracking'
        ]
      }
    ]
  },
  {
    id: 'automobile',
    title: 'Automobile Manufacturing',
    description: 'Supply chain visibility, defect rate analysis, and production line efficiency reporting for automotive giants.',
    icon: <Car size={24} color="var(--accent-primary)" />,
    image: automobileImg,
    projects: [
      { 
        id: 'auto1', 
        title: 'Supply Chain Visibility', 
        description: 'End-to-end tracking of component delivery times, supplier performance, and logistics bottlenecks to ensure uninterrupted manufacturing.',
        fullImage: automobileImg,
        background: 'Supply chain disruptions frequently halted the assembly line. The manufacturer had no early warning system for delayed shipments from overseas suppliers, causing cascaded manufacturing delays.',
        impact: [
          { label: 'Line Downtime', value: '-42%', detail: 'Predictive delivery tracking' },
          { label: 'Supplier Lead Time', value: '-15%', detail: 'Better vendor choice' },
          { label: 'Logistics Cost', value: '-10%', detail: 'Optimized freight routes' }
        ],
        keyFeatures: [
          'Real-time shipment GPS tracking',
          'Alternative supplier risk scoring',
          'Just-in-time inventory alerts',
          'Port congestion predictive modeling'
        ]
      },
      { 
        id: 'auto2', 
        title: 'Production Line Efficiency', 
        description: 'Monitors machine downtime, assembly line throughput, and overall equipment effectiveness (OEE) for continuous operational improvement.',
        fullImage: automobileImg,
        background: 'Unexpected equipment failure was the single largest cost center. Maintenance was performed on a fixed schedule, ignoring the actual wear-and-tear data from the production floor.',
        impact: [
          { label: 'OEE Score', value: '+20%', detail: 'Higher line productivity' },
          { label: 'Maint. Costs', value: '-22%', detail: 'Predictive maintenance' },
          { label: 'Output Velocity', value: '+18%', detail: 'More units per shift' }
        ],
        keyFeatures: [
          'Real-time machine performance telemetry',
          'Predictive failure analysis (AI)',
          'Bottleneck identifying heatmaps',
          'Shift-wise productivity comparison'
        ]
      },
      { 
        id: 'auto3', 
        title: 'Quality Assurance & Defect Rates', 
        description: 'Identifies defect trends by model and shift, helping quality control teams isolate and resolve manufacturing issues early.',
        fullImage: automobileImg,
        background: 'High defect rates in final assembly led to expensive recalls and rework. Identifying the root cause within the 5,000-step assembly process was like finding a needle in a haystack.',
        impact: [
          { label: 'Defect Rate', value: '-30%', detail: 'Root cause identification' },
          { label: 'Rework Hours', value: '-25%', detail: 'Earlier stage detection' },
          { label: 'Safety Recalls', value: 'Zero', detail: 'Enhanced QC standards' }
        ],
        keyFeatures: [
          'Unit-level quality traceability',
          'Automated vision inspection logs',
          'Defect trend analysis by variant',
          'Supplier-part quality correlation'
        ]
      }
    ]
  }
];

export default function Domains() {
  const [selectedDomain, setSelectedDomain] = useState(null);

  const currentDomainInfo = domains.find(d => d.id === selectedDomain);

  return (
    <section id="domains" style={{ padding: '6rem 0' }}>
      <div className="container">
        {selectedDomain && currentDomainInfo ? (
          <DomainProjects 
            domain={currentDomainInfo} 
            onBack={() => setSelectedDomain(null)} 
          />
        ) : (
          // Grid View
          <>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
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
                Industry Solutions
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1.5rem', fontWeight: '800', lineHeight: '1.2' }}>
                Domain-Specific Expertise
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '650px', margin: '0 auto', lineHeight: '1.7' }}>
                We bridge the gap between complex data and strategic clarity across diverse industry verticals.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '3rem'
            }}>
              {domains.map((domain) => (
                <div key={domain.id} 
                  onClick={() => setSelectedDomain(domain.id)}
                  style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-ambient)',
                  cursor: 'pointer',
                  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.transform = 'scale(1.1)';
                    const arrow = e.currentTarget.querySelector('.arrow-icon');
                    if (arrow) arrow.style.transform = 'translateX(8px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-ambient)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.transform = 'scale(1)';
                    const arrow = e.currentTarget.querySelector('.arrow-icon');
                    if (arrow) arrow.style.transform = 'translateX(0)';
                  }}>

                  <div style={{ height: '260px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={domain.image}
                      alt={domain.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                        display: 'block'
                      }}
                    />
                  </div>

                  <div style={{ padding: '3rem 2.5rem 2.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, position: 'relative' }}>
                    <div style={{
                      position: 'absolute',
                      top: '-35px',
                      left: '2.5rem',
                      backgroundColor: 'var(--bg-primary)',
                      boxShadow: 'var(--shadow-md)',
                      padding: '1.25rem',
                      borderRadius: 'var(--radius-lg)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--border-color)',
                      zIndex: 2
                    }}>
                      {domain.icon}
                    </div>

                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>{domain.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2.5rem', flexGrow: 1, fontSize: '1.05rem' }}>
                      {domain.description}
                    </p>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginTop: 'auto',
                      paddingTop: '1.5rem',
                      borderTop: '1px solid var(--border-color)'
                    }}>
                      <span style={{
                        color: 'var(--accent-primary)',
                        fontWeight: '700',
                        fontSize: '1rem'
                      }}>
                        Explore Case Studies
                      </span>
                      <div className="arrow-icon" style={{
                        transition: 'transform 0.3s ease',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <ArrowRight size={20} color="var(--accent-primary)" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
