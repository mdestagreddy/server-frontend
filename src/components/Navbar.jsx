import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { smoothScrollTo } from '../utils/smoothScroller'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollTo = (id) => {
    smoothScrollTo(id)
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo" onClick={() => scrollTo('hero')}>
          <img className="logo-img" src="/DestaDev.svg" alt="DestaDev" />
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
        .logo-img {
          height: 56px;
          width: 56px;
          border-radius: 50%;
          display: block;
          object-fit: cover;
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

