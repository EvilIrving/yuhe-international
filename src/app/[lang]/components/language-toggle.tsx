"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { getCookie, setCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { i18n, Locale } from "../../../../i18n-config";

import { setCachedUserLanguage } from "@/lib/cache";
const LanguageToggle = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Locale>(
    i18n.defaultLocale
  );
  const pathName = usePathname();

  // useEffect(() => {
  //   const segments = pathName?.split("/");
  //   if (segments && segments[1]) {
  //     const initialLang = segments[1] as Locale;
  //     setCurrentLanguage(initialLang);
  //   }
  // }, [pathName]);

  useEffect(() => {
    const cachedLanguage = getCachedUserLanguageFromCookies();
    if (cachedLanguage && i18n.locales.includes(cachedLanguage as Locale)) {
      setCurrentLanguage(cachedLanguage as Locale);
    }
  }, []);

  const redirectedPathName = (code: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = code;

    // 缓存用户选择的语言
    // setCachedUserLanguage(code);

    // 缓存用户选择的语言到 cookies
    setCachedUserLanguageInServer(code);

    return segments.join("/");
  };

  const setCachedUserLanguageInServer = (code: Locale) => {
    try {
      setCookie("userLanguage", code);
    } catch (error) {
      console.error("Failed to set language:", error);
    }
  };

  const getCachedUserLanguageFromCookies = (): string | null => {
    if (getCookie("userLanguage")) {
      return getCookie("userLanguage") as string;
    }

    return null;
  };

  return (
    <div
      className="relative inline-block py-4 text-left"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <button className="flex items-center text-white transition-colors duration-300 hover:text-gray-400 focus:outline-none">
        <Image
          src="/icons/language.svg"
          width={20}
          height={20}
          alt="Language"
        />
        <Image
          src="/icons/chevron-down.svg"
          className="pl-1"
          width={16}
          height={16}
          alt="Language"
        />
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 z-10 mt-2  w-32 rounded-md bg-slate-50 text-black shadow-lg   dark:bg-slate-800 dark:text-white">
          <ul className="mx-2 py-2">
            {i18n.langs.map((lang) => (
              <li key={lang.code}>
                <Link
                  href={redirectedPathName(lang.code)}
                  locale={lang.code}
                  aria-disabled={lang.code === currentLanguage}
                  onClick={() => setCurrentLanguage(lang.code)} // 更新当前语言
                  className={clsx(
                    "block px-4 py-2 text-sm",
                    lang.code === currentLanguage
                      ? "cursor-default pointer-events-none"
                      : "cursor-pointer rounded hover:bg-gray-200 hover:text-primary dark:bg-slate-700"
                  )}
                >
                  {lang.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
