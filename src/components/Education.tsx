import { resumeData } from '../data/resume';
import '../styles/components.css';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
        </div>
        <div className="education-grid">
          {resumeData.education.map((edu, index) => (
            <div key={index} className="card education-card">
              <div className="education-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <h3>{edu.degree}</h3>
              <p className="field">{edu.field}</p>
              <p className="institution">{edu.institution}</p>
              <p className="date">{edu.startDate} - {edu.endDate}</p>
              {edu.achievements && edu.achievements.length > 0 && (
                <ul className="achievements">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
