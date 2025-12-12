import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  const url = request.nextUrl.clone()

  // Allow header-based override for local testing (e.g., curl -H "x-test-host: privacy.outlaw.games")
  // This allows testing domain behavior without modifying hosts file
  const testHost = request.headers.get('x-test-host')
  const effectiveHost = testHost || host

  // Extract subdomain
  // Handle formats like: privacy.outlaw.games, www.outlaw.games, localhost:3000, etc.
  const hostname = effectiveHost.split(':')[0] // Remove port if present
  const hostParts = hostname.split('.')
  // If hostname has more than 2 parts (e.g., privacy.outlaw.games), first part is subdomain
  // If 2 or fewer parts (e.g., localhost, outlaw.games), treat as main domain
  const subdomain = hostParts.length > 2 ? hostParts[0].toLowerCase() : ''

  // Route based on subdomain
  if (subdomain === 'privacy') {
    // Rewrite to privacy-subdomain route
    url.pathname = '/privacy-subdomain'
    return NextResponse.rewrite(url)
  }

  if (subdomain === 'support') {
    // Rewrite to support-subdomain route (different from /support which is the main site's support page)
    url.pathname = '/support-subdomain'
    return NextResponse.rewrite(url)
  }

  // For www, outlaw.games, localhost, 127.0.0.1, or any other host: serve normal pages
  // No rewrite needed, let Next.js handle normal routing
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}

