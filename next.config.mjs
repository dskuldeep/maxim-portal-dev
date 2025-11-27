import nextra from 'nextra'
 
// Set up Nextra with its configuration
const withNextra = nextra({
  defaultShowCopyCode: true,
  latex: true,
  search: {
    codeblocks: true
  }
})
 
// Export the final Next.js config with Nextra included
export default withNextra({
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  // Ensure proper static export
  trailingSlash: false,
  // Disable features that might cause issues in static export
  experimental: {
    optimizePackageImports: ['nextra-theme-docs']
  }
})
