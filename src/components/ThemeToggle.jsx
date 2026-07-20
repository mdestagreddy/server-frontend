import { useTheme } from '../contexts/ThemeContext'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const cycleTheme = () => {
    const themes = ['system', 'light', 'dark']
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return '☀️'
      case 'dark':
        return '🌙'
      default:
        return '💻'
    }
  }

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light'
      case 'dark':
        return 'Dark'
      default:
        return 'System'
    }
  }

  return (
    <button className="theme-toggle" onClick={cycleTheme} title={`Theme: ${getLabel()}`}>
      <span className="theme-icon">{getIcon()}</span>
      <span className="theme-label">{getLabel()}</span>

      <style>{`
        .theme-toggle {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.75rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .theme-toggle:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-1px);
        }
        .theme-icon {
          font-size: 1rem;
        }
        .theme-label {
          display: none;
        }
        @media (min-width: 640px) {
          .theme-label {
            display: inline;
          }
        }
      `}</style>
    </button>
  )
}

export default ThemeToggle
