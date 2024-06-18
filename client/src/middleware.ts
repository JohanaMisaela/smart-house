import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  console.log('Middleware invoked for path:', request.nextUrl.pathname);

  if (request.nextUrl.pathname.startsWith('/interieur')) {
    try {
      const res = await fetch(`${request.nextUrl.origin}/api/door`);
      const data = await res.json();
      console.log('Door state:', data);

      if (!data.isDoorOpen) {
        console.log('Door is closed. Redirecting to home');
        return NextResponse.redirect(new URL('/', request.url));
      }
    } catch (error) {
      console.error('Failed to fetch door state:', error);
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/interieur',
};
