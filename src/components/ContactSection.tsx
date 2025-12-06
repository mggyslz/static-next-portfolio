import { Github, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2 className="section-title" style={{ animation: 'fade-in-up 0.8s ease-out' }}>
          The Handshake
        </h2>
        <p className="contact-tagline">
          Reach me if you want someone who builds with{' '}
          <span style={{
            background: 'linear-gradient(135deg, var(--emerald-base), var(--emerald-bright))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: 600
          }}>
            precision and discipline
          </span>
        </p>

        <div className="contact-links">
          <a href="https://github.com/mggyslz" className="contact-card" target="_blank" rel="noopener noreferrer">
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <div className="contact-label">GitHub</div>
          </a>

          <a
            href="mailto:miggymiggyimperialcea@gmail.com?subject=Hello%20Miggy&body=I%20wanted%20to%20ask%20about..."
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <div className="contact-label">Email</div>
          </a>
        </div>

        <div className="contact-footer">
          <div className="contact-divider"></div>
        </div>

        <div className="contact-status">
          <span className="prompt">&gt;</span> Let's build something extraordinary together
        </div>
      </div>
    </section>
  );
}