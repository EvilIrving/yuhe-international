"use client";

import * as React from "react";
import { useState } from "react";
import { GlobeIcon } from "@radix-ui/react-icons";
import clsx from "clsx"; // For conditional classnames
import Link from "next/link";
import { usePathname } from "next/navigation";

import { i18n, type Locale } from "../../../../i18n-config";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageToggle = () => {
  const pathName = usePathname();

  const [currentLanguage, setCurrentLanguage] = useState("en");
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    setCurrentLanguage(locale);
    return segments.join("/");
  };

  const handleLanguageChange = (language: Locale) => {
    redirectedPathName(language);
  };

  console.log(pathName, "pathName");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <GlobeIcon className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((lang) => (
          <DropdownMenuItem
            key={lang}
            className={clsx(
              "cursor-pointer", // General pointer
              "hover:bg-gray-200 hover:text-black" // Hover effect for other languages
            )}
          >
            <Link href={"/" + lang} locale={lang}>
              {lang}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
