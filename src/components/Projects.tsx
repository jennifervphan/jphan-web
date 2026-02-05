import { resumeData } from '../data/resume';
import '../styles/components.css';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        <div className="projects-grid">
          {resumeData.projects.map((project, index) => (
            <div key={index} className="card project-card">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
