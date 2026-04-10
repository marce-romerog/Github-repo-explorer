import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Extract owner/repo from /repo/[owner]/[repo]
  const match = pathname.match(/^\/repo\/([^/]+)\/([^/]+)/);
  if (match) {
    const identifier = `${match[1]}/${match[2]}`;
    console.log(`[repo-visit] ${identifier} — ${new Date().toISOString()}`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/repo/:owner/:repo*",
};
