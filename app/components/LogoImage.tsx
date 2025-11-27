'use client'

export function LogoImage() {
  return (
    <img
      src="https://mintcdn.com/maximai/3RnX5HkRjKtE2PMo/logo/light.svg?fit=max&auto=format&n=3RnX5HkRjKtE2PMo&q=85&s=ceff5b420a38dd346252545851ad8c8b"
      alt="Maxim AI Logo"
      style={{
        height: '1.75rem',
        width: 'auto',
        objectFit: 'contain',
        display: 'block',
      }}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        window.location.href = 'https://getmaxim.ai'
      }}
    />
  )
}

