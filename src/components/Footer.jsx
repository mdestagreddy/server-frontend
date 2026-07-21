import { smoothScrollTo } from '../utils/smoothScroller'

function Footer({ about }) {
  const handleScroll = (id) => {
    smoothScrollTo(id)
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
             <span className="logo-text">{about?.name || 'DestaDev'}</span>
            <p>Building digital experiences that make a difference.</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <button onClick={() => handleScroll('about')}>About</button>
            <button onClick={() => handleScroll('skills')}>Skills</button>
            <button onClick={() => handleScroll('projects')}>Projects</button>
            <button onClick={() => handleScroll('contact')}>Contact</button>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {about?.name || 'DestaDev'}. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--bg-card);
          border-top: 1px solid var(--border);
          padding: 4rem 0 2rem;
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 3rem;
        }
        .footer-brand .logo-text {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--logo-text);
          margin-bottom: 1rem;
          display: block;
        }
        .footer-brand p {
          color: var(--text-muted);
          max-width: 300px;
        }
        .footer-links h4 {
          font-size: 1rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-links button {
          color: var(--text-muted);
          background: none;
          border: none;
          font-size: 1rem;
          cursor: pointer;
          text-align: left;
          padding: 0;
          transition: color 0.3s ease;
        }
        .footer-links button:hover {
          color: var(--primary);
        }
        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--border);
          text-align: center;
        }
        .footer-bottom p {
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 2rem;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
