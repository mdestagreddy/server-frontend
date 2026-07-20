import { useEffect, useState } from 'react'

function StatCard({ value, label, suffix = '' }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 2000
    const increment = value / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [value])

  return (
    <div className="stat-card">
      <span className="stat-number">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

function Stats({ about }) {
  return (
    <div className="stats">
      <StatCard value={5} label="Years Experience" suffix="+" />
      <StatCard value={15} label="Projects Completed" suffix="+" />
      <StatCard value={20} label="Technologies" suffix="+" />
      <StatCard value={10} label="Happy Clients" suffix="+" />

      <style>{`
        .stats {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }
        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.25rem 2rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 1rem;
          min-width: 140px;
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          border-color: var(--primary);
          transform: translateY(-4px);
        }
        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .stat-label {
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 500;
          margin-top: 0.25rem;
        }
        @media (max-width: 768px) {
          .stats {
            justify-content: center;
          }
          .stat-card {
            min-width: 120px;
            padding: 1rem 1.5rem;
          }
          .stat-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Stats
