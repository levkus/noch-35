import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAdminPage = request.nextUrl.pathname.startsWith("/admin");
  const isApiAdmin = request.nextUrl.pathname.startsWith("/api/admin");

  if (!isAdminPage && !isApiAdmin) {
    return NextResponse.next();
  }

  const authHeader = request.headers.get("authorization") || "";
  const expectedAuth = `Basic ${Buffer.from(
    `${process.env.ADMIN_USERNAME}:${process.env.ADMIN_PASSWORD}`
  ).toString("base64")}`;

  if (!authHeader || authHeader !== expectedAuth) {
    return new NextResponse("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Area"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
