import { jwtDecode } from "jwt-decode";
import { NextRequest, NextResponse } from "next/server";

const protectedPages = ["/profile"];
const protectedAfterLogin = ["/login", "/register"];
const protectedAdmin = ["/dashboard"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const url = request.nextUrl.pathname;

  if (!token && protectedPages.some((route) => url.startsWith(route))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (protectedAdmin.some((route) => url.startsWith(route)) && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else if (protectedAdmin.some((route) => url.startsWith(route)) && token) {
    const user: { role: "Admin" | "User" } = jwtDecode(token.value);
    if (user.role !== "Admin")
      return NextResponse.redirect(new URL("/", request.url));
  }

  if (protectedAfterLogin.some((route) => url.startsWith(route)) && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

}
