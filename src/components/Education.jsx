function Education({ education }) {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        <p className="section-subtitle">Academic background and certifications</p>
        
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">
                {edu.degree.includes('Bachelor') ? '🎓' : '📜'}
              </div>
              <div className="education-content">
                <h3>{edu.degree}</h3>
                <p className="institution">{edu.institution}</p>
                <p className="field">{edu.field}</p>
                <p className="year">{edu.start_year} — {edu.end_year || 'Present'}</p>
                {edu.grade && (
                  <p className="grade">Grade: {edu.grade}</p>
                )}
                <p className="education-description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .education-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }
        .education-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 1rem;
          padding: 2rem;
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          transition: all 0.3s ease;
        }
        .education-card:hover {
          border-color: var(--primary);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        .education-icon {
          font-size: 2.5rem;
          line-height: 1;
        }
        .education-content h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .institution {
          color: var(--primary);
          font-weight: 500;
          margin-bottom: 0.25rem;
        }
        .field {
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
        }
        .year {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }
        .grade {
          color: var(--accent);
          font-weight: 500;
          margin-bottom: 0.75rem;
        }
        .education-description {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }
      `}</style>
    </section>
  )
}

export default Education
