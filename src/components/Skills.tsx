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
              <div className="skill-bars">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
