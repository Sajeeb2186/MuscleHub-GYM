import { NextResponse } from "next/server"

export async function middleware(request) {
 
  const token =
    request.cookies.get("next-auth.session-token")?.value ||
    request.cookies.get("__Secure-next-auth.session-token")?.value

  if (!token) {
    return NextResponse.redirect(new URL("/api/auth/signin", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/dashboard/adminDashboard/:path*",
    "/dashboard/trainerDashboard/:path*",
  ],
}

