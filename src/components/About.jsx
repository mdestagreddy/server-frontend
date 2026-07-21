function About({ about }) {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <p className="section-subtitle">Get to know more about me and my journey</p>
        
        <div className="about-content">
          <div className="about-text">
            <p>{about?.bio || 'Passionate developer focused on creating exceptional digital experiences.'}</p>
            
            <div className="about-info">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">{about?.name || 'DestaDev'}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">{about?.email || 'desta@example.com'}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">{about?.location || 'Indonesia'}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Availability:</span>
                <span className="info-value" style={{ color: '#22c55e' }}>Available for work</span>
              </div>
            </div>

            {about?.resume_url && (
              <a href={about.resume_url} className="btn btn-primary" style={{ marginTop: '2rem' }}>
                Download Resume
              </a>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .about-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        .about-text {
          max-width: 100%;
          overflow-wrap: break-word;
          word-wrap: break-word;
        }
        .about-text p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.8;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        .about-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .info-item {
          padding: 1.5rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          transition: all 0.3s ease;
          overflow-wrap: break-word;
        }
        .info-item:hover {
          border-color: var(--primary);
          transform: translateY(-2px);
        }
        .info-label {
          display: block;
          font-size: 0.875rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          word-wrap: break-word;
        }
        .info-value {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
      `}</style>
    </section>
  )
}

export default About
