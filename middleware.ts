import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if user is accessing the root path
  if (request.nextUrl.pathname === '/') {
    // Check if they've already visited intro
    const hasVisitedIntro = request.cookies.get('visitedIntro')?.value

    // If they haven't visited intro, redirect to intro page
    if (!hasVisitedIntro) {
      const response = NextResponse.redirect(new URL('/intro', request.url))
      response.cookies.set('visitedIntro', 'false')
      return response
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api).*)'],
}
