function Experience({ experience }) {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Work Experience</h2>
        <p className="section-subtitle">My professional journey</p>
        
        <div className="timeline">
          {experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="company">{exp.company}</p>
                    <p className="location">{exp.location}</p>
                  </div>
                  <span className="duration">
                    {exp.start_date} — {exp.end_date}
                  </span>
                </div>
                <p className="timeline-description">{exp.description}</p>
                {exp.tech_stack && (
                  <div className="timeline-tech">
                    {exp.tech_stack.split(',').map((tech, i) => (
                      <span key={i} className="tech-tag">{tech.trim()}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 20px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--border);
        }
        .timeline-item {
          position: relative;
          padding-left: 60px;
          padding-bottom: 3rem;
        }
        .timeline-item:last-child {
          padding-bottom: 0;
        }
        .timeline-marker {
          position: absolute;
          left: 11px;
          top: 8px;
          width: 20px;
          height: 20px;
          background: var(--gradient-1);
          border-radius: 50%;
          border: 3px solid var(--bg-dark);
          box-shadow: 0 0 0 3px var(--primary);
        }
        .timeline-content {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 1rem;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }
        .timeline-content:hover {
          border-color: var(--primary);
          transform: translateX(4px);
        }
        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .timeline-header h3 {
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
        }
        .company {
          color: var(--primary);
          font-weight: 500;
          margin-bottom: 0.25rem;
        }
        .location {
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        .duration {
          color: var(--text-muted);
          font-size: 0.875rem;
          font-weight: 500;
          white-space: nowrap;
        }
        .timeline-description {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1rem;
        }
        .timeline-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        @media (max-width: 768px) {
          .timeline::before {
            left: 15px;
          }
          .timeline-item {
            padding-left: 45px;
          }
          .timeline-marker {
            left: 6px;
            width: 16px;
            height: 16px;
          }
        }
      `}</style>
    </section>
  )
}

export default Experience
