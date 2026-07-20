import { useEffect, useState } from 'react'

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6"/>
      </svg>

      <style>{`
        .scroll-to-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 48px;
          height: 48px;
          background: var(--gradient-1);
          border: none;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
          z-index: 999;
          transition: all 0.3s ease;
          animation: fadeInUp 0.3s ease;
        }
        .scroll-to-top:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.5);
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .scroll-to-top {
            bottom: 1rem;
            right: 1rem;
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </button>
  )
}

export default ScrollToTop
