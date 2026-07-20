function Skills({ skills }) {
  const categories = {}
  skills.forEach(skill => {
    if (!categories[skill.category]) categories[skill.category] = []
    categories[skill.category].push(skill)
  })

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
        
        <div className="skills-grid">
          {Object.entries(categories).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skill-items">
                {items.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .skill-category {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 1rem;
          padding: 2rem;
          transition: all 0.3s ease;
        }
        .skill-category:hover {
          border-color: var(--primary);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        .category-title {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          color: var(--primary);
        }
        .skill-items {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .skill-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .skill-name {
          font-weight: 500;
          color: var(--text-primary);
        }
        .skill-level {
          font-size: 0.875rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .skill-bar {
          width: 100%;
          height: 6px;
          background: var(--bg-dark);
          border-radius: 3px;
          overflow: hidden;
        }
        .skill-progress {
          height: 100%;
          background: var(--gradient-1);
          border-radius: 3px;
          transition: width 1s ease-out;
        }
      `}</style>
    </section>
  )
}

export default Skills
