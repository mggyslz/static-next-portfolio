import { Code2, Clock, Target, Dumbbell } from 'lucide-react';
import { ReactNode } from 'react';

interface StatItem {
  icon: ReactNode;
  value: string;
  label: string;
  description: string;
}

export default function StatsSection() {
  const stats: StatItem[] = [
    {
      icon: (
        <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      value: '6',
      label: 'Languages Mastered',
      description: 'Programming languages in active use',
    },
    {
      icon: (
        <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      value: '8766h',
      label: 'Coding Hours',
      description: 'Hours coded in the last year',
    },
    {
      icon: (
        <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 4v16h8" />
          <path d="M19 8a6 6 0 1 0 0 8" />
        </svg>
      ),
      value: '10/wk',
      label: 'Leetcode Problems',
      description: 'Leetcodes per week',
    },
    {
      icon: (
        <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 12h12M9 6v12M15 6v12"></path>
        </svg>
      ),
      value: '4/wk',
      label: 'Workout Sessions',
      description: 'Gym routines per week',
    },
  ];

  return (
    <section className="stats">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">COMPETITIVE EDGE</h2>
          <p className="projects-subtitle">
            Numbers that define dedication and discipline
          </p>
        </div>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              {stat.icon}
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <div style={{
            display: 'inline-block',
            padding: '1rem',
            background: 'hsla(160, 84%, 39%, 0.1)',
            borderRadius: '0.5rem',
            border: '1px solid hsla(160, 84%, 39%, 0.2)'
          }}>
            <div style={{
              fontSize: '0.875rem',
              fontFamily: 'monospace',
              color: 'var(--emerald-base)',
              marginBottom: '0.25rem'
            }}>
              STATUS: ACTIVE
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Continuously honing skills 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}