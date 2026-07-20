import Stats from './Stats'

function Hero({ about }) {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content fade-in">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">{about?.name || 'Desta'}</h1>
          <h2 className="hero-title">{about?.title || 'Full Stack Developer'}</h2>
          <p className="hero-description">
            {about?.bio || 'I create elegant solutions to complex problems using modern technologies.'}
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
          <Stats />
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: flex-start;
          padding: 80px 0 40px;
          position: relative;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: var(--gradient-1);
          opacity: 0.1;
          border-radius: 50%;
          filter: blur(100px);
        }
        .hero-content {
          position: relative;
          z-index: 1;
        }
        .hero-greeting {
          color: var(--primary);
          font-size: 1.2rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }
        .hero-name {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 800;
          margin-bottom: 0.5rem;
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-title {
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          color: var(--text-secondary);
          font-weight: 400;
          margin-bottom: 1.5rem;
        }
        .hero-description {
          font-size: 1.1rem;
          color: var(--text-muted);
          max-width: 600px;
          margin-bottom: 2rem;
        }
        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
      `}</style>
    </section>
  )
}

export default Hero
