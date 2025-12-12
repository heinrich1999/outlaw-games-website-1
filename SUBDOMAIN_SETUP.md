# Subdomain Setup Documentation

This document describes the setup for serving Privacy Policy and Support pages on subdomains.

## Overview

- **Privacy Policy**: Served at `https://privacy.outlaw.games`
- **Support**: Served at `https://support.outlaw.games`
- **Main Site**: `https://www.outlaw.games` or `https://outlaw.games` (unchanged behavior)

## Architecture

### Domain-Based Routing

The middleware (`middleware.ts`) intercepts requests and routes based on the `Host` header:

- `privacy.outlaw.games` → rewrites to `/privacy-subdomain`
- `support.outlaw.games` → rewrites to `/support-subdomain`
- All other hosts → normal Next.js routing (main site)

### Pages

- `app/privacy-subdomain/page.tsx` - Privacy Policy content
- `app/support-subdomain/page.tsx` - Support content

Both pages have their own layouts that exclude the chatbot and use a clean white background.

## Local Development Testing

### Method 1: Using Header Override (Recommended)

You can test domain behavior without modifying your hosts file by using the `x-test-host` header:

```bash
# Test privacy subdomain
curl -H "x-test-host: privacy.outlaw.games" http://localhost:3000/

# Test support subdomain
curl -H "x-test-host: support.outlaw.games" http://localhost:3000/

# Or use a browser extension like "ModHeader" to add custom headers
```

### Method 2: Using Hosts File

1. Edit your hosts file:
   - **Windows**: `C:\Windows\System32\drivers\etc\hosts`
   - **Mac/Linux**: `/etc/hosts`

2. Add these lines:
   ```
   127.0.0.1 privacy.outlaw.games
   127.0.0.1 support.outlaw.games
   ```

3. Access:
   - `http://privacy.outlaw.games:3000`
   - `http://support.outlaw.games:3000`

4. Remove the lines when done testing.

### Method 3: Direct Route Access (Fallback)

For quick content preview, you can access routes directly:
- `http://localhost:3000/privacy-subdomain`
- `http://localhost:3000/support-subdomain`

Note: This bypasses domain-based routing but shows the content.

## Adding Content

### Privacy Policy

1. Open `app/privacy-subdomain/page.tsx`
2. Replace the placeholder content with the exact text from Google Docs
3. Follow the formatting rules:
   - Convert top title into an `<h1>`
   - Convert main numbered sections into `<h2>` headings
   - Keep lists as bullet points (`<ul>`, `<li>`)
   - Preserve all text exactly as written
   - Convert URLs to clickable `<a>` links

### Support

1. Open `app/support-subdomain/page.tsx`
2. Replace the placeholder content with the exact text from Google Docs
3. Follow the same formatting rules as Privacy Policy

## Production Deployment Checklist

### Pre-Deployment

- [ ] Content from Google Docs added to both pages (exact text preserved)
- [ ] All URLs in content are clickable links
- [ ] SEO metadata is correct (title, description, canonical URLs)
- [ ] Footer links are correct:
  - Privacy page links to `https://support.outlaw.games` and `https://www.outlaw.games`
  - Support page links to `https://privacy.outlaw.games` and `https://www.outlaw.games`

### DNS Configuration

- [ ] `privacy.outlaw.games` CNAME or A record points to your hosting
- [ ] `support.outlaw.games` CNAME or A record points to your hosting
- [ ] DNS propagation verified (use `dig` or online DNS checker)

### Post-Deployment Verification

1. **Privacy Policy**
   - [ ] Visit `https://privacy.outlaw.games` - shows Privacy Policy page
   - [ ] Page title is "Privacy Policy | OUTLAW"
   - [ ] Meta description is correct
   - [ ] Header logo links to `https://www.outlaw.games`
   - [ ] Footer links to Support and Home work correctly
   - [ ] Content is readable and properly formatted
   - [ ] Mobile responsive

2. **Support**
   - [ ] Visit `https://support.outlaw.games` - shows Support page
   - [ ] Page title is "Support | OUTLAW"
   - [ ] Meta description is correct
   - [ ] Header logo links to `https://www.outlaw.games`
   - [ ] Footer links to Privacy Policy and Home work correctly
   - [ ] Content is readable and properly formatted
   - [ ] Mobile responsive

3. **Main Site (Unchanged)**
   - [ ] Visit `https://www.outlaw.games` - shows normal marketing site
   - [ ] Visit `https://outlaw.games` - shows normal marketing site
   - [ ] All existing functionality works as before

### Testing Commands

```bash
# Check Privacy Policy
curl -I https://privacy.outlaw.games

# Check Support
curl -I https://support.outlaw.games

# Verify canonical URLs in HTML
curl https://privacy.outlaw.games | grep -i canonical
curl https://support.outlaw.games | grep -i canonical
```

## Troubleshooting

### Subdomain not routing correctly

1. Check DNS configuration - subdomain must point to your server
2. Verify middleware is running (check server logs)
3. Check if hosting provider supports subdomain routing
4. Verify `next.config.mjs` doesn't have conflicting rewrites

### Content not displaying

1. Check browser console for errors
2. Verify pages are built correctly (`npm run build`)
3. Check that content files are committed to repository

### Local testing not working

1. Clear browser cache
2. Try incognito/private mode
3. Use the header override method instead of hosts file
4. Check that Next.js dev server is running on the expected port

## Notes

- The subdomain pages use separate layouts to exclude the chatbot
- SEO metadata is configured per page
- Canonical URLs point to the subdomain URLs
- All links use HTTPS for production

