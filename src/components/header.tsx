"use client";
import { useState, useEffect } from "react";
import Logo from "@/components/logo";
import MenuNav from "@/components/menus";
import { ModeToggle } from "./theme-toggle";
const Header = () => {
  // const [language, setLanguage] = useState("en");

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
          ? "bg-white bg-opacity-80 shadow-sticky backdrop-blur-sm dark:bg-dark dark:bg-opacity-80"
          : "bg-transparent dark:bg-transparent"
      }`}
    >
      <div className="container max-w-[1430px] ">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Logo />
          </div>
          <MenuNav />
          <div className="w-24 flex items-center justify-around">
            <ModeToggle />
            <ModeToggle />
            {/* <button onClick={handleLanguageChange}>Toggle Language</button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
