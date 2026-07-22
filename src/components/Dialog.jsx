function Dialog({ open, title, message, onClose }) {
  return (
    <div className={`dialog-wrapper ${open ? 'dialog-visible' : ''}`}>
      <div className="dialog-overlay" onClick={onClose}></div>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
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
        .dialog-wrapper {
          position: fixed;
          inset: 0;
          z-index: 10000;
          pointer-events: none;
        }
        .dialog-wrapper.dialog-visible {
          pointer-events: auto;
        }
        .dialog-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .dialog-wrapper.dialog-visible .dialog-overlay {
          opacity: 1;
        }
        .dialog {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 1rem;
          padding: 2rem;
          min-width: 320px;
          max-width: 400px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.92);
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dialog-wrapper.dialog-visible .dialog {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
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
    </div>
  )
}

export default Dialog
