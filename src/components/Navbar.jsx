import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo" onClick={() => scrollTo('hero')}>
          <span className="logo-text">Desta</span>
        </div>
        
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><button onClick={() => scrollTo('about')}>About</button></li>
          <li><button onClick={() => scrollTo('skills')}>Skills</button></li>
          <li><button onClick={() => scrollTo('projects')}>Projects</button></li>
          <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
        </ul>

        <div className="nav-actions">
          <ThemeToggle />
          <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: var(--bg-navbar);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
          z-index: 1000;
          padding: 1rem 0;
        }
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          cursor: pointer;
        }
        .logo-text {
          font-size: 1.5rem;
          font-weight: 800;
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
        }
        .nav-links button {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.3s;
        }
        .nav-links button:hover {
          color: var(--primary);
        }
        .nav-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
        }
        .nav-toggle span {
          width: 25px;
          height: 2px;
          background: var(--text-primary);
          transition: all 0.3s;
        }
        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: var(--bg-card);
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            transform: translateY(-150%);
            transition: transform 0.3s;
            border-bottom: 1px solid var(--border);
          }
          .nav-links.active {
            transform: translateY(0);
          }
          .nav-toggle {
            display: flex;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar

