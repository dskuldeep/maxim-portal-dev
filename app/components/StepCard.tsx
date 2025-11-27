'use client'

interface StepCardProps {
  step: number
  title: string
  description: string
  isLast?: boolean
}

export function StepCard({ step, title, description, isLast = false }: StepCardProps) {
  return (
    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: isLast ? 0 : '2rem' }}>
      <div style={{ flexShrink: 0 }}>
        <div style={{
          width: '2.5rem',
          height: '2.5rem',
          borderRadius: '50%',
          backgroundColor: '#0c3b43',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.125rem',
          fontWeight: '700',
        }}>
          {step}
        </div>
        {!isLast && (
          <div style={{
            width: '2px',
            height: 'calc(100% + 2rem)',
            backgroundColor: '#e5e7eb',
            margin: '0.5rem auto 0',
          }} />
        )}
      </div>
      <div style={{ flex: 1, paddingTop: '0.25rem' }}>
        <h3 style={{
          margin: '0 0 0.5rem 0',
          fontSize: '1.125rem',
          fontWeight: '600',
          color: '#111827',
        }}>
          {title}
        </h3>
        <p style={{
          margin: 0,
          color: '#6b7280',
          lineHeight: '1.6',
        }}>
          {description}
        </p>
      </div>
    </div>
  )
}

