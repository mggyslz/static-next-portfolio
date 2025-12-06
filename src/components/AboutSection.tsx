'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  '/asset/migz.jpeg',
  '/asset/migz2.jpg',
  '/asset/migz.jpg',
];

export default function AboutSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">ABOUT ME</h2>
        <div className="about-grid">
          <div className="avatar-container">
            <div className="avatar-wrapper">
              {images.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt="Gil IV Miguel Salvador I. Cea"
                  width={320}
                  height={320}
                  className={`avatar-slide ${index === currentImage ? 'active' : ''}`}
                  style={{
                    width: '320px',
                    height: '320px',
                    objectFit: 'cover',
                    borderRadius: '12px'
                  }}
                  priority={index === 0}
                />
              ))}
              <div className="avatar-glow"></div>
            </div>
          </div>
          <div className="about-content">
            <p className="about-text">
              I'm all about growth and mastery, learning new things, breaking
              stuff, fixing it again. Sometimes I get lazy, sometimes I just sip
              coffee and pretend It's another Friday night.
            </p>
            <p className="about-text">
              My journey in computer science is driven by a passion for growth.
              I aim for quality in every project though some days, it's just me,
              the code, and crappy brain. Still, every line I write brings me
              closer to mastering the craft.
            </p>
            <p className="about-text">
              Whether I'm coding, problem-solving, or doing what I like, I bring
              the same drive and focus. This isn't just what I do, it's who I'm
              becoming.
            </p>

            <div className="about-footer">
              <div className="about-divider"></div>
              <span className="about-tagline">
                Honestly I don't really know what I'm doing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}