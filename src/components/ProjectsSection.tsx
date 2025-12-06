'use client';

import { useState } from 'react';
import { Code2, Lock, Folder, Clock, Gamepad2, Grid3x3 } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  video: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
  icon: React.ReactNode;
  challenges: string;
  lessons: string;
}

const projects: Project[] = [
  {
    title: 'Smart Treasurer',
    description: 'SmartTreasure is an innovative platform that simplifies wealth management by allowing users to securely manage, track, and grow their digital and financial assets through smart analytics and intuitive design.',
    video: '/asset/smart_treasurer.mp4',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/mggyslz/SmartTreasurer',
    demoUrl: '/asset/smart_treasurer.mp4',
    icon: <Lock style={{ width: '1rem', height: '1rem', color: 'var(--emerald-base)' }} />,
    challenges: 'The main challenge I faced in SmartTreasure was understanding how HTML, CSS, and JavaScript work together. This project taught me how to design with HTML and CSS, and strengthened my skills in JavaScript — especially in scripting, where I faced the most challenges.',
    lessons: 'Through SmartTreasure, I learned how important it is to understand the connection between design and functionality. I gained confidence in using HTML and CSS for layout and styling, and developed stronger problem-solving skills while working with JavaScript to make the project interactive and dynamic.',
  },
  {
    title: 'File Organizer',
    description: 'A lightweight and efficient Python-based GUI file organizer that enables users to easily browse, sort, tag, and manage files with drag-and-drop functionality, batch operations, and smart search filters for better organization.',
    video: '/asset/file_organizer.mp4',
    techStack: ['Python', 'CustomTkinter', 'GUI'],
    githubUrl: 'https://github.com/mggyslz/file-organizer',
    demoUrl: '/asset/file_organizer.mp4',
    icon: <Folder style={{ width: '1rem', height: '1rem', color: 'var(--emerald-base)' }} />,
    challenges: 'The main challenge I faced in the File Organizer project was learning how to use Python efficiently, especially in building graphical interfaces with Tkinter and CustomTkinter. It also challenged me to understand file handling and how to manage and operate through different file systems effectively',
    lessons: 'This project taught me the importance of writing organized and efficient code, as well as designing user-friendly interfaces. I gained a deeper understanding of Python\'s versatility — from logic implementation to GUI development — and learned how to turn simple automation ideas into practical, interactive tools.',
  },
  {
    title: 'Pomodoro App',
    description: 'A Pomodoro timer app that enhances focus and productivity by organizing work into structured, timed sessions with short breaks. Its intuitive interface and customizable settings make it easy to track and manage time effectively.',
    video: '/asset/pomodoro.mp4',
    techStack: ['React', 'TypeScript', 'SQL', 'Tailwind'],
    githubUrl: 'https://github.com/mggyslz/404',
    demoUrl: '/asset/pomodoro.mp4',
    icon: <Clock style={{ width: '1rem', height: '1rem', color: 'var(--emerald-base)' }} />,
    challenges: 'Almost everything in the Pomodoro App project was a challenge, since I started it with limited knowledge of the languages and frameworks I used — aside from HTML, CSS, JavaScript, and SQL. With the help of AI, I was able to understand new concepts and technologies as I built the app step by step.',
    lessons: 'This project taught me the value of persistence and learning by doing. I discovered how powerful it is to combine curiosity with the right tools — especially AI — to overcome technical limitations and expand my skills beyond what I thought possible.',
  },
  {
    title: 'Accesium - QR Access Logger',
    description: 'Accesium is a secure access and attendance system that uses QR codes and PINs to record entry and exit. It lets admins manage users, monitor logs, and track who\'s inside — all stored safely in an offline database.',
    video: '/asset/qrlogger.mp4',
    techStack: ['Python', 'HTML', 'CSS', 'JavaScript', 'SQLite'],
    githubUrl: 'https://github.com/mggyslz/404',
    demoUrl: '/asset/qrlogger.mp4',
    icon: <Lock style={{ width: '1rem', height: '1rem', color: 'var(--emerald-base)' }} />,
    challenges: 'Developing smooth QR scanning and syncing between the admin and scanner modules was tricky, especially handling database updates and PIN verification offline.',
    lessons: 'I gained experience in integrating databases with real-time QR systems, improving security with PIN hashing, and designing user-friendly yet reliable access control software.',
  },
  {
    title: 'CLI DnD Game',
    description: 'CLI DnD Game is a text-based role-playing game that allows players to create characters, explore a fantasy world, and engage in turn-based combat. The game features a rich narrative and dynamic storytelling elements.',
    video: '/asset/game.mp4',
    techStack: ['Python', 'CLI'],
    githubUrl: 'https://github.com/mggyslz/CLI-battle-prototype',
    demoUrl: '/asset/game.mp4',
    icon: <Gamepad2 style={{ width: '1rem', height: '1rem', color: 'var(--emerald-base)' }} />,
    challenges: 'Nothing majorly challenging, but balancing story development with coding logic required careful planning to ensure an engaging user experience.',
    lessons: 'I learned how to create immersive narratives within a coding framework, enhancing my ability to blend storytelling with programming logic effectively.',
  },
  {
    title: 'Platformer Trip Game',
    description: 'Platformer Trip Game is a 2D platformer game that takes players on an exciting journey through various levels filled with challenges and obstacles. The game features vibrant pixel art and engaging gameplay mechanics.',
    video: '/asset/pixel.mp4',
    techStack: ['Godot', 'GDScript'],
    githubUrl: 'https://github.com/mggyslz/404',
    demoUrl: '/asset/pixel.mp4',
    icon: <Grid3x3 style={{ width: '1rem', height: '1rem', color: 'var(--emerald-base)' }} />,
    challenges: 'A very intuitive tutorial on YouTube made the development process smooth, so I didn\'t face significant challenges while creating this game.',
    lessons: 'I learned the fundamentals of game development, including character movement, collision detection, and level design, which enhanced my programming skills in GDScript.',
  },
];

