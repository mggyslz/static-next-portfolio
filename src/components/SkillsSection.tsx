import { Code2, Wrench, Database, Zap, GitBranch, Server, Cloud } from 'lucide-react';

export default function SkillsSection() {
  const masteredSkills = [
    { name: 'Python', icon: <Code2 className="skill-icon" /> },
    { name: 'Front-End Development', icon: <Wrench className="skill-icon" /> },
    { name: 'Java', icon: <Code2 className="skill-icon" /> },
    { name: 'SQL', icon: <Database className="skill-icon" /> },
    { name: 'React Basics', icon: <Zap className="skill-icon" /> },
    { name: 'Git', icon: <GitBranch className="skill-icon" /> },
  ];

  const trainingSkills = [
    { name: 'Node.js', icon: <Server className="skill-icon" style={{ color: 'hsla(160, 84%, 39%, 0.7)' }} /> },
    { name: 'Supabase', icon: <Database className="skill-icon" style={{ color: 'hsla(160, 84%, 39%, 0.7)' }} /> },
    { name: 'Firebase', icon: <Cloud className="skill-icon" style={{ color: 'hsla(160, 84%, 39%, 0.7)' }} /> },
    { name: 'Full-Stack Systems', icon: <Wrench className="skill-icon" style={{ color: 'hsla(160, 84%, 39%, 0.7)' }} /> },
    { name: 'C++', icon: <Code2 className="skill-icon" style={{ color: 'hsla(160, 84%, 39%, 0.7)' }} /> },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">TECHNICAL PROFICIENCIES</h2>
          <p className="projects-subtitle">
            Tools forged through practice and sharpened by experience
          </p>
        </div>

        <div className="skills-grid">
          {/* Mastered Skills */}
          <div className="skill-category">
            <h3 className="skill-category-title">
              <div className="skill-status-dot">
                <div className="skill-status-dot-inner"></div>
              </div>
              Mastered Weapons
            </h3>
            <div className="skill-items">
              {masteredSkills.map((skill) => (
                <div key={skill.name} className="skill-item mastered">
                  <div className="skill-icon-wrapper">
                    {skill.icon}
                  </div>
                  <div>
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-status">MASTERED</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training Skills */}
          <div className="skill-category">
            <h3 className="skill-category-title" style={{ color: 'hsla(160, 84%, 39%, 0.7)' }}>
              <div className="skill-status-dot" style={{ background: 'hsla(160, 84%, 39%, 0.1)' }}>
                <div style={{
                  width: '1rem',
                  height: '1rem',
                  border: '2px solid hsla(160, 84%, 39%, 0.5)',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></div>
              </div>
              Currently Training
            </h3>
            <div className="skill-items">
              {trainingSkills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-icon-wrapper" style={{ background: 'hsla(160, 84%, 39%, 0.1)' }}>
                    {skill.icon}
                  </div>
                  <div>
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-status">TRAINING</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.875rem',
            color: 'var(--text-muted)',
            fontFamily: 'monospace'
          }}>
            <div style={{
              width: '0.5rem',
              height: '0.5rem',
              background: 'var(--emerald-base)',
              borderRadius: '50%',
              animation: 'emerald-pulse 2s ease-in-out infinite'
            }}></div>
            Learning In Progress
          </div>
        </div>
      </div>
    </section>
  );
}