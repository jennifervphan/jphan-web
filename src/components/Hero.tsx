import type { ReactNode } from 'react';
import { resumeData } from '../data/resume';
import '../styles/components.css';

export default function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero-bg"></div>
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-greeting animate-fade-in">Hi, I'm</p>
          <h1 className="hero-name animate-fade-in animate-delay-1">
            {resumeData.name}
          </h1>
          <h2 className="hero-title animate-fade-in animate-delay-2">
            <span className="gradient-text">{resumeData.title}</span>
          </h2>
          <p className="hero-tagline animate-fade-in animate-delay-3">
            {resumeData.tagline}
          </p>
          <p className="hero-about animate-fade-in animate-delay-4">
            {resumeData.about}
          </p>
          <div className="hero-buttons animate-fade-in animate-delay-4">
            <a href="#contact" className="btn btn-primary">
              Get in Touch
            </a>
            <a href="#experience" className="btn btn-secondary">
              View Experience
            </a>
          </div>
          <div className="hero-socials animate-fade-in animate-delay-4">
            {resumeData.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link" 
                aria-label={social.name}
              >
                <SocialIcon name={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, ReactNode> = {
    github: (
      <img
        src="https://api.iconify.design/mdi:github.svg?color=%23ffffff"
        alt="GitHub"
        width="24"
        height="24"
      />
    ),
    linkedin: (
      <img
        src="https://api.iconify.design/mdi:linkedin.svg?color=%23ffffff"
        alt="LinkedIn"
        width="24"
        height="24"
      />
    ),
    itchio: (
      <img
        src="https://api.iconify.design/simple-icons:itchdotio.svg?color=%23ffffff"
        alt="itch.io"
        width="24"
        height="24"
      />
    ),
  };

  return icons[name] || null;
}
