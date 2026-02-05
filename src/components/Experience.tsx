import { resumeData } from '../data/resume';
import '../styles/components.css';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Experience</h2>
        </div>
        <div className="timeline">
          {resumeData.experience.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content card">
                <div className="experience-header">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="company">{job.company}</p>
                  </div>
                  <div className="experience-meta">
                    <span className="date">{job.startDate} - {job.endDate}</span>
                    <span className="location">{job.location}</span>
                  </div>
                </div>
                <ul className="experience-list">
                  {job.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
