"use client";
import { useEffect, useState } from "react";

import LanguageToggle from "./language-toggle";
import { ModeToggle } from "./theme-toggle";

import Logo from "@/components/logo";
import MenuNav from "@/components/menus";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 100); // 调整阈值
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 z-50 flex w-full items-center ${
        isScrolled
          ? "shadow-sticky dark:bg-dark/80 bg-white/80 backdrop-blur-sm"
          : "bg-transparent dark:bg-transparent"
      }`}
    >
      <div className="container max-w-[1430px] ">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Logo />
          </div>
          <MenuNav />
          <div className="flex w-24 items-center justify-around">
            <ModeToggle />
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
