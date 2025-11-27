# Netlify Deployment Guide

## Environment Variables

Set the following environment variable in your Netlify dashboard:

**Settings → Environment Variables → Add variable**

- **Key:** `NEXT_PUBLIC_BASE_URL`
- **Value:** `https://maxim-portal.netlify.app`

Or if you have a custom domain:
- **Value:** `https://your-custom-domain.com`

## Build Settings

The `netlify.toml` file is already configured with:
- Build command: `npm run build`
- Publish directory: `out`
- Node version: 20
- Redirects for SPA routing

## Troubleshooting White Page Issues

If you see a white page after deployment:

1. **Check Browser Console** - Look for JavaScript errors
2. **Verify Environment Variable** - Ensure `NEXT_PUBLIC_BASE_URL` is set correctly
3. **Check Build Logs** - Look for any build errors in Netlify
4. **Clear Cache** - Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
5. **Check Network Tab** - Verify all assets are loading correctly

## Common Issues

### WebSocket Connection Error
This is normal for static sites - the WebSocket is only used in development mode. It can be safely ignored.

### Feature-Policy Header Warning
This is a deprecation warning. The Permissions-Policy header is the new standard. This doesn't affect functionality.

### Content Script Loaded
This is typically from browser extensions and can be ignored.

## Build Process

1. Netlify will run `npm run build`
2. This generates static files in the `out` directory
3. Netlify serves the `out` directory
4. All routes are redirected to `/index.html` for client-side routing

## Verification

After deployment, verify:
- ✅ Site loads at `https://maxim-portal.netlify.app`
- ✅ All navigation links work
- ✅ Cards and components render correctly
- ✅ Footer displays properly
- ✅ Mobile view is responsive

