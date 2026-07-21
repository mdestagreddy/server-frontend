import Stats from './Stats'
import { smoothScrollTo } from '../utils/smoothScroller'

function Hero({ about }) {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content fade-in">
          <div className="hero-logo-name">
            <img className="hero-logo-img" src="/DestaDev.svg" alt="DestaDev" />
            <h1 className="hero-name">DestaDev</h1>
          </div>
          <h2 className="hero-title">{about?.title || 'Full Stack Developer'}</h2>
          <p className="hero-description">
            {about?.bio || 'I create elegant solutions to complex problems using modern technologies.'}
          </p>
          <div className="hero-buttons">
            <button onClick={() => smoothScrollTo('projects')} className="btn btn-primary">View Projects</button>
            <button onClick={() => smoothScrollTo('contact')} className="btn btn-outline">Contact Me</button>
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
        .hero-logo-name {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }
        .hero-logo-img {
          height: 100px;
          width: 100px;
          border-radius: 50%;
          display: block;
          object-fit: cover;
        }
        .hero-name {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 800;
          margin: 0;
          color: var(--logo-text);
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