export default function ProjectsSection() {
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const toggleProject = (index: number) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedProjects(newExpanded);
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        {/* Identity Matrix Section */}
        <div className="projects-header">
          <h2 className="section-title" style={{
            background: 'linear-gradient(to right, var(--emerald-base), var(--emerald-bright))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            MY CONSTRUCT
          </h2>
          <p className="projects-subtitle">
            The core essence of who I am,{' '}
            <span style={{ color: 'var(--emerald-base)', fontFamily: 'monospace' }}>I guess…</span>
          </p>
        </div>

        <div className="projects-grid">
          {/* Left Side - Introduction */}
          <div className="intro-cards">
            <div className="intro-card">
              <h3>Who I Am</h3>
              <p>
                I'm a Computer Science student driven by a hunger for mastery — at least when I'm in the mood. On other days, probably
                binge-watching anime in the name of "creative inspiration" or just procrastinating. Still, I try to end each day having
                learned something new.
              </p>
            </div>

            <div className="intro-card">
              <h3>What I'm Mastering</h3>
              <p>
                I'm diving into full-stack development, learning new frameworks and cloud tools. It's not always smooth, but every bug and
                late-night vibe coding session adds to the craft.
              </p>
            </div>

            <div className="intro-card">
              <h3>My Journey</h3>
              <div style={{
                background: 'var(--dark-base)',
                padding: '1.25rem',
                borderRadius: '0.5rem',
                border: '1px solid hsla(160, 84%, 39%, 0.2)',
                marginTop: '0.5rem'
              }}>
                <p style={{ marginBottom: '1rem' }}>
                  Who I am is a work in progress, but here's a snapshot of my journey so far:
                </p>
                <ul className="getting-started-list">
                  <li>
                    <svg style={{ width: '1.25rem', height: '1.25rem', color: 'var(--emerald-bright)', flexShrink: 0 }}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 20v-6"></path>
                      <path d="M6 20V10"></path>
                      <path d="M18 20v-4"></path>
                    </svg>
                    <span>Exploring full-stack development, cloud systems, and modern frameworks</span>
                  </li>
                  <li>
                    <svg style={{ width: '1.25rem', height: '1.25rem', color: 'var(--emerald-bright)', flexShrink: 0 }}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 12l2 2 4-4"></path>
                    </svg>
                    <span>Building with passion and learning through every challenge</span>
                  </li>
                  <li>
                    <svg style={{ width: '1.25rem', height: '1.25rem', color: 'var(--emerald-bright)', flexShrink: 0 }}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                    <span>Growing daily, fueled by curiosity, discipline, and the occasional coffee break</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Identity Matrix Card */}
          <div className="identity-matrix">
            <div className="matrix-card">
              <div className="matrix-glow"></div>
              <div className="matrix-content">
                <div className="matrix-header">
                  <div className="matrix-id">CHARACTER_SHEET_LVL20</div>
                  <div className="matrix-avatar">
                    <div className="matrix-avatar-glow"></div>
                    <img src="/asset/migz2.jpg" alt="Gil Cea" style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      borderRadius: '50%'
                    }} />
                  </div>
                </div>

                <div>
                  <div className="matrix-name">Gil IV Miguel Salvador I. Cea</div>
                  <div className="matrix-student-id" style={{ color: 'var(--emerald-base)' }}>
                    Full-Stack Artificer • Level 20
                  </div>
                </div>

                <div className="matrix-info">
                  {/* Skills Section */}
                  <div style={{
                    marginBottom: '1rem',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid hsla(160, 84%, 39%, 0.2)'
                  }}>
                    <div style={{
                      fontSize: '0.75rem',
                      color: 'var(--emerald-bright)',
                      fontFamily: 'monospace',
                      marginBottom: '0.5rem',
                      letterSpacing: '0.1em'
                    }}>
                      CORE ABILITIES
                    </div>

                      <div style={{ display: 'grid', gap: '0.5rem' }}>
                      {[
                        { name: 'Python', value: 85 },
                        { name: 'Front-End', value: 90 },
                        { name: 'Java', value: 70 },
                        { name: 'SQL', value: 80 },
                      ].map((skill) => (
                        <div key={skill.name} style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}>
                          <span style={{
                            color: 'var(--text-light)',
                            fontSize: '0.875rem',
                            fontWeight: 500
                          }}>{skill.name}</span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <div style={{
                              width: '120px',
                              height: '4px',
                              background: 'hsla(160, 84%, 39%, 0.2)',
                              borderRadius: '2px',
                              overflow: 'hidden'
                            }}>
                              <div style={{
                                width: `${skill.value}%`,
                                height: '100%',
                                background: 'linear-gradient(90deg, var(--emerald-base), var(--emerald-bright))'
                              }}></div>
                            </div>
                            <span style={{
                              color: 'var(--emerald-bright)',
                              fontSize: '0.75rem',
                              fontFamily: 'monospace',
                              minWidth: '25px'
                            }}>{skill.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="matrix-info-item">
                    <svg className="matrix-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                    <div>
                      <div className="matrix-info-label">STATUS</div>
                      <div className="matrix-info-value" style={{ color: 'var(--emerald-bright)' }}>
                        DREAMIN 'BOUT THAT 5090
                      </div>
                    </div>
                  </div>

                  <div className="matrix-info-item">
                    <svg className="matrix-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                    <div>
                      <div className="matrix-info-label">STRENGTH</div>
                      <div className="matrix-info-value">Problem Solving</div>
                    </div>
                  </div>

                  <div className="matrix-info-item">
                    <svg className="matrix-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 12h8"></path>
                      <path d="M12 8v8"></path>
                    </svg>
                    <div>
                      <div className="matrix-info-label">ACTIVE BUFF</div>
                      <div className="matrix-info-value" style={{ color: 'var(--emerald-bright)' }}>
                        Coffee +20%
                      </div>
                    </div>
                  </div>
                </div>

                <div className="matrix-footer">
                  <div className="matrix-quote">
                    "This is no game. Adventure hinges on more than just a throw of the dice."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Matrix */}
        <div className="project-matrix">
          <div className="matrix-grid-bg">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="matrix-grid-cell"></div>
            ))}
          </div>

          <div className="project-matrix-header">
            <div className="project-init">SYSTEM.PROJECTS.INITIALIZE()</div>
            <h2 className="project-matrix-title">PROJECT MATRIX</h2>
            <div className="project-divider"></div>
            <p className="project-matrix-subtitle">
              Personal projects crafted during my free time — engineered with{' '}
              <span style={{ color: 'var(--emerald-base)', fontFamily: 'monospace' }}>passion</span>
            </p>
          </div>

          <div className="project-cards-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '8px'
                    }}
                  />
                  <div className="project-type-badge">
                    {project.icon}
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tech-stack">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <div className="project-links">
                      <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                        <svg style={{ width: '0.75rem', height: '0.75rem' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        CODE
                      </a>
                      <a href={project.demoUrl} className="project-link demo" target="_blank" rel="noopener noreferrer">
                        <svg style={{ width: '0.75rem', height: '0.75rem' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        LIVE DEMO
                      </a>
                    </div>
                    <button className="project-toggle" onClick={() => toggleProject(index)}>
                      {expandedProjects.has(index) ? 'HIDE DETAILS' : 'VIEW DETAILS'}
                    </button>
                  </div>
                </div>

                <div className={`project-details ${expandedProjects.has(index) ? 'expanded' : ''}`}>
                  <div className="project-detail-section">
                    <div className="project-detail-title">
                      <svg style={{ width: '1rem', height: '1rem' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                      Technical Stack
                    </div>
                    <div className="tech-stack">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-detail-section">
                    <div className="project-detail-title">
                      <svg style={{ width: '1rem', height: '1rem' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                      Challenges
                    </div>
                    <p className="project-detail-text">{project.challenges}</p>
                  </div>

                  <div className="project-detail-section">
                    <div className="project-detail-title">
                      <svg style={{ width: '1rem', height: '1rem' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                      </svg>
                      Lessons Learned
                    </div>
                    <p className="project-detail-text">{project.lessons}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Matrix Status */}
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'hsla(160, 84%, 50%, 0.1)',
              border: '1px solid hsla(160, 84%, 50%, 0.2)',
              borderRadius: '0.5rem'
            }}>
              <div style={{
                width: '0.5rem',
                height: '0.5rem',
                background: 'var(--emerald-base)',
                borderRadius: '50%'
              }}></div>
              <span style={{
                color: 'var(--emerald-base)',
                fontFamily: 'monospace',
                fontSize: '0.875rem'
              }}>MATRIX.STATUS: OPERATIONAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}