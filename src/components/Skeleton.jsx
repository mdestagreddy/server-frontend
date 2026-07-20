function Skeleton({ className }) {
  return (
    <div className={`skeleton ${className || ''}`}>
      <style>{`
        .skeleton {
          background: linear-gradient(90deg, var(--bg-card) 25%, var(--border) 50%, var(--bg-card) 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 0.5rem;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  )
}

export default Skeleton
