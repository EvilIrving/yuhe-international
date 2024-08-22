"use client";

import { useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import MenuNav from "./navbar/menu-nav";
import { ModeToggle } from "./theme-toggle";
const Header = () => { 
  const [language, setLanguage] = useState("en"); 

  const menu = {
    Home: {
      path: "/",
      icon: "home",
      name: "首页",
    },
    Service: [
      {
        path: "/package",
        icon: "package",
        name: "航运服务",
      },
      {
        path: "/freight",
        icon: "home",
        name: "货运服务",
      },
      {
        path: "/kou",
        icon: "home",
        name: "关口服务",
      },
    ],
    AboutUs: {
      path: "/about-us",
      icon: "aboutUs",
      name: "关于我们",
    },
  };

 

  const handleLanguageChange = () => {
    setLanguage(language === "en" ? "zh" : "en");
  };

  return (
    <header className="container max-w-[1430px]">
      <div className="relative -mx-4 flex items-center justify-between">
        {" "}
        <div className="w-60 max-w-full px-4">
          <Link className="block w-full py-6 lg:py-5" href="/about">
            <Image
              src="/static/logo-white.svg"
              width={146}
              height={46}
              alt="Image"
              className="hidden dark:block"
            />
            <Image
              src="/static/logo.svg"
              width={146}
              height={46}
              alt="Image"
              className="dark:hidden"
            />
          </Link>
          <MenuNav />
        </div>
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src="/logo.png" alt="Avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <ModeToggle />
          {/* <button onClick={handleLanguageChange}>Toggle Language</button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
