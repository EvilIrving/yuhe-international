"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { i18n } from "../../../../i18n-config";
const LanguageToggle = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("zh");
  const pathName = usePathname();
  useEffect(() => {
    setCurrentLanguage(pathName.split("/")[1]);
  }, [pathName]);
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
          <div className="mx-2 py-2">
            {i18n.langs.map((lang) => (
              <Link
                key={lang.code}
                href={"/" + lang.code}
                locale={lang.code}
                aria-disabled={currentLanguage === lang.code}
                className={clsx(
                  "block px-4 py-2 text-sm",
                  currentLanguage === lang.code
                    ? "cursor-default disabled"
                    : "cursor-pointer rounded hover:bg-gray-200 hover:text-primary dark:bg-slate-700"
                )}
              >
                {lang.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
