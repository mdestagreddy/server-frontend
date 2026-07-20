function Projects({ projects }) {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image_url || 'https://via.placeholder.com/600x400'} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.project_url || '#'} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Live Demo
                  </a>
                  {project.github_url && (
                    <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech_stack?.split(',').map((tech, i) => (
                    <span key={i} className="tech-tag">{tech.trim()}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }
        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 1rem;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .project-card:hover {
          border-color: var(--primary);
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        .project-image {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .project-card:hover .project-image img {
          transform: scale(1.1);
        }
        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        .project-info {
          padding: 1.5rem;
        }
        .project-info h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }
        .project-info p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .tech-tag {
          padding: 0.25rem 0.75rem;
          background: rgba(37, 99, 235, 0.15);
          color: var(--primary);
          border: 1px solid rgba(37, 99, 235, 0.3);
          border-radius: 2rem;
          font-size: 0.8rem;
          font-weight: 500;
        }
      `}</style>
    </section>
  )
}

export default Projects
