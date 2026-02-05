import { resumeData } from '../data/resume';
import '../styles/components.css';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        <div className="skills-grid">
          {resumeData.skills.map((category, index) => (
            <div key={index} className="card skills-card">
              <h3>{category.name}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
