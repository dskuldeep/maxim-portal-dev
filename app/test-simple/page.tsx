export default function TestSimple() {
  return (
    <html>
      <head>
        <title>Simple Test</title>
      </head>
      <body style={{ margin: '40px', fontFamily: 'Arial' }}>
        <h1 style={{ color: 'green' }}>✓ If you see this, React works!</h1>
        <p>This is a minimal Next.js page with zero dependencies.</p>
        <div style={{ background: '#f0f0f0', padding: '20px', marginTop: '20px' }}>
          <h2>Test Information:</h2>
          <ul>
            <li>React: Working</li>
            <li>Next.js: Working</li>
            <li>Static Export: Working</li>
          </ul>
        </div>
      </body>
    </html>
  );
}
