'use client'

interface AlertBoxProps {
  type?: 'info' | 'success' | 'warning' | 'error'
  title?: string
  children: React.ReactNode
}

export function AlertBox({ type = 'info', title, children }: AlertBoxProps) {
  const colors = {
    info: { bg: '#dbeafe', border: '#3b82f6', text: '#1e40af', icon: 'ℹ️' },
    success: { bg: '#d1fae5', border: '#10b981', text: '#065f46', icon: '✓' },
    warning: { bg: '#fef3c7', border: '#f59e0b', text: '#92400e', icon: '⚠️' },
    error: { bg: '#fee2e2', border: '#ef4444', text: '#991b1b', icon: '✕' },
  }

  const style = colors[type]

  return (
    <div style={{
      padding: '1rem 1.25rem',
      backgroundColor: style.bg,
      borderLeft: `4px solid ${style.border}`,
      borderRadius: '0.375rem',
      margin: '1.5rem 0',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
      }}>
        <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>
          {style.icon}
        </span>
        <div style={{ flex: 1 }}>
          {title && (
            <h4 style={{
              margin: '0 0 0.5rem 0',
              fontSize: '0.9375rem',
              fontWeight: '700',
              color: style.text,
            }}>
              {title}
            </h4>
          )}
          <div style={{
            fontSize: '0.875rem',
            color: style.text,
            lineHeight: '1.6',
          }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

