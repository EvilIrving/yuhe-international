import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

// 通用的 cookies 操作函数
const cache = {
  get(request: NextRequest, key: string): string | null {
    const cookie = request.cookies.get(key);
    return cookie ? cookie.value : null;
  },
  set(response: NextResponse, key: string, value: string): void {
    response.cookies.set(key, value, { path: "/", httpOnly: true });
  },
};

// 获取缓存中的用户语言
export function getCachedUserLanguage(
  request: NextRequest
): string | undefined {
  const cachedLanguage = cache.get(request, "userLanguage");

  console.log("cachedLanguage", cachedLanguage);

  if (cachedLanguage === "en" || cachedLanguage === "zh") {
    return cachedLanguage;
  }
  return undefined;
}

// 缓存用户选择的语言
export function setCachedUserLanguage(
  response: NextResponse,
  language: string
): void {
  cache.set(response, "userLanguage", language);
}

export function setCachedUserLanguageByCustom(
  res: NextApiResponse,
  language: string
): void {
  // 设置 Cookie
  res.setHeader(
    "Set-Cookie",
    `userLanguage=${language}; Path=/; HttpOnly; Max-Age=31536000; SameSite=Strict`
  );
}
