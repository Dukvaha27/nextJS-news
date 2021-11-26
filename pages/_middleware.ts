import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const shouldHandleLocale =
    !PUBLIC_FILE.test(request.nextUrl.pathname) &&
    !request.nextUrl.pathname.includes(
      "https://news.itmo.ru/api/news/list/?ver=2.0&language_id=1&lead=1&per_page=9"
    ) &&
    request.nextUrl.locale === "default";

  return shouldHandleLocale
    ? NextResponse.redirect(`/ru/${request.nextUrl.href}`)
    : undefined;
}
