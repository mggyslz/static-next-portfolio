'use client';

import { useEffect, useState } from 'react';
import { MapPin, GraduationCap, Target } from 'lucide-react';

const words = [
  "making good shit since 2023",
  "hiding bad shit since 2023",
];

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setTypedText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section id="home" className="hero">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[hsla(160,84%,39%,0.05)] to-transparent animate-[geometric-flow_20s_ease-in-out_infinite]" />

      {/* Identity Card */}
      <div className="identity-card">
        <div className="identity-label">IDENTITY_MATRIX</div>
        
        <div className="identity-item">
          <MapPin className="identity-icon" />
          <span className="text-[var(--text-light)]">Philippines</span>
        </div>
        
        <div className="identity-item">
          <GraduationCap className="identity-icon" />
          <span className="text-[var(--text-light)]">Computer Science</span>
        </div>
        
        <div className="identity-item">
          <Target className="identity-icon" />
          <span className="text-[var(--text-light)]">Front-End Developer</span>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://www.facebook.com/miggzz.imperialcea" className="social-link" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--emerald-base)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/itz.mgzz/" className="social-link" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--emerald-base)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://github.com/mggyslz" className="social-link" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--emerald-base)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="hero-content">
        <h1 className="hero-title">Hello I'm Mggyslz</h1>
        <p className="hero-subtitle">
          Graphic Designer, UX/UI Designer & Front-End Developer
        </p>
        <div className="typed-text">
          $&gt; I am{' '}
          <span className="bg-gradient-to-r from-[var(--emerald-base)] to-[var(--emerald-bright)] bg-clip-text text-transparent">
            {typedText}
          </span>
          <span className="cursor">_</span>
        </div>
      </div>

      {/* Floating Shapes */}
      <div className="floating-shapes shape-1" />
      <div className="floating-shapes shape-2" />
      <div className="floating-shapes shape-3" />
    </section>
  );
}