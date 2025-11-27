'use client'

interface FeatureCardProps {
  title: string
  description: string
  icon?: string
  color?: string
}

export function FeatureCard({ 
  title, 
  description, 
  icon = '✨',
  color = '#0c3b43'
}: FeatureCardProps) {
  return (
    <div style={{
      padding: '1.5rem',
      border: `2px solid ${color}`,
      borderRadius: '0.75rem',
      backgroundColor: '#ffffff',
      transition: 'all 0.3s',
      height: '100%',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)'
      e.currentTarget.style.boxShadow = `0 8px 16px rgba(0, 0, 0, 0.1)`
      e.currentTarget.style.borderColor = color
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = 'none'
      e.currentTarget.style.borderColor = color
    }}
    >
      <div style={{
        fontSize: '2.5rem',
        marginBottom: '1rem',
      }}>
        {icon}
      </div>
      <h3 style={{
        margin: '0 0 0.75rem 0',
        fontSize: '1.25rem',
        fontWeight: '700',
        color: color,
      }}>
        {title}
      </h3>
      <p style={{
        margin: 0,
        color: '#6b7280',
        lineHeight: '1.6',
        fontSize: '0.9375rem',
      }}>
        {description}
      </p>
    </div>
  )
}

