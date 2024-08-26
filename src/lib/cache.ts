// 通用的缓存操作函数
const cache = {
  get(key: string): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }
    return null;
  },
  set(key: string, value: string): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, value);
    }
  },
};

// 获取缓存中的用户语言
export function getCachedUserLanguage(): "en" | "zh" | undefined {
  const cachedLanguage = cache.get("userLanguage");
  if (cachedLanguage === "en" || cachedLanguage === "zh") {
    return cachedLanguage;
  }
  return undefined;
}

// 缓存用户选择的语言
export function setCachedUserLanguage(language: string): void {
  cache.set("userLanguage", language);
}
