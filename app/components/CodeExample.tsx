'use client'

import { useState } from 'react'

interface CodeExampleProps {
  code: string
  language?: string
  title?: string
}

export function CodeExample({ code, language = 'bash', title }: CodeExampleProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div style={{
      margin: '1.5rem 0',
      border: '1px solid #e5e7eb',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      backgroundColor: '#1f2937',
    }}>
      {title && (
        <div style={{
          padding: '0.75rem 1rem',
          backgroundColor: '#111827',
          borderBottom: '1px solid #374151',
          fontSize: '0.875rem',
          fontWeight: '600',
          color: '#9ca3af',
        }}>
          {title}
        </div>
      )}
      <div style={{ position: 'relative' }}>
        <pre style={{
          margin: 0,
          padding: '1rem',
          overflowX: 'auto',
          fontSize: '0.875rem',
          lineHeight: '1.5',
          color: '#f3f4f6',
          fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
        }}>
          <code>{code}</code>
        </pre>
        <button
          onClick={copyToClipboard}
          style={{
            position: 'absolute',
            top: '0.75rem',
            right: '0.75rem',
            padding: '0.5rem 0.75rem',
            backgroundColor: copied ? '#10b981' : '#374151',
            color: '#ffffff',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            fontSize: '0.75rem',
            fontWeight: '500',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => {
            if (!copied) {
              e.currentTarget.style.backgroundColor = '#4b5563'
            }
          }}
          onMouseLeave={(e) => {
            if (!copied) {
              e.currentTarget.style.backgroundColor = '#374151'
            }
          }}
        >
          {copied ? '✓ Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  )
}

