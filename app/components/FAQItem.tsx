'use client'

import { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string | React.ReactNode
  defaultOpen?: boolean
}

export function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: '0.5rem',
      marginBottom: '1rem',
      overflow: 'hidden',
    }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '1rem 1.5rem',
          textAlign: 'left',
          backgroundColor: isOpen ? '#f9fafb' : '#ffffff',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '1rem',
          fontWeight: '600',
          color: '#111827',
          transition: 'background-color 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#f3f4f6'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = isOpen ? '#f9fafb' : '#ffffff'
        }}
      >
        <span>{question}</span>
        <span style={{
          fontSize: '1.5rem',
          color: '#6b7280',
          transition: 'transform 0.2s',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        }}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div style={{
          padding: '1.5rem',
          backgroundColor: '#ffffff',
          borderTop: '1px solid #e5e7eb',
          color: '#4b5563',
          lineHeight: '1.6',
        }}>
          {typeof answer === 'string' ? <p style={{ margin: 0 }}>{answer}</p> : answer}
        </div>
      )}
    </div>
  )
}

