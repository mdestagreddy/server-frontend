function Dialog({ open, title, message, onClose }) {
  if (!open) return null

  return (
    <>
      <div className="dialog-overlay" onClick={onClose}></div>
      <div className="dialog">
        <div className="dialog-header">
          <h3>{title}</h3>
        </div>
        <div className="dialog-body">
          <p>{message}</p>
        </div>
        <div className="dialog-footer">
          <button className="btn btn-primary" onClick={onClose}>Close</button>
        </div>
      </div>
      <style>{`
        .dialog-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }
        .dialog {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 1rem;
          padding: 2rem;
          min-width: 320px;
          max-width: 400px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }
        .dialog-header h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }
        .dialog-body p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .dialog-footer {
          display: flex;
          justify-content: flex-end;
        }
      `}</style>
    </>
  )
}

export default Dialog
