import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const authenticatedAPIRoutes = [
    pathname.startsWith("/api/users"),
    pathname.startsWith("/api/posts"),
    pathname.startsWith("/api/follows"),
    pathname.startsWith("/api/admin"),
    pathname.startsWith("/api/search"),
  ];

  const authenticatedCronRoutes = [pathname.startsWith("/api/cron")];

  if (authenticatedAPIRoutes.includes(true)) {
    const cookie = request.cookies.get("jwt-token");

    if (!cookie || !cookie?.value) {
      return NextResponse.json({ error: "unauthenticated" }, { status: 401 });
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
      await jwtVerify(cookie.value, secret);
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "unauthenticated" }, { status: 401 });
    }
  }

  if (authenticatedCronRoutes.includes(true)) {
    const key = request.nextUrl.searchParams.get("cron_api_key");
    const isAuthenticated = key === process.env.CRON_API_KEY;
    if (!isAuthenticated) {
      return NextResponse.json({ error: "unauthenticated" }, { status: 401 });
    }
  }
}

export const config = {
  matcher: "/:path*",
};
