import { NextRequest, NextResponse } from 'next/server';

// ---------------------------------------------------------------------------
// Security middleware — reusable patterns for larger projects
// ---------------------------------------------------------------------------

/** Allowed HTTP methods for this site. Extend for API routes in bigger projects. */
const ALLOWED_METHODS = ['GET', 'HEAD', 'OPTIONS'];

/** Block requests with obviously malicious patterns in the URL path */
const BLOCKED_PATH_PATTERNS = [
  /\.\.\//,          // path traversal
  /<script/i,        // XSS attempt in URL
  /union.*select/i,  // SQL injection probe
  /etc\/passwd/i,    // LFI probe
  /\.env/i,          // environment file probe
  /wp-admin/i,       // WordPress scan (common bot noise)
];

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const fullPath = pathname + search;

  // 1. Block disallowed HTTP methods
  if (!ALLOWED_METHODS.includes(request.method)) {
    return new NextResponse(null, { status: 405 });
  }

  // 2. Block malicious path patterns
  for (const pattern of BLOCKED_PATH_PATTERNS) {
    if (pattern.test(fullPath)) {
      return new NextResponse(null, { status: 400 });
    }
  }

  // 3. Block oversized query strings (prevents certain DoS patterns)
  if (search.length > 512) {
    return new NextResponse(null, { status: 414 });
  }

  const response = NextResponse.next();

  // 4. Remove headers that leak server information
  response.headers.delete('X-Powered-By');
  response.headers.delete('Server');

  return response;
}

export const config = {
  // Run on all routes except Next.js internals and static files
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
