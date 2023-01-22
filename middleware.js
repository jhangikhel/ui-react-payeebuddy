import { getToken } from 'next-auth/jwt';
import { getSession } from 'next-auth/react';
import { NextRequest, NextResponse } from 'next/server';
import { protectedPages } from './utility/shared';
export const middleware = async (request) => {
    const session = await getSession({ request });

    if (protectedPages.find(p => p.path.toLowerCase() === request.nextUrl.pathname.toLowerCase())?.path === request.nextUrl.pathname) {
        const authCookie = request.cookies.get('next-auth.session-token');
        if (!authCookie) return NextResponse.redirect(new URL('/login', request.url));
    }
};
