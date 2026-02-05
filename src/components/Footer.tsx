import { resumeData } from '../data/resume';
import '../styles/components.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="gradient-text">{resumeData.name}</span>
          </div>
          <div className="footer-links">
            {resumeData.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} {resumeData.name}. All rights reserved.</p>
          <p className="footer-credit">Built with React & TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
