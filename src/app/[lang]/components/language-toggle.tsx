"use client";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { i18n } from "../../../../i18n-config";

import { redirectedPathName } from "@/lib/utils";
const LanguageToggle = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathName = usePathname();
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
                  href={redirectedPathName(pathName, lang.code)}
                  locale={lang.code}
                  className={clsx(
                    "block px-4 py-2 text-sm",
                    "cursor-pointer rounded hover:bg-gray-200 hover:text-primary dark:bg-slate-700"
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
